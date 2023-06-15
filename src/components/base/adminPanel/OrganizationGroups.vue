<script setup>
import {reactive} from "vue";

const organizationType = reactive([
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

const organizations = reactive([
    {
        id: 1,
        name: 'ТЭЦ 1',
        type: 'energySupply'
    },
    {
        id: 2,
        name: 'ТЛ 55',
        type: 'energyTransfer'
    },
    {
        id: 2,
        name: 'ТЛ 55',
        type: 'energyProducer'
    },
])

</script>


<template>
    <div class="flex flex-column w-full">
        <div class="mt-3 col-12 border-round-lg bg-white">
            <h6>Фильтр</h6>

            <div class="flex justify-content-start">
                <InputText class="col-3 mr-3" placeholder="ФИО"/>
                <InputText class="col-3" placeholder="ИИН"/>
            </div>
        </div>
        <div class="mt-3 col-12 border-round-lg ">
            <div class="flex justify-content-between align-items-center">
                <h4>Группы ({{organizationType.length}})</h4>
                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddUser, 'Создать', users, 'create', selectedData)"/>
            </div>
        </div>

        <div class="grid ">
            <div class="col-4">
                <Card>
                    <template #title> hhh </template>
                    <template #content>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inve
                        </p>
                    </template>
                </Card>
            </div>
            <div class="col-4">
                <Card>
                    <template #title> JJJ </template>
                    <template #content>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inve
                        </p>
                    </template>
                </Card>
            </div>
            <div class="col-4">
                <Card>
                    <template #title> Astana AO</template>
                    <template #content>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inve
                        </p>
                    </template>
                </Card>
            </div>

        </div>
    </div>
</template>


<style scoped>

</style>