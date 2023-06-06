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

<!--                <div>-->
<!--                    <Button class="w-full mb-3 bg-green-500 border-green-500 text-center">Сохранить все</Button>-->
<!--                </div>-->
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