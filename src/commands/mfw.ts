import { CommandInteraction } from "discord.js";
import { Discord, Slash } from "discordx";

@Discord()
export class Mfw {
    private terms: Terms = {
        secondary: [
            "whenthe", "when", "the", "she", "he", "they", "it", "mfw",
            "my face"
        ],
        primary: [
            "me when", "mewhenthe"
        ],
        prefixes: [
            "do you remember the",
            "do you know that feeling when the",
            "oh my god i forgor about the me the",
            "currently lmfao at that time when the"
        ]
    };

    /**
     * Displays an incomprehensible meme string.
     */
    @Slash({
        description: "Display an incomprehensible meme string",
        name: "mfw",
    })
    show(interaction: CommandInteraction): void {
        interaction.reply(this.generate(this.terms, {
            secondaryCount: Math.floor(400 * Math.random()),
            primaryCount: Math.floor(5 * Math.random()),
            maxLength: 2000
        }));
    }

    /**
     * Generates a pseudo-random string from a set of terms.
     * @param terms Elements.
     * @param termAttribs Attrubutes for term usage.
     * @returns Message string.
     */
    private generate(terms: Terms, termAttribs: TermAttributes): string {
        let result = "";
        let el: string;

        el = getRandomElement(terms.prefixes) + " ";
        if (el.length < termAttribs.maxLength) {
            result = el;
        }

        for (let i = 0; i < termAttribs.primaryCount; ++i) {
            el = getRandomElement(terms.primary) + " ";
            for (let j = 0; j < termAttribs.secondaryCount; ++j) {
                el += getRandomElement(terms.secondary) + " ";
                if (result.length + el.length > termAttribs.maxLength) {
                    break;
                }
            }

            result += el;
        }

        return result.trim();
    }
}

/**
 * Term elements from which to generate a pseudo-random string.
 */
interface Terms {
    /** Elements in the main body. */
    secondary: string[];

    /** Elements to prioritize and use first. */
    primary: string[];

    /** Elements to prefix the generated string with once. */
    prefixes: string[];
}

/**
 * Attributes for usage of a Terms object.
 */
interface TermAttributes {
    /** Number of secondary terms to add to a generated string. */
    secondaryCount: number;

    /** Number of primary terms to add to a generated string. */
    primaryCount: number;

    /** Maximum length of the string to generate. */
    maxLength: number;
}

/**
 * Gets a pseudo-random element from an array.
 * @param arr Array of elements.
 * @returns Element.
 * @throws RangeError if the array is empty.
 */
 export function getRandomElement<T,>(arr: T[]): T {
    return arr[Math.floor(Math.random() * (arr.length - 1))];
}
