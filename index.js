module.exports = {
	extends: 'eslint:recommended',

	env: {
		browser: true,
		node: true
	},

	rules: {
		// strict mode
		'strict': 0,

		'array-bracket-spacing': [ 2, 'always', { 'singleValue': true, 'objectsInArrays': true, 'arraysInArrays': true } ],
		'block-scoped-var': 2,
		'brace-style': [ 2, '1tbs' ],
		'comma-dangle': [ 2, 'never' ],
		'comma-spacing': [ 2, { 'before': false, 'after': true } ],
		'comma-style': [ 2, 'last' ],
		'computed-property-spacing': [ 2, 'always' ],
		'consistent-return': 1,
		'curly': [ 2, 'multi-line' ],
		'eol-last': 2,
		'func-style': [ 2, 'expression' ],
		'guard-for-in': 2,
		'no-else-return': 2,
		'no-extra-semi': 2,
		'no-floating-decimal': 2,
		'no-irregular-whitespace': 2,
		'no-mixed-requires': 2,
		'no-multi-spaces': 2,
		'no-spaced-func': 2,
		'no-trailing-spaces': 2,
		'no-undef': 2,
		'no-underscore-dangle': 0,
		'no-unused-expressions': 1,
		'no-unused-vars': [ 2, { 'vars': 'all', 'args': 'all' } ],
		'object-curly-spacing': [ 2, 'always', { 'objectsInObjects': true, 'arraysInObjects': true } ],
		'quotes': [ 1, 'single' ],
		'radix': 2,
		'semi': [ 2, 'never' ],
		'semi-spacing': [ 2, { 'before': false, 'after': true } ],
		'space-after-keywords': [ 2, 'always' ],
		'space-before-blocks': 2,
		'space-before-function-paren': [ 2, { 'anonymous': 'never', 'named': 'never' } ],
		'space-in-parens': [ 2, 'never' ],
		'spaced-comment': [ 2, 'always', { 'exceptions': [ '-' ] } ],
		'vars-on-top': 2,
		'wrap-iife': [ 2, 'inside' ]
	}
}
