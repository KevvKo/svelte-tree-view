import TreeNode from '../src/components/TreeNode.svelte';
import { render } from '@testing-library/svelte';


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
    })
});