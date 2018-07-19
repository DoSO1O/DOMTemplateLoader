const loader = new TemplateLoader("assets/template");
loader.on("load").then(() => console.log(loader.template));