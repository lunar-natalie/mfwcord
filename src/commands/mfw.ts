import { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

/**
 * Displays an incomprehensible meme string.
 */
@Discord()
export class Mfw {
    @Slash({
        description: "Display an incomprehensible meme string",
        name: "mfw",
    })
    mfw(interaction: CommandInteraction): void {
        interaction.reply("Hello, world!");
    }
}
