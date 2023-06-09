<script setup>
import {defineAsyncComponent, reactive, ref} from 'vue';
import {FilterMatchMode, FilterOperator} from 'primevue/api';
import {useDialog} from "primevue/usedialog";
import moment from "moment";

const AddRepairWorkTable = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddRepairWorkTable.vue'));

const editingRowsRepairDone = ref([]);
const editingRowsRepairPlan = ref([]);

const onRowEditSaveRepairDone = (event) => {
    let { newData, index } = event;

    repairDone[index] = newData;
};
const onRowEditSaveRepairPlan = (event) => {
    let { newData, index } = event;

    repairPlan[index] = newData;
};

const repairDone =  reactive([
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
])
const repairPlan =  reactive([
    {
        "id": 1000,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "description": "Текущий ремонт в объеме заводской инструкции",

        "year": "2021",
    },
    {
        "id": 1001,
        "name": "Гидроагрегат Ст. №2",
        "type": "текущий",
        "description": "Текущий ремонт в объеме заводской инструкции",

        "year": "2019",
    },
    {
        "id": 1002,
        "name": "Гидроагрегат Ст. №1",
        "type": "текущий",
        "description": "Текущий ремонт в объеме заводской инструкции",

        "year": "2021",
    },
    {
        "id": 1004,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "year": "2023",
    },
    {
        "id": 1005,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "year": "2019",
    },
    {
        "id": 1006,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "year": "2020",

    },
    {
        "id": 1007,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "description": "Текущий ремонт в объеме заводской инструкции",
            "year": "2023",
    },
    {
        "id": 1009,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "description": "Текущий ремонт в объеме заводской инструкции",
            "year": "2023",

    },
    {
        "id": 1010,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "year": "2020",
    },
    {
        "id": 1012,
        "name": "Гидроагрегат Ст. №1 ",
        "type": "текущий",
        "description": "Текущий ремонт в объеме заводской инструкции",
        "year": "2021",
    },
])

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
const showAddModal = function (value, name, object, type ){
    dialog.open( value,{
        props: {
            header: name,
            dataLength: object.length,
            type: type,
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
            if(type=== 'repairDone'){
                const newData = options.data;
                repairDone.push(...newData)
            }else if(type==='repairPlan'){
                const newData = options.data;
                repairPlan.push(...newData)
            }

        }
    })
}
const formatYear = function (date){
    const year =  moment(date).format('YYYY')
    console.log(year)
    return year
}
</script>


<template>
    <div class="flex flex-column">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Ремонтная кампания за 2019-2021 годы по основному оборудованию:</h5>

                <DataTable showGridlines :value="repairDone" rowGroupMode="rowspan" groupRowsBy="year" sortMode="single" sortField="year" :sortOrder="1" tableStyle="min-width: 50rem"
                           @row-edit-save="onRowEditSaveRepairDone" v-model:editingRows="editingRowsRepairDone" tableClass="editable-cells-table" editMode="row" dataKey="id"
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
                            <Button @click="showAddModal(AddRepairWorkTable, 'Ремонтная кампания за 2019-2021 годы по основному оборудованию:', repairDone, 'repairDone')" label="Создать" class="mr-3"/>
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
                                <span>{{formatYear(slotProps.data.year) }}</span>
                            </div>
                        </template>

                        <template #editor="{ data, field }">
                            <Calendar @change="formatYear(data[field])" v-model="data[field]" view="year" dateFormat="yy"  showIcon />
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

                <DataTable showGridlines :value="repairPlan" rowGroupMode="rowspan" groupRowsBy="year" sortMode="single" sortField="year" :sortOrder="1" tableStyle="min-width: 50rem"
                           @row-edit-save="onRowEditSaveRepairPlan" v-model:editingRows="editingRowsRepairPlan" tableClass="editable-cells-table" editMode="row" dataKey="id"
                           :globalFilterFields="['name','year', 'year', 'type', 'description']"
                           filterDisplay="menu" v-model:filters="filters">

                    <template #header>
                        <div class="flex justify-content-start">
                            <Button @click="showAddModal(AddRepairWorkTable, 'Ремонтная кампания за 2019-2021 годы по основному оборудованию:', repairPlan, 'repairPlan')" label="Создать" class="mr-3"/>
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
                    <Column header="Описание выполненных работ" field="description" >
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" bodyStyle="text-align:center"></Column>
                </DataTable>

            </div>
        </div>

        <DynamicDialog/>
    </div>
</template>


<style scoped>

</style>