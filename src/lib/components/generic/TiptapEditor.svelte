<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';

	import { contentTipTap } from '$lib/utils/dataStore';

	let element: HTMLElement;
	let editor: any;

	export let contentState: string;
	export let contentsFull: string | null = '';

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [StarterKit],
			content: contentState === 'new' ? '<p>Hello, PathfinderKit!</p>' : contentsFull,
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

<div class="editor">
	{#if editor}
		<div class="flex gap-1 py-5 px-3 dfBgSecond rounded">
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
				on:click|preventDefault={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				class:active={editor.isActive('heading', { level: 3 })}
			>
				H3
			</button>
			<button
				on:click|preventDefault={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
				class:active={editor.isActive('heading', { level: 4 })}
			>
				H4
			</button>
			<button
				on:click|preventDefault={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
				class:active={editor.isActive('heading', { level: 5 })}
			>
				H5
			</button>
			<button
				on:click|preventDefault={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
				class:active={editor.isActive('heading', { level: 6 })}
			>
				H6
			</button>
			<button
				on:click|preventDefault={() => editor.chain().focus().setParagraph().run()}
				class:active={editor.isActive('paragraph')}
			>
				P
			</button>
			<button
				on:click|preventDefault={() => editor.chain().focus().toggleBold().run()}
				class:active={editor.isActive('bold')}
			>
				<span class="font-semibold"> Bold </span>
			</button>
			<button
				on:click|preventDefault={() => editor.chain().focus().toggleItalic().run()}
				class:active={editor.isActive('italic')}
			>
				<span class="italic"> Italic </span>
			</button>
		</div>
	{/if}

	<div bind:this={element} class="p-3" />
</div>

<style>
	.editor {
		--at-apply: my-1 dfBorder rounded;
	}

	button {
		--at-apply: dfBgThird dfBorder dfTx rounded py-1 px-3;
	}

	button.active {
		--at-apply: dfBg;
	}
</style>
