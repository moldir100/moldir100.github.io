<script setup>
import {inject, reactive} from "vue";

const equipments = reactive([
    {
        id: 1,
        name: 'Ст.№ 7, ЦКТИ-75-39, 1953 г.',
        type: 'Котельные оборудования',
        count: 2
    },
    {
        id: 1,
        name: 'Ст.№ 8, ЦКТИ-75-39, 1956 г.',
        type: 'Котельные оборудования',
        count: 2
    },

])

const dialogRef = inject("dialogRef");

const closeDialog = (e) => {
    dialogRef.value.close(e);
};

const data = reactive([
    {
        "id": dialogRef.value.options.props.dataLength + 1,
        "name": "",
        "consumption": "",
        "parameters": "",
        "norm": "",
        "fact": "",
        "recourse": "",
        "operating": null,
        "work": null,
    },
])

const addRow = function () {
    let last = data[data.length - 1]

    data.push(
        {
            "id": last.id + 1,
            "name_equipment": '',
            "date": '',
            "organization": '',
            "extension": ''
        },
    )
}

const dropRow = function (obj){
    const objWithIdIndex = data.findIndex((x) => x.id === obj.id);
    data.splice(objWithIdIndex, 1);
    return data;
}

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
const teps2 = reactive([
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
        header: 'МВт, тонн/час, кВА'
    },
    {
        id: 4,
        field: 'organization',
        header: 'Отклонение от паркового ресурса'
    },
    {
        id: 5,
        field: 'extension',
        header: 'Планируемый год вывода'
    },
])

</script>


<template>

  <!--    таблица-->
    <DataTable editMode="cell"  columnResizeMode="fit"  showGridlines  v-model:editingRows="editingRows" :value="data"  dataKey="id"
               @row-edit-save="onRowEditSave" tableClass="editable-cells-table" tableStyle="min-width: 50rem">

        <Column bodyStyle="text-align:center" v-for="tep in teps" :key="tep.id" :field="tep.field" :header="tep.header">
            <template #body="{ data, field }">
                <p v-if="field === 'id'">{{data[field]}}</p>
                <InputText v-if="field !== 'name_equipment' && field !== 'id'" v-model="data[field]" />
                <Dropdown v-if="field === 'name_equipment'" v-model="data[field]" :options="equipments" optionLabel="name" optionValue="name" placeholder="Выберите оборудование">
                </Dropdown>
            </template>
        </Column>
        <Column field="work" header="" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <Button @click="dropRow(data)" icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />
            </template>
        </Column>

    </DataTable>

    <Button size="small" @click="addRow()" class="mt-3" icon="pi pi-plus" rounded aria-label="Filter" />

  <!--        footer кнопка сохранить-->
    <div class="flex justify-content-start mt-8">
        <Button type="button" label="Сохранить" icon="pi pi-check" @click="closeDialog(data)" autofocus></Button>
        <Button type="button" label="Отменить" icon="pi pi-times" @click="closeDialog({ buttonType: 'No' })" text></Button>
    </div>

</template>


<style scoped>

</style>