export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e9d7f342fb648018b20cf88',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-dqjvi5i4',
                  apiId: 'ab73c5a4-4a70-435d-aef1-a374e0b00a8b'
                },
                {
                  buildHookId: '5e9d7f3478737b020a6bd842',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wgmcwvu6',
                  apiId: '2c43f843-e60e-438b-a63b-8ea8f9bcfe79'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/foryouinlove/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wgmcwvu6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
