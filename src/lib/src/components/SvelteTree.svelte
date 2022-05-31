<script>
    import TreeBranch from "./TreeBranch.svelte";
    export let data;
    export let collapse = false;

</script>

<ul>
    <TreeBranch data={data} collapse={collapse}></TreeBranch>
</ul>

<style></style>