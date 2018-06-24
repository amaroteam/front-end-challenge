module.exports = {
	verbose: false,
	testRegex: ".*.test\.js$",
	collectCoverage: true,
	collectCoverageFrom: [
		"source/**/*.{js,jsx}",
		"!**/node_modules/**",
		"!**/vendor/**"
	],
	coverageDirectory: "__tests__/coverage",
	coverageReporters: ["json", "lcov", "text-summary"]
};
