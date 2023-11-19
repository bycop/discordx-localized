import type { BaseTranslation } from '../i18n-types.js'

const en_US = {
	HI: 'Hi {name:string}!',

	CMD_PING: {
		name: 'ping',
		description: 'Ping the bot',
	}
} satisfies BaseTranslation

export default en_US
