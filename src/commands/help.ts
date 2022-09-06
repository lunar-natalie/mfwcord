import { Discord, MetadataStorage, Slash } from "discordx";
import { EmbedBuilder } from "discord.js";
import { Pagination } from "@discordx/pagination";
import type { CommandInteraction } from "discord.js";

@Discord()
export class Help {
    /**
     * Shows pages with command descriptions.
     */
    @Slash({
        description: "Show usage",
        name: "help",
    })
    async show(interaction: CommandInteraction): Promise<void> {
        const commands = MetadataStorage.instance.applicationCommands.map(
            (cmd) => {
            return { description: cmd.description, name: cmd.name };
        });

        const pages = commands.map((cmd, i) => {
            return new EmbedBuilder()
            .setFooter({ text: `Page ${i + 1} of ${commands.length}` })
            .setTitle("**mfw: Usage**")
            .addFields({ name: "Name", value: cmd.name })
            .addFields({ name: "Description", value: cmd.description });
        });

        const pagination = new Pagination(interaction, pages);
        await pagination.send();
    }
}
