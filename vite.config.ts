import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import UnoCSS from 'unocss/vite';
import extractorSvelte from '@unocss/extractor-svelte';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
	plugins: [
		UnoCSS({
			extractors: [extractorSvelte()],
			presets: [presetUno(), presetIcons()],
			transformers: [transformerDirectives(), transformerVariantGroup()],
			shortcuts: {
				btn: 'py-1 px-4 font-semibold rounded-lg'
			}
		}),
		sveltekit()
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
