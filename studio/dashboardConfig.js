export default {
  widgets: [
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
                  buildHookId: '5f9749aace653a23fbb32a8e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-2wsh7r5y',
                  apiId: 'd24a00d3-c26a-4b5b-b082-5527b195e6d2'
                },
                {
                  buildHookId: '5f9749aa7356052e9838f8ae',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jekevfnu',
                  apiId: '705335fb-681b-4ab0-9ccf-9a58e03de788'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/willTastyMakers/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jekevfnu.netlify.app', category: 'apps'}
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
