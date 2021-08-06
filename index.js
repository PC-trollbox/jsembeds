JSEmbedsToString = {
	//Embed function
	//===============
	//description: Embeds JavaScript to String
	//
	//
	embed: function(template){
		var string = "";
		var embeddable = JSON.parse(JSON.stringify(template.split(this.embedOpen)).split(this.embedClose).join(this.embedClose + "\",\""));
		for (let embed of embeddable){
			if (embed.endsWith(this.embedClose)){
				try{
					string = string + this.evalDriver(embed.replace(this.embedClose, ""));
				}catch(err){
					string = string + "[" + err.toString() + "]";
				}
			}else{
				string = string + embed;
			}
		}
		return string;
	},
	//Eval driver function
	//=====================
	//description: A proxy for embeds.
	//             You can specify your own proxy to secure your
	//             JavaScript project, or keep current
	//             to keep it simple.
	//             
	//
	//
	evalDriver: function(...args){
		return eval(...args);
	},
	//Embed open variable
	//====================
	//description: Specifies how you should open an embed. 
	//
	//
	embedOpen: "<embed>",
	//Embed close variable
	//====================
	//description: Specifies how you should close an embed. 
	//
	//
	embedClose: "<closeEmbed>"
}
try{
	module.exports = JSEmbedsToString;
}catch{
}