<script>
    import TreeNode from './TreeNode.svelte';

    export let 
        data = [], 
        collapse = false, 
        onClick = '', 
        checkbox = true, 
        selectAll = false,
        connectedWithParent = false, 
        connectedWithChildren = false;
</script>

{#if data && data.length > 0}
    {#each data as item}
        <TreeNode 
            bind:node={item} 
            collapse={collapse} 
            onClick={onClick} 
            checkbox={checkbox}
            selectAll={selectAll}
            connectedWithParent={connectedWithParent} 
            connectedWithChildren={connectedWithChildren}
        ></TreeNode>
    {/each}
{:else}
    <p>An error occured during rendering!</p>
{/if}

<style></style>