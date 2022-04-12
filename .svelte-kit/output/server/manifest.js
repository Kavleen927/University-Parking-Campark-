export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-ccd84c98.js","js":["start-ccd84c98.js","chunks/vendor-7b15748c.js"],"css":["assets/vendor-47978cb3.css"]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js')
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/adminReporting\/?$/,
				params: null,
				path: "/adminReporting",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/forgotPassword\/?$/,
				params: null,
				path: "/forgotPassword",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/userReporting\/?$/,
				params: null,
				path: "/userReporting",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/parkinglots\/?$/,
				params: null,
				path: "/parkinglots",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/profile\/?$/,
				params: null,
				path: "/profile",
				shadow: null,
				a: [0,7],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/signup\/?$/,
				params: null,
				path: "/signup",
				shadow: null,
				a: [0,8],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/login\/?$/,
				params: null,
				path: "/login",
				shadow: null,
				a: [0,9],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/lot7N\/?$/,
				params: null,
				path: "/lot7N",
				shadow: null,
				a: [0,10],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/auth\/?$/,
				params: null,
				load: () => import('./entries/endpoints/auth.js')
			},
			{
				type: 'page',
				pattern: /^\/lot6\/?$/,
				params: null,
				path: "/lot6",
				shadow: null,
				a: [0,11],
				b: [1]
			}
		]
	}
};
