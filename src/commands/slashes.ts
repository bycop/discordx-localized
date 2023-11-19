import type { ChatInputCommandInteraction } from "discord.js";
import { Discord } from "discordx";
import L from '../data/i18n/i18n-node.js';
import { getPreferredLocale } from "../client/Localization.js";
import { LocalizedSlash } from "../utils/guards.js";

@Discord()
export class Example {
  @LocalizedSlash()
  async ping(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.deferReply();
    const LL = L[getPreferredLocale(interaction)];

    interaction.editReply(LL.HI({ name: interaction.user.username }));
  }
}
