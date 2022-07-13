<script>
    import { onMount } from "svelte";
    export let
        node, 
        collapse, 
        onClick, 
        checkbox,
        selectAll,
        connectedWithParent, 
        connectedWithChildren;

    let open = collapse;

    function toggleOpen(){
        open = !open;
    };

    /**
     * 
     * @param {Object} node
     */
    function traverseAndToggleChildren(node){

        if(node.children.length > 0){

                const children = node.children;

                for(let i = 0, l = children.length; i < l; i++){

                    const child = children[i];
                    child.checked = node.checked;

                    if(child.children.length > 0) {
                        traverseAndToggleChildren(child)  
                    }
                }
            }
    };

    function handleClickOpen(){
        toggleOpen();
    };

    function handleClickInput(){
        node.checked = !node.checked;

        if(connectedWithChildren){
           traverseAndToggleChildren(node);
        }

        if(onClick){
            onClick(node);
        }
    }

    onMount(() => {
        if(selectAll) {
            node.checked = true;
        }
    })
</script>

<li class="ml-5">
    <div class="flex {node.children.length === 0 ? 'ml-5' : ''}">
        {#if node.children.length > 0}
            {#if open}
                <svg on:click={handleClickOpen} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
            {:else}
                <svg on:click={handleClickOpen} xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            {/if}
        {/if}
        {#if checkbox}
            <input class="mr-3 ml-1" type='checkbox' on:click={handleClickInput} checked={node.checked}/>
        {/if}
        <span>{node?.name}</span>
    </div>

    {#if open}
        <ul class={node.children.length === 0 ? 'ml-2' : ''}>
            {#each node.children as child}
                <svelte:self 
                    node={child} 
                    collapse={collapse} 
                    onClick={onClick}
                    checkbox={checkbox}
                    selectAll={selectAll}    
                    connectedWithParent={connectedWithParent} 
                    connectedWithChildren={connectedWithChildren}
                />
            {/each} 
        </ul>
    {/if}
</li>


<style>


</style>