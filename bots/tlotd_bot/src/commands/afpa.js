const { EmbedBuilder, ActionRowBuilder, ButtonBuilder} = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders")

const exampleEmbed = new EmbedBuilder()
	.setColor(0x00d19d)
	.setTitle("__**«『<:Dragon_L:808656544492945428>Agency for Paranormal Activities<:Dragon_R:808656770851536896>』»**__")
    .setDescription("> The official AfPA digital archive available to all active research personel with level 1 clearence or above.")
	.setThumbnail("https://tlotd.net/afpa/images/logo.png")
	.setTimestamp()
	.setFooter({ text: "«『 Agency for Paranormal Activities 』»", iconURL: "https://tlotd.net/afpa/images/logo.png" })

const row = new ActionRowBuilder()
	.addComponents(
	new ButtonBuilder()
    	.setLabel("AfPA Site")
    	.setURL("https://tlotd.org/afpa/welcome")
    	.setStyle("Link")
		.setEmoji('<:AfPA:1048633817054855249>'),
	new ButtonBuilder()
    	.setLabel("AfPA Researcher Login")
    	.setURL("https://tlotd.org/afpa/login")
    	.setStyle("Link")
		.setEmoji('<a:Clearance:1048637061047001229>'),
	)

module.exports = {
    data: new SlashCommandBuilder().setName("afpa").setDescription("-"),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed], components: [row] })
    }
}