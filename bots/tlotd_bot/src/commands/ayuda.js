const { EmbedBuilder } = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders")

const exampleEmbed = new EmbedBuilder()
    .setColor(0x00d19d)
	.setTitle("__**«『<:Dragon_L:808656544492945428>Ayuda<:Dragon_R:808656770851536896>』»**__")
	.setAuthor({ name: "Español", iconURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_España.svg/2560px-Bandera_de_España.svg.png" })
	.setThumbnail("https://tlotd.net/files/TLOTD.png")
	.addFields(
        { name: "/ayuda", value: "> Muestra esta lista.", inline: true },
		{ name: "/help", value: "> Shows you a list of all commands in english.", inline: true },
        { name: "/hilfe", value: "> Zeigt dir eine Liste aller commands auf deutsch.", inline: true },
		{ name: "/invite", value: "> Te permite añadirme a tu servidor.", inline: true },
        { name: "/tlotd", value: "> Lista de todos los sitios oficiales de TLOTD.", inline: true },
        { name: "/play [Name / Youtube Url]", value: "> Te permite tocar una canción.", inline: true },
        { name: "/workshop [Game]", value: "> Enlaces a nuestros paquetes de talleres oficiales de Steam.", inline: true },
	)
	.setTimestamp()
    .setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

module.exports = {
    data: new SlashCommandBuilder().setName("ayuda").setDescription("Muestra una lista de todos los comandos en español."),
    async execute(interaction) {
        interaction.reply({ embeds: [exampleEmbed] })
    }
}