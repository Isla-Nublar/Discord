const { EmbedBuilder, ActionRowBuilder, ButtonBuilder} = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders")

const arkEmbed = new EmbedBuilder()
	.setColor(0x00d19d)
	.setTitle("__**«『<:Dragon_L:808656544492945428>ARK: Survival Evolved Pack<:Dragon_R:808656770851536896>』»**__")
    .setDescription("The official TLOTD ARK Workshop collection, adding new dinosaurs, and quality of life improvements.")
	.setThumbnail("https://steamuserimages-a.akamaihd.net/ugc/2014827807056860242/7C9B7075C8EB53E655B3E0B9A2A27ED32EFC647F/")
	.addFields(
		{ name: ":globe_with_meridians: Open in Browser", value: "> https://steamcommunity.com/sharedfiles/filedetails/?id=2861661936", inline: true },
		{ name: "<:Steam:554036465093443614> Open in Steam", value: "> steam://url/CommunityFilePage/2861661936", inline: true }
	)
	.setTimestamp()
	.setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

	const arkLink = new ActionRowBuilder()
		.addComponents(
		new ButtonBuilder()
    	.setLabel("The Steam workshop collection!")
    	.setURL("https://steamcommunity.com/sharedfiles/filedetails/?id=2861661936")
    	.setStyle("Link")
		.setEmoji('<:ARK:1048608090993467472>'),
	)

	const civEmbed = new EmbedBuilder()
	.setColor(0x00d19d)
	.setTitle("__**«『<:Dragon_L:808656544492945428>Sid Meier's Civilization VI Pack<:Dragon_R:808656770851536896>』»**__")
    .setDescription("The official TLOTD CivVI Workshop collection, adding a bigger world to discover, new enemies, new wonders and a few quality of life improvements.")
	.setThumbnail("https://steamuserimages-a.akamaihd.net/ugc/2014827807056864576/5263BFB47A467505064F585913F6B1B610F71F91/")
	.addFields(
		{ name: ":globe_with_meridians: Open in Browser", value: "> https://steamcommunity.com/sharedfiles/filedetails/?id=2476508584", inline: true },
		{ name: "<:Steam:554036465093443614> Open in Steam", value: "> steam://url/CommunityFilePage/2476508584", inline: true }
	)
	.setTimestamp()
	.setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

	const civLink = new ActionRowBuilder()
		.addComponents(
		new ButtonBuilder()
    	.setLabel("The Steam workshop collection!")
    	.setURL("https://steamcommunity.com/sharedfiles/filedetails/?id=2476508584")
    	.setStyle("Link")
		.setEmoji('<:CIV:1059284387604209794>'),
	)

	const tttEmbed = new EmbedBuilder()
	.setColor(0x00d19d)
	.setTitle("__**«『<:Dragon_L:808656544492945428>Trouble in Terrorist Town Pack<:Dragon_R:808656770851536896>』»**__")
    .setDescription("The official TLOTD TTT Workshop collection, adding new maps, weapons, assets and playermodels.")
	.setThumbnail("https://steamuserimages-a.akamaihd.net/ugc/1645466763763805988/15DE26762CDC61ACA56E58510C63D409F98812A7/")
	.addFields(
		{ name: ":globe_with_meridians: Open in Browser", value: "> https://steamcommunity.com/sharedfiles/filedetails/?id=1517224233", inline: true },
		{ name: "<:Steam:554036465093443614> Open in Steam", value: "> steam://url/CommunityFilePage/1517224233", inline: true }
	)
	.setTimestamp()
	.setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

	const tttLink = new ActionRowBuilder()
	.addComponents(
		new ButtonBuilder()
    	.setLabel("The Steam workshop collection!")
    	.setURL("https://steamcommunity.com/sharedfiles/filedetails/?id=1517224233")
    	.setStyle("Link")
		.setEmoji('<:Traitor:785282099673825291>'),
	)

module.exports = {
    data: new SlashCommandBuilder().setName("workshop").setDescription("Links to our official Workshop packs.")
	.addSubcommand(subCommand => subCommand.setName("ark").setDescription("Link to our official TLOTD ARK pack."))
	.addSubcommand(subCommand => subCommand.setName("civ").setDescription("Link to our official TLOTD CIV pack."))
	.addSubcommand(subCommand => subCommand.setName("ttt").setDescription("Link to our official TLOTD TTT pack.")),


    async execute(interaction) {
		switch(interaction.options.getSubcommand()) {
			case "ark": {
				interaction.reply({ embeds: [arkEmbed], components: [arkLink] })
				break
			}
			case "civ": {
				interaction.reply({ embeds: [civEmbed], components: [civLink] })
				break
			}
			case "ttt": {
				interaction.reply({ embeds: [tttEmbed], components: [tttLink] })
				break
			}
		}
    }
}