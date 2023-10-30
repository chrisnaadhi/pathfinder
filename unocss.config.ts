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
		dfBg: 'bg-sky-5 text-white',
		dfBgSecond: 'bg-sky-1',
		dfBgThird: 'bg-sky-50',
		dfTx: 'text-sky-5',
		dfTx6: 'text-sky-6',
		dfTx7: 'text-sky-7',
		dfBorder: 'border border-sky'
	}
}) satisfies UserConfig;
