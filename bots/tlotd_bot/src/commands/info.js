const { SlashCommandBuilder } = require("@discordjs/builders")
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
	.setName("info")
	.setDescription("View info about this server [or a specific user].")
	.addUserOption(option => option.setName("user").setDescription("The User")),
    async execute(interaction) {
		if (interaction.options.getMember("user")) {

			const member = interaction.options.getMember("user")
			//TLOTD Account
			if(member.id == 533750271537446962) {
				var tlotd = "<:Verified:1046771615150649435>Official News\n> [...] _+1 more_"
				var discord = '<:TLOTD:748291536692707499> «『 𝗧𝗟𝗢𝗧𝗗 - The Legend Of The Discord 』»<:Verified:1046771615150649435>\n> _"The main server to hang out, talk and play games."_\n> ➥ https://discord.gg/qrdQReN'
				var steam = "https://steamcommunity.com/id/TheLegendOfTheDudes"
				var youtube = "https://www.youtube.com/@tlotd"
				var socialname = ":camera: Instagram"
				var sociallink = "https://instagram.com/the.legend.of.the.dudes"
				var tlotd_embed = true
			//Robin - Isla_Nublar
			} else if(member.id == 366220790875815946) {
				var tlotd = "<:narsil:1103107949263585290> Emperor\n> [...] _+3 more_"
				var discord = '<:TLOTD:748291536692707499> «『 𝗧𝗟𝗢𝗧𝗗 - The Legend Of The Discord 』»<:Verified:1046771615150649435>\n> _"The main server to hang out, talk and play games."_\n> ➥ https://discord.gg/qrdQReN'
				var steam = "https://tlotd.net/steam/Isla_Nublar"
				var youtube = "https://www.youtube.com/@isla_nublar"
				var socialname = "<:TLOTD:748291536692707499> About Me"
				var sociallink = "https://tlotd.net/Isla_Nublar"
				var tlotd_embed = true
			//Joy - decrepitParadox
			} else if(member.id == 386591782047055872) {
				var tlotd = "<:TLOTDRPG:956334791094054972> Honorary Member\n> [...] _+1 more_"
				var discord = "Not Set"
				var steam = "https://steamcommunity.com/profiles/76561198056875067"
				var youtube = "Not Set"
				var socialname = "ⓣ tumblr"
				var sociallink = "https://flowofexistence.tumblr.com"
				var tlotd_embed = true
			//Luki - EinsYuu
			} else if(member.id == 460468276712177665) {
				var tlotd = "<:TLOTDDK:839992667130560582> King of the Village\n> [...] _+3 more_"
				var discord = '<:TLOTDDK:839992667130560582> «『 𝗧𝗟𝗢𝗧𝗗 - 𝕯𝕬𝕿 𝕶𝕬𝕱𝕱 』»<:Verified:1046771615150649435>\n> _"Der Internet schonende Server."_\n> ➥ https://discord.gg/mDswNjb'
				var steam = "https://steamcommunity.com/id/EinsYuu"
				var youtube = "Not Set"
				var socialname = "<:Developer:959020356935487518> Other Social"
				var sociallink = "Not Set"
				var tlotd_embed = true
			//Simon - Grillshrimp
			} else if(member.id == 424161071851503617) {
				var tlotd = "<:Discord:1134254163337945139> Discord Co-Owner\n> [...] _+1 more_"
				var discord = ':shrimp: «『 𝗧𝗟𝗢𝗧𝗗 - Shrimping Network 』»<:Verified:1046771615150649435>\n> _"Der Netflix and Grill Server. (Mit Kutterband!)"_\n> ➥ N/A'
				var steam = "https://steamcommunity.com/id/Echsenente"
				var youtube = "Not Set"
				var socialname = ":camera: Instagram"
				var sociallink = "https://instagram.com/derbuecherwolf"
				var tlotd_embed = true
			//Lilly
			} else if(member.id == 573432509254205440) {
				var tlotd = ":flag_us: International Representative\n> [...] _+2 more_"
				var discord = `<:LillyHeart:950512312672989186> ꧁『 𝗧𝗟𝗢𝗧𝗗 - 𝓛𝓪 𝓖𝓾𝓪𝓻𝓲𝓭𝓪 𝓓𝓮𝓵 𝓓𝓻𝓪𝓰𝓸𝓷 𝓓𝓮 𝓛𝓲𝓵𝓵𝔂 』꧂<:Verified:1046771615150649435>\n> _"Lilly's Vibe Corner"_\n> ➥ https://discord.gg/sRyJZYjs8P`
				var steam = "https://steamcommunity.com/id/California_Girl"
				var youtube = "https://www.youtube.com/@liberty-lilly"
				var socialname = "ⓣ tumblr"
				var sociallink = "https://liberty-lilly.tumblr.com"
				var tlotd_embed = true
			//Timon - AkitorLP
			} else if(member.id == 626854432633782302) {
				var tlotd = "<:flag_ddr:978398118322270249> Ostblockbeauftragter\n> [...] _+2 more_"
				var discord = '<:flag_ddr:978398118322270249> «『 𝗧𝗟𝗢𝗧𝗗 - Tamtams Bällebad 』»<:Verified:1046771615150649435>\n> _"Das Småland"_\n> ➥ N/A'
				var steam = "https://steamcommunity.com/profiles/76561198868118329"
				var youtube = "Not Set"
				var socialname = "<:Developer:959020356935487518> Other Social"
				var sociallink = "Not Set"
				var tlotd_embed = true
			//Lars - ISSO_21_
			} else if(member.id == 608333490135498753) {
				var tlotd = "<:Kreuz:912125631188320257> Barmann\n> [...] _+2 more_"
				var discord = '<:Kreuz:912125631188320257> «『 𝗧𝗟𝗢𝗧𝗗 - GAMING SERVER 』»<:Verified:1046771615150649435>\n> _"Preußens Gloria"_\n> ➥ N/A'
				var steam = "https://steamcommunity.com/profiles/76561198981740679"
				var youtube = "Not Set"
				var socialname = "<:Developer:959020356935487518> Other Social"
				var sociallink = "Not Set"
				var tlotd_embed = true
			//Jan - Polarfox
			} else if(member.id == 817812035978788894) {
				var tlotd = "<:Developer:959020356935487518> Developer\n> [...] _+2 more_"
				var discord = 'https://discord.gg/qCdKH6GRqk'
				var steam = "https://steamcommunity.com/profiles/76561198940495276"
				var youtube = "Not Set"
				var socialname = "<:TLOTD:748291536692707499> About Me"
				var sociallink = "https://tlotd.net/de/Eagle%E2%84%A2"
				var tlotd_embed = true
			//Ben - Ezrael
			} else if(member.id == 639834411927339038) {
				var tlotd = "<:Developer:959020356935487518> Developer\n> [...] _+2 more_"
				var discord = 'https://discord.gg/qCdKH6GRqk'
				var steam = "https://steamcommunity.com/id/lil_senjidai/"
				var youtube = "https://youtube.com/@sergeantezrael"
				var socialname = "<:TLOTD:748291536692707499> About Me"
				var sociallink = "https://tlotd.net/de/Ezreal"
				var tlotd_embed = true

			//Alex Alia Officer200 Duncan
			} else if(member.id == (676902287901196328 || 409719679117033473 || 527181921973829632 || 432228297250701324)) {
				var tlotd = "<:Verified:1046771615150649435>Representative\n> [...] _+1 more_"
				var tlotd_embed = flase
			//Bot
			} else if(member.id == 742114746144129036) {
				var tlotd = "<:Verified:1046771615150649435>Official Bot\n> [...] _+1 more_"
				var discord = '<:TLOTD:748291536692707499> «『 𝗧𝗟𝗢𝗧𝗗 - The Legend Of The Discord 』»<:Verified:1046771615150649435>\n> _"Der Hauptserver zum treffen, labern und zocken!"_\n> ➥ https://discord.gg/qrdQReN'
				var steam = "https://steamcommunity.com/id/TheLegendOfTheDudes"
				var youtube = "https://www.youtube.com/@tlotd"
				var socialname = ":camera: Instagram"
				var sociallink = "https://instagram.com/the.legend.of.the.dudes"
				var tlotd_embed = true
			//Lenny
			} else if(member.id == 536616762758660106) {
				var tlotd = "<:Lennychannel:980863532310622268> Lenny\n> [...] _+1 more_"
				var tlotd_embed = false
			//Stammtischmitglieder
			} else if(member.id == (387622276851433472 || 387621606886866944 || 773942776810569789 || 443802058966040587 || 437546829417283596 || 384406542402846721 || 482866543630352386 || 451448757310193674 || 630684586158063616 || 672500627578028053 || 351450242463301633 || 393774418511396864 || 362272023944232960 || 804486703363653692)) {
				var tlotd = ":ticket: Stammtischmitglied"
				var tlotd_embed = false
			} else {
				var tlotd = "Not The Case"
				var tlotd_embed = false
			}

			const basicEmbed = new EmbedBuilder()
			.setColor(0x00d19d)
			.setTitle("__**«『<:Dragon_L:808656544492945428>Member Info<:Dragon_R:808656770851536896>』»**__")
			.setThumbnail(member.user.avatarURL({dynamic: true}))
			.addFields(
				{ name: ":bust_in_silhouette: User", value: `> ${member.toString()}` },
				{ name: "<:Developer:959020356935487518> User ID", value: `> ${member.id}` },
				{ name: "<:TLOTD:748291536692707499> TLOTD Member", value: `> ${tlotd}` },
				{ name: ":stopwatch: Created On", value: `<t:${Math.round(member.user.createdTimestamp/1000)}>`, inline: true },
				{ name: ":stopwatch: Joined Server", value: `<t:${Math.round(member.joinedTimestamp/1000)}>`, inline: true },
			)
			.setTimestamp()
			.setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

			const tlotdEmbed = new EmbedBuilder()
			.setColor(0x00d19d)
			.setTitle("__**«『<:Dragon_L:808656544492945428>Member Info<:Dragon_R:808656770851536896>』»**__")
			.setThumbnail(member.user.avatarURL({dynamic: true}))
			.addFields(
				{ name: ":bust_in_silhouette: User", value: `> ${member.toString()}` },
				{ name: "<:Developer:959020356935487518> User ID", value: `> ${member.id}` },
				{ name: "<:TLOTD:748291536692707499> TLOTD Member", value: `> ${tlotd}` },
				{ name: "<:Discord:1134254163337945139> Discord Server", value: `> ${discord}`},
				{ name: `${socialname}`, value: `> ${sociallink}`, inline: true },
				{ name: "<:Steam:554036465093443614> Steam", value: `> ${steam}`, inline: true},
				{ name: "<:YouTube:1134256546562461847> YouTube", value: `> ${youtube}`, inline: true },
				{ name: ":stopwatch: Created On", value: `<t:${Math.round(member.user.createdTimestamp/1000)}>`, inline: true },
				{ name: ":stopwatch: Joined Server", value: `<t:${Math.round(member.joinedTimestamp/1000)}>`, inline: true },
			)
			.setTimestamp()
			.setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })

			if (tlotd_embed == true) {
					interaction.reply({embeds: [ tlotdEmbed ]})
			} else { interaction.reply({embeds: [ basicEmbed ]})}
			
		} else {

		const server = interaction.guild.id
		
		//TLOTD Server
		if(server == 441582165281472513) {
			var tlotd_server = "> <:TLOTD:748291536692707499> The Legend of the Discord\n> <:Verified:1046771615150649435>Official Server"
			var server_link = "\n> ➥ https://discord.gg/qrdQReN"
			var server_name = `<:TLOTD:748291536692707499> ${interaction.guild.name}<:Verified:1046771615150649435>`
		//FullGAS
		} else if(server == 971755536632668230) {
			var tlotd_server = "> <:FullGAS:1057362599261507624> FullGAS\n> <:Verified:1046771615150649435>Official Server"
			var server_link = "\n> ➥ https://discord.gg/fp5xu3Mc74"
			var server_name = `<:FullGAS:1057362599261507624> ${interaction.guild.name}<:Verified:1046771615150649435>`
		//Dat Kaff
		} else if(server == 468045915278802974) {
			var tlotd_server = "> <:TLOTDDK:839992667130560582> 𝕯𝕬𝕿 𝕶𝕬𝕱𝕱\n> <:Verified:1046771615150649435>Official Server"
			var server_link = "\n> ➥ https://discord.gg/mDswNjb"
			var server_name = `<:TLOTDDK:839992667130560582> ${interaction.guild.name}<:Verified:1046771615150649435>`
		//Shrimp
		} else if(server == 699628360623456297) {
			var tlotd_server = "> :shrimp: Shrimping Net\n> <:Verified:1046771615150649435>Official Server"
			var server_link = "\n> ➥ N/A"
			var server_name = `:shrimp: ${interaction.guild.name}<:Verified:1046771615150649435>`
		//Lars Server
		} else if(server == 756229685637284023) {
			var tlotd_server = "> <:Kreuz:912125631188320257> Gaming Server\n> <:Verified:1046771615150649435>Official Server"
			var server_link = "\n> ➥ N/A"
			var server_name = `<:Kreuz:912125631188320257> ${interaction.guild.name}<:Verified:1046771615150649435>`
		//Bällebad
		} else if(server == 922822990956232754) {
			var tlotd_server = "> <:Muesli:900875111530364988> Tamtams Bällebad\n> <:Verified:1046771615150649435>Official Server"
			var server_link = "\n> ➥ https://discord.gg/ak9XBVNCtH"
			var server_name = `<:Muesli:900875111530364988> ${interaction.guild.name}<:Verified:1046771615150649435>`
		//Lilly Server
		} else if(server == 863566886946996264) {
			var tlotd_server = "> <:LillyHeart:950512312672989186> Lilly's Server\n> <:Verified:1046771615150649435>Official Server"
			var server_link = "\n> ➥ https://discord.gg/sRyJZYjs8P"
			var server_name = `<:LillyHeart:950512312672989186> ${interaction.guild.name}<:Verified:1046771615150649435>`
		//Duncan
		} else if(server == 863566886946996264) {
			var tlotd_server = "> Not The Case"
			var server_name = interaction.guild.name
		//Jan RP
		} else if(server == 1094718527837044868) {
			var tlotd_server = "> <:Members:1048327925390397470> Partnerserver\n> <:Verified:1046771615150649435>Official Server"
			var server_link = "\n> ➥ https://discord.gg/qCdKH6GRqk"
			var server_name = `<:GTAV:956931995261341736> ${interaction.guild.name}<:Verified:1046771615150649435>`
		} else {
			var tlotd_server = "> Not The Case"
			var server_name = interaction.guild.name
		}

		if(server == 441582165281472513) {
			var server_description = "The main server to hang out, talk and play games."
		} else if(interaction.guild.description === null) {
			var server_description = "No Description Set"
		} else {
			var server_description = interaction.guild.description
		}

		if(interaction.guild.afkChannel === null) {
			var server_afk_channel = "No AFK Channel Set"
		} else {
			var server_afk_channel = interaction.guild.afkChannel
		}

		if(interaction.guild.rulesChannel === null) {
			var server_rules_channel = "No Rules Channel Set"
		} else {
			var server_rules_channel = interaction.guild.rulesChannel
		}
		
		if(server_link === undefined) {
			var server_link = " "
		}

		interaction.reply({embeds: [
			new EmbedBuilder()
			.setColor(0x00d19d)
			.setTitle("__**«『<:Dragon_L:808656544492945428>Server Info<:Dragon_R:808656770851536896>』»**__")
			.setThumbnail(interaction.guild.iconURL({dynamic: true}))
			.addFields(
				{ name: `${server_name}`, value: `> <:Members:1048327925390397470> ${interaction.guild.memberCount} Members ${server_link}` },
				{ name: "<:Developer:959020356935487518> Server ID", value: `> ${interaction.guild.id}`, inline: true },
				{ name: "<:Owner:1046429889902940271> Server Owner", value: `> <@${interaction.guild.ownerId}>`, inline: true },
				{ name: "<:Boost:954903417212526612>Boost Status", value: `> Level ${interaction.guild.premiumTier}\n> ${interaction.guild.premiumSubscriptionCount} Boosts`, inline: true },
				{ name: ":stopwatch: Created On", value: `> <t:${Math.round(interaction.guild.createdTimestamp/1000)}>`, inline: true },
				{ name: "<:TLOTD:748291536692707499> TLOTD Server", value: `${tlotd_server}`, inline: true },
				{ name: "<:MinecraftBook:461645022102683648> Description", value: `> ${server_description}`, inline: true },
				{ name: "<:Channel:1046427325505470524> Channels", value: `> ${interaction.guild.channels.cache.size} Channels and Categories`, inline: true },
				{ name: ":zzz: AFK Channel", value: `> ${server_afk_channel}\n> After ${interaction.guild.afkTimeout/60} Minutes`, inline: true },
				{ name: "<:RulesChannel:1046504467694096524> Rules Channel", value: `> ${server_rules_channel}`, inline: true },
				{ name: "<:Role:1048327966880444478> Roles", value: `> ${interaction.guild.roles.cache.size} Roles`, inline: true },
				{ name: "<:Emojis:1046512513967198228> Emojis", value: `> ${interaction.guild.emojis.cache.size} Emojis`, inline: true },
				{ name: "<:Stickers:1046507391258206258> Stickers", value: `> ${interaction.guild.stickers.cache.size} Stickers`, inline: true },
			)
			.setTimestamp()
			.setFooter({ text: "«『 𝕿𝖍𝖊 𝕷𝖊𝖌𝖊𝖓𝖉 𝕺𝖋 𝕿𝖍𝖊 𝕯𝖚𝖉𝖊𝖘 』»", iconURL: "https://tlotd.net/files/TLOTD.png" })
		]})
		}
    }
}