import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import ProfileEnergyOrganization from "@/views/dashboard/profile/ProfileEnergyOrganization.vue";
import MainPage from "@/pages/MainPage.vue";

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/dashboard/analytics1',
                    name: 'analytics1',
                    component: () => import('@/views/dashboard/analytics/Analytics1.vue')
                },
                {
                    path: '/dashboard/analytics2',
                    name: 'analytics2',
                    component: () => import('@/views/dashboard/analytics/Analytics2.vue')
                },
                {
                    path: '/dashboard/analytics3',
                    name: 'analytics3',
                    component: () => import('@/views/dashboard/analytics/Analytics3.vue')
                },

                {
                    path: '/dashboard/profile',
                    // name: 'profile',
                    component: ProfileEnergyOrganization,
                    children: [
                        {
                            path: '/dashboard/profile',
                            name: 'profile',
                            component: () => import('@/views/dashboard/profile/Profile.vue'),
                        },
                        {
                            path: '/dashboard/profile/digitalPassport',
                            // name: 'digitalPassport',
                            component: () => import('@/views/dashboard/profile/DigitalPassport.vue'),
                            children: [
                                {
                                    path: '/dashboard/profile/digitalPassport',
                                    name: 'mainInfo',
                                    component: () => import('@/components/dashboard/profile/digitalPassport/MainInfo.vue'),
                                },
                                {
                                    path: '/dashboard/profile/digitalPassport/tep',
                                    name: 'tep',
                                    component: () => import('@/components/dashboard/profile/digitalPassport/Tep.vue'),
                                    children: [
                                        {
                                            path: '/dashboard/profile/digitalPassport/tep',
                                            component: () => import('@/views/dashboard/profile/digitalPassport/All.vue')
                                        },
                                        {
                                            path: '/dashboard/profile/digitalPassport/tep/positive',
                                            component: () => import('@/views/dashboard/profile/digitalPassport/Positive.vue')
                                        },
                                        {
                                            path: '/dashboard/profile/digitalPassport/tep/negative',
                                            component: () => import('@/views/dashboard/profile/digitalPassport/Negative.vue')
                                        },
                                    ]
                                },
                            ]
                        },
                        {
                            path: '/violations'
                        },
                        {
                            path: '/messages'
                        },
                        {
                            path: '/settings'
                        },

                    ]
                },


                {
                    path: '/uikit/formlayout',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    component: () => import('@/views/uikit/Input.vue')
                },
                {
                    path: '/uikit/floatlabel',
                    name: 'floatlabel',
                    component: () => import('@/views/uikit/FloatLabel.vue')
                },
                {
                    path: '/uikit/invalidstate',
                    name: 'invalidstate',
                    component: () => import('@/views/uikit/InvalidState.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/views/uikit/Button.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/views/uikit/Table.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/views/uikit/List.vue')
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    component: () => import('@/views/uikit/Tree.vue')
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    component: () => import('@/views/uikit/Panels.vue')
                },
                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    component: () => import('@/views/uikit/Overlay.vue')
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/views/uikit/Media.vue')
                },
                {
                    path: '/uikit/menu',
                    component: () => import('@/views/uikit/Menu.vue'),
                    children: [
                        {
                            path: '/uikit/menu',
                            component: () => import('@/views/uikit/menu/PersonalDemo.vue')
                        },
                        {
                            path: '/uikit/menu/seat',
                            component: () => import('@/views/uikit/menu/SeatDemo.vue')
                        },
                        {
                            path: '/uikit/menu/payment',
                            component: () => import('@/views/uikit/menu/PaymentDemo.vue')
                        },
                        {
                            path: '/uikit/menu/confirmation',
                            component: () => import('@/views/uikit/menu/ConfirmationDemo.vue')
                        }
                    ]
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/views/uikit/Messages.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/views/uikit/File.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/views/uikit/Chart.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/views/uikit/Misc.vue')
                },
                {
                    path: '/blocks',
                    name: 'blocks',
                    component: () => import('@/views/utilities/Blocks.vue')
                },
                {
                    path: '/utilities/icons',
                    name: 'icons',
                    component: () => import('@/views/utilities/Icons.vue')
                },
                {
                    path: '/pages/timeline',
                    name: 'timeline',
                    component: () => import('@/views/pages/Timeline.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/views/utilities/Documentation.vue')
                }
            ]
        },
        {
            path: '/mainpage',
            name: MainPage,
            component: () => import('@/pages/MainPage.vue')
        },
        {
            path: '/auth/register',
            name: 'register',
            component: () => import('@/views/pages/auth/Register.vue')
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        }
    ]
});

export default router;
