<script>
    import TreeBranch from "./TreeBranch.svelte";
    export let data, onClick;
    export let collapse = false;
</script>

{#if data}
    <ul>
        <TreeBranch data={data} collapse={collapse} onClick={onClick}></TreeBranch>
    </ul>    
{:else}
    <p>An error occured during rendering!</p>
{/if}


<style></style>