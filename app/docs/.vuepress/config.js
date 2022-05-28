const { defaultTheme } = require('@vuepress/theme-default')

module.exports = {
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/intro/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // string - page file path
      '/bar/README.md',
    ],
    // sidebar array: All pages will use the same sidebar
    // sidebar: [
    //   // SidebarItem
    //   {
    //     text: 'Overview',
    //     link: '/foo/',
    //     // collapsible: true,
    //     children: [
    //       // SidebarItem
    //       {
    //         text: 'Project',
    //         link: 'https://github.com',
    //         children: [],
    //       },
    //       {
    //         text: 'github2',
    //         link: 'https://github.com',
    //         children: [],
    //       },
    //       {
    //         text: 'github3',
    //         link: 'https://github.com',
    //         children: [],
    //       },
    //       // string - page file path
    //       '/foo/bar.md',
    //     ],
    //   },
    //   // string - page file path
    //   // '/bar/README.md',
    // ],

    // collapsible sidebar
    // sidebar: {
    //   '/world/': [
    //     {
    //       text: 'VuePress Reference',
    //       // collapsible: true,
    //       children: ['/world/MakerDAO.md', '/world/VR.md'],
    //     },
    //     // {
    //     //   text: 'Bundlers Reference',
    //     //   collapsible: true,
    //     //   children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
    //     // },
    //   ],
    // },

  }),
}