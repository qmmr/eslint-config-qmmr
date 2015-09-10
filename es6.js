module.exports = {
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
		'arrow-spacing': 2,         // require space before/after arrow function's arrow
		'no-var': 2,                // require let or const instead of var
		'prefer-const': 2           // suggest using const declaration for variables that are never modified after declared
	}
}
