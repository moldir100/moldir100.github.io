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


const onRowEditSave = (event) => {
    let { newData, index } = event;

    products.value[index] = newData;
};


const data =  reactive([
    {
        "id": 1000,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",

        "representative": {
            "year": "2021",
        }
    },
    {
        "id": 1001,
        "name": "Гидроагрегат Ст. №2",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",

        "representative": {
            "year": "2019",
        }
    },
    {
        "id": 1002,
        "name": "Гидроагрегат Ст. №1",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "representative": {
            "year": "2021",
        }
    },
    {
        "id": 1004,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "representative": {
            "year": "2023",
        }
    },
    {
        "id": 1005,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "representative": {
            "year": "2019",
        }
    },
    {
        "id": 1006,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "representative": {
            "year": "2020",
        }
    },
    {
        "id": 1007,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "representative": {
            "year": "2023",
        }
    },
    {
        "id": 1009,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "representative": {
            "year": "2023",
        }
    },
    {
        "id": 1010,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "representative": {
            "year": "2020",
        }
    },
    {
        "id": 1012,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "representative": {
            "year": "2021",
        }
    },
])


import { FilterMatchMode, FilterOperator } from 'primevue/api';

// const customers = ref();
const selectedCustomers = ref();
const filters = ref();
const representatives = ref([
    { year: '2019' },
    { year: '2020' },
    { year: '2021' },
    { year: '2022' },

]);

// onMounted(() => {
//     data.value = getCustomers(data);
// });


const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        representative: { value: null, matchMode: FilterMatchMode.IN },
        type: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        dateStart: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        dateEnd: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    };
};

initFilters();


// const clearFilter = () => {
//     initFilters();
// };

const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
};

</script>


<template>
    <div class="flex flex-column">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Ремонтная кампания за 2019-2021 годы по основному оборудованию:</h5>

                <DataTable showGridlines :value="data" rowGroupMode="rowspan" groupRowsBy="representative.year" sortMode="single" sortField="representative.year" :sortOrder="1" tableStyle="min-width: 50rem"
                           @row-edit-save="onRowEditSave" v-model:editingRows="editingRows" tableClass="editable-cells-table" editMode="row" dataKey="id"
                           :globalFilterFields="['name', 'representative.year', 'type', 'description']"
                            filterDisplay="menu" v-model:filters="filters">

                    <ColumnGroup type="header">
                        <Row>
                            <Column header="#" :rowspan="3" />
                            <Column header="Год" :rowspan="3" />
                            <Column header="Наименование Ст. №" :rowspan="3" />
                            <Column header="Вид ремонта" :rowspan="3" />
                        </Row>
                        <Row>
                            <Column bodyStyle="text-align:center" header="Сроки ремонта" :colspan="2" />
                            <Column bodyStyle="text-align:center" header="Описание выполненных работ" :rowspan="2"  />
                            <Column header="" :rowspan="2"  />
                        </Row>

                        <Row>
                            <Column header="Начало"  />
                            <Column header="Окончание" />
                        </Row>

                    </ColumnGroup>

                    <template #header>
                        <div class="flex justify-content-between">
                            <span class="p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                            </span>
                        </div>
                    </template>
                    <template #empty> ничего не найдено</template>

                    <Column header="#" headerStyle="width:3rem">
                        <template #body="slotProps">
                            {{ slotProps.index + 1 }}
                        </template>
                    </Column>
                    <Column header="Год" field="representative.year" >
                        <template #body="slotProps">
                            <div class="flex align-items-center gap-2">
                                <span>{{ slotProps.data.representative.year }}</span>
                            </div>
                        </template>

                        <template #editor="{ data, field }">
                            <Calendar v-model="data[field]" view="year" dateFormat="yy"  showIcon />
                        </template>
                    </Column>
                    <Column header="Наименование Ст. №" field="name"  style="min-width: 200px">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Вид ремонта" field="type">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Начало" field="dateStart" >
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Окончание" field="dateEnd"  style="min-width: 200px">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Описание выполненных работ" field="description" style="min-width: 100px">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" bodyStyle="text-align:center"></Column>
                </DataTable>
            </div>
        </div>

        <div class="col-12 border-round-lg bg-white ml-0 mt-3">
            <div class="col-12 flex flex-column">
                <h5>Перспективный план ремонта  основного оборудования</h5>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>