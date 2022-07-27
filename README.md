

---

# Svelte-Tree-View


## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:8080](http://localhost:8080). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.


## Basic usage

```javascript
<SvelteTree data={mockData} />

```

For a more detail usage, checkout the [Docs](https://kevvko.github.io/svelte-tree-view/).
## Data format

```
[
 {
	id: '0',
       name: `Kevin Klein`,
       checked: false,
       children: [],
 },
 {
	id: '1',
       name: `Marie Loth`,
       checked: false,
       children: [
              {
                     id: '1',
                     name: `Lisa Rot`,
                     checked: true,
                     children: [],
              }
       ],
 },
]
```