<script setup>
import {reactive} from "vue";

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

const data = reactive([
    {
        "id": "1",
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

// const addRow = function (){
//     let last = data[data.length - 1]
//     console.log("last", last)
//     if(last.name === ''){
//         console.log("введите все данные")
//     }else{
//         data.push(
//             {
//                 "id": data.length+1,
//                 "name": "",
//                 "consumption": "",
//                 "parameters": "",
//                 "norm": "",
//                 "fact": "",
//                 "recourse": "",
//                 "operating": null,
//                 "work": null,
//             },
//         )
//     }
// }

import { useField, useForm } from 'vee-validate';

const { handleSubmit, resetForm } = useForm();

const { value, errorMessage } = useField('value', validateField);

function  validateField(value){
    if(!value){
        return 'Введите...'
    }
    return true
}

const addRow = handleSubmit((values) => {
    let last = data[data.length - 1]
    console.log("last", last)
    // if(last.name === '' && values.value){
    if(1<2){

        console.log("введите все данные")
    }else{
        data.push(
            {
                "id": data.length+1,
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
})


</script>


<template>

  <!--    таблица-->
    <DataTable editMode="cell"  columnResizeMode="fit"  showGridlines  v-model:editingRows="editingRows" :value="data"  dataKey="id"
               @cell-edit-complete="onCellEditComplete" @row-edit-save="onRowEditSave" tableClass="editable-cells-table" tableStyle="min-width: 50rem">

        <ColumnGroup type="header">
            <Row>
                <Column header="#" :rowspan="3" />
                <Column bodyClass="font-size: 12px" header="Наименование энергетического или водогрейного котла (станционный №, тип, марка, год ввода)" :rowspan="3" />
            </Row>
            <Row>
                <Column header="Производительность, тонн/час." />
                <Column header="Параметры пара (давление, кгс/см2 температура оС)."  />
                <Column bodyStyle="text-align:center" header="КПД котла брутто/ нетто" :colspan="2" />
                <Column bodyStyle="text-align:center" header="Парковый ресурс, час" :rowspan="2"  />
                <Column header="Наработка, час " :rowspan="2"  />
                <Column header="Износ, %" :rowspan="2"  />
            </Row>

            <Row>
                <Column header="Расход сетевой воды, тонн/час"  field="lastYearSale" />
                <Column header="Параметры сетевой воды (давление, температура до и после котла)" field="thisYearSale" />
                <Column header="Проектное"  field="lastYearProfit" />
                <Column header="Фактическое" field="lastYearProfit" />
            </Row>

        </ColumnGroup>

        <Column field="id" bodyStyle="text-align:center" header="Code">
            <template >
                <InputText style="width: 20%" v-model="data[field]" />
            </template>
        </Column>
        <Column field="name" bodyStyle="text-align:center" header="Status" style="width: 20%">
            <template #body="{ data, field }">
                <Dropdown :class="{ 'p-invalid': errorMessage }" v-model="data[field]"  :options="equipments" optionLabel="label" optionValue="value" placeholder="Select a Status">
                    <template #option="slotProps">
                        {{slotProps.option.name}}
                    </template>
                </Dropdown>
            </template>
        </Column>
        <Column field="consumption" header="Name" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText :class="{ 'p-invalid': errorMessage }" class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="parameters" header="Name" bodyStyle="text-align:center" style="width: 20%">
            <template #body="{ data, field }">
                <InputText :class="{ 'p-invalid': errorMessage }" class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="norm" header="Name" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText :class="{ 'p-invalid': errorMessage }" v-model="data[field]" />
            </template>
        </Column>
        <Column field="fact" header="Name" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText :class="{ 'p-invalid': errorMessage }" class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="recourse" header="Price" bodyStyle="text-align:center" >
            <template #body="{ data, field }">
                <InputText :class="{ 'p-invalid': errorMessage }" class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="operating" header="Price" bodyStyle="text-align:center" style="width: 20%">
            <template #body="{ data, field }">
                <InputText :class="{ 'p-invalid': errorMessage }" class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
        <Column field="work" header="Price" bodyStyle="text-align:center">
            <template #body="{ data, field }">
                <InputText :class="{ 'p-invalid': errorMessage }" class="w-5rem" v-model="data[field]" />
            </template>
        </Column>
    </DataTable>
    <Button @click="addRow()" class="mt-3" icon="pi pi-plus" rounded aria-label="Filter" />

  <!--        footer кнопка сохранить-->
    <div class="flex justify-content-start mt-8">
        <Button type="button" label="Сохранить" icon="pi pi-check" @click="closeDialog({ buttonType: 'Yes' })" autofocus></Button>
        <Button type="button" label="Отменить" icon="pi pi-times" @click="closeDialog({ buttonType: 'No' })" text></Button>
    </div>

</template>


<style scoped>

</style>