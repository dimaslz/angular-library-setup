/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';

const config: Config = {
	// Automatically clear mock calls, instances, contexts and results before every test
	clearMocks: true,

	// Indicates whether the coverage information should be collected while executing the test
	collectCoverage: true,

	// The directory where Jest should output its coverage files
	coverageDirectory: 'coverage',

	// Indicates which provider should be used to instrument code for coverage
	coverageProvider: 'v8',

	// A preset that is used as a base for Jest's configuration
	preset: 'jest-preset-angular',

	// A list of paths to modules that run some code to configure or set up the testing framework before each test
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

	// The test environment that will be used for testing
	testEnvironment: 'jsdom',

	// The glob patterns Jest uses to detect test files
	testMatch: [
		// "**/__tests__/**/*.[jt]s?(x)",
		'**/?(*.)+(spec|test).[tj]s?(x)',
	],

	// An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
	testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/*/dist/'],

	// A map from regular expressions to paths to transformers
	transform: {
		'^.+\\.(ts|mjs|js|html)$': [
			'jest-preset-angular',
			{
				tsconfig: '<rootDir>/projects/library/tsconfig.spec.json',
				stringifyContentPathRegex: '\\.(html|svg)$',
			},
		],
	},

	// Indicates whether each individual test should be reported during the run
	verbose: true,

	// Whether to use watchman for file crawling
	// watchman: true,

	moduleNameMapper: {
		'@scope/your-library-name': '<rootDir>/projects/library/src/public-api',
	},
};

export default config;
