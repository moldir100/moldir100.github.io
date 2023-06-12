<script setup>
import {reactive, ref} from 'vue'

const fuelReverse =  reactive([
    {
        "id": 1,
        "name": "Hh",
        "indicators": "Объем реализации",
        "y2019": '',
        "y2020": '',
        "y2021": '',
        "y2022": '',

        "debitStart": '',
        "debitEnd": '',
        "creditStart": '',
        "creditEnd": '',

    },
    {
        "id": 2,
        "name": "Hh",
        "indicators": "Объем реализации",
        "y2019": '',
        "y2020": '',
        "y2021": '',
        "y2022": '',

        "debitStart": '',
        "debitEnd": '',
        "creditStart": '',
        "creditEnd": '',

    },
])

const editingRowsFuelReverse = ref([]);
const onRowEditSaveFuelReverse = (event) => {
    let { newData, index } = event;

    fuelReverse[index] = newData;
};
</script>


<template>
    <div class="flex">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Информация по потребителям</h5>
                <p>Реализация электрической энергии</p>
                <DataTable showGridlines :value="fuelReverse" rowGroupMode="rowspan" sortMode="single" :sortOrder="1" tableStyle="min-width: 50rem"
                           @row-edit-save="onRowEditSaveFuelReverse" v-model:editingRows="editingRowsFuelReverse" tableClass="editable-cells-table" editMode="row" dataKey="id">

                    <ColumnGroup type="header">
                        <Row>
                            <Column header="#" :rowspan="3" />
                            <Column header="Наименование потребителя" :rowspan="3" />
                            <Column header="Показатели" :rowspan="3" />
                        </Row>
                        <Row>
                            <Column bodyStyle="text-align:center" header="Период" :colspan="4" />
                            <Column bodyStyle="text-align:center" header="Дебиторская задолженность по состоянию на" :colspan="2" />
                            <Column bodyStyle="text-align:center" header="Кредиторская задолженность по состоянию на" :colspan="2" />
                            <Column header="" :rowspan="2"  />
                        </Row>

                        <Row>
                            <Column header="2019"  />
                            <Column header="2020" />
                            <Column header="2021" />
                            <Column header="2022" />

                            <Column header="31.12.2021"  />
                            <Column header="01.06.2022" />

                            <Column header="31.12.2021"  />
                            <Column header="01.06.2022" />
                        </Row>

                    </ColumnGroup>

                    <Column header="#" headerStyle="width:3rem">
                        <template #body="slotProps">
                            {{ slotProps.index + 1 }}
                        </template>
                    </Column>
                    <Column header="Наименование потребителя" field="name"  style="min-width: 200px">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Вид ремонта" field="indicators">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Начало" field="y2019" >
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Окончание" field="y2020">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Начало" field="y2021" >
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Начало" field="y2022" >
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Начало" field="debitStart" >
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Начало" field="debitEnd" >
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Начало" field="creditStart" >
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column header="Начало" field="creditEnd" >
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
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