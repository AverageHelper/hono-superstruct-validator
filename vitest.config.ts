import { defineConfig } from "vitest/config";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
	test: {
		globals: true,
		typecheck: {
			checker: "tsc",
			tsconfig: "./tsconfig.test.json"
		},
		mockReset: true,
		clearMocks: true,
		environment: "node",
		coverage: {
			enabled: true,
			provider: "istanbul",
			reportsDirectory: "coverage"
		}
	}
});
