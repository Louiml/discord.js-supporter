const Discord = require('discord.js')
const djs = new Discord.Client();
const prefix = "you prefix"
djs.on('ready', () => {
console.log("the bot is ready")
})
djs.on('message', (message) => {
if(message.content.startWith(prefix + 'name command')) {
message.channel.send("Hello World I from louiml.net")
}
})
djs.on('message', (message) => {
if(message.content.startWith(prefix + 'name command')) {
const embed = new MessageEmbed()
.setAuthor() //.setAuthor("title", "Image URL(uncommitted)")
.setTitle() //.setTitle("text")
.setURL() //.setURL("https://louiml.net") showing this on the title
.setDescription() //.setDescription("you can use ``")
.setThumbnail() //.setThumbnail("https://cdn.discordapp.com/avatars/782591039256920074/6a563b0be30e6916bb15eaa156bd1c63.png") showing this on right side
.addField() //.addField("the title field", "the description field")
.addFields() //.addFields({"the title field", "the description field", ""the title field", "the description field""})
.setImage() //.setImage("https://cdn.discordapp.com/banners/782591039256920074/c421ea204c35c7ff2971a808a83e596f.png") in bottom embed
.setTimestamp() //.setTimestamp() showing the data in the footer but you can do .setTimestamp(16/08/2022)
.setFooter() //.setFooter("text", "image URL")
message.channel.send(embed)
}
})