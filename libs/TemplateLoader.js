/**
 * テンプレートを用いてコンポーネントを読み込むクラス
 * @author Genbu Hase
 */
class TemplateLoader {
	static get SELECTORS () {
		return {
			Component: "DTL\\:Component"
		}
	}
	
	/**
	 * テンプレート内の外部コンポーネントを読み込みます
	 * 
	 * @param {String} rootDir ルートテンプレートのURL
	 * @param {HTMLHtmlElement} template テンプレートDOM要素
	 * 
	 * @return {Promise<null>}
	 */
	static loadComponents (rootDir, template) {
		const tasks = [];

		const components = template.querySelectorAll(TemplateLoader.SELECTORS.Component);
		for (const component of components) {
			let componentUrl = component.getAttribute("Src");

			try {
				new URL(componentUrl);
			} catch (error) {
				componentUrl = [ rootDir, componentUrl ].join("/");
			}

			tasks.push(fetch(componentUrl).then(resp => resp.text()).then(html => component.outerHTML = html));
		}

		return Promise.all(tasks).then(() => {
			if (!template.querySelectorAll(TemplateLoader.SELECTORS.Component).length) return;

			TemplateLoader.loadComponents(rootDir, template);
		});
	}



	/**
	 * TemplateLoaderを生成します
	 * @param {String} templateUrl テンプレートファイルのURL
	 */
	constructor (templateUrl) {
		if (templateUrl == undefined) throw new TypeError("templateUrl is required");

		let rootDir = "";
		fetch(templateUrl).then(resp => {
			rootDir = new URL(resp.url).pathname.split(/\//).slice(1, -1).join("/");
			return resp.text();
		}).then(html => {
			const template = document.createElement("html");
			template.innerHTML = html;

			TemplateLoader.loadComponents(rootDir, template).then(() => this.template = template);
		}).catch(error => { throw error });
	}

	/**
	 * イベントを登録します
	 * 
	 * @param {TemplateLoader.EventTypes} eventName
	 * @param {Function} [callback]
	 * 
	 * @return {Promise}
	 */
	on (eventName, callback) {
		switch (eventName) {
			default:
				throw new TypeError("The provided event-type is not acceptable");

			case "load":
				return new Promise(resolve => {
					const detector = setInterval(() => {
						if (this.template) {
							clearInterval(detector);

							if (callback) callback(this);
							resolve(this);
						}
					});
				});
		}
	}
}

/**
 * @typedef {"load"} TemplateLoader.EventTypes
 */



class Component {
	/**
	 * Componentを生成します
	 * 
	 * @param {HTMLHtmlElement} templateHtml テンプレートDOM要素
	 * @param {String} name コンポーネント名
	 */
	constructor (templateHtml, name) {
		
	}
}