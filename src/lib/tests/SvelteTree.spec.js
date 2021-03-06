import SvelteTree from '../src/components/SvelteTree.svelte';
import { render } from '@testing-library/svelte';


describe('SvelteTree Component', () => {

    const mockData1 = [
        {
            id: 0,
            name: "Kevin Klein",
            checked: false,
            children: []
        },
    ]

    const mockData2 = [
        {
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
        },
    ]

    it('should render', () => {
        render(SvelteTree);
    });

    it('should render the error message if there are no data passed', () => {
        const results = render(SvelteTree);
        expect(results.getByText('An error occured during rendering!')).toBeTruthy();
    });

    it('should render the error message if there are no data passed', () => {
        const results = render(SvelteTree, { props: { data: mockData1 }});
        expect(results.queryByText('An error occured during rendering!')).toBeNull();
    });

    it('should render the given data as tree', () => {
        const results = render(SvelteTree, {props: { data: mockData1 }} );
        expect(results.getByText('Kevin Klein')).toBeTruthy();
    });

    it('should render a complete collapsed tree if prop "collapse" = true', () => {
        const results = render(SvelteTree, {props: { data: mockData2, collapse: true }} );
        expect(results.getByText('Kevin Klein')).toBeTruthy();
        expect(results.getByText('Janine Floh')).toBeTruthy();
        expect(results.getByText('Benjamin Rotherdamm')).toBeTruthy();
        expect(results.getByText('Anna Rasch')).toBeTruthy();
        expect(results.getByText('Marius Westerboy')).toBeTruthy();
    });
}); 