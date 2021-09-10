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
	const user = await bot.users.fetch(userid).catch(() => null);
	const AvatarURL = user.displayAvatarURL({
		dynamic: true,
		size: 4096
	});
	return AvatarURL;
}
/*
 * @Functions done
 */
