<script>
    import TreeBranch from "./TreeBranch.svelte";
    export let 
        checkbox = true, 
        collapse = false,
        connectedWithChildren = false,
        connectedWithParent = true, 
        data = [], 
        onClick = '', 
        selectAll = false;
</script>

{#if data && data.length > 0}
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