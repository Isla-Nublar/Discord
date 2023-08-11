const { EmbedBuilder, ActionRowBuilder, ButtonBuilder} = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders")

const exampleEmbed = new EmbedBuilder()
	.setColor(0x00d19d)
	.setTitle("__**«『<:Dragon_L:808656544492945428>TLOTD-Bot<:Dragon_R:808656770851536896>』»**__")
	.setThumbnail("https://tlotd.net/files/TLOTD.png")
	.addFields(
		{ name: "<:Developer:959020356935487518> Created By", value: "> «『 𝗧𝗟𝗢𝗧𝗗 - Isla Nublar 』»#0001"},
		{ name: ":stopwatch: Created On", value: `> <t:1597004340>`, inline: true },
		{ name: ":notepad_spiral: Created For", value: "> TLOTD News, Interactions and Music", inline: true },
	)
	.setTimestamp()
	.setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

const row = new ActionRowBuilder()
	.addComponents(
	new ButtonBuilder()
    	.setLabel("Invite me to your server!")
    	.setURL("https://www.discord.com/oauth2/authorize?client_id=742114746144129036&scope=bot&permissions=8")
    	.setStyle("Link")
		.setEmoji('<:Discord:1041095293686530228>'),
		);

module.exports = {
    data: new SlashCommandBuilder().setName("invite").setDescription("Let's you add me to your server."),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed], components: [row] })
    }
}