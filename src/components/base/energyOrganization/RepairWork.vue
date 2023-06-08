<script setup>
import {ref, onMounted, reactive, defineAsyncComponent} from 'vue';

const AddRepairWorkTable = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddRepairWorkTable.vue'));

const products = ref();
const editingRows = ref([]);

const onRowEditSave = (event) => {
    let { newData, index } = event;

    data[index] = newData;
};

const data =  reactive([
    {
        "id": 1000,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",

        "year": "2021",
    },
    {
        "id": 1001,
        "name": "Гидроагрегат Ст. №2",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",

        "year": "2019",
    },
    {
        "id": 1002,
        "name": "Гидроагрегат Ст. №1",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",

        "year": "2021",
    },
    {
        "id": 1004,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "year": "2023",
    },
    {
        "id": 1005,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "year": "2019",
    },
    {
        "id": 1006,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "year": "2020",

    },
    {
        "id": 1007,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
            "year": "2023",
    },
    {
        "id": 1009,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
            "year": "2023",

    },
    {
        "id": 1010,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "year": "2020",
    },
    {
        "id": 1012,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "dateStart": "2015-09-13",
        "dateEnd": "2015-09-13",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "year": "2021",
    },
])

import { FilterMatchMode, FilterOperator } from 'primevue/api';
import {useDialog} from "primevue/usedialog";

const filters = ref();

const initFilters = () => {
    filters.value = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
        name: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }] },
        type: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.DATE_IS }] },
        dateStart: { operator: FilterOperator.AND, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        dateEnd: { operator: FilterOperator.OR, constraints: [{ value: null, matchMode: FilterMatchMode.EQUALS }] },
        verified: { value: null, matchMode: FilterMatchMode.EQUALS }
    };
};

initFilters();

const dialog = useDialog()
const showAddModal = function (value, name, object ){
    dialog.open( value,{
        props: {
            header: name,
            dataLength: object.length,
            style: {
                width: '80vw',
            },
            breakpoints:{
                '960px': '75vw',
                '640px': '90vw'
            },
            modal: true
        },
        onClose: (options) => {
            const newData = options.data;
            data.push(...newData)
        }
    })
}

</script>


<template>
    <div class="flex flex-column">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Ремонтная кампания за 2019-2021 годы по основному оборудованию:</h5>

                <DataTable showGridlines :value="data" rowGroupMode="rowspan" groupRowsBy="year" sortMode="single" sortField="year" :sortOrder="1" tableStyle="min-width: 50rem"
                           @row-edit-save="onRowEditSave" v-model:editingRows="editingRows" tableClass="editable-cells-table" editMode="row" dataKey="id"
                           :globalFilterFields="['name','year', 'year', 'type', 'description']"
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
                        <div class="flex justify-content-start">
                            <Button @click="showAddModal(AddRepairWorkTable, 'Ремонтная кампания за 2019-2021 годы по основному оборудованию:', data)" label="Создать" class="mr-3"/>
                            <span class="ml-3 p-input-icon-left">
                                <i class="pi pi-search" />
                                <InputText v-model="filters['global'].value" placeholder="Год" />
                            </span>
                        </div>
                    </template>
                    <template #empty> ничего не найдено</template>

                    <Column header="#" headerStyle="width:3rem">
                        <template #body="slotProps">
                            {{ slotProps.index + 1 }}
                        </template>
                    </Column>
                    <Column header="Год" field="year" >
                        <template #body="slotProps">
                            <div class="flex align-items-center gap-2">
                                <span>{{ slotProps.data.year }}</span>
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

        <DynamicDialog/>
    </div>
</template>


<style scoped>

</style>