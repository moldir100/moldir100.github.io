<script setup>
import {ref} from "vue";

const panelMenuItems = ref([
    {
        label: 'Общие сведения ЭПО',
        // icon: 'pi pi-fw pi-table',
        to: '/dashboard/profile/digitalPassport',
    },
    {
        label: 'ТЭП',
        // icon: 'pi pi-fw pi-table',
        to: '/dashboard/profile/digitalPassport/tep'
    },
    {
        label: 'Тарифы',
        icon: 'pi pi-fw pi-envelope',
        items: [
            {
                label: 'Tracker',
                icon: 'pi pi-fw pi-compass'
            },
            {
                label: 'Map',
                icon: 'pi pi-fw pi-map-marker'
            },
            {
                label: 'Manage',
                icon: 'pi pi-fw pi-pencil'
            }
        ]
    },
    {
        label: 'Организационная структура',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-fw pi-cog'
            },
            {
                label: 'Billing',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        label: 'Мощности цеха, участки',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-fw pi-cog'
            },
            {
                label: 'Billing',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        label: 'Описание основ.оборуд',
        icon: 'pi pi-fw pi-envelope',
        items: [
            {
                label: 'Tracker',
                icon: 'pi pi-fw pi-compass'
            },
            {
                label: 'Map',
                icon: 'pi pi-fw pi-map-marker'
            },
            {
                label: 'Manage',
                icon: 'pi pi-fw pi-pencil'
            }
        ]
    },
    {
        label: 'Продление сроков, выбытие',
        icon: 'pi pi-fw pi-envelope',
        items: [
            {
                label: 'Tracker',
                icon: 'pi pi-fw pi-compass'
            },
            {
                label: 'Map',
                icon: 'pi pi-fw pi-map-marker'
            },
            {
                label: 'Manage',
                icon: 'pi pi-fw pi-pencil'
            }
        ]
    },
    {
        label: 'Ремонтная работа',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-fw pi-cog'
            },
            {
                label: 'Billing',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        label: 'Инвестиционная программа',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-fw pi-cog'
            },
            {
                label: 'Billing',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        label: 'Потребители',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-fw pi-cog'
            },
            {
                label: 'Billing',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        label: 'Информация по выбросам',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-fw pi-cog'
            },
            {
                label: 'Billing',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        label: 'Дополнительная информация',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Settings',
                icon: 'pi pi-fw pi-cog'
            },
            {
                label: 'Billing',
                icon: 'pi pi-fw pi-file'
            }
        ]
    },
]);
</script>

<template>
    <div class="flex flex-row">
        <div class="card col-3 lg:col-3 md:col-3 sm:col-3 xs:hidden mt-3">
            <h5>PanelMenu</h5>
            <PanelMenu :model="panelMenuItems"/>
        </div>
        <div class="lg:col-9">
            <router-view></router-view>
        </div>
    </div>
</template>


<style scoped>
.card{
    margin-bottom: 0;
}

/*.flex{*/
/*    display: flex;*/
/*    margin-bottom: 0;*/
/*}*/

.flex-row{
    /*margin-bottom: -10px !important;*/
}

</style>