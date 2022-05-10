<script>
	import SvelteTree from './components/SvelteTree.svelte'
    import {mockData} from './mock.js';
</script>

<nav class="mt-5 mx-5 flex bg-teal-700 rounded-t-lg py-4 px-5 text-slate-100">
    <h1 class="self-center text-lg font-medium" >Svelte-Tree-View</h1>
    <a href="https://svelte.dev" class="self-center ml-auto cursor-pointer">
        <img alt="Svelte" src="img/svelte-logo.png" class="h-8"/>
    </a> 
    <a href="https://github.com/KevvKo/svelte-tree-view" class="self-center cursor-pointer ml-10">
        <img alt="Github" src="img/GitHub-Mark-Light-32px.png" />
    </a> 
</nav>
<main class="mt-5 mx-5 px-5">
    <SvelteTree data={mockData}></SvelteTree>
</main>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  </style>