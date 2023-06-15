<script setup>
import {reactive} from "vue";

</script>


<template>
    <div class="grid">
        <div class="col-12 border-round-lg bg-white">
            <h5>Панель администрирования</h5>

            <router-link to="/adminPanel/organizations">ОРганизации</router-link> <router-link to="/adminPanel/users">/ Пользовалтели  </router-link>/ <router-link to="/adminPanel/organizationGroup">Группа организации</router-link>

        </div>
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>