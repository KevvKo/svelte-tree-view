<script>
	import SvelteTree from './components/SvelteTree.svelte'
    import {mockData} from './mock.js';
</script>

<nav class="flex shadow px-10 py-5">
    <h1 class="self-center text-lg font-extrabold text-slate-600" >Svelte-Tree-View</h1>
    <a href="https://svelte.dev" class="self-center ml-auto cursor-pointer">
        <img alt="Svelte" src="img/svelte-logo.png" class="h-8"/>
    </a> 
    <a href="https://github.com/KevvKo/svelte-tree-view" class="self-center cursor-pointer ml-10">
        <img alt="Github" src="img/GitHub-Mark-32px.png" />
    </a> 
</nav>
<main class="mt-5 mx-5 px-5">
    <h2 class="text-lg font-semibold text-slate-600 mb-5">Basic Usage</h2>
    <section class="flex ml-5 mb-20">
        <div class="w-1/2">
            <SvelteTree data={mockData}></SvelteTree>
        </div>
        <div class="w-1/2">
            <code class="bg-slate-700 text-slate-300 w-full h-full block p-5">
                &lt;Svelte-Tree-View data=&#123;mockData&#125;&gt;&lt;/Svelte-Tree-View&gt;
            </code>
        </div>
    </section>
    <h2 class="text-lg font-semibold text-slate-600 mb-5">API</h2>
    <section>
        <table class="w-full ml-5">
            <thead>
                <tr>
                    <th class="w-1/2 text-left">Parameter</th>
                    <th class="w-1/2 text-left">Description</th>
                </tr>
            </thead>
            <tbody class="divide-y divide-solid">
                <tr>
                    <td>data</td>
                    <td>Object of child and parents to render as a tree</td>
                </tr>
            </tbody>
        </table>
    </section>
</main>

<style global lang="postcss">
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>