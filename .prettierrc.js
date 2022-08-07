// @ts-check
/// <reference types="@prettier/plugin-pug/src/prettier" />

/**
 * @type {import('prettier').Options}
 */
module.exports = {
	plugins: [require.resolve('@prettier/plugin-pug')],

	trailingComma: 'all',
	singleQuote: true,
	tabWidth: 4,
	useTabs: true,
	semi: false,
	bracketSpacing: true,
	arrowParens: 'always',
	printWidth: 200,
	// pugSingleQuote: true, // https://github.com/prettier/prettier/issues/9204
	pugAttributeSeparator: 'always',
	pugClassNotation: 'attribute',
	pugIdNotation: 'as-is',
}
