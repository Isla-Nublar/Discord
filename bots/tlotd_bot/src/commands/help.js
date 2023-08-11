const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders")

const exampleEmbed = new EmbedBuilder()
    .setColor(0x00d19d)
	.setTitle("__**«『<:Dragon_L:808656544492945428>Help<:Dragon_R:808656770851536896>』»**__")
	.setAuthor({ name: "English", iconURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/English_language.svg/2000px-English_language.svg.png" })
	.setThumbnail("https://tlotd.net/files/TLOTD.png")
	.addFields(
		{ name: "/help", value: "> Shows this list.", inline: true },
        { name: "/hilfe", value: "> Zeigt dir eine Liste aller commands auf deutsch.", inline: true },
        { name: "/ayuda", value: "> Muestra una lista de todos los comandos en español.", inline: true },
		{ name: "/invite", value: "> Let's you add me to your server.", inline: true },
        { name: "/tlotd", value: "> Lists all official TLOTD stuff.", inline: true },
        { name: "/info [User]", value: "> View info about this server [or a specific user].", inline: true },
        { name: "/play [Name / Youtube Url]", value: "> Let's you play a song.", inline: true },
        { name: "/workshop [Game]", value: "> Links to our official Steam workshop packs.", inline: true },
	)
	.setTimestamp()
    .setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

module.exports = {
    data: new SlashCommandBuilder().setName("help").setDescription("Shows you a list of all commands in english."),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}