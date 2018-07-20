# The Format of Template


## Languages
* [Japanese | 日本語](./Format[Japanese].md)


## Overview
For example, you could write a template in this way.

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


## Snippets
| Type | Snippet | Arguments | Overview |
|:--------:|:--------:|:--------:|:---------|
| **Tags** | <DTL:Component Src = "`{:componentUrl}`"> | 1 | Embed other templates |
|  | ---------- | `componentUrl` | An url of template<Br />(They're related to main-template) |
| **Attributes** | DTL:Name = "`{:name}`" | 1 | Set component's name |
|  | ---------- | `name` | Name of component |
| **Others** | ${`{:index}`} | 1 | Replaced by the value each key has |
|  | ---------- | `index` | Each key |