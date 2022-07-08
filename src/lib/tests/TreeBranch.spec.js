import TreeBranch from '../src/components/TreeBranch.svelte';
import { render } from '@testing-library/svelte';


describe('TreeBranch Component', () => {

    const mockData = [
        {
            id: 0,
            name: "Kevin Klein",
            children: []
        },
    ]

    it('should render', () => {
        render(TreeBranch);
    });

    it('should render the error message if there are no data passed', () => {
        const results = render(TreeBranch);
        expect(results.getByText('An error occured during rendering!')).toBeTruthy();
    });

    it('should not render the error message if there are  data passed', () => {
        const results = render(TreeBranch, { props: { data: mockData }});
        expect(results.queryByText('An error occured during rendering!')).toBeNull();
    });
});