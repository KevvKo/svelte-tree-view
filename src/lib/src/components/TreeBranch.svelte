<script>
    import TreeNode from './TreeNode.svelte';
    export let data, collapse, onClick;
</script>

{#if data}
    {#each data as item}
        <TreeNode node={item} collapse={collapse} onClick={onClick}></TreeNode>
    {/each}
{:else}
    <p>An error occured during rendering!</p>
{/if}

<style></style>