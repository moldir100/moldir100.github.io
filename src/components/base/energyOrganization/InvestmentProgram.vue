<script setup>
import {defineAsyncComponent, reactive, ref} from 'vue'
import {useDialog} from "primevue/usedialog";
const AddEventsInvestmentProgram = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddEventsInvestmentProgram.vue'));

const data =  reactive([
    {
        "id": 1000,
        "name": "Инвестиционная программа по электрической энергии:",
        "indicators": "План",
        "measure": "млн. тенге",
        "type": "electric",
        "y2019": "12.22",
        "y2020": "12.22",
        "y2021": "12.22",
        "y2022": "12.22",
    },
    {
        "id": 1001,
        "name": "Инвестиционная программа по тепловой энергии:",
        "indicators": "План",
        "measure": "млн. тенге",
        "type": "thermo",
        "y2019": "12.22",
        "y2020": "12.22",
        "y2021": "12.22",
        "y2022": "12.22",
    },
    {
        "id": 1002,
        "name": "Инвестиционная программа по электрической энергии:",
        "indicators": "Факт",
        "measure": "млн. тенге",
        "type": "electric",
        "y2019": "12.22",
        "y2020": "12.22",
        "y2021": "12.22",
        "y2022": "12.22",
    },
    {
        "id": 1003,
        "name": "Инвестиционная программа по тепловой энергии:",
        "indicators": "Факт",
        "measure": "млн. тенге",
        "type": "thermo",
        "y2019": "12.22",
        "y2020": "12.22",
        "y2021": "12.22",
        "y2022": "12.22",
    },
    {
        "id": 1004,
        "name": "Инвестиционная программа по электрической энергии:",
        "indicators": "Освоено",
        "measure": "млн. тенге",
        "type": "electric",
        "y2019": "12.22",
        "y2020": "12.22",
        "y2021": "12.22",
        "y2022": "12.22",
    },
    {
        "id": 1005,
        "name": "Инвестиционная программа по тепловой энергии:",
        "indicators": "Освоено",
        "measure": "млн. тенге",
        "type": "thermo",
        "y2019": "12.22",
        "y2020": "12.22",
        "y2021": "12.22",
        "y2022": "12.22",
    },
])

const investmentDone =  reactive([
    {
        "id": 1000,
        "year": "2019",
        "indicators": "План",
        "measure": "млн. тенге",
        "y2019": "12.22",
        "y2020": "12.22",
        "y2021": "12.22",
        "y2022": "12.22",
    },
    {
        "id": 1001,
        "year": "2020",
        "indicators": "План",
        "measure": "млн. тенге",
        "y2019": "12.22",
        "y2020": "12.22",
        "y2021": "12.22",
        "y2022": "12.22",
    },
    {
        "id": 1002,
        "year": "2021",
        "indicators": "Факт",
        "measure": "млн. тенге",
        "y2019": "12.22",
        "y2020": "12.22",
        "y2021": "12.22",
        "y2022": "12.22",
    },
    {
        "id": 1003,
        "year": "2019",
        "indicators": "Факт",
        "measure": "млн. тенге",
        "y2019": "12.22",
        "y2020": "12.22",
        "y2021": "12.22",
        "y2022": "12.22",
    },
    {
        "id": 1004,
        "year": "2021",
        "indicators": "Освоено",
        "measure": "млн. тенге",
        "y2019": "12.22",
        "y2020": "12.22",
        "y2021": "12.22",
        "y2022": "12.22",
    },
    {
        "id": 1005,
        "year": "2020",
        "indicators": "Освоено",
        "measure": "млн. тенге",
        "y2019": "12.22",
        "y2020": "12.22",
        "y2021": "12.22",
        "y2022": "12.22",
    },
])

const events =  reactive([
    {
        "id": 1,
        "name": "План 1",
        "price": "25 000",
        "dateStart": "30.02.2013",
        "dateEnd": "30.02.2013"
    },
    {
        "id": 2,
        "name": "План 2",
        "price": "25 000",
        "dateStart": "30.02.2013",
        "dateEnd": "30.02.2013"
    },
    {
        "id": 3,
        "name": "План 3",
        "price": "25 000",
        "dateStart": "30.02.2013",
        "dateEnd": "30.02.2013"
    },
])
const plannedEquipment =  reactive([
    {
        "id": 1,
        "name": "План 1",
        "description": "-",
        "plannedDate": "30.02.2013",
        "finance": "13 000$"
    },
    {
        "id": 2,
        "name": "План 2",
        "description": "-",
        "plannedDate": "30.02.2013",
        "finance": "63 000$"
    },
])

const editingRows = ref([]);
const editingRowsDone = ref([]);
const editingRowsEvents = ref([]);
const editingRowsPlannedEquipment = ref([]);

const onRowEditSave = (event) => {
    let { newData, index } = event;

    data[index] = newData;
};
const onRowEditSaveDone = (event) => {
    let { newData, index } = event;

    investmentDone[index] = newData;
};
const onRowEditSaveEvents = (event) => {
    let { newData, index } = event;

    events[index] = newData;
};
const onRowEditSavePlannedEquipment = (event) => {
    let { newData, index } = event;

    plannedEquipment[index] = newData;
};

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
            if(type === 'events'){
                const newData = options.data;
                events.push(...newData)
            }else if(type === 'plannedEquipment'){
                const newData = options.data;
                plannedEquipment.push(...newData)
            }
        }
    })
}

</script>


<template>
    <div class="flex flex-column">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Исполнение Инвестиционных программ</h5>

                <DataTable showGridlines :value="data" rowGroupMode="rowspan" groupRowsBy="type" sortMode="single" sortField="type" :sortOrder="1" tableStyle="min-width: 50rem"
                           @row-edit-save="onRowEditSave" v-model:editingRows="editingRows" tableClass="editable-cells-table" editMode="row" dataKey="id">
                    <Column header="#" headerStyle="width:3rem">
                        <template #body="slotProps">
                            {{ slotProps.index + 1 }}
                        </template>
                    </Column>
                    <Column field="type" header="Тип" style="width: 300px">
                        <template #body="slotProps">
                            <div class="flex align-items-center gap-2">
                                <span>{{ slotProps.data.name }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="indicators" header="Показатели" ></Column>
                    <Column field="measure" header="Ед. изм.">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="y2019" header="2019">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="y2020" header="2020">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="y2021" header="2021">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="y2022" header="2022">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" bodyStyle="text-align:center"></Column>
                </DataTable>
            </div>
        </div>

        <div class="mt-3 col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Информация по выполненным мероприятиям по рынку мощности и финансирование за готовность станции по рынку мощности</h5>

                <DataTable showGridlines :value="investmentDone" rowGroupMode="rowspan" groupRowsBy="year" sortMode="single" sortField="year" :sortOrder="1" tableStyle="min-width: 50rem"
                           @row-edit-save="onRowEditSaveDone" v-model:editingRows="editingRowsDone" tableClass="editable-cells-table" editMode="row" dataKey="id">

                    <ColumnGroup type="header">
                        <Row>
                            <Column header="#" :rowspan="3" />
                            <Column header="Период, год" :rowspan="3" />
                            <Column header="Сумма средств полученных за готовность станции по рынку мощности" :rowspan="3" />
                            <Column header="Наименование мероприятия" :rowspan="3" />
                        </Row>
                        <Row>
                            <Column bodyStyle="text-align:center" header="Сроки выполнения" :colspan="2" />
                            <Column bodyStyle="text-align:center" header="Стоимость, млн. тенге" :colspan="2" />
                            <Column bodyStyle="text-align:center" header="Описание выполненных работ" :rowspan="2"  />
                            <Column bodyStyle="text-align:center" header="" :rowspan="2"  />
                        </Row>

                        <Row>
                            <Column header="Начало"  />
                            <Column header="Завершение" />

                            <Column header="План"  />
                            <Column header="Факт" />
                        </Row>

                    </ColumnGroup>

                    <Column header="#" headerStyle="width:3rem">
                        <template #body="slotProps">
                            {{ slotProps.index + 1 }}
                        </template>
                    </Column>
                    <Column field="year" header="Тип" style="width: 250px">
                        <template #body="slotProps">
                            <div class="flex align-items-center gap-2">
                                <span>{{ slotProps.data.year }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="indicators" header="Показатели" ></Column>
                    <Column field="measure" header="Ед. изм.">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="y2019" header="2019">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="y2020" header="2020">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="y2021" header="2021">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="y2022" header="2022">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="y2022" header="2022">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" bodyStyle="text-align:center"></Column>
                </DataTable>
            </div>
        </div>

        <div class="mt-3 col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Информация по мероприятиям, которые предусмотрены в инвестиционных соглашениях по рынку мощности</h5>

                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddEventsInvestmentProgram, 'Информация по мероприятиям, которые предусмотрены в инвестиционных соглашениях по рынку мощности', events, 'events')"/>

                <DataTable showGridlines :value="events" rowGroupMode="rowspan" :sortOrder="1" tableStyle="min-width: 50rem"
                           @row-edit-save="onRowEditSaveEvents" v-model:editingRows="editingRowsEvents" tableClass="editable-cells-table" editMode="row" dataKey="id">

                    <ColumnGroup type="header">
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
                            <Column header="Начало"  />
                            <Column header="Завершение" />
                        </Row>

                    </ColumnGroup>

                    <Column header="#">
                        <template #body="slotProps">
                            {{ slotProps.index + 1 }}
                        </template>
                    </Column>
                    <Column field="name" header="Тип" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="price" header="Показатели" bodyStyle="text-align:center" >
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="dateStart" header="2022">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="dateEnd" header="2022">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" bodyStyle="text-align:center"></Column>
                </DataTable>

            </div>
        </div>

        <div class="mt-3 col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Информация по запланированным вводам нового оборудования, реконструкции и модернизации основного оборудования</h5>

                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddEventsInvestmentProgram, 'Информация по запланированным вводам нового оборудования, реконструкция и модернизация основного оборудования', plannedEquipment, 'plannedEquipment')"/>

                <DataTable showGridlines :value="plannedEquipment" rowGroupMode="rowspan" :sortOrder="1" tableStyle="min-width: 50rem"
                           @row-edit-save="onRowEditSavePlannedEquipment" v-model:editingRows="editingRowsPlannedEquipment" tableClass="editable-cells-table" editMode="row" dataKey="id">

                    <Column header="#">
                        <template #body="slotProps">
                            {{ slotProps.index + 1 }}
                        </template>
                    </Column>
                    <Column field="name" header="Наименование оборудования" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="description" header="Описание вида работ" bodyStyle="text-align:center" >
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="plannedDate" header="Планируемые сроки ">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="finance" header="Источник финансирования">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem"  v-model="data[field]" />
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