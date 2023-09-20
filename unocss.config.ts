import type { UserConfig } from 'unocss';
import {
	defineConfig,
	presetIcons,
	presetUno,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';
import extractorSvelte from '@unocss/extractor-svelte';

export default defineConfig({
	extractors: [extractorSvelte()],
	presets: [presetUno({}), presetIcons()],
	transformers: [transformerDirectives(), transformerVariantGroup()],
	shortcuts: {
		btn: 'py-1 px-4 rounded',
		dfBg: 'bg-violet-5 text-white',
		dfTx: 'text-violet-5'
	}
}) satisfies UserConfig;
