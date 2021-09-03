/*
 * @Author developerdk
 * @Copyright 2021
 * @Functions export
 */
module.exports = {
	getAvatarURL
};
/*
 * @Function getAvatarURL
 */
async function getAvatarURL({
	userid: userid,
	bot: bot
}) {
	if (!userid) {
		return {
			error: true,
			type: 'no-userid'
		};
	}
	if (userid) {
		if (!userid.length) {
			return {
				error: true,
				type: 'no-userid'
			};
		}
	}
	if (!isNaN(userid)) {
		return {
			error: true,
			type: 'invalid-userid'
		};
	}
	if (!bot) {
		return {
			error: true,
			type: 'no-bot'
		};
	}
	if (bot.users === undefined) {
		return {
			error: true,
			type: 'invalid-bot'
		};
	}
	const user = await bot.users.fetch(userid).catch(() => null);
	if (user.displayAvatarURL() === undefined) {
		return {
			error: true,
			type: 'invalid-userid'
		};
	}
	const AvatarURL = user.displayAvatarURL({
		dynamic: true,
		size: 4096
	});
	return AvatarURL;
}
/*
 * @Functions done
 */
