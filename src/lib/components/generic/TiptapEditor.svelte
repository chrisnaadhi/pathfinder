<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { Editor } from '@tiptap/core';
	import StarterKit from '@tiptap/starter-kit';
	import Youtube from '@tiptap/extension-youtube';
	import Link from '@tiptap/extension-link';
	import Image from '@tiptap/extension-image';

	import { contentTipTap } from '$lib/utils/dataStore';

	let element: HTMLElement;
	let editorHeader: HTMLElement;
	let editor: any;
	let videoHeight: '480';

	export let contentState: string;
	export let contentsFull: string | null = '';

	const addYoutubeVideo = () => {
		const url = prompt('Masukkan Link Youtube:');

		editor.commands.setYoutubeVideo({
			src: url,
			width: '100%',
			height: Math.max(180, parseInt(videoHeight, 10)) || 480
		});
	};

	const addLink = () => {
		const previousUrl = editor.getAttributes('link').href;
		const url = prompt('URL', previousUrl);

		if (url === null) {
			return;
		}

		if (url === '') {
			editor.chain().focus().extendMarkRange('link').unsetLink().run();
			return;
		}

		editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
	};

	const addImage = () => {
		const urlImage = prompt('Masukkan Link Gambar: ');

		if (urlImage) {
			editor.chain().focus().setImage({ src: urlImage }).run();
		}
	};

	onMount(() => {
		editor = new Editor({
			element: element,
			extensions: [
				StarterKit,
				Youtube.configure({
					enableIFrameApi: true,
					nocookie: true
				}),
				Link.configure({
					openOnClick: false,
					linkOnPaste: true
				}),
				Image
			],
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
			<button
				on:click|preventDefault={() => editor.chain().focus().toggleStrike().run()}
				class:active={editor.isActive('strike')}
			>
				<span class="line-through"> Strike </span>
			</button>
			<button
				on:click|preventDefault={() => editor.chain().focus().toggleCodeBlock().run()}
				class:active={editor.isActive('codeBlock')}
			>
				&LeftAngleBracket;<span class="text-xs">code</span>&RightAngleBracket;
			</button>
			<button
				on:click|preventDefault={() => editor.chain().focus().toggleBulletList().run()}
				class:active={editor.isActive('bulletList')}
			>
				<div class="i-mdi-format-list-bulleted w-6 h-6" />
			</button>
			<button
				on:click|preventDefault={() => editor.chain().focus().toggleOrderedList().run()}
				class:active={editor.isActive('orderedList')}
			>
				<div class="i-mdi-format-list-numbered w-6 h-6" />
			</button>
			<button on:click|preventDefault={addYoutubeVideo}>
				<div class="i-mdi-youtube w-6 h-6" />
			</button>
			<button on:click|preventDefault={addLink}>
				<div class="i-mdi-link-plus w-6 h-6" />
			</button>
			<button on:click|preventDefault={addImage}>
				<div class="i-mdi-file-image-plus w-6 h-6" />
			</button>
		</div>
	{/if}

	<div bind:this={element} class="p-3" />
</div>

<style>
	.editor {
		--at-apply: relative my-1 dfBorder rounded w-full;
	}

	button {
		--at-apply: dfBgThird dfBorder dfTx rounded py-1 px-3;
	}

	button.active {
		--at-apply: dfBg;
	}
</style>
