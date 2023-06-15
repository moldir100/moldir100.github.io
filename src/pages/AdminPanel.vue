<script setup>
import {reactive} from "vue";

</script>


<template>
    <div class="grid">
        <div class="col-12 border-round-lg bg-white">
            <h4>Панель администрирования</h4>

            <router-link to="/adminPanel/organizations">Организации     </router-link>
            <router-link to="/adminPanel/users">/ Пользовалтели  </router-link>  /
            <router-link to="/adminPanel/organizationGroup">   Группа организации      </router-link>

        </div>
        <router-view></router-view>
    </div>
</template>

<style scoped>

</style>