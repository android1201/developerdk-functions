/*
 * @Command getAvatarURL
 */
const {
	Function
} = require('@developerdk');

let target;
const user = 'here message variable'.mentions.members.first();
const botuser = await 'here bot variable'.users.fetch('here args variable' [0]).catch(() => null);
if (user) {
	target = user.user.id;
} else if (botuser) {
	target = botuser.id;
} else {
	target = message.author.id;
}

let data = Function.getAvatarURL({
	userid: target,
	bot: 'here bot variable'
});
if (data.error) {
	if (data.type === 'no-userid') return console.log('No userid!');
	if (data.type === 'invalid-userid') return console.log('Invalid userid!');
	if (data.type === 'no-bot') return console.log('No bot!');
	if (data.type === 'invalid-bot') return console.log('Invalid bot!');
}
const avatarURL = data;
/*
 * @Command done
 */
