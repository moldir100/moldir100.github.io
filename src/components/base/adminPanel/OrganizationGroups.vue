<script setup>
import {reactive} from "vue";
import {useRoute, useRouter} from "vue-router";
const route = useRoute()
const router = useRouter()
const organizationType = reactive([
    {
        id: 1,
        type: 'energySupply',
        name: 'АО "КОРЭМ"'
    },
    {
        id: 2,
        type: 'energyTransfer',
        name: 'Энергопередающие'
    },
    {
        id: 3,
        type: 'energyProducer',
        name: 'Юридические лица'
    },
    {
        id: 4,
        type: 'energyProducer',
        name: 'Системный оператор'
    },
    {
        id: 5,
        type: 'energyProducer',
        name: 'Энергопроизводящие'
    },
    {
        id: 6,
        type: 'energyProducer',
        name: 'Физические лица'
    },
    {
        id: 7,
        type: 'energyProducer',
        name: 'Котельные'
    },
    {
        id: 8,
        type: 'energyProducer',
        name: 'КАЭНК'
    },
    {
        id: 9,
        type: 'energyProducer',
        name: 'ДРЭ'
    },
    {
        id: 10,
        type: 'energyProducer',
        name: 'Объекты радиационного воздействия'
    },
    {
        id: 11,
        type: 'energyProducer',
        name: 'ТД КАЭНК по г. Нур-Султан'
    },
    {
        id: 12,
        type: 'energyProducer',
        name: 'ДЦИ'
    },
    {
        id: 13,
        type: 'energyProducer',
        name: 'ТД КАЭНК по Алматинской обл.'
    },
    {
        id: 14,
        type: 'energyProducer',
        name: 'ТД КАЭНК по г. Алматы'
    },
    {
        id: 15,
        type: 'energyProducer',
        name: 'ТД КАЭНК по г. Алматы'
    },

])
const selectedOrganization = function (i){
    console.log('clicked', i)
    router.push({
        path: '/adminPanel/organizations',
        query: {
            type: i.type
        },
        params: {
            type: i.type
        }
    })
}
</script>


<template>
    <div class="flex flex-column w-full">
        <div class="mt-3 col-12 border-round-lg bg-white">
            <h6>Фильтр</h6>

            <div class="flex justify-content-start">
                <InputText class="col-3 mr-3" placeholder="Поиск"/>
            </div>
        </div>
        <div class="mt-3 col-12 border-round-lg ">
            <div class="flex justify-content-between align-items-center">
                <h5>Группы ({{organizationType.length}})</h5>
            </div>
        </div>
        <div class="grid">
            <div class="col-12 md:col-4 lg:col-4 pt-1" v-for="i in organizationType" @click="selectedOrganization(i)">
                <div class="bg-white border-round-lg col-12 flex flex-row">
                    <section class=""><i class="pi pi-users"  style="font-size: 2.5rem"></i></section>
                    <section class="flex justify-content-start ml-3 mt-2"><h5 style="font-family: 'Montserrat', sans-serif; font-style: normal; font-weight: 400; font-size: 14px; line-height: 20px">{{ i.name }}</h5></section>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>