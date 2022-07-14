<script>
    import TreeBranch from "./TreeBranch.svelte";
    export let 
        checkbox = true, 
        collapse = false,
        data, 
        onClick, 
        selectAll = false, 
        connectedWithParent = true, 
        connectedWithChildren = false;
</script>

{#if data}
    <ul>
        <TreeBranch 
            data={data} 
            collapse={collapse} 
            onClick={onClick} 
            checkbox={checkbox}
            selectAll={selectAll}
            connectedWithParent={connectedWithParent} 
            connectedWithChildren={connectedWithChildren}
        ></TreeBranch>
    </ul>    
{:else}
    <p>An error occured during rendering!</p>
{/if}


<style></style>