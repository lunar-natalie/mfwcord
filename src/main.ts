import "reflect-metadata";
import { Client } from "discordx";
import { dirname, importx } from "@discordx/importer";
import { ActivityType, IntentsBitField } from "discord.js";
import { readFileSync } from "fs";
import type { Interaction, Message } from "discord.js";

/**
 * Bot client to handle commands.
 */
export const bot = new Client({
    // To only use global commands (use @Guild for specific guild command),
    // comment the following line.
    botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],

    intents: [IntentsBitField.Flags.Guilds],

    // Debug logs are disabled in silent mode.
    silent: false,

    // Configuration for @SimpleCommand.
    simpleCommand: { prefix: "!" }
});

bot.once("ready", async (): Promise<void> => {
    // Ensure all guilds are cached.
    await bot.guilds.fetch();

    // Synchronize application commands with Discord.
    await bot.initApplicationCommands();

    // To clear all guild commands, uncomment the following statement.
    // This is useful when moving from guild commands to global commands.
    // It must only be executed once.
    //
    //  await bot.clearApplicationCommands(
    //    ...bot.guilds.cache.map((g) => g.id)
    //  );

    console.log("Bot started.");
});

bot.on("interactionCreate", (interaction: Interaction) => {
    bot.executeInteraction(interaction);
});

bot.on("messageCreate", (message: Message) => {
    bot.executeCommand(message);
});

/**
 * Starts the bot.
 */
async function run(): Promise<void> {
    await importx(dirname(import.meta.url) + "/{events,commands}/**/*.{ts,js}");

    let token: string;
    if (process.env.TOKEN) {
        token = process.env.TOKEN;
    } else {
        try {
            token = readFileSync("token.txt").toString().trim();
        } catch (e) {
            throw Error("Failed to read token from the 'TOKEN' environment variable or from file 'token.txt'.");
        }
    }

    if (token.length < 1) {
        throw Error("Invalid token.");
    }

    await bot.login(token);

    bot.user?.setPresence({
        activities: [{ name: "me when the 💀", type: ActivityType.Listening }]
    });
}

run();
