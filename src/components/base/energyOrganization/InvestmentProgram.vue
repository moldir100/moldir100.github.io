<script setup>
import {reactive, ref} from 'vue'

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

const data2 =  reactive([
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

const products = ref();
const editingRows = ref([]);

const onRowEditSave = (event) => {
    let { newData, index } = event;

    products.value[index] = newData;
};

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


                <DataTable showGridlines :value="data2" rowGroupMode="rowspan" groupRowsBy="type" sortMode="single" sortField="type" :sortOrder="1" tableStyle="min-width: 50rem"
                           @row-edit-save="onRowEditSave" v-model:editingRows="editingRows" tableClass="editable-cells-table" editMode="row" dataKey="id">

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
                    <Column field="type" header="Тип" style="width: 250px">
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

            </div>
        </div>
        <div class="mt-3 col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Информация по запланированным вводам нового оборудования, реконструкции и модернизации основного оборудования</h5>

            </div>
        </div>

    </div>
</template>


<style scoped>

</style>