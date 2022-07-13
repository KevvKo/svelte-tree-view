<script>
    import TreeBranch from "./TreeBranch.svelte";
    export let data, onClick, checkbox = true;
    export let collapse = false;
</script>

{#if data}
    <ul>
        <TreeBranch 
            data={data} 
            collapse={collapse} 
            onClick={onClick} 
            checkbox={checkbox}
        ></TreeBranch>
    </ul>    
{:else}
    <p>An error occured during rendering!</p>
{/if}


<style></style>