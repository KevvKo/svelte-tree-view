<script>
	import SvelteTree from './components/SvelteTree.svelte'
    import {mockData} from './mock.js';
</script>

<main>
    <SvelteTree data={mockData}></SvelteTree>
</main>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  </style>