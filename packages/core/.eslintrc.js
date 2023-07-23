module.exports = {
	root: true,
	overrides: [
		{
			files: ["*.ts"],
			parserOptions: {
        project: [
          "tsconfig.json"
        ],
        createDefaultProgram: true
			},
			plugins: ["simple-import-sort", "import"],
      extends: [
				"eslint:recommended",
				// "plugin:tailwindcss/recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@angular-eslint/recommended",
				"plugin:@angular-eslint/template/process-inline-templates",
				"plugin:prettier/recommended", // <--- here we inherit from the recommended setup from eslint-plugin-prettier for TS
			],
			rules: {
				"simple-import-sort/imports": "error",
				"simple-import-sort/exports": "error",
				"import/first": "error",
				"import/newline-after-import": "error",
				"import/no-duplicates": "error",
				"indent": "off",
				// typescript
				"@typescript-eslint/no-explicit-any": "warn",
				"@typescript-eslint/no-empty-function": "off",

				"@angular-eslint/no-empty-lifecycle-method": "off"
      },
		},
		{
			files: ["*.html"],
			extends: [
				"plugin:@angular-eslint/template/recommended",
				"plugin:prettier/recommended", // <--- here we inherit from the recommended setup from eslint-plugin-prettier for HTML
			],
			rules: {

			},
		},
	],
};