<script setup>

import {reactive} from "vue";

const organizations = reactive([
    {
        id: 1,
        type: 'energySupply',
    },
    {
        id: 2,
        type: 'energyTransfer',
    },
    {
        id: 3,
        type: 'energyProducer'
    }
])
</script>


<template>
    <div class="grid">
        <div class="col-12 border-round-lg bg-white">
            <h5>Панель администрирования</h5>

            <router-link to="/adminPanel/organizations">ОРганизации</router-link> <router-link to="/adminPanel/users">/ Пользовалтели  </router-link>/ <router-link to="/adminPanel/organizationGroup">Группа организации</router-link>

            <h6>Фильтр</h6>

            <div class="flex justify-content-start">
                <InputText class="col-3 mr-3" placeholder="ФИО"/>
                <InputText class="col-3" placeholder="ИИН"/>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>