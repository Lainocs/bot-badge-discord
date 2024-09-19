const { Client } = require("discord.js");
const dotenv = require("dotenv");

dotenv.config();

const bot = new Client({ intents: ["Guilds"] });
console.log("Connexion au bot...");
bot.login(process.env.DISCORD_KEY)
    .then(() => console.log("Connecté au bot !"))
    .catch((error) => console.log("Impossible de se connecter au bot - " + error));

bot.on("ready", async () => {

    await bot.application.commands.set([
        {
            name: "ping",
            description: "Pong!"
        }
    ]);

    console.log("Le bot est prêt !");
});

bot.on("interactionCreate", (interaction) => {

    if (!interaction.isCommand()) return;

    if (interaction.commandName === "ping")
        interaction.reply("Pong!");
});