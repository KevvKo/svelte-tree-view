<script>
    import TreeBranch from "./TreeBranch.svelte";
    import TreeNode from './TreeNode.svelte';
    export let data;

</script>

<ul>
    {#each data as item}
        <TreeNode node={item}></TreeNode>
    {/each}
</ul>

<style></style>