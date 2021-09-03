/*
 * @Author developerdk
 * @Copyright 2021
 * @Testing functions
 */
const {
	Function
} = require('../src/module');

const _Function = require('../src/module').Function;
/*
 * @Testing getAvatarURL
 */
Function.getAvatarURL({
	userid: '0123456789',
	bot: 'here bot variable'
});
/*
 * @Or
 */
_Function.getAvatarURL({
	userid: '0123456789',
	bot: 'here bot variable'
});
/*
 * @Testing done
 */
