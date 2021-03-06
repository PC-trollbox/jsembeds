# JSEmbeds
[![NPM](https://nodei.co/npm/jsembeds.png)](https://npmjs.org/package/jsembeds)

Embed your JS to string, like EJS.


```javascript
var embeds = require("jsembeds");
console.log(embeds.embed("This is original string, and <embed>\"this is JS\"<closeEmbed> that can cause <embed>throw new Error(\"errors\")<closeEmbed>"))
```

## Customization
### evalDriver

Make your eval safe, compiler, etc.

Default: a embed driver that `eval`s the content and replaces any exclusives, like this:

```javascript
embeds.evalDriver = function(string, exclusive){
	for (var exclusiveName in exclusive){
		while (string.includes(this.exclusivePrefix + exclusiveName)){
			string = string.replace(this.exclusivePrefix + exclusiveName, JSON.stringify(exclusive[exclusiveName]))
		}
	}
	return eval(string);
}
```

```javascript
var embeds = require("jsembeds");
embeds.evalDriver = function(args){
	console.log("Attempting to run this!")
	console.log(args);
	console.log("");
	return eval(args);
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

### exclusivePrefix

In this version of program, you can get some exclusives. Like that:

```javascript
var embeds = require("jsembeds");
embeds.embed("This is an... <embed>exclusiv<closeEmbed>!", {exclusiv: "exclusive"})
```

You can do a prefix for them.

But this works only for official eval drivers and other rewritten to be compatible.

```javascript
var embeds = require("jsembeds");
embeds.exclusivePrefix = "Exclusive.";
