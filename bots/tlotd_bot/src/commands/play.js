const { EmbedBuilder, ActionRowBuilder, ButtonBuilder} = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders")

const exampleEmbed = new EmbedBuilder()
    .setColor(0x00d19d)
	.setTitle("__**«『<:Dragon_L:808656544492945428>Music<:Dragon_R:808656770851536896>』»**__")
	.setAuthor({ name: "Work In Progress", iconURL: "https://tlotd.net/files/cone.png" })
	.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/7/7b/The_Sounds_of_Earth_-_GPN-2000-001976.jpg")
    .setDescription("> Due to changes on how discord lets users interact with bots, the old python version able to play music nowadays no longer works, additionally we've switched to JavaScript. Until a future update the music functionallity sadly is unavailable.")
	.setTimestamp()
    .setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

const row = new ActionRowBuilder()
	.addComponents(
	new ButtonBuilder()
    	.setLabel("Message Content Privileged Intent FAQ")
    	.setURL("https://support-dev.discord.com/hc/en-us/articles/4404772028055")
    	.setStyle("Link")
		.setEmoji('<:Discord:1041095293686530228>'),
		);

module.exports = {
    data: new SlashCommandBuilder().setName("play").setDescription("Let's you play a song.")
    .addStringOption(option => option.setName('song')
			.setDescription('The song you want to play')
			.setRequired(true)),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed], components: [row] })
    }
}