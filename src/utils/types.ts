import { LocalizationMap, PermissionResolvable } from "discord.js";
import { IGuild } from "discordx";

export type MyApplicationCommandOptions<T extends string, TD extends string> = {
    botIds?: string[];
    defaultMemberPermissions?: PermissionResolvable;
    description?: TD;
    descriptionLocalizations?: LocalizationMap;
    dmPermission?: boolean;
    guilds?: IGuild[];
    name?: T;
    nameLocalizations?: LocalizationMap;
    nsfw?: boolean;
};