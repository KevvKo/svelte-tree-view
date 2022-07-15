<script>
  import SvelteTree from "./lib/src/components/SvelteTree.svelte";
  import { mockData } from "./mock.js";

  export let selectedNodes = [];

  function handleClick(node) {
    if (node.checked) {
      selectedNodes.push(node.name);
      selectedNodes = selectedNodes;
    } else {
      const index = selectedNodes.indexOf(node.name);
      selectedNodes.splice(index, 1);
      selectedNodes = selectedNodes;
    }
  }
</script>

<nav class="flex shadow px-10 py-5">
  <h1 class="self-center text-lg font-extrabold text-slate-600">
    Svelte-Tree-View
  </h1>
  <a href="https://svelte.dev" class="self-center ml-auto cursor-pointer">
    <img alt="Svelte" src="img/svelte-logo.png" class="h-8" />
  </a>
  <a
    href="https://github.com/KevvKo/svelte-tree-view"
    class="self-center cursor-pointer ml-10"
  >
    <img alt="Github" src="img/GitHub-Mark-32px.png" />
  </a>
</nav>
<main class="mt-5 mx-5 px-5">
  <section class="flex mx-5 mb-20">
    <div class="w-1/2">
      <h2 class="text-lg font-semibold text-slate-600 mb-5">Basic Usage</h2>
      <SvelteTree data={mockData} />
    </div>
    <div class="w-1/2">
      <code class="bg-slate-700 text-slate-300 w-full h-80 block p-5 rounded">
        &lt;Svelte-Tree-View
        data=&#123;mockData&#125;&gt;&lt;/Svelte-Tree-View&gt;
      </code>
    </div>
  </section>
  <section class="flex mx-5 mb-20">
    <div class="w-1/2">
      <h2 class="text-lg font-semibold text-slate-600 mb-5">
        Tree view with collapsed nodes
      </h2>
      <SvelteTree data={mockData} collapse={true} />
    </div>
    <div class="w-1/2">
      <code class="bg-slate-700 text-slate-300 w-full h-80 block p-5 rounded">
        &lt;Svelte-Tree-View data=&#123;mockData&#125;
        collapse=&#123;true&#125;&gt;&lt;/Svelte-Tree-View&gt;
      </code>
    </div>
  </section>
  <section class="flex mx-5 mb-20">
    <div class="w-1/3">
      <h2 class="text-lg font-semibold text-slate-600 mb-5">
        Tree with an onClick event
      </h2>
      <SvelteTree data={mockData} collapse={true} onClick={handleClick} />
    </div>
    <div class="w-1/3">
      <h2 class="font-bold">Output:</h2>
      <ul>
        {#each selectedNodes as item}
          <li>{item}</li>
        {/each}
      </ul>
    </div>
    <div class="w-1/3">
      <code class="bg-slate-700 text-slate-300 w-full h-80 block p-5 rounded">
        &lt;Svelte-Tree-View data=&#123;mockData&#125;
        collapse=&#123;true&#125;&gt;&lt;/Svelte-Tree-View&gt;
      </code>
    </div>
  </section>
  <section class="flex mx-5 mb-20">
    <div class="w-1/2">
      <h2 class="text-lg font-semibold text-slate-600 mb-5">
        Tree with deactivated checkboxes
      </h2>
      <SvelteTree data={mockData} collapse={true} checkbox={false} />
    </div>
    <div class="w-1/2">
      <code class="bg-slate-700 text-slate-300 w-full h-80 block p-5 rounded">
        &lt;Svelte-Tree-View data=&#123;mockData&#125;
        collapse=&#123;true&#125;&gt;&lt;/Svelte-Tree-View&gt;
      </code>
    </div>
  </section>
  <h2 class="text-lg font-semibold text-slate-600 mx-5 mb-5">API</h2>
  <section class="mx-5">
    <table class="w-full table-auto">
      <thead class="bg-gray-200">
        <tr>
          <th class="p-4 w-1/4 text-left">Parameter</th>
          <th class="p-4 w-1/4 text-left">Type</th>
          <th class="p-4 w-1/4 text-left">Default</th>
          <th class="p-4 w-1/4 text-left">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="border-b-2 border-slate-200 hover:bg-gray-100 duration-200 transition-all"
        >
          <td class="p-4"><b>checkbox</b></td>         
          <td class="p-4">Boolean</td>
          <td class="p-4">true</td>
          <td class="p-4">Activate or deactivate the checkboxes for the tree</td
          >
        </tr>
        <tr
          class="border-b-2 border-slate-200 hover:bg-gray-100 duration-200 transition-all"
        >
          <td class="p-4"><b>collapse</b></td>
          <td class="p-4">Boolean</td>
          <td class="p-4">false</td>
          <td class="p-4">Expanding the tree or not</td>
        </tr>
        <tr
          class="border-b-2 border-slate-200 hover:bg-gray-100 duration-200 transition-all"
        >
          <td class="p-4"><b>connectedWithChildren</b></td>
          <td class="p-4">Boolean</td>
          <td class="p-4">false</td>
          <td class="p-4"
            >Handle the selection for all children, if the node is selected or
            deselected</td
          >
        </tr>
        <tr
          class="border-b-2 border-slate-200 hover:bg-gray-100 duration-200 transition-all"
        >
          <td class="p-4"><b>connectedWithParent</b></td>
          <td class="p-4">Boolean</td>
          <td class="p-4">false</td>
          <td class="p-4"
            >Handle the selection of all parents, if the node is selected or
            deselected</td
          >
        </tr>
        <tr
          class="border-b-2 border-slate-200 hover:bg-gray-100 duration-200 transition-all"
        >
          <td class="p-4"><b>data</b></td>
          <td class="p-4">Object</td>
          <td class="p-4">&#123;&#125;</td>
          <td class="p-4">Object of child and parents to render as a tree</td>
        </tr>
        <tr
          class="border-b-2 border-slate-200 hover:bg-gray-100 duration-200 transition-all"
        >
          <td class="p-4"><b>onClick</b></td>
          <td class="p-4">Event</td>
          <td class="p-4"> undefined</td>
          <td class="p-4"
            >Event to return the node on click or do something else</td
          >
        </tr>
        <tr
          class="border-b-2 border-slate-200 hover:bg-gray-100 duration-200 transition-all"
        >
          <td class="p-4"><b>selectAll</b></td>
          <td class="p-4">Boolean</td>
          <td class="p-4">false</td>
          <td class="p-4">select all nodes and set the node as checked</td>
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
