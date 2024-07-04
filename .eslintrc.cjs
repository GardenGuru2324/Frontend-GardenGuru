module.exports = {
	parser: '@typescript-eslint/parser',
  root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'prettier',
	],
	plugins: ['@typescript-eslint', 'react'],
	rules: {
		'sort-imports': [
			'warn',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
			},
		],

		'import/default': 'off',
		'import/no-named-as-default-member': 'off',
		'import/order': [
			'error',
			{
				alphabetize: { order: 'asc' },
				'newlines-between': 'always',
				pathGroups: [
					{
						pattern: `~?({assets,styles})/**`,
						group: 'parent',
						position: 'before',
					},
				],
			},
		],

		'react/self-closing-comp': 'warn',
	},
	settings: {
		'import/resolver': {
			typescript: true,
			node: true,
		},
		react: {
			version: 'detect',
		},
	},
};
