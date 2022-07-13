<script>
    import TreeBranch from "./TreeBranch.svelte";
    export let data, onClick, checkbox = true, selectAll = false;
    export let collapse = false;
</script>

{#if data}
    <ul>
        <TreeBranch 
            data={data} 
            collapse={collapse} 
            onClick={onClick} 
            checkbox={checkbox}
            selectAll={selectAll}
        ></TreeBranch>
    </ul>    
{:else}
    <p>An error occured during rendering!</p>
{/if}


<style></style>