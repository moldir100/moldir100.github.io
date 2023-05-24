import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';
import ProfileEnergyOrganization from "@/pages/ProfileEnergyOrganization.vue";
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
                    component: () => import('@/pages/Dashboard.vue')
                },
                {
                    path: '/dashboard/analytics1',
                    name: 'analytics1',
                    component: () => import('@/pages/Analytics1.vue')
                },
                {
                    path: '/dashboard/analytics2',
                    name: 'analytics2',
                    component: () => import('@/pages/Analytics2.vue')
                },
                {
                    path: '/dashboard/analytics3',
                    name: 'analytics3',
                    component: () => import('@/pages/Analytics3.vue')
                },
                {
                    path: '/dashboard/profile',
                    // name: 'profile',
                    component: ProfileEnergyOrganization,
                    children: [
                        {
                            path: '/dashboard/profile',
                            name: 'dashboardProfile',
                            component: () => import('@/components/base/energyOrganization/Dashboard.vue'),
                        },
                        {
                            path: '/dashboard/profile/digitalPassport',
                            // name: 'digitalPassport',
                            component: () => import('@/components/base/energyOrganization/DigitalPassport.vue'),
                            children: [
                                {
                                    path: '/dashboard/profile/digitalPassport',
                                    name: 'mainInfo',
                                    component: () => import('@/components/base/energyOrganization/MainInfo.vue'),
                                },
                                {
                                    path: '/dashboard/profile/digitalPassport/tep',
                                    name: 'tep',
                                    component: () => import('@/components/base/energyOrganization/Tep.vue'),
                                    children: [
                                        {
                                            path: '/dashboard/profile/digitalPassport/tep',
                                            component: () => import('@/components/base/energyOrganization/tep/All.vue')
                                        },
                                        {
                                            path: '/dashboard/profile/digitalPassport/tep/positive',
                                            component: () => import('@/components/base/energyOrganization/tep/Positive.vue')
                                        },
                                        {
                                            path: '/dashboard/profile/digitalPassport/tep/negative',
                                            component: () => import('@/components/base/energyOrganization/tep/Negative.vue')
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
                    component: () => import('@/components/UI/FormLayout.vue')
                },
                {
                    path: '/uikit/input',
                    name: 'input',
                    component: () => import('@/components/UI/Input.vue')
                },
                {
                    path: '/uikit/floatlabel',
                    name: 'floatlabel',
                    component: () => import('@/components/UI/FloatLabel.vue')
                },
                {
                    path: '/uikit/invalidstate',
                    name: 'invalidstate',
                    component: () => import('@/components/UI/InvalidState.vue')
                },
                {
                    path: '/uikit/button',
                    name: 'button',
                    component: () => import('@/components/UI/Button.vue')
                },
                {
                    path: '/uikit/table',
                    name: 'table',
                    component: () => import('@/components/UI/Table.vue')
                },
                {
                    path: '/uikit/list',
                    name: 'list',
                    component: () => import('@/components/UI/List.vue')
                },
                {
                    path: '/uikit/tree',
                    name: 'tree',
                    component: () => import('@/components/UI/Tree.vue')
                },
                {
                    path: '/uikit/panel',
                    name: 'panel',
                    component: () => import('@/components/UI/Panels.vue')
                },
                {
                    path: '/uikit/overlay',
                    name: 'overlay',
                    component: () => import('@/components/UI/Overlay.vue')
                },
                {
                    path: '/uikit/media',
                    name: 'media',
                    component: () => import('@/components/UI/Media.vue')
                },
                {
                    path: '/uikit/menu',
                    component: () => import('@/components/UI/Menu.vue'),
                    children: [
                        {
                            path: '/uikit/menu',
                            component: () => import('@/components/UI/menu/PersonalDemo.vue')
                        },
                        {
                            path: '/uikit/menu/seat',
                            component: () => import('@/components/UI/menu/SeatDemo.vue')
                        },
                        {
                            path: '/uikit/menu/payment',
                            component: () => import('@/components/UI/menu/PaymentDemo.vue')
                        },
                        {
                            path: '/uikit/menu/confirmation',
                            component: () => import('@/components/UI/menu/ConfirmationDemo.vue')
                        }
                    ]
                },
                {
                    path: '/uikit/message',
                    name: 'message',
                    component: () => import('@/components/UI/Messages.vue')
                },
                {
                    path: '/uikit/file',
                    name: 'file',
                    component: () => import('@/components/UI/File.vue')
                },
                {
                    path: '/uikit/charts',
                    name: 'charts',
                    component: () => import('@/components/UI/Chart.vue')
                },
                {
                    path: '/uikit/misc',
                    name: 'misc',
                    component: () => import('@/components/UI/Misc.vue')
                },
                {
                    path: '/blocks',
                    name: 'blocks',
                    component: () => import('@/pages/Blocks.vue')
                },
                {
                    path: '/utilities/icons',
                    name: 'icons',
                    component: () => import('@/pages/Icons.vue')
                },
                {
                    path: '/pages/timeline',
                    name: 'timeline',
                    component: () => import('@/pages/Timeline.vue')
                },
                {
                    path: '/pages/empty',
                    name: 'empty',
                    component: () => import('@/pages/Empty.vue')
                },
                {
                    path: '/pages/crud',
                    name: 'crud',
                    component: () => import('@/pages/Crud.vue')
                },
                {
                    path: '/documentation',
                    name: 'documentation',
                    component: () => import('@/pages/Documentation.vue')
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
            component: () => import('@/pages/auth/Register.vue')
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/pages/NotFound.vue')
        },
        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/pages/auth/Error.vue')
        }
    ]
});

export default router;
