export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png"]),
	_: {
		mime: {".png":"image/png"},
		entry: {"file":"start-fbc9ab39.js","js":["start-fbc9ab39.js","chunks/vendor-7b4d9e86.js"],"css":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
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
				pattern: /^\/forgotPassword\/?$/,
				params: null,
				path: "/forgotPassword",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/profile\/?$/,
				params: null,
				path: "/profile",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/signup\/?$/,
				params: null,
				path: "/signup",
				shadow: null,
				a: [0,5],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/login\/?$/,
				params: null,
				path: "/login",
				shadow: null,
				a: [0,6],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/auth\/?$/,
				params: null,
				load: () => import('./entries/endpoints/auth.js')
			}
		]
	}
};
