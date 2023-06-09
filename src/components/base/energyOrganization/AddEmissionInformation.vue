<script setup>
import {inject, reactive, ref} from "vue";

const dialogRef = inject("dialogRef");

const type = ref(dialogRef.value.options.props.type)

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
const closeDialog = (e) => {
    dialogRef.value.close(e);
};

const emissionInformation = reactive([
    {
        "id": dialogRef.value.options.props.dataLength + 1,
        "name": "",
        "type": "",
        "f2019": "",
        "f2020": "",
        "f2021": "",
        "deviation": ''
    },
])

const informationNDT = reactive([
    {
        "id": dialogRef.value.options.props.dataLength + 1,
        "name": "",
        "description": "",
        "plannedDate": "",
        "finance": ""
    },
])

const checkValue = function (type){
    if(type === 'emissionInformation') return emissionInformation
    if(type === 'informationNDT') return informationNDT
}
const addRow = function (type) {
    let emissionInformationLast = emissionInformation[emissionInformation.length - 1]
    let informationNDTLast = informationNDT[informationNDT.length - 1]

    if(type === 'emissionInformation'){
        emissionInformation.push({
            "id": emissionInformationLast.id + 1,
            "name": "",
            "type": "",
            "f2019": "",
            "f2020": "",
            "f2021": "",
            "deviation": ''
        })
    }else if(type === 'informationNDT'){
        informationNDT.push({
            "id": informationNDTLast.id + 1,
            "name": "",
            "deadline": "",
            "price": ""
        })
    }
}

const dropRow = function (obj, type){
    if(type === 'emissionInformation'){
        const objWithIdIndex = emissionInformation.findIndex((x) => x.id === obj.id);
        emissionInformation.splice(objWithIdIndex, 1);
        return emissionInformation;
    }else if(type === 'plannedEquipment'){
        const objWithIdIndex = informationNDT.findIndex((x) => x.id === obj.id);
        informationNDT.splice(objWithIdIndex, 1);
        return informationNDT;
    }
}

const columns = reactive([
    {
        id: 1,
        header: '#',
        field: 'id'
    },
    {
        id: 2,
        header: 'Наименование оборудования',
        field: 'name'
    },
    {
        id: 3,
        header: '',
        field: ''
    }
])
</script>


<template>

  <!--    таблица-->
    <DataTable editMode="cell"  columnResizeMode="fit"  showGridlines  :value="checkValue(type)"  dataKey="id"
               tableClass="editable-cells-table" tableStyle="min-width: 50rem">

        <ColumnGroup v-if="type === 'emissionInformation'" type="header">
            <Row>
                <Column header="#" :rowspan="3" />
            </Row>
            <Row>
                <Column bodyStyle="text-align:center" header="Контролируемый показатель" :colspan="2" :rowspan="3" />
                <Column bodyStyle="text-align:center" header="Значения выбросов по годам, тонн" :colspan="3" />

                <Column bodyStyle="text-align:center" header="Отклонения" :colspan="2" :rowspan="2"  />
            </Row>
            <Row>
                <Column header="2019" />
                <Column header="2020" />
                <Column header="2021" />
            </Row>
        </ColumnGroup>

        <div v-if="type === 'emissionInformation'">
        <Column field="id" bodyStyle="text-align:center" header="№"></Column>
        <Column field="name" header="Наименование оборудования" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  v-model="data[field]" />
            </template>
        </Column>
        <Column field="type" header="Контролируемый показатель" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  v-model="data[field]" />
            </template>
        </Column>
        <Column field="f2019" header="2019" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  v-model="data[field]" />
            </template>
        </Column>
        <Column field="f2020" header="2020" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  v-model="data[field]" />
            </template>
        </Column>
        <Column field="f2021" header="2021" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  v-model="data[field]" />
            </template>
        </Column>
        <Column field="deviation" header="Отклонения" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  v-model="data[field]" />
            </template>
        </Column>
        </div>

        <div v-if="type === 'informationNDT'">
            <Column field="id" bodyStyle="text-align:center" header="№"></Column>
            <Column field="name" header="Наименование оборудования" bodyStyle="text-align:center">
                <template #body="{ data, field }">
                    <InputText  v-model="data[field]" />
                </template>
            </Column>
            <Column field="deadline" header="Наименование оборудования" bodyStyle="text-align:center">
                <template #body="{ data, field }">
                    <InputText  v-model="data[field]" />
                </template>
            </Column>
            <Column field="price" header="Контролируемый показатель" bodyStyle="text-align:center">
                <template #body="{ data, field }">
                    <InputText  v-model="data[field]" />
                </template>
            </Column>
        </div>


        <Column field="" header="" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <Button @click="dropRow(data, type)" icon="pi pi-times" severity="danger" rounded aria-label="Cancel" />
            </template>
        </Column>

    </DataTable>

    <Button size="small" @click="addRow(type)" class="mt-3" icon="pi pi-plus" rounded aria-label="Filter" />

  <!--        footer кнопка сохранить-->
    <div class="flex justify-content-start mt-8">
        <Button type="button" label="Сохранить" icon="pi pi-check" @click="closeDialog(checkValue(type))" autofocus></Button>
        <Button type="button" label="Отменить" icon="pi pi-times" @click="closeDialog({ buttonType: 'No' })" text></Button>
    </div>

</template>


<style scoped>

</style>