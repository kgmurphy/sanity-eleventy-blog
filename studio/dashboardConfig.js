export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc016b999a34e2c1e6928b7',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-5eiszszb',
                  apiId: '011ed1dd-3c63-4107-8897-20595ee6125b'
                },
                {
                  buildHookId: '5fc016b9c2e60818274d31a6',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-c861zdyn',
                  apiId: '78735cb4-8d75-47c7-92ea-9391973cf0e9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kgmurphy/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-c861zdyn.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
