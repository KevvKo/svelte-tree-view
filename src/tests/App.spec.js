import App from '../App.svelte';
import { render } from '@testing-library/svelte';


describe('App Component', () => {

    it('should render', () => {

        render(App);
    });
});