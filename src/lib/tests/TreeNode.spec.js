import TreeNode from '../src/components/TreeNode.svelte';
import { render } from '@testing-library/svelte';


describe('TreeNode Component', () => {

    it('should render', () => {
        render(TreeNode);
    });
});