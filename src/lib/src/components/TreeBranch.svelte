<script>
    import TreeNode from './TreeNode.svelte';
    export let data, collapse;
</script>

{#if data}
    {#each data as item}
        <TreeNode node={item} collapse={collapse}></TreeNode>
    {/each}
{:else}
    <p>An error occured during rendering!</p>
{/if}

<style></style>