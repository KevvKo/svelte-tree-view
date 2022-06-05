import SvelteTree from '../src/components/SvelteTree.svelte';
import { render } from '@testing-library/svelte';


describe('SvelteTree Component', () => {

    const mockData = [
        {
            id: 0,
            name: "Kevin Klein",
            children: []
        },
    ]

    it('should render', () => {

        render(SvelteTree);
    });

    it('should render the given data as tree', () => {
        const results = render(SvelteTree, {props: { data: mockData }} );
        expect(results.getByText('Kevin Klein')).toBeTruthy();
    });
}); 