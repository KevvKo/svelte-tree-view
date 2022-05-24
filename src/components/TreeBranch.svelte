<script>
    import TreeNode from './TreeNode.svelte';
    export let data, collapse;

</script>

{#each data as item}
    <TreeNode node={item} collapse={collapse}></TreeNode>
{/each}

<style></style>