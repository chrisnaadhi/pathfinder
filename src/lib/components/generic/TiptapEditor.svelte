<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';

	import { contentTipTap } from '$lib/utils/dataStore';

	let element: HTMLElement;
	let editor: any;

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: '<p>Hello PathfinderKit!</p>',
			onTransaction: () => {
				editor = editor;
				$contentTipTap = editor.getHTML();
			}
		});
	});

	onDestroy(() => {
		if (editor) {
			editor.destroy();
		}
	});
</script>

{#if editor}
	<div class="flex gap-1">
		<button
			on:click|preventDefault={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
			class:active={editor.isActive('heading', { level: 1 })}
		>
			H1
		</button>
		<button
			on:click|preventDefault={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
			class:active={editor.isActive('heading', { level: 2 })}
		>
			H2
		</button>
		<button
			on:click|preventDefault={() => editor.chain().focus().setParagraph().run()}
			class:active={editor.isActive('paragraph')}
		>
			P
		</button>
	</div>
{/if}

<div class="editor" bind:this={element} />

<style>
	.editor {
		--at-apply: my-1 dfBorder rounded p-2;
	}

	button {
		--at-apply: dfBgSecond dfTx rounded py-1 px-3;
	}

	button.active {
		--at-apply: dfBg;
	}
</style>
