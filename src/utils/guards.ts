import { Slash } from "discordx";
import { getAllTranslations } from "../client/Localization.js";
import { MyApplicationCommandOptions } from "./types.js";

export const LocalizedSlash = (options?: MyApplicationCommandOptions<Lowercase<string>, string>) => {
	return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	  const translations = getAllTranslations(options?.name ?? propertyKey);
	  console.log(propertyKey)
  
	  if (options) {
		options.name = translations.name;
		options.description = translations.description;
		// options.nameLocalizations = translations.nameLocalizations; // Uncomment if you want to use nameLocalizations
		options.descriptionLocalizations = translations.descriptionLocalizations;
	  }
  
	  return Slash(options ?? translations)(target, propertyKey, descriptor);
	};
  };