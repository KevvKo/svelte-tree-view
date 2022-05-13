<script>
    export let node;

    let open = true;

    function toggleOpen(){
        open = !open;
    };

</script>

<li>
    <input type='checkbox' />
    <span>{node.name}</span>

    {#if open}
        <ul>
            {#each node.children as child}
                <svelte:self node={child} />
            {/each} 
        </ul>
    {/if}
</li>


<style></style>