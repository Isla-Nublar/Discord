const { EmbedBuilder, ActionRowBuilder, ButtonBuilder} = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders")

const exampleEmbed = new EmbedBuilder()
	.setColor(0x00d19d)
	.setAuthor({ name: "Work In Progress", iconURL: "https://tlotd.net/files/cone.png" })
	.setTitle("__**«『<:Dragon_L:808656544492945428>No Permission<:Dragon_R:808656770851536896>』»**__")
    .setDescription("This command is unavailable for you at the time!")
	.setTimestamp()
	.setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

const specialEmbed = new EmbedBuilder()
	.setColor(0x00d19d)
	.setTitle("__**«『<:Dragon_L:808656544492945428>Speziale<:Dragon_R:808656770851536896>』»**__")
    .setDescription("Access Granted")
	.setThumbnail("https://steamuserimages-a.akamaihd.net/ugc/1796351166151593437/BC169B7F39F125A6B5384A6EAE8A6D30B45B07BA/?imw=160&imh=160&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true")
	.setTimestamp()
	.setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

const normal = new ActionRowBuilder()
	.addComponents(
	new ButtonBuilder()
    	.setLabel("The Steam workshop collection!")
    	.setURL("https://steamcommunity.com/sharedfiles/filedetails/?id=2476508584")
    	.setStyle("Link")
		.setEmoji('<:CIV:1059284387604209794>'),
		);

module.exports = {
    data: new SlashCommandBuilder().setName("devtest").setDescription("embed test"),
    async execute(interaction) {
		if (interaction.member.id == 366220790875815946) {
			interaction.reply({ embeds: [specialEmbed], components: [normal], ephemeral: true })
		} else {
			interaction.reply({ embeds: [exampleEmbed], components: [normal], ephemeral: true })
		}
    }
}