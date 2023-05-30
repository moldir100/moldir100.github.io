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
        label: 'Тарифы',
        to: '/profile/digitalPassport/tariffs'
    },
    {
        label: 'Организационная структура',
        to: ''
    },
    {
        label: 'Мощности цеха, участки',
        to: ''
    },
    {
        label: 'Описание основ.оборуд',
        to: ''
    },
    {
        label: 'Продление сроков, выбытие',
        to: ''
    },
    {
        label: 'Ремонтная работа',
        to: ''
    },
    {
        label: 'Инвестиционная программа',
        to: ''
    },
    {
        label: 'Потребители',
        to: ''
    },
    {
        label: 'Информация по выбросам',
        to: ''
    },
    {
        label: 'Дополнительная информация',
        to: ''
    },
]);
</script>

<template>
        <div class="grid">

            <div class="col-12  lg:col-2">
<!--                <Menu class="w-full" :model="panelMenuItems" />-->
                <PanelMenu class="border-round-lg bg-white p-2" :model="panelMenuItems"/>
            </div>
            <div class="col-12 lg:col-10">
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