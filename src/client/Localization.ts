import { Interaction } from 'discord.js';
import { baseLocale, loadedLocales } from '../data/i18n/i18n-util.js';
import { Locales } from '../data/i18n/i18n-types.js';
import L from '../data/i18n/i18n-node.js';

let defaultLocale: Locales = baseLocale;

export function getPreferredLocale(interaction: Interaction) {
	if (Object.keys(loadedLocales).includes(interaction.locale)) {
		return interaction.locale as unknown as Locales;
	}

	if (
		interaction.inGuild() &&
		Object.keys(loadedLocales).includes(interaction.guildLocale)
	) {
		return interaction.guildLocale as unknown as Locales;
	}

	return defaultLocale as Locales;
}

export function getAllTranslations(translationId: string): any {
	const translations: Record<'descriptionLocalizations', Record<Locales, string>> = {
		// nameLocalizations: {} as Record<Locales, string>, // Uncomment if you want to use nameLocalizations
		descriptionLocalizations: {} as Record<Locales, string>
	};

	let name: string = translationId;
	let description: string = translationId;


	interface CommandObject {
		name: () => string;
		description: () => string;
	}

	const cmd_object = `CMD_${translationId.toUpperCase()}` as unknown as keyof typeof L[Locales];

	for (const locale of Object.keys(loadedLocales)) {
		const LL = L[locale as unknown as Locales];

		if (locale === baseLocale) {
			name = (LL[cmd_object] as CommandObject).name();
			description = (LL[cmd_object] as CommandObject).description();
		}

		// translations.nameLocalizations[locale as unknown as Locales] = (LL[cmd_object] as CommandObject).name(); // Uncomment if you want to use nameLocalizations
		translations.descriptionLocalizations[locale as unknown as Locales] = (LL[cmd_object] as CommandObject).description();
	}

	return {
		...translations,
		name,
		description
	};
}
