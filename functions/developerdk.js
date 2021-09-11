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
	return new Promise((resolve, reject) => {
		if (!userid) {
			reject('|~_~| Missing user id!');
		}
		if (userid) {
			if (!userid.length) {
				reject('|~_~| Missing user id!');
			}
		}
		if (!isNaN(userid)) {
			reject('|~_~| Invalid user id!');
		}
		if (!bot) {
			reject('|~_~| Missing bot variable!');
		}
		if (bot.users === undefined) {
			reject('|~_~| Invalid bot variable!');
		}
		const user = await bot.users.fetch(userid).catch(() => null);
		if (user.displayAvatarURL() === undefined) {
			reject('|~_~| Invalid user id!');
		}
		const AvatarURL = user.displayAvatarURL({
			dynamic: true,
			size: 4096
		});
		resolve(AvatarURL);
	});
}
/*
 * @Functions done
 */
