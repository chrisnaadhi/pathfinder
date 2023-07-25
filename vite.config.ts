import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import UnoCSS from 'unocss/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import { presetUno, presetIcons, transformerDirectives, transformerVariantGroup } from 'unocss';

export default defineConfig({
	plugins: [
		UnoCSS({
			extractors: [extractorSvelte()],
			presets: [presetUno(), presetIcons()],
			transformers: [transformerDirectives(), transformerVariantGroup()],
			shortcuts: {
				btn: 'py-1 px-4 rounded-lg'
			}
		}),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
