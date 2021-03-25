export const MENU_ITEMS = [
    {
        title: 'Dashboard',
        icon: 'shopping-cart-outline',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'FEATURES',
        group: true,
    },
    {
        title: 'Companies',
        icon: 'layout-outline',
        children: [
            {
                title: 'Companies List',
                link: '/pages/layout/infinite-list',
            },
            {
                title: 'Recommended Companies',
                link: '/pages/layout/infinite-list',
            },
        ],
    },
    {
        title: 'Profile',
        icon: 'edit-2-outline',
        link: '/pages/profile',
    },
    {
        title: 'Feedback',
        icon: 'edit-2-outline',
        link: '/pages/forms/layouts',
    },
    {
        title: 'Miscellaneous',
        icon: 'shuffle-2-outline',
        children: [
            {
                title: '404',
                link: '/pages/miscellaneous/404',
            },
        ],
    },
];
//# sourceMappingURL=pages-menu.js.map