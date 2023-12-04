import { defineConfig } from "vite";
import { createVuePlugin as vue } from "vite-plugin-vue2";
import { resolve } from "path";

export default defineConfig({
	server: {
		host: import.meta.env.VITE_HOST,
	},
	plugins: [vue()],
	resolve: {
		alias: {
			"@": resolve(resolve(__dirname), "src"),
		},
		extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
	},
});
