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

const events = reactive([
    {
        "id": dialogRef.value.options.props.dataLength + 1,
        "name": "",
        "price": "",
        "dateStart": "",
        "dateEnd": ""
    },
])

const plannedEquipment = reactive([
    {
        "id": dialogRef.value.options.props.dataLength + 1,
        "name": "",
        "description": "",
        "plannedDate": "",
        "finance": ""
    },
])

const checkValue = function (type){
    if(type === 'events') return events
    if(type === 'plannedEquipment') return plannedEquipment
}
const addRow = function (type) {
    let eventsLast = events[events.length - 1]
    let plannedEquipmentLast = plannedEquipment[plannedEquipment.length - 1]

    if(type === 'events'){
        events.push({
            "id": eventsLast.id + 1,
            "name": "",
            "price": "",
            "dateStart": "",
            "dateEnd": ""
        })
    }else if(type === 'plannedEquipment'){
        plannedEquipment.push({
            "id": plannedEquipmentLast.id + 1,
            "name": "",
            "description": "",
            "plannedDate": "",
            "finance": ""
        })
    }
}

const dropRow = function (obj, type){
    if(type === 'events'){
        const objWithIdIndex = events.findIndex((x) => x.id === obj.id);
        events.splice(objWithIdIndex, 1);
        return events;
    }else if(type === 'plannedEquipment'){
        const objWithIdIndex = plannedEquipment.findIndex((x) => x.id === obj.id);
        plannedEquipment.splice(objWithIdIndex, 1);
        return plannedEquipment;
    }
}
</script>


<template>
  <!--    таблица-->
    <DataTable editMode="cell"  columnResizeMode="fit"  showGridlines  :value="checkValue(type)"  dataKey="id"
              tableClass="editable-cells-table" tableStyle="min-width: 50rem">

        <ColumnGroup v-if="type === 'events'" type="header">
            <Row>
                <Column header="#" :rowspan="3" />
                <Column header="Наименование мероприятия" :rowspan="3" />
                <Column header="Стоимость" :rowspan="3" />
            </Row>
            <Row>
                <Column bodyStyle="text-align:center" header="Сроки выполнения" :colspan="2" />
                <Column bodyStyle="text-align:center" header="" :rowspan="2"  />
            </Row>

            <Row>
                <Column header="Начало" />
                <Column header="Завершение" />
            </Row>

        </ColumnGroup>

        <Column field="id" bodyStyle="text-align:center" header="№"></Column>
        <Column field="name" header="Наименование оборудования" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  v-model="data[field]" />
            </template>
        </Column>

        <Column v-if="type === 'plannedEquipment' " field="description" header="Описание вида работ" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  v-model="data[field]" />
            </template>
        </Column>
        <Column v-if="type === 'plannedEquipment'" field="finance" header="Источник финансирования" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  v-model="data[field]" />
            </template>
        </Column>

        <Column v-if="type === 'events'" field="price" header="Стоимость" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  v-model="data[field]" />
            </template>
        </Column>
        <Column v-if="type === 'events'"  field="dateStart" header="" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText  class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column v-if="type === 'events'"  field="dateEnd" header="" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText v-model="data[field]" />
            </template>
        </Column>

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