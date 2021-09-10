/*
 * @Command getAvatarURL
 */
const {
	Function
} = require('developerdk-functions');

let target;
const user = 'here message variable'.mentions.members.first();
const botuser = await 'here bot variable'.users.fetch('here args variable'[0]).catch(() => null);
if (user) {
	target = user.user.id;
} else if (botuser) {
	target = botuser.id;
} else {
	target = 'here message variable'.author.id;
}

let data = Function.getAvatarURL({
	userid: target,
	bot: 'here bot variable'
});
const avatarURL = data;
/*
 * @Command done
 */
