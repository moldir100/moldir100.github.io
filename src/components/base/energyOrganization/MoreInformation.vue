<script setup>
import {reactive, ref} from 'vue'
const informationAccidents =  reactive([
    {
        "id": 1,
        "deadline": "2019",
        "accidents": "",
        "refusal1": "",
        "refusal2": "",
        "failure": "",
        "fire": "",
    },
    {
        "id": 2,
        "deadline": "2020",
        "accidents": "",
        "refusal1": "",
        "refusal2": "",
        "failure": "",
        "fire": "",
    },
    {
        "id": 3,
        "deadline": "2021",
        "accidents": "",
        "refusal1": "",
        "refusal2": "",
        "failure": "",
        "fire": "",
    },

])
const fuelReverse =  reactive([
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
])
const volumeInformation =  reactive([
    {
        "id": 1,
        "name": "Емкость золоотвалов:",
        "value1": "",
        "value2": "",
    },
    {
        "id": 2,
        "name": "Остаточный ресурс в годах, м3",
        "value1": "",
        "value2": "",
    },
])

const editingRowsInformationAccidents = ref([]);
const editingRowsFuelReverse = ref([]);
const editingRowsVolumeInformation = ref([]);
const onRowEditSaveInformationAccidents = (event) => {
    let { newData, index } = event;

    informationAccidents[index] = newData;
};
const onRowEditSaveFuelReverse = (event) => {
    let { newData, index } = event;

    fuelReverse[index] = newData;
};
const onRowEditSaveVolumeInformation = (event) => {
    let { newData, index } = event;

    volumeInformation[index] = newData;
};
</script>


<template>
    <div class="flex flex-column">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>ИИнформация по количеству технологических нарушений, НС и пожарам:</h5>
                <DataTable showGridlines :value="informationAccidents" sortMode="single" :sortOrder="1" tableStyle="min-width: 50rem"
                           @row-edit-save="onRowEditSaveInformationAccidents" v-model:editingRows="editingRowsInformationAccidents" tableClass="editable-cells-table" editMode="row" dataKey="id">

                    <Column header="#" headerStyle="width:3rem">
                        <template #body="slotProps">
                            {{ slotProps.index + 1 }}
                        </template>
                    </Column>
                    <Column header="Период" field="deadline" >
                        <template #body="slotProps">
                            <div class="flex align-items-center gap-2">
                                <span>{{ slotProps.data.deadline }}</span>
                            </div>
                        </template>

                        <template #editor="{ data, field }">
                            <Calendar v-model="data[field]" view="year" dateFormat="yy"  showIcon />
                        </template>
                    </Column>
                    <Column header="Аварии" field="accidents"  style="min-width: 200px">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Отказы I степени" field="refusal1">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Отказы II степени" field="refusal2" >
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Несчастные случаи" field="failure" >
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Пожары" field="fair" >
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" bodyStyle="text-align:center"></Column>
                </DataTable>

                <p class="mt-3"><b>По крупным технологическим нарушениям необходимо дополнительно указать основные причины:</b></p>
                <p>Информация по несчастным случаям (указать причины):</p>
                <p>Информация по пожарам и возгораниям (указать причины):</p>
            </div>
        </div>

        <div class="mt-3 col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Информация по запасам топлива и объемам топливных складов:</h5>
                <DataTable showGridlines :value="fuelReverse" rowGroupMode="rowspan" sortMode="single" :sortOrder="1" tableStyle="min-width: 50rem"
                           @row-edit-save="onRowEditSaveFuelReverse" v-model:editingRows="editingRowsFuelReverse" tableClass="editable-cells-table" editMode="row" dataKey="id">

                    <ColumnGroup type="header">
                        <Row>
                            <Column header="#" :rowspan="3" />
                            <Column header="По состоянию на 1/I" :rowspan="3" />
                            <Column header="Род применяемого топлива" :rowspan="3" />
                        </Row>
                        <Row>
                            <Column bodyStyle="text-align:center" header="Склад для твердого топлива и подача топлива на электростанцию" :colspan="2" />
                            <Column bodyStyle="text-align:center" header="Хранилище для жидкого топлива" :colspan="2" />
                            <Column bodyStyle="text-align:center" header="Пропускная способность газопровода и ГРП" :rowspan="2"  />
                            <Column bodyStyle="text-align:center" header="Параметры газа до и после ГРП" :rowspan="2"  />
                            <Column header="" :rowspan="2"  />
                        </Row>

                        <Row>
                            <Column header="Емкость склада, т"  />
                            <Column header="Способ топливоподачи со склада" />

                            <Column header="Тип хранилища (подземный или полуподземный)"  />
                            <Column header="Общая емкость, т" />
                        </Row>

                    </ColumnGroup>


                    <Column header="#" headerStyle="width:3rem">
                        <template #body="slotProps">
                            {{ slotProps.index + 1 }}
                        </template>
                    </Column>

                    <Column header="Год" field="year" >
                        <template #body="slotProps">
                            <div class="flex align-items-center gap-2">
                                <span>{{slotProps.data.year }}</span>
                            </div>
                        </template>

                        <template #editor="{ data, field }">
                            <Calendar @change="data[field]" v-model="data[field]" view="year" dateFormat="yy"  showIcon />
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
                    <Column header="Начало" field="dateStart" >
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
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

        <div class="mt-3 col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Информация по золоотвалу и его заполнению:</h5>
                <DataTable showGridlines :value="volumeInformation" rowGroupMode="rowspan" sortMode="single" :sortOrder="1" tableStyle="min-width: 50rem"
                           @row-edit-save="onRowEditSaveVolumeInformation" v-model:editingRows="editingRowsVolumeInformation" tableClass="editable-cells-table" editMode="row" dataKey="id">

                    <Column header="#" headerStyle="width:3rem">
                        <template #body="slotProps">
                            {{ slotProps.index + 1 }}
                        </template>
                    </Column>

                    <Column header="Наименование" field="name"  style="min-width: 200px">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="" field="value1">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="" field="value2" style="min-width: 100px">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" bodyStyle="text-align:center"></Column>
                </DataTable>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>