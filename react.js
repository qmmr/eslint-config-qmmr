var assign = require('object-assign')
var base = require('./index')

module.exports = assign({}, base, {
	parser: 'babel-eslint',

	plugins: [ 'react' ],

	env: {
		browser: true,
		node: true
	},

	rules: {
		'react/display-name': 1,
		'react/jsx-boolean-value': 1,
		'react/jsx-curly-spacing': [ 2, 'always' ],
		'react/jsx-no-duplicate-props': 2,
		'react/jsx-no-undef': 2,
		'react/jsx-quotes': 1,
		'react/jsx-sort-props': 0,
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 1,
		'react/no-danger': 2,
		'react/no-did-mount-set-state': 2,
		'react/no-did-update-set-state': 2,
		'react/no-multi-comp': 1,
		'react/no-unknown-property': 2,
		'react/prop-types': 1,
		'react/self-closing-comp': 2,
		'react/sort-comp': 2,
		'react/wrap-multilines': 1
	}
})