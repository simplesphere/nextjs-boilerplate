module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
		'next/core-web-vitals',
		'airbnb-base',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint', 'prettier'],
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: __dirname,
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				endOfLine: 'auto',
			},
		],
		'react/react-in-jsx-scope': 'off',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
		react: {
			version: 'detect',
		},
	},
}
