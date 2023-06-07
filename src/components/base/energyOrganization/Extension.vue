<script setup>
import {ref, onMounted, reactive} from 'vue';
import ProductService from '@/service/ProductService.js';
import InputLabel from "@/components/UI/Vinput.vue";

const products = ref();
const editingRows = ref([]);
const statuses = ref([
    { label: 'In Stock', value: 'INSTOCK' },
    { label: 'Low Stock', value: 'LOWSTOCK' },
    { label: 'Out of Stock', value: 'OUTOFSTOCK' }
]);

const extensions = reactive([
    {
        id: 1,
        name_equipment: ' Гидроагрегат №1 (СВ1436/200-80 УХЛ-4 / ПЛ 50-8-850)',
        date: '№ 21 от 21.04.2021 г.',
        organization: ' ТОО "Павлодар Электростройсервис"',
        extension: '2028 г.'
    },
    {
        id: 2,
        name_equipment: ' Гидроагрегат №2(СВ1436/200-80 УХЛ-4 / ПЛ 50-8-850)',
        date: '№ 6-1 от 30.03.2022 г.',
        organization: ' ТОО "Павлодар Электростройсервис"',
        extension: '2028 г.'
    },
    {
        id: 3,
        name_equipment: ' Гидроагрегат №3 (СВ1436/200-80 УХЛ-4 / ПЛ 50-8-850)',
        date: '№ 8 от 02.04.2019 г.',
        organization: ' ТОО "Павлодар Электростройсервис"',
        extension: '2028 г.'
    },
    {
        id: 4,
        name_equipment: ' Гидроагрегат №4 (СВ1436/200-80 УХЛ-4 / ПЛ 50-8-850)',
        date: '№ 56 от 05.04.2016 г.',
        organization: ' ТОО "ВК Промэнергоремонт"',
        extension: '2028 г.'
    },
    {
        id: 5,
        name_equipment: ' Гидроагрегат №5 (СВ1436/200-80 УХЛ-4 / ПЛ 50-8-850)',
        date: '№ 79 от 10.04.2017 г.',
        organization: ' ТОО "ВК Промэнергоремонт"',
        extension: '2028 г.'
    },
    {
        id: 6,
        name_equipment: ' Гидроагрегат №6 (СВ1436/200-80 УХЛ-4 / ПЛ 50-8-850)',
        date: '№ 4 от 03.04.2018 г.',
        organization: 'ТОО "ВК Промэнергоремонт"',
        extension: '2028 г.'
    },


])

const onRowEditSave = (event) => {
    let { newData, index } = event;

    products.value[index] = newData;
};
const teps = reactive([
    {
        id: 1,
        field: 'id',
        header: '№'
    },
    {
        id: 2,
        field: 'name_equipment',
        header: 'Наименование оборудования'
    },
    {
        id: 3,
        field: 'date',
        header: '№ и дата акта'
    },
    {
        id: 4,
        field: 'organization',
        header: 'Наименование Организации'
    },
    {
        id: 5,
        field: 'extension',
        header: 'Срок продления эксплуатации'
    },

])

</script>



<template>
    <div class="flex">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Информация по продлению сроков эксплуатации основного оборудования</h5>

                <DataTable showGridlines scrollable  v-model:editingRows="editingRows" :value="extensions" editMode="row" dataKey="id"
                           @row-edit-save="onRowEditSave" tableClass="editable-cells-table" >
                    <Column bodyStyle="text-align:center" v-for="tep in teps" :key="tep.id" :field="tep.field" :header="tep.header">
                        <template #editor="{ data, field }">
                            <p v-if="field === 'id'">{{data[field]}}</p>
                            <InputText v-if="field === 'name_equipment' && field !== 'id'" v-model="data[field]" />
                            <InputText v-if="field !== 'name_equipment' && field !== 'id'" class="w-5rem text-center"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" bodyStyle="text-align:center"></Column>
                </DataTable>

            </div>
        </div>
    </div>
</template>


<style scoped>

</style>