<script lang="ts" setup>
import { Editor, rootCtx } from '@milkdown/core';
import { nord } from '@milkdown/theme-nord';
import { VueEditor, useEditor } from '@milkdown/vue';
import { commonmark } from '@milkdown/preset-commonmark';

const editor = useEditor((root) => Editor.make()
    .config((ctx) => {
        ctx.set(rootCtx, root);
    })
    .use(nord)
    .use(commonmark));

</script>

<template>
    <VueEditor :editor="editor" />
</template>
