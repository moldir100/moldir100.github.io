<script setup>
import {defineAsyncComponent, defineComponent, inject, reactive, ref} from 'vue'
const dialogRef = inject("dialogRef");
const AddEmissionInformation = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddEmissionInformation.vue'));

const emissionInformation =  reactive([
    {
        "id": 1,
        "name": "CH*",
        "type": "норма",
        "f2019": "4.5",
        "f2020": "55",
        "f2021": "7",
        "deviation": 'no'
    },
    {
        "id": 2,
        "name": "CH*",
        "type": "факт",
        "f2019": "4.5",
        "f2020": "55",
        "f2021": "7",
        "deviation": 'no'
    },

    {
        "id": 3,
        "name": "СО*",
        "type": "норма",
        "f2019": "4.5",
        "f2020": "55",
        "f2021": "7",
        "deviation": 'no'
    },
    {
        "id": 4,
        "name": "СО*",
        "type": "факт",
        "f2019": "4.5",
        "f2020": "505",
        "f2021": "8.2",
        "deviation": 'no'
    },

    {
        "id": 5,
        "name": "SOx",
        "type": "норма",
        "f2019": "4.5",
        "f2020": "105",
        "f2021": "73",
        "deviation": 'no'
    },
    {
        "id": 6,
        "name": "SOx",
        "type": "факт",
        "f2019": "8",
        "f2020": "55",
        "f2021": "7",
        "deviation": 'no'
    }

])
const informationNDT = reactive([
    {
        "id": 1,
        "name": "555",
        "deadline": "11/12/2022",
        "price": "58 0333"
    }
])

const editingRowsEmissionInformation = ref([]);
const editingRowsInformationNDT= ref([]);
const onRowEditSaveEmissionInformation= (event) => {
    let { newData, index } = event;
    emissionInformation[index] = newData;
};
const onRowEditSaveInformationNDT= (event) => {
    let { newData, index } = event;
    informationNDT[index] = newData;
};

import {useDialog} from "primevue/usedialog";
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
            if(type=== 'emissionInformation'){
                const newData = options.data;
                emissionInformation.push(...newData)
            }else if(type==='informationNDT'){
                const newData = options.data;
                informationNDT.push(...newData)
            }

        }
    })
}

const columns = [
    { field: 'id', header: '№' },
    { field: 'name', header: 'Наименование мероприятия' },
    { field: 'deadline', header: 'Планируемые сроки выполнения' },
    { field: 'price', header: 'Стоимость' }
];

</script>


<template>
    <div class="flex flex-column">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Информация по выбросам за 2019-2021 года:</h5>

                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddEmissionInformation, 'Информация по планируемому выбытию основного оборудования', emissionInformation, 'emissionInformation')"/>

                <DataTable showGridlines :value="emissionInformation"  sortMode="single" sortField="name" tableStyle="min-width: 50rem"
                           @row-edit-save="onRowEditSaveEmissionInformation" v-model:editingRows="editingRowsEmissionInformation" tableClass="editable-cells-table" editMode="row" dataKey="id">

                    <ColumnGroup type="header">
                        <Row>
                            <Column header="#" :rowspan="3" />
                        </Row>
                        <Row>
                            <Column bodyStyle="text-align:center" header="Контролируемый показатель" :colspan="2" :rowspan="3" />
                            <Column bodyStyle="text-align:center" header="Значения выбросов по годам, тонн" :colspan="3" />

                            <Column bodyStyle="text-align:center" header="Отклонения" :rowspan="2"  />
                            <Column bodyStyle="text-align:center" header="" :rowspan="2"  />
                        </Row>
                        <Row>
                            <Column header="2019" />
                            <Column header="2020" />
                            <Column header="2021" />
                        </Row>
                    </ColumnGroup>

                    <Column header="#" headerStyle="width:3rem">
                        <template #body="slotProps">
                            {{ slotProps.index + 1 }}
                        </template>
                    </Column>

                    <Column header="Наименование Ст. №" field="name"  style="min-width: 200px">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>

                    <Column header="Наименование Ст. №" field="type"  style="min-width: 200px">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>

                    <Column header="Вид ремонта" field="f2019">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column header="Вид ремонта" field="f2020">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column header="Вид ремонта" field="f2021">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column header="Вид ремонта" field="deviation">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column :rowEditor="true" bodyStyle="text-align:center"></Column>
                </DataTable>
            </div>
        </div>

        <div class="mt-3 col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Информация по внедрению НДТ и АСМ</h5>

                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddEmissionInformation, 'Информация по внедрению НДТ и АСМ', informationNDT, 'informationNDT')"/>

                <DataTable showGridlines :value="informationNDT" tableStyle="min-width: 50rem" editMode="row" dataKey="id"
                           @row-edit-save="onRowEditSaveInformationNDT" v-model:editingRows="editingRowsInformationNDT">
                    <Column v-for="col of columns" :key="col.field" :field="col.field" :header="col.header">
                        <template v-if="col.field !== 'id'" #editor="{ data, field }">
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