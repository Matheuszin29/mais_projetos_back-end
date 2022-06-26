const discord = require('discord.js');
const { Intents } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new discord.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.login(process.env.TOKEN);

client.on("ready", () => {
    console.log("bot online!");
});