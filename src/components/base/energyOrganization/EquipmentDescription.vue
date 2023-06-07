<script setup>
import {ref, onMounted, reactive, defineAsyncComponent} from 'vue';
import {useDialog} from "primevue/usedialog";
// import { ProductService } from '@/service/ProductService';

const products = ref();
const editingRows = ref([]);
const statuses = ref([
    { label: 'In Stock', value: 'INSTOCK' },
    { label: 'Low Stock', value: 'LOWSTOCK' },
    { label: 'Out of Stock', value: 'OUTOFSTOCK' }
]);

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
                "name": " Ст.№ 7, ЦКТИ-75-39, 1953 г.",
                "consumption": "75",
                "parameters": "39/435",
                "norm": "88,5÷89,6/66,25÷83,54",
                "fact": "89,4/74,3",
                "recourse": "20 лет",
                "operating": 200613,
                "work": 200613,
                "inventoryStatus": " Ст.№ 7, ЦКТИ-75-39, 1953 г.",
            },
            {
                "id": "2",
                "name": " Ст.№ 8, ЦКТИ-75-39, 1956 г.",
                "consumption": "75",
                "parameters": "39/435",
                "norm": "88,5÷89,6/66,25÷83,54",
                "fact": "89,4/74,3",
                "recourse": "20 лет",
                "operating": 200613,
                "work": 200613,
            },
            {
                "id": "3",
                "name": "Ст.№ 9, ЦКТИ-75-39, 1957 г.",
                "description": "Product Description",
                "consumption": "75",
                "parameters": "39/435",
                "norm": "88,5÷89,6/66,25÷83,54",
                "fact": "89,4/74,3",
                "recourse": "20 лет",
                "operating": 200613,
                "work": 200613,
            },
            {
                "id": "4",
                "name": "Ст.№ 10, ЦКТИ-75-39, 1957 г.",
                "consumption": "75",
                "parameters": "39/435",
                "norm": "88,5÷89,6/66,25÷83,54",
                "fact": "89,4/74,3",
                "recourse": "20 лет",
                "operating": 200613,
                "work": 200613,
            },
            {
                "id": "5",
                "name": "Ст.№ 11, БКЗ-320-140, 1966 г.",
                "consumption": "75",
                "parameters": "39/435",
                "norm": "88,5÷89,6/66,25÷83,54",
                "fact": "89,4/74,3",
                "recourse": "20 лет",
                "operating": 200613,
                "work": 200613,
            },
            {
                "id": "6",
                "name": "Ст.№ 12, БКЗ-320-140, 1967 г.",
                "consumption": "75",
                "parameters": "39/435",
                "norm": "88,5÷89,6/66,25÷83,54",
                "fact": "89,4/74,3",
                "recourse": "20 лет",
                "operating": 200613,
                "work": 200613,
            },
            {
                "id": "7",
                "name": "Ст.№ 13, БКЗ-320-140, 1970 г.",
                "consumption": "75",
                "parameters": "39/435",
                "norm": "88,5÷89,6/66,25÷83,54",
                "fact": "89,4/74,3",
                "recourse": "20 лет",
                "operating": 200613,
                "work": 200613,
            },
            {
                "id": "8",
                "name": "Ст.№ 14, БКЗ-320-140, 1970 г.",
                "consumption": "75",
                "parameters": "39/435",
                "norm": "88,5÷89,6/66,25÷83,54",
                "fact": "89,4/74,3",
                "recourse": "20 лет",
                "operating": 200613,
                "work": 200613,
            },
            {
                "id": "9",
                "name": " Ст.№ 15, ТПЕ-430А (Е-500), 1991 г.",
                "consumption": "75",
                "parameters": "39/435",
                "norm": "88,5÷89,6/66,25÷83,54",
                "fact": "89,4/74,3",
                "recourse": "20 лет",
                "operating": 200613,
                "work": 200613,
            },
    // {
    //     "id": "1001","code": "nvklal433","name": "Black Watch",
    //     "description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4
    // },

])

// onMounted(() => {
//     ProductService.getProductsMini().then((data) => (products.value = data));
// });

const onRowEditSave = (event) => {
    let { newData, index } = event;

    products.value[index] = newData;
};
const getStatusLabel = (status) => {
    switch (status) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
};
const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
}

const AddEquipmentTable1 = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddEquipmentTable1.vue'));
const AddEquipmentTable2 = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddEquipmentTable2.vue'));

const dialog = useDialog();
const showAddModal = function (value, name){
    dialog.open( value,{
        props: {
            header: name,
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
        }
    })
}

</script>


<template>
    <div class="flex flex-column">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Основные технические характеристики основного котельного оборудования:</h5>

                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddEquipmentTable1, 'Основные технические характеристики основного котельного оборудования:')"/>
                <DynamicDialog/>

                <DataTable columnResizeMode="fit"  showGridlines  v-model:editingRows="editingRows" :value="data" editMode="row" dataKey="id"
                           @row-edit-save="onRowEditSave" tableClass="editable-cells-table" tableStyle="min-width: 50rem">

                    <ColumnGroup type="header">
                        <Row>
                            <Column header="#" :rowspan="3" />
                            <Column header="Наименование энергетического или водогрейного котла (станционный №, тип, марка, год ввода)" :rowspan="3" />
                        </Row>
                        <Row>
                            <Column header="Производительность, тонн/час." />
                            <Column header="Параметры пара (давление, кгс/см2 температура оС)."  />
                            <Column bodyStyle="text-align:center" header="КПД котла брутто/ нетто" :colspan="2" />
                            <Column bodyStyle="text-align:center" header="Парковый ресурс, час" :rowspan="2"  />
                            <Column header="Наработка, час " :rowspan="2"  />
                            <Column header="Износ, %" :rowspan="2"  />
                            <Column header="" :rowspan="2"  />
                        </Row>

                        <Row>
                            <Column header="Расход сетевой воды, тонн/час"   />
                            <Column header="Параметры сетевой воды (давление, температура до и после котла)"  />
                            <Column header="Проектное"  />
                            <Column header="Фактическое" />
                        </Row>

                    </ColumnGroup>

                    <Column field="id" bodyStyle="text-align:center" header="Code">
                        <template >
                            <InputText style="width: 20%" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="name" bodyStyle="text-align:center" header="Status" style="width: 20%">
                        <template #editor="{ data, field }">
                            <Dropdown v-model="data[field]" :options="equipments" optionLabel="label" optionValue="value" placeholder="Select a Status">
                                <template #option="slotProps">
                                    {{slotProps.option.name}}
                                </template>
                            </Dropdown>
                        </template>
                        <template #body="slotProps">
<!--                            <Tag :value="slotProps.data.inventoryStatus" :severity="slotProps.data.inventoryStatus" />-->
                            {{slotProps.data.name}}
                        </template>
                    </Column>
                    <Column field="consumption" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="parameters" header="Name" bodyStyle="text-align:center" style="width: 20%">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="norm" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="fact" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="recourse" header="Price" bodyStyle="text-align:center" >
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="operating" header="Price" bodyStyle="text-align:center" style="width: 20%">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="work" header="Price" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" bodyStyle="text-align:center"></Column>
                </DataTable>
            </div>
        </div>

        <div class="col-12 border-round-lg bg-white ml-0 mt-3">
            <div class="col-12 flex flex-column">
                <h5>Основные технические характеристики основного турбинного оборудования</h5>

                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddEquipmentTable2, 'Основные технические характеристики основного турбинного оборудования')"/>
                <DynamicDialog/>

                <DataTable columnResizeMode="fit"  showGridlines  v-model:editingRows="editingRows" :value="data" editMode="row" dataKey="id"
                           @row-edit-save="onRowEditSave" tableClass="editable-cells-table" tableStyle="min-width: 50rem">

                    <ColumnGroup type="header">
                        <Row>
                            <Column header="#" :rowspan="3" />
                            <Column header="Наименование энергетического или водогрейного котла (станционный №, тип, марка, год ввода)" :rowspan="3" />
                        </Row>
                        <Row>
                            <Column header="Производительность, тонн/час." />
                            <Column header="Параметры пара (давление, кгс/см2 температура оС)."  />
                            <Column bodyStyle="text-align:center" header="КПД котла брутто/ нетто" :colspan="2" />
                            <Column bodyStyle="text-align:center" header="Парковый ресурс, час" :rowspan="2"  />
                            <Column header="Наработка, час " :rowspan="2"  />
                            <Column header="Износ, %" :rowspan="2"  />
                            <Column header="" :rowspan="2"  />
                        </Row>

                        <Row>
                            <Column header="Расход сетевой воды, тонн/час"   />
                            <Column header="Параметры сетевой воды (давление, температура до и после котла)"  />
                            <Column header="Проектное"  />
                            <Column header="Фактическое" />
                        </Row>

                    </ColumnGroup>

                    <Column field="id" bodyStyle="text-align:center" header="Code">
                        <template >
                            <InputText style="width: 20%" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="name" bodyStyle="text-align:center" header="Status" style="width: 20%">
                        <template #editor="{ data, field }">
                            <Dropdown v-model="data[field]" :options="equipments" optionLabel="label" optionValue="value" placeholder="Select a Status">
                                <template #option="slotProps">
                                    {{slotProps.option.name}}
                                </template>
                            </Dropdown>
                        </template>
                        <template #body="slotProps">
                            <!--                            <Tag :value="slotProps.data.inventoryStatus" :severity="slotProps.data.inventoryStatus" />-->
                            {{slotProps.data.name}}
                        </template>
                    </Column>
                    <Column field="consumption" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="parameters" header="Name" bodyStyle="text-align:center" style="width: 20%">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="norm" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="fact" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="recourse" header="Price" bodyStyle="text-align:center" >
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="operating" header="Price" bodyStyle="text-align:center" style="width: 20%">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="work" header="Price" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column :rowEditor="true" bodyStyle="text-align:center"></Column>
                </DataTable>
            </div>
        </div>

        <div class="col-12 border-round-lg bg-white ml-0 mt-3">
            <div class="col-12 flex flex-column">
                <h5>Основные технические характеристики гидротурбины</h5>
            </div>
        </div>

        <div class="col-12 border-round-lg bg-white ml-0 mt-3">
            <div class="col-12 flex flex-column">
                <h5>Основные технические характеристики генераторов</h5>
            </div>
        </div>

        <div class="col-12 border-round-lg bg-white ml-0 mt-3">
            <div class="col-12 flex flex-column">
                <h5>Основные технические характеристики блочных трансформаторов</h5>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>