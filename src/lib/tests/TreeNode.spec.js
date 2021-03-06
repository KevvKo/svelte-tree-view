import TreeNode from '../src/components/TreeNode.svelte';
import { render, fireEvent } from '@testing-library/svelte';


describe('TreeNode Component', () => {

    const mockData = {
        id: 0,
        name: "Kevin Klein",
        checked: false,
        children: [
            {
                id: 1,
                name: "Janine Floh",
                checked: false,
                children: []
            },
            {
                id: 2,
                name: "Benjamin Rotherdamm",
                checked: false,
                children: []
            },
            {
                id: 3,
                name: "Anna Rasch",
                checked: false,
                children: [
                    {
                        id: 4,
                        name: "Marius Westerboy",
                        checked: false,
                        children: []
                    },
                ]
            },
        ]
    };

    it('should render', () => {
        render(TreeNode);
    });
    it('should render the node', () => {
        const results = render(TreeNode, {props: { node: mockData}});
        expect(results.getByText('Kevin Klein')).toBeTruthy();
    });
    it('should render the node with all children', () => {
        const results = render(TreeNode, {props: { node: mockData, collapse: true}});
        expect(results.getByText('Kevin Klein')).toBeTruthy();
        expect(results.getByText('Janine Floh')).toBeTruthy();
        expect(results.getByText('Benjamin Rotherdamm')).toBeTruthy();
        expect(results.getByText('Anna Rasch')).toBeTruthy();
        expect(results.getByText('Marius Westerboy')).toBeTruthy();
    });
    it('should render the checkbox', () => {
        const results = render(TreeNode, {props: { node: mockData}});
        expect(results.getByTestId('node-checkbox')).toBeTruthy();
    });
    it('should not render the checkbox', () => {
        const results = render(TreeNode, {props: { node: mockData, checkbox: false}});
        expect(results.queryByTestId('node-checkbox')).toBeNull()
    });
    it('should render all checkboxes', () => {
        const results = render(TreeNode, {props: { node: mockData, collapse: true}});
        expect(results.getAllByTestId('node-checkbox')).toHaveLength(5);
    });
    it('should select all nodes', () => {
        const results = render(TreeNode, {props: { node: mockData, collapse: true, selectAll: true}});
        expect(results.getAllByTestId('node-checkbox')).toHaveLength(5);

        results.getAllByTestId('node-checkbox').forEach(node => {
            expect(node.checked).toEqual(true);
        });
    });
    it('should open the child nodes', async () => {
        const results = render(TreeNode, {props: { node: mockData}});
        const onClick = jest.fn();
        results.component.$on('click', onClick);
        const button = results.container.querySelector('svg');
        expect(button).not.toBeNull();
        await fireEvent.click(button)
        expect(results.queryByTestId('caret-down-node')).toBeTruthy();
        expect(results.getAllByTestId('node-checkbox')).toHaveLength(4);
    });
    it('should select all children if parent is checked', async () => {
        const results = render(TreeNode, {props: { node: mockData, collapse: true, connectedWithChildren: true}});
        const checkbox = results.queryAllByTestId('node-checkbox')[0];
        expect(checkbox).not.toBeNull();
        await fireEvent.input(checkbox)
        results.getAllByTestId('node-checkbox').forEach(node => {
            expect(node.checked).toEqual(true);
        });
    });
    it('should deselect all children if parent is unchecked', async () => {
        const results = render(TreeNode, {props: { node: mockData, collapse: true, selectAll: true, connectedWithChildren: true}});
        const checkboxes = results.queryAllByTestId('node-checkbox');
        expect(checkboxes).not.toBeNull();
        checkboxes.forEach(node => {
            expect(node.checked).toEqual(true);
        });
        await fireEvent.click(checkboxes[0])
        results.getAllByTestId('node-checkbox').forEach(node => {
            expect(node.checked).toEqual(false);
        });
    })
    it('should select all parents if node is checked', async () => {
        const results = render(TreeNode, {props: { node: mockData, collapse: true, connectedWithParent: true}});
        const checkbox = results.queryAllByTestId('node-checkbox')[4];
        expect(checkbox).not.toBeNull();
        await fireEvent.click(checkbox)
        expect(results.getAllByTestId('node-checkbox')[0].checked).toEqual(true)
    });
    it('should deselect all parents if node is unchecked', async () => {
        const results = render(TreeNode, {props: { node: mockData, collapse: true, selectAll: true, connectedWithParent: true}});
        const checkbox = results.queryAllByTestId('node-checkbox')[4];
        expect(checkbox).not.toBeNull();
        expect(results.getAllByTestId('node-checkbox')[0].checked).toEqual(true)
        await fireEvent.click(checkbox)
        expect(results.getAllByTestId('node-checkbox')[0].checked).toEqual(false)
    });
    it('should invoke the given callback on click', async () => {
        const onClick = jest.fn()
        const results = render(TreeNode, {props: { node: mockData, onClick: onClick}});
        const button = results.queryByTestId('node-checkbox');
        expect(button).not.toBeNull();
        results.component.$on('click', onClick);
        fireEvent.click(button);
    
        expect(onClick).toHaveBeenCalled();
    });
});