# JSEmbeds
Embed your JS to string, like EJS.

```javascript
var embeds = require("jsembeds");
console.log(embeds.embed("This is original string, and <embed>\"this is JS\"<closeEmbed> that can cause <embed>throw new Error(\"errors\")<closeEmbed>"))
```

## Customization
### evalDriver

Make your eval safe, compiler, etc.

Default: a simple embed driver that `eval`s the content, like this:

```javascript
JSEmbeds.evalDriver = function(...args){
	return eval(...args);
}
```

```javascript
var embeds = require("jsembeds");
embeds.evalDriver = function(...args){
	console.log("Attempting to run this!")
	console.log(...args);
	console.log("");
	return eval(...args);
};
```

### embedOpen and embedClose

Make your embeds with other syntaxes.

Default: <embed> and <closeEmbed>

```javascript
var embeds = require("jsembeds");
embeds.embedOpen = "<JSembed>";
embeds.embedClose = "</JSembed>";
```