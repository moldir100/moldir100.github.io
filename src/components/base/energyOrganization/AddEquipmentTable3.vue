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
            "name": "",
            "consumption": "",
            "parameters": "",
            "norm": "",
            "fact": "",
            "recourse": "",
            "operating": null,
            "work": null,
        },
    )
}

const dropRow = function (obj){

    const objWithIdIndex = data.findIndex((x) => x.id === obj.id);
    data.splice(objWithIdIndex, 1);
    return data;
}

</script>


<template>

  <!--    таблица-->
    <DataTable editMode="cell"  columnResizeMode="fit"  showGridlines  v-model:editingRows="editingRows" :value="data"  dataKey="id"
               @cell-edit-complete="onCellEditComplete" @row-edit-save="onRowEditSave" tableClass="editable-cells-table" tableStyle="min-width: 50rem">

        <ColumnGroup type="header">
            <Row>
                <Column header="#" :rowspan="3" />
                <Column header="Тип турбины" :rowspan="3" />
            </Row>
            <Row>

                <Column bodyStyle="text-align:center" header="Мощность" :colspan="2" />
                <Column bodyStyle="text-align:center" header="Напор" :colspan="2" />
                <Column bodyStyle="text-align:center" header="Частота вращения" :colspan="2" />


                <Column bodyStyle="text-align:center" header="Диаметр рабочего колеса" :rowspan="2"  />
                <Column header="Парковый ресурс, час" :rowspan="2" />
                <Column header="Наработка, час" :rowspan="2" />
                <Column header="Износ, %" :rowspan="2"  />
                <Column header="" :rowspan="2"  />
            </Row>

            <Row>
                <Column header="Номинальная"  />
                <Column header="Расчетная" />

                <Column header="Номинальный"  />
                <Column header="Расчетный" />

                <Column header="Номинальная"  />
                <Column header="Расчетная" />
            </Row>

        </ColumnGroup>

        <Column field="id" bodyStyle="text-align:center" header="Code">
            <template >
                <InputText style="width: 20%" v-model="data[field]" />
            </template>
        </Column>
        <Column field="type" bodyStyle="text-align:center" header="Status">
            <template #body="{ data, field }">
                <Dropdown v-model="data[field]" :options="equipments" optionLabel="name" optionValue="name" placeholder="Select a Status">
                </Dropdown>
            </template>
        </Column>

        <Column field="powerNominal" header="Name" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="powerCalculated" header="Name" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>

        <Column field="pressureNominal" header="Name" >
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="pressureCalculated" header="Name" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>

        <Column field="frequencyNominal" header="Price" bodyStyle="text-align:center" >
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="frequencyCalculated" header="Name" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>

        <Column field="diameter" header="Name" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="resource" header="Price" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="operating" header="Name" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="work" header="Price" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="work" header="Price" bodyStyle="text-align:center">
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