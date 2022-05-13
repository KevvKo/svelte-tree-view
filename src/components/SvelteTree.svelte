<script>
    import TreeBranch from "./TreeBranch.svelte";
    import TreeNode from './TreeNode.svelte';
    export let data;

</script>

<ul>
    <TreeBranch data={data}></TreeBranch>
</ul>

<style></style>