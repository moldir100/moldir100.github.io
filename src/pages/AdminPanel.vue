<script setup>
import {reactive} from "vue";

const items = reactive([
    {
        label: 'Организации',
        icon: 'pi pi-fw pi-home',
        to: '/adminPanel/organizations'
    },
    {
        label: 'Пользовалтели',
        icon: 'pi pi-fw pi-calendar',
        to: '/adminPanel/users'
    },
    {
        label: 'Группа организации ',
        icon: 'pi pi-fw pi-pencil',
        to: '/adminPanel/organizationGroup'
    },
])

</script>


<template>
    <div class="grid">
        <div class="col-12 border-round-lg bg-white">
            <h4>Панель администрирования</h4>
            <TabMenu class="subHeader p-tabmenuitem" style=""  :model="items"/>
        </div>
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>