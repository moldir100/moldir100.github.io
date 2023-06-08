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

            "power": "",
            "powerCoefficient": "",

            "amper": "",
            "voltage": "",

            "kpd": "",
            "resource": null,

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
               @row-edit-save="onRowEditSave" tableClass="editable-cells-table" tableStyle="min-width: 50rem">

        <ColumnGroup type="header">
            <Row>
                <Column header="№" :rowspan="3" />
                <Column header="Тип трансформатора" :rowspan="3" />
                <Column header="Мощность кВА" :rowspan="3" />
            </Row>
            <Row>

                <Column bodyStyle="text-align:center" header="Напряжение, В" :colspan="3" />
                <Column bodyStyle="text-align:center" header="Потеря мощности, Вт" :colspan="2" />


                <Column header="Ток холостого хода, %" :rowspan="2" />
                <Column header="Напряжение КЗ, %" :rowspan="2" />
                <Column header="Схема и группа соединений обмоток" :rowspan="2" />
                <Column header="КПД" :rowspan="2" />
                <Column header="Парковый ресурс, час" :rowspan="2" />
                <Column header="Наработка, час" :rowspan="2"  />
                <Column header="Износ, %" :rowspan="2"  />
                <Column header="" :rowspan="2"  />
            </Row>

            <Row>
                <Column header="BH"  />
                <Column header="CH" />
                <Column header="HH"  />

                <Column header="Холостого хода" />
                <Column header="КЗ"  />

            </Row>

        </ColumnGroup>

        <Column field="id" bodyStyle="text-align:center" header="Code">
            <template >
                <InputText style="width: 20%" v-model="data[field]" />
            </template>
        </Column>
        <Column field="type" bodyStyle="text-align:center" header="Status">
            <template #body="{ data, field }">
                <InputText class="w-8rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="power" header="Name" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>

        <Column field="voltageBH" header="Name" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="voltageCH" header="Name" >
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="voltageHH" header="Name" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>

        <Column field="powerLossIDLE" header="Price" bodyStyle="text-align:center" >
            <template #body="{ data, field }">
                <InputText class="w-8rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="powerLossKZ" header="Name" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>

        <Column field="amperIDLE" header="Name" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="voltageKZ" header="Price" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>

        <Column field="schemeGroup" header="Price" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="kpd" header="Price" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="resource" header="Price" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="operating" header="Price" bodyStyle="text-align:center">
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