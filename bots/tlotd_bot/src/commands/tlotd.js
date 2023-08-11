const { EmbedBuilder, ActionRowBuilder, ButtonBuilder} = require('discord.js');
const { SlashCommandBuilder } = require("@discordjs/builders")

const linkEmbed = new EmbedBuilder()
	.setColor(0x00d19d)
	.setTitle("__**«『<:Dragon_L:808656544492945428>The Legend Of The Dudes Links<:Dragon_R:808656770851536896>』»**__")
    .setDescription("```╔════╗╔╗───╔═══╗╔════╗╔═══╗\n║╔╗╔╗║║║───║╔═╗║║╔╗╔╗║╚╗╔╗║\n──║║──║║───║║─║║──║║───║║║║\n──║║──║║───║║─║║──║║───║║║║\n──║║──║╚═╝║║╚═╝║──║║──╔╝╚╝║\n──╚╝──╚═══╝╚═══╝──╚╝──╚═══╝```")
	.setThumbnail("https://tlotd.net/files/TLOTD.gif")
	.addFields(
		{ name: ":globe_with_meridians: Official Links", value: "> We currently own the following pages"},
		{ name: "<:TLOTD:748291536692707499> Website", value: "> https://tlotd.net", inline: true },
        { name: "<:Discord:1041095293686530228> Discord", value: "> https://discord.gg/qrdQReN", inline: true },
		{ name: "<:RedditUpvote:862103094216228904> Reddit", value: "> https://www.reddit.com/r/tlotd/", inline: true },
        { name: "<:Steam:554036465093443614> Steam", value: "> https://steamcommunity.com/groups/the_legend_of_the_dudes", inline: true },
        { name: "<:YouTube:1041143484570144869> YouTube", value: "> https://www.youtube.com/@tlotd", inline: true },
		{ name: "<:TLOTD:748291536692707499> Profile", value: "> https://tlotd.net/profile/tlotd", inline: true },
	)
	.setTimestamp()
	.setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

const linkRow = new ActionRowBuilder()
	.addComponents(
	new ButtonBuilder()
    	.setLabel("Website")
    	.setURL("https://tlotd.net")
    	.setStyle("Link")
		.setEmoji('<:TLOTD:748291536692707499>'),
		new ButtonBuilder()
    	.setLabel("Discord")
    	.setURL("https://discord.gg/qrdQReN")
    	.setStyle("Link")
		.setEmoji('<:Discord:1041095293686530228>'),
		new ButtonBuilder()
    	.setLabel("Steam")
    	.setURL("https://steamcommunity.com/groups/the_legend_of_the_dudes")
    	.setStyle("Link")
		.setEmoji('<:Steam:554036465093443614>'),
		new ButtonBuilder()
    	.setLabel("YouTube")
    	.setURL("https://www.youtube.com/@tlotd")
    	.setStyle("Link")
		.setEmoji('<:YouTube:1041143484570144869>'),
		);

	const memberEmbed = new EmbedBuilder()
	.setColor(0x00d19d)
	.setTitle("__**«『<:Dragon_L:808656544492945428>The Legend Of The Dudes Members<:Dragon_R:808656770851536896>』»**__")
    .setDescription("```╔════╗╔╗───╔═══╗╔════╗╔═══╗\n║╔╗╔╗║║║───║╔═╗║║╔╗╔╗║╚╗╔╗║\n──║║──║║───║║─║║──║║───║║║║\n──║║──║║───║║─║║──║║───║║║║\n──║║──║╚═╝║║╚═╝║──║║──╔╝╚╝║\n──╚╝──╚═══╝╚═══╝──╚╝──╚═══╝```")
	.setThumbnail("https://tlotd.net/files/TLOTD.gif")
	.addFields(
		{ name: ":busts_in_silhouette: Members", value: "> We currently have the following members:"},
		{ name: "<:EmperorsCrown:969984808602185788> Emperor", value: "> «『 𝗧𝗟𝗢𝗧𝗗 - Isla Nublar 』»#0001"},
		{ name: "<:TLOTDRPG:956334791094054972> Honorary Member", value: "> decrepitParadox#2678"},
        { name: "<:TLOTDDK:839992667130560582> King of the Village", value: "> «『 𝗧𝗟𝗢𝗧𝗗 -𝕯𝕶 -SEXY\(´-´)/WEEB』»#4912"},
		{ name: "<:TLOTDDK:839992667130560582> Quota", value: "> «『 𝗧𝗟𝗢𝗧𝗗 - Alia Sophie 』»#3662"},
		{ name: ":flag_it: Italian", value: "> «『 𝗧𝗟𝗢𝗧𝗗 - Alex1666 』»#3776"},
		{ name: "<:Kreuz:912125631188320257> Barmann", value: "> «『 𝗧𝗟𝗢𝗧𝗗 - Isso_21_ 』»#0658"},
		{ name: "<:flag_ddr:978398118322270249> Ostblockbeauftragter", value: "> «『 𝗧𝗟𝗢𝗧𝗗 - Tamtam 』»#1348"},
		{ name: "<:GTAV:956931995261341736> GTA FiveM kek", value: "> «『 𝗧𝗟𝗢𝗧𝗗 - Eagle 』»#1160"},
		{ name: ":flag_us: International Representative", value: "> «『 𝗧𝗟𝗢𝗧𝗗 - ♡𝓛𝓲𝓵𝓵𝔂 ♡ 』»#0444"},
		{ name: "<:flag_de_by:1103012812189597726> Bayrischer Abgeordneter", value: "> «『 𝕿𝕷𝕺𝕿𝕯 - Ezrael 』»#0002"},
		{ name: ":underage: Kinder-Giggidy!-gärtner", value: "> «『 𝗧𝗟𝗢𝗧𝗗 - Hope 』»#1348"},
	)
	.setTimestamp()
	.setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

const serverEmbed = new EmbedBuilder()
	.setColor(0x00d19d)
	.setTitle("__**«『<:Dragon_L:808656544492945428>The Legend Of The Dudes Servers<:Dragon_R:808656770851536896>』»**__")
    .setDescription("```╔════╗╔╗───╔═══╗╔════╗╔═══╗\n║╔╗╔╗║║║───║╔═╗║║╔╗╔╗║╚╗╔╗║\n──║║──║║───║║─║║──║║───║║║║\n──║║──║║───║║─║║──║║───║║║║\n──║║──║╚═╝║║╚═╝║──║║──╔╝╚╝║\n──╚╝──╚═══╝╚═══╝──╚╝──╚═══╝```")
	.setThumbnail("https://tlotd.net/files/TLOTD.gif")
	.addFields(
		{ name: "<:Discord:1041095293686530228> Discord Servers", value: "> The following ones are available"},
		{ name: "<:TLOTD:748291536692707499> 𝗧𝗟𝗢𝗧𝗗", value: "> https://discord.gg/qrdQReN", inline: true },
		{ name: "<:FullGAS:1057362599261507624> FullGAS", value: "> https://discord.gg/fp5xu3Mc74", inline: true },
        { name: "<:TLOTDDK:839992667130560582> 𝕯𝕬𝕿 𝕶𝕬𝕱𝕱", value: "> https://discord.gg/mDswNjb", inline: true },
		{ name: ":shrimp: Shrimping Network", value: "> N/A", inline: true },
		{ name: "<:Kreuz:912125631188320257> GAMING SERVER", value: "> N/A", inline: true },
		{ name: "<:Muesli:900875111530364988> Tamtams Bällebad", value: "> https://discord.gg/ak9XBVNCtH", inline: true },
		{ name: "<:LillyHeart:950512312672989186> Lilly's Server", value: "> https://discord.gg/sRyJZYjs8P", inline: true },
	)
	.setTimestamp()
	.setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

const serverRow = new ActionRowBuilder()
	.addComponents(
	new ButtonBuilder()
    	.setLabel("«『 𝗧𝗟𝗢𝗧𝗗 - The Legend Of The Discord 』»")
    	.setURL("https://discord.gg/qrdQReN")
    	.setStyle("Link")
		.setEmoji('<:TLOTD:748291536692707499>'),
		new ButtonBuilder()
    	.setLabel("«『 𝗧𝗟𝗢𝗧𝗗 - FullGAS 』»")
    	.setURL("https://discord.gg/fp5xu3Mc74")
    	.setStyle("Link")
		.setEmoji('<:FullGAS:1057362599261507624>'),
		new ButtonBuilder()
    	.setLabel("«『 𝗧𝗟𝗢𝗧𝗗 - 𝕯𝕬𝕿 𝕶𝕬𝕱𝕱 』»")
    	.setURL("https://discord.gg/mDswNjb")
    	.setStyle("Link")
		.setEmoji('<:TLOTDDK:839992667130560582>'),
		new ButtonBuilder()
    	.setLabel("«『 𝗧𝗟𝗢𝗧𝗗 - Tamtams Bällebad 』»")
    	.setURL("https://discord.gg/ak9XBVNCtH")
    	.setStyle("Link")
		.setEmoji('<:Muesli:900875111530364988>'),
		);

const mainserverEmbed = new EmbedBuilder()
	.setColor(0x00d19d)
		.setTitle("__**«『<:Dragon_L:808656544492945428>The Legend Of The Dudes<:Dragon_R:808656770851536896>』»**__")
	.setDescription("```╔════╗╔╗───╔═══╗╔════╗╔═══╗\n║╔╗╔╗║║║───║╔═╗║║╔╗╔╗║╚╗╔╗║\n──║║──║║───║║─║║──║║───║║║║\n──║║──║║───║║─║║──║║───║║║║\n──║║──║╚═╝║║╚═╝║──║║──╔╝╚╝║\n──╚╝──╚═══╝╚═══╝──╚╝──╚═══╝```")
	.setThumbnail("https://tlotd.net/files/TLOTD.gif")
	.addFields(
		{ name: "«『 𝗧𝗟𝗢𝗧𝗗 - The Legend Of The Discord 』»", value: `> *"Eine Gemeinschaft fürs treffen, labern und zocken."*\n> ➥ https://discord.gg/qrdQReN\n> \n> __**Wichtigste Channels**__\n> **:loud_sound: 』» :beers: Gasthaus**\n> :tophat:︱𝚂tammtisch - [128kbps]\n> :beers:︱𝙲hill-𝙱iergarten - [64kbps]\n> :telephone_receiver:︱𝚃isch 𝚁eservieren - [64 kbps]\n> \n> **<:Channel:1046427325505470524> 』» :speech_balloon: Texten**\n> :postal_horn:︱𝚄pdates＆𝙽ews\n> :link:︱𝙻inks＆𝙳ateien\n> :rotating_light:︱𝙻ennychannel`},
	)
	.setTimestamp()
	.setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

const mainServerRow = new ActionRowBuilder()
	.addComponents(
	new ButtonBuilder()
    	.setLabel("«『 𝗧𝗟𝗢𝗧𝗗 - The Legend Of The Discord 』»")
    	.setURL("https://discord.gg/qrdQReN")
    	.setStyle("Link")
		.setEmoji('<:TLOTD:748291536692707499>'),
		);

module.exports = {
    data: new SlashCommandBuilder().setName("tlotd").setDescription("Lists all official TLOTD stuff.")
	.addSubcommand(subCommand => subCommand.setName("links").setDescription("Lists all official TLOTD sites."))
	.addSubcommand(subCommand => subCommand.setName("members").setDescription("Lists all official TLOTD members."))
	.addSubcommand(subCommand => subCommand.setName("servers").setDescription("Lists all official TLOTD servers."))
	.addSubcommand(subCommand => subCommand.setName("mainserver").setDescription("Lists main TLOTD server features.")),


    async execute(interaction) {
		switch(interaction.options.getSubcommand()) {
			case "links": {
				interaction.reply({ embeds: [linkEmbed], components: [linkRow] })
				break
			}
			case "members": {
				interaction.reply({ embeds: [memberEmbed]})
				break
			}
			case "servers": {
				interaction.reply({ embeds: [serverEmbed], components: [serverRow] })
				break
			}
			case "mainserver": {
				interaction.reply({ embeds: [mainserverEmbed], components: [mainServerRow] })
				break
			}
		}
    }
}