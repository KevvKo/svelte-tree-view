<script>
    import TreeNode from './TreeNode.svelte';
    export let data;
    
</script>

{#each data as item}
    <TreeNode node={item}></TreeNode>
{/each}

<style></style>