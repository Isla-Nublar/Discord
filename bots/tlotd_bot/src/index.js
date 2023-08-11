require("dotenv").config({ path: `F:/discord/.env` })
const fs = require("fs")
const { Client, Collection, GatewayIntentBits, InteractionType } = require("discord.js")
const { Player } = require("discord-player")

const client = new Client({intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences, GatewayIntentBits.GuildVoiceStates]})
client.player = new Player(client, {
    ytdlOptions: {
        quality: "highestaudio",
        highWaterMark: 1 << 25
    }
});
client.commands = new Collection()
const commandFiles = fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"))

commandFiles.forEach(commandFile => {
    const command = require(`./commands/${commandFile}`)
    client.commands.set(command.data.name, command)
})

client.once("ready", () => {
    console.log(`\n${client.user.tag} is now online and running on the following ${client.guilds.cache.size} guild(s):\n`)
    client.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name + "\n   ID: " + guild.id  + "\n   Owner: " + guild.ownerId + "\n   Members: " + guild.memberCount  + "\n")})
    client.user.setActivity("Jurassic Park | /help", {type: 3})
})

client.on("interactionCreate", async interaction => {
    if(interaction.type !== InteractionType.ApplicationCommand) return

    const command = client.commands.get(interaction.commandName)

    if(command) {

        try{
            await command.execute(interaction)
        } catch(error) {
            console.error(error)
            
            if(interaction.deferred || interaction.replied) {
                interaction.editReplay("An unexpected execution error occured!")
            }else {
                interaction.reply("An unexpected execution error occured!")
            }
        }
    }
})

client.login(process.env.DISCORD_BOT_TOKEN)