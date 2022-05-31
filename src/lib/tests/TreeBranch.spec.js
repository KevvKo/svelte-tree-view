import TreeBranch from '../src/components/TreeBranch.svelte';
import { render } from '@testing-library/svelte';


describe('TreeBranch Component', () => {

    it('should render', () => {

        render(TreeBranch);
    });
});