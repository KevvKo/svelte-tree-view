<script>
    export let node;
    export let indent = 0;

    let open = true;

    function toggleOpen(){
        open = !open;
    };

    function handleClick(){
        toggleOpen();
    }

</script>

<li style="margin-left: {indent}px">
    <input type='checkbox'/>
    <span>{node.name}</span>

    {#if open}
        <ul>
            {#each node.children as child}
                <svelte:self node={child} indent={indent + 20} />
            {/each} 
        </ul>
    {/if}
</li>


<style>


</style>