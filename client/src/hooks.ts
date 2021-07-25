import cookie from 'cookie';
import { v4 as uuid } from '@lukeed/uuid';
import type { Handle } from '@sveltejs/kit';
import { browser } from '$app/env';

export const handle: Handle = async ({ request, resolve }) => {
	const cookies = cookie.parse(request.headers.cookie);
	const sessionInfo = cookies['connect.sid'];
	if (!browser) {
		console.log('cookies:', cookies);
		console.log('session:', sessionInfo);
	}

	// console.log(browser)
	// const cookies = cookie.parse(request.headers.cookie || '');
	// console.log('cookies:', cookies.userid)

	// request.locals.userid = cookies.userid || uuid();

	// // TODO https://github.com/sveltejs/kit/issues/1046
	// if (request.query.has('_method')) {
	// 	request.method = request.query.get('_method').toUpperCase();
	// }

	// const response = await resolve(request);

	// if (!cookies.userid) {
	// 	// if this is the first time the user has visited this app,
	// 	// set a cookie so that we recognise them when they return
	// 	response.headers['set-cookie'] = `userid=${request.locals.userid}; Path=/; HttpOnly`;
	// }

	console.log('await resolve(request):', (await resolve(request)).headers);
	return await resolve(request);
};
