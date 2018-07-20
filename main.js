/** @type {HTMLInputElement} */
const nameInputter = document.getElementById("builder-name");
/** @type {HTMLTextAreaElement} */
const bioInputter = document.getElementById("builder-bio");
/** @type {HTMLButtonElement} */
const buildBtn = document.getElementById("builder-build");
/** @type {HTMLElement} */
const cardViewer = document.getElementById("viewer");
/** @type {HTMLTextAreaElement} */
const codeInputter = document.getElementById("viewer-codeViewer-codes");



const loader = new TemplateLoader("assets/template/");
loader.on("load").then(() => {
	console.log(loader.template);

	buildBtn.addEventListener("click", () => {
		for (const child of cardViewer.children) child.classList.contains("AuthorCard") && cardViewer.removeChild(child);

		const card = loader.createComponent("AuthorCard", nameInputter.value || "​", bioInputter.value || "​");
		cardViewer.insertBefore(card, cardViewer.lastElementChild);

		codeInputter.value = card.outerHTML;
		M.textareaAutoResize(codeInputter);
	});
});



window.addEventListener("DOMContentLoaded", () => {
	codeInputter.addEventListener("click", () => {
		codeInputter.select();
	});
});