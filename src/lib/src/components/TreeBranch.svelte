<script>
    import TreeNode from './TreeNode.svelte';

    export let 
        data, 
        collapse, 
        onClick, 
        checkbox, 
        selectAll,
        connectedWithParent, 
        connectedWithChildren;
</script>

{#if data}
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