import { i18n } from './i18n-util.js'
import { loadAllLocales } from './i18n-util.sync.js'
import type { Locales, Translations, TranslationFunctions } from './i18n-types.js'
import type { LocaleTranslationFunctions } from 'typesafe-i18n'

loadAllLocales()

export const L: LocaleTranslationFunctions<Locales, Translations, TranslationFunctions> = i18n()

export default L