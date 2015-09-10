var assign = require('object-assign')
var base = require('./index')

module.exports = assign({}, base, {
	env: {
		es6: true
	},

	ecmaFeatures: {
		arrowFunctions: true,
		binaryLiterals: true,
		blockBindings: true,
		classes: true,
		defaultParams: true,
		destructuring: true,
		forOf: true,
		generators: true,
		globalReturn: true,
		jsx: true,
		modules: true,
		objectLiteralComputedProperties: true,
		objectLiteralDuplicateProperties: true,
		objectLiteralShorthandMethods: true,
		objectLiteralShorthandProperties: true,
		octalLiterals: true,
		regexUFlag: true,
		regexYFlag: true,
		spread: true,
		superInFunctions: true,
		templateStrings: true,
		unicodeCodePointEscapes: true
	},

	rules: {
		'arrow-parens': [ 2, 'as-needed' ],                         // require parens in arrow function arguments
		'arrow-spacing': [ 2, { 'before': true, 'after': true } ],  // require space before/after arrow function's arrow
		'constructor-super': 2,             // verify calls of super() in constructors
		'generator-star-spacing': 2,        // enforce spacing around the * in generator functions
		'no-class-assign': 2,               // disallow modifying variables of class declarations
		'no-const-assign': 2,               // disallow modifying variables that are declared using const
		'no-dupe-class-members': 2,         // disallow duplicate name in class members
		'no-this-before-super': 2,          // disallow use of this/super before calling super() in constructors.
		'no-var': 2,                        // require let or const instead of var
		'object-shorthand': 2,              // require method and property shorthand syntax for object literals
		'prefer-arrow-callback': 2,         // suggest using arrow functions as callbacks
		'prefer-const': 2,                  // suggest using const declaration for variables that are never modified after declared
		'prefer-reflect': 2,                // suggest using Reflect methods where applicable
		'prefer-spread': 2,                 // suggest using the spread operator instead of .apply().
		'prefer-template': 2,               // suggest using template literals instead of strings concatenation
		'require-yield': 2                  // disallow generator functions that do not have yield
	}
})
