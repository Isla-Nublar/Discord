const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders")

const exampleEmbed = new EmbedBuilder()
	.setColor(0x00d19d)
	.setTitle("__**«『<:Dragon_L:808656544492945428>Hilfe<:Dragon_R:808656770851536896>』»**__")
	.setAuthor({ name: "Deutsch", iconURL: "http://img1.wikia.nocookie.net/__cb20090901043520/flags/images/c/c2/German_Language_Flag_2.png" })
	.setThumbnail("https://tlotd.net/files/TLOTD.png")
	.addFields(
        { name: "/hilfe", value: "> Zeigt diese Liste!", inline: true },
		{ name: "/help", value: "> Shows you a list of all commands in english.", inline: true },
		{ name: "/ayuda", value: "> Muestra una lista de todos los comandos en español.", inline: true },
		{ name: "/invite", value: "> Lässt dich mich zu deinem Server hinzufügen.", inline: true },
        { name: "/tlotd", value: "> Listet allen offiziellen TLOTD Stuff auf.", inline: true },
		{ name: "/info [Nutzer]", value: "> Schau dir Infos über diesen Server [oder einen bestimmten Nutzer] an.", inline: true },
		{ name: "/play [Name / Youtube Url]", value: "> Lässt dich einen Song spielen.", inline: true },
        { name: "/workshop [Spiel]", value: "> Links zu unseren offiziellen Steam Workshop packs.", inline: true },
	)
	.setTimestamp()
	.setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

module.exports = {
    data: new SlashCommandBuilder().setName("hilfe").setDescription("Zeigt dir eine Liste aller commands auf deutsch."),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}