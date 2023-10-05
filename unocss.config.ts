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
		dfBgSecond: 'bg-violet-1',
		dfBgThird: 'bg-violet-50',
		dfTx: 'text-violet-5',
		dfTx6: 'text-violet-6',
		dfTx7: 'text-violet-7',
		dfBorder: 'border border-violet'
	}
}) satisfies UserConfig;
