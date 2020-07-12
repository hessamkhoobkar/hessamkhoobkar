module.exports = {
	keyframes: true,
	rejected: true,
	whitelist: [
		'container',
		'section',
		'has-dropdown',
		'is-hoverable',
		'mdi',
		'mdi-github',
		'mdi-48px',
		'burger',
		'is-large',
		'title',
		'default-layout',
		'has-background-white-ter',
		'message',
		'message-header',
		'title',
		'has-text-white',
		'message-body',
		'has-background-white',
		'has-text-primary',
		'has-background-dark',
		'is-fluid',
		'has-text-centered',
		'has-text-white',
	],
	whitelistPatterns: [/default-layout/],
	whitelistPatternsChildren: [/navbar/],
	extractor: (content) => content.match(/[A-z0-9-:\\/]+/g),
	extensions: ['vue', 'js', 'jsx', 'md', 'html', 'pug'],
};
