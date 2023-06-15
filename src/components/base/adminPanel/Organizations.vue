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
organizations
</template>


<style scoped>

</style>