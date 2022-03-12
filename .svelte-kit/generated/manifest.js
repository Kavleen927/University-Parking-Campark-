const c = [
	() => import("..\\..\\src\\routes\\__layout.svelte"),
	() => import("..\\runtime\\components\\error.svelte"),
	() => import("..\\..\\src\\routes\\index.svelte"),
	() => import("..\\..\\src\\routes\\forgotPassword.svelte"),
	() => import("..\\..\\src\\routes\\profile.svelte"),
	() => import("..\\..\\src\\routes\\signup.svelte"),
	() => import("..\\..\\src\\routes\\login.svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/forgotPassword.svelte
	[/^\/forgotPassword\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/profile.svelte
	[/^\/profile\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/signup.svelte
	[/^\/signup\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/login.svelte
	[/^\/login\/?$/, [c[0], c[6]], [c[1]]]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];