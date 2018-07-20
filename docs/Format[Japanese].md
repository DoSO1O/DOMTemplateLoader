# テンプレート書式


## 言語 | Languages
* [英語 | English](./Format.md)


## 概要 | Overview
以下のコードはテンプレートHTMLの一例です。

```HTML
<!-- This is "template.html" -->
<Head>
</Head>

<Body>
	<Div DTL:Name = "SampleComponent">
		<H2 Class = "title">${0}</H2>
		<Div Class = "content">${1}</Div>
	</Div>

	<DTL:Component Src = "import.html"></DTL:Component>
</Body>
```

```HTML
<!-- This is "import.html" -->
<Div DTL:Name = "SampleComponent2">
	<H2 Class = "title">${0}</H2>
	<Div Class = "image">${1}</Div>
</Div>
```


## 構文 | Snippets
| 種別 | 構文 | 引数 | 概要 |
|:--------:|:--------:|:--------:|:---------|
| **タグ** | <DTL:Component Src = "`{:componentUrl}`"> | 1 | 他のテンプレートを埋め込む |
|  | ---------- | `componentUrl` | テンプレートのURL<Br />(メインテンプレートからの相対参照) |
| **属性** | DTL:Name = "`{:name}`" | 1 | コンポーネント名を設定 |
|  | ---------- | `name` | コンポーネント名 |
| **その他** | ${`{:index}`} | 1 | コンポーネント内変数 |
|  | ---------- | `index` | 対応するパラメータの位置 |