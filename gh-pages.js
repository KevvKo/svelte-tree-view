var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/KevvKo/svelte-tree-view',
        user: {
            name: 'Kevin Klein',
            email: 'kklein915@gmail.com'
        }
    },
    () => {
        console.log('Deployment sucessful');
    }
)