<script setup>
import {inject, reactive, ref} from "vue";

const dialogRef = inject("dialogRef");

const closeDialog = (e) => {
    dialogRef.value.close(e);
};

const repairDone = reactive([
    {
        "id": dialogRef.value.options.props.dataLength + 1,
        "name": "",
        "type": "",
        "dateStart": "",
        "dateEnd": "",
        "description": "",
        "year": "",
    },
])
const repairPlan = reactive([
    {
        "id": dialogRef.value.options.props.dataLength + 1,
        "name": "",
        "type": "",
        "description": "",
        "year": "",
    },
])

const checkValue = function (type){
    if(type === 'repairDone') return repairDone
    if(type === 'repairPlan') return repairPlan
}
const addRow = function (type) {
    let repairDoneLast = repairDone[repairDone.length - 1]
    let repairPlanLast = repairPlan[repairPlan.length - 1]

    if(type === 'repairDone'){
        repairDone.push(
            {
                "id": repairDoneLast.id + 1,
                "name": "",
                "type": "",
                "dateStart": "",
                "dateEnd": "",
                "description": "",
                "year": "",
            },
        )
    }
    else if(type === 'repairPlan'){
        repairPlan.push(
            {
                "id": repairPlanLast.id + 1,
                "name": "",
                "type": "",
                "description": "",
                "year": "",
            },
        )
    }
}
const dropRow = function (obj, type){
    console.log(obj, type)
    if(type === 'repairDone'){
        const objWithIdIndex = repairDone.findIndex((x) => x.id === obj.id);
        repairDone.splice(objWithIdIndex, 1);
        return repairDone;
    }else if(type === 'repairPlan'){
        const objWithIdIndex = repairPlan.findIndex((x) => x.id === obj.id);
        repairPlan.splice(objWithIdIndex, 1);
        return repairPlan;
    }
}

const type = ref(dialogRef.value.options.props.type)

</script>


<template>
  <!--    таблица-->
    <DataTable editMode="cell"  columnResizeMode="fit"  showGridlines :value="checkValue(type)"  dataKey="id"
               tableClass="editable-cells-table" tableStyle="min-width: 50rem">

        <ColumnGroup v-if="type === 'repairDone'" type="header">
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

        <Column field="id" bodyStyle="text-align:center" header="№">

        </Column>
        <Column field="year" header="Год" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  v-model="data[field]" />
            </template>
        </Column>
        <Column field="name" header="Наименование" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  v-model="data[field]" />
            </template>
        </Column>
        <Column field="type" header="Вид ремонта" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column v-if="type === 'repairDone'" field="dateStart" header="Price" bodyStyle="text-align:center" >
            <template #body="{ data, field }">
                <InputText  class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column v-if="type === 'repairDone'" field="dateEnd" header="Price" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="description" header="Описание планируемых работ" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText v-model="data[field]" />
            </template>
        </Column>

        <Column field="work" header="" bodyStyle="text-align:center">
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