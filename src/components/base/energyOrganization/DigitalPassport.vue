<script setup>
import {ref} from "vue";

const panelMenuItems = ref([
    {
        label: 'Общие сведения ЭПО',
        to: '/profile/digitalPassport',
    },
    {
        label: 'ТЭП',
        to: '/profile/digitalPassport/tep'
    },
    {
        label: 'Балансовая принадлежность',
        to: '/profile/digitalPassport/balance'
    },
    {
        label: 'Тарифы',
        to: '/profile/digitalPassport/tariffs'
    },
    {
        label: 'Организационная структура',
        to: '/profile/digitalPassport/organizationStructure'
    },
    {
        label: 'Мощности цеха, участки',
        to: '/profile/digitalPassport/power'
    },
    {
        label: 'Описание основ.оборуд',
        to: '/profile/digitalPassport/equipmentDescription'
    },
    {
        label: 'Продление сроков, выбытие',
        to: '/profile/digitalPassport/extension'
    },
    {
        label: 'Ремонтная работа',
        to: '/profile/digitalPassport/repairWork'
    },
    {
        label: 'Инвестиционная программа',
        to: '/profile/digitalPassport/investmentProgram'
    },
    {
        label: 'Потребители',
        to: '/profile/digitalPassport/consumers'
    },
    {
        label: 'Информация по выбросам',
        to: '/profile/digitalPassport/emissionInformation'
    },
    {
        label: 'Дополнительная информация',
        to: '/profile/digitalPassport/moreInformation'
    },
]);
</script>

<template>
        <div class="grid">

            <div class="col-12  lg:col-2">
                <PanelMenu class="border-round-lg bg-white p-2" :model="panelMenuItems"/>
            </div>
            <div class="col-12 lg:col-10">
                <router-view></router-view>
            </div>
        </div>
</template>


<style scoped>

</style>