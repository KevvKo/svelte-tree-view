<script>
    import TreeBranch from "./TreeBranch.svelte";
    export let data;
    export let collapse = false;
</script>

{#if data}
    <ul>
        <TreeBranch data={data} collapse={collapse}></TreeBranch>
    </ul>    
{:else}
    <p>An error occured during rendering!</p>
{/if}


<style></style>