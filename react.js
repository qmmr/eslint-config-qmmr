var extend = require('extend')
var es6 = require('./es6')

module.exports = extend(true, {}, es6, {
  parser: 'babel-eslint',

  plugins: ['react'],

  rules: {
    'jsx-quotes': [1, 'prefer-single'],
    'react/display-name': 1,
    'react/jsx-boolean-value': 1,
    'react/jsx-curly-spacing': [2, 'always', { spacing: { objectLiterals: 'never' } }],
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-undef': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 1,
    'react/jsx-wrap-multilines': 1,
    'react/no-danger': 2,
    'react/no-deprecated': 2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 1,
    'react/no-is-mounted': 1,
    'react/no-multi-comp': 1,
    'react/no-set-state': 1,
    'react/no-string-refs': 1,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': [1, 'always'],
    'react/prefer-stateless-function': 1,
    'react/prop-types': 1,
    'react/react-in-jsx-scope': 1,
    'react/require-render-return': 1,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/sort-prop-types': 2
  }
})
