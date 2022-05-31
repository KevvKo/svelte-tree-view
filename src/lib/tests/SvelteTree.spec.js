import SvelteTree from '../src/components/SvelteTree.svelte';
import { render } from '@testing-library/svelte';


describe('SvelteTree Component', () => {

    it('should render', () => {

        render(SvelteTree);
    });
}); 