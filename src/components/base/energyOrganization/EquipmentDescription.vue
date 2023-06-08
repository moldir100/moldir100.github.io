<script setup>
import {ref, onMounted, reactive, defineAsyncComponent} from 'vue';
import {useDialog} from "primevue/usedialog";

const editingRowsBoiler = ref([]);
const editingRowsTurbine = ref([]);
const editingRowsHydroTurbine = ref([]);
const editingRowsGenerator = ref([]);
const editingRowsTransformer= ref([]);

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

const boiler = reactive([
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
])
const turbine = reactive([
            {
                "id": "1",
                "name": " Ст.№ 7, ЦКТИ-75-39, 1953 г.",
                "consumption": "75",
                "parameters": "39/435",
                "norm": "88,5÷89,6/66,25÷83,54",
                "fact": "89,4/74,3",
                "recourse": "Парковый ресурс не устанавливается.\n" +
                    "Проведено техническое диагностирование в  2021г.  Выводы экспертного заключения №17 - от 07 ноября  2021г. - допускается к дальнейшей эксплуатации на 16 тыс.ч. до наработки 230 948  часов. ",
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
                "recourse": "Парковый ресурс не устанавливается.\n" +
                    "Проведено техническое диагностирование в  2018г.  Выводы экспертного заключения №6-18 - от 18 июня  2018г. - допускается к дальнейшей эксплуатации сроком на 4 года",
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
                "recourse": "Парковый ресурс не устанавливается.\n" +
                    "Проведено техническое диагностирование в  2019г.  Выводы экспертного заключения №194/19 - от 01 ноября 2019г. - допускается к дальнейшей эксплуатации на 24 тыс.ч. до наработки 412 566  часов.",
                "operating": 200613,
                "work": 200613,
            },
])
const hydroTurbine = reactive([
    {
        "id": "1",
        "type": "ПЛ50-В-850",

        "powerNominal": "120 МВт/240 МВт",
        "powerCalculated": "120 МВт/240 МВт",

        "pressureNominal": "23,5/40,0",
        "pressureCalculated": "23,5/40,0",

        "frequencyNominal": "75,0/93,8",
        "frequencyCalculated": "75,0/93,8",

        "diameter": "8,5 м",
        "resource": "-",
        "operating": "167833.08",
        "work": "8.56",
    },
    {
        "id": "2",
        "type": "ПЛ50-В-850",

        "powerNominal": "120 МВт/240 МВт",
        "powerCalculated": "120 МВт/240 МВт",

        "pressureNominal": "23,5/40,0",
        "pressureCalculated": "23,5/40,0",

        "frequencyNominal": "75,0/93,8",
        "frequencyCalculated": "75,0/93,8",

        "diameter": "8,5 м",
        "resource": "-",
        "operating": "167833.08",
        "work": "8.56",
    },
])
const generator = reactive([
    {
        "id": "1",
        "name": "Гидрогенератор (Г-1, зонтичного типа СВ-1436/200-80 УХЛ4, 1987г.)",

        "power": "130 000",
        "powerCoefficient": "0.9",

        "amper": "5 440",
        "voltage": "13.8",

        "kpd": "98",
        "resource": "-",

        "operating": "167833",
        "work": "8.56",
    },
    {
        "id": "2",
        "name": "Гидрогенератор (Г-2, зонтичного типа СВ-1436/200-80 УХЛ4, 1988г.)",

        "power": "130 000",
        "powerCoefficient": "0.9",

        "amper": "5 440",
        "voltage": "13.8",

        "kpd": "98",
        "resource": "-",

        "operating": "167833",
        "work": "8.56",
    },
])
const transformer = reactive([
    {
        "id": "1",
        "type": "Блочный трансформатор (Т-1, двухобмоточный ТЦ-250000/242-13,8кВ, 1987г.) ",
        "power": "130 000",

        "voltageBH": "0.9",
        "voltageCH": "0.9",
        "voltageHH": "0.9",

        "powerLossIDLE": "45",
        "powerLossKZ": "/48.5",

        "amperIDLE": "542",
        "voltageKZ": "100 000",
        "schemeGroup": "44",

        "kpd": "98",
        "resource": "-",
        "operating": "167833",
        "work": "8.56",
    },
    {
        "id": "2",
        "type": "Блочный трансформатор (Т-2, двухобмоточный ТЦ-250000/242-13,8кВ, 1988г.)",
        "power": "130 000",

        "voltageBH": "0.9",
        "voltageCH": "0.9",
        "voltageHH": "0.9",

        "powerLossIDLE": "4005",
        "powerLossKZ": "/55.5",

        "amperIDLE": "542",
        "voltageKZ": "100 000",
        "schemeGroup": "44",

        "kpd": "98",
        "resource": "-",
        "operating": "167833",
        "work": "8.56",
    },
])

const AddEquipmentTable1 = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddEquipmentTable1.vue'));
const AddEquipmentTable2 = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddEquipmentTable2.vue'));
const AddEquipmentTable3 = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddEquipmentTable3.vue'));
const AddEquipmentTable4 = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddEquipmentTable4.vue'));
const AddEquipmentTable5 = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddEquipmentTable5.vue'));

const dialog = useDialog();
const showAddModal = function (value, name, object, type ){
    dialog.open( value,{
        props: {
            header: name,
            dataLength: object.length,
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
            if(type === 'boiler'){
                const newData = options.data;
                boiler.push(...newData)
            }else
                if(type === 'turbine'){
                    const newData = options.data;
                    turbine.push(...newData)
                }else
                    if(type === 'hydroTurbine'){
                        const newData = options.data;
                        hydroTurbine.push(...newData)
                    }else
                        if(type === 'generator'){
                            const newData = options.data;
                            generator.push(...newData)
                        }else
                            if(type === 'transformer'){
                                const newData = options.data;
                                transformer.push(...newData)
                            }
        }
    })
}
const onRowEditSaveBoiler = (event) => {

    let { newData, index } = event;

    boiler[index] = newData;
};
const onRowEditSaveTurbine = (event) => {

    let { newData, index } = event;

    turbine[index] = newData;
};
const onRowEditSaveHydroTurbine = (event) => {

    let { newData, index } = event;

    hydroTurbine[index] = newData;
};
const onRowEditSaveGenerator = (event) => {

    let { newData, index } = event;

    generator[index] = newData;
};
const onRowEditSaveTransformer = (event) => {

    let { newData, index } = event;

    transformer[index] = newData;
};

</script>


<template>
    <div class="flex flex-column">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Основные технические характеристики основного котельного оборудования:</h5>

                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddEquipmentTable1, 'Основные технические характеристики основного котельного оборудования:', boiler, 'boiler')"/>

                <DataTable columnResizeMode="fit"  showGridlines  v-model:editingRows="editingRowsBoiler" :value="boiler" editMode="row" dataKey="id"
                           @row-edit-save="onRowEditSaveBoiler" tableClass="editable-cells-table" tableStyle="min-width: 50rem">

                    <ColumnGroup type="header">
                        <Row>
                            <Column header="№" :rowspan="3" />
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
                            <InputText  v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="name" bodyStyle="text-align:center" header="Status">
                        <template #editor="{ data, field }">
                            <Dropdown v-model="data[field]" :options="equipments" optionLabel="name" optionValue="name" placeholder="Выберите наименование">
                            </Dropdown>
                        </template>
                        <template #body="slotProps">
                            {{slotProps.data.name}}
                        </template>
                    </Column>
                    <Column field="consumption" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="parameters" header="Name" bodyStyle="text-align:center">
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
                    <Column field="operating" header="Price" bodyStyle="text-align:center">
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

                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddEquipmentTable2, 'Основные технические характеристики основного турбинного оборудования', turbine, 'turbine')"/>

                <DataTable showGridlines v-model:editingRows="editingRowsTurbine" :value="turbine" editMode="row" dataKey="id"
                           @row-edit-save="onRowEditSaveTurbine" tableClass="editable-cells-table" tableStyle="min-width: 50rem">

                    <ColumnGroup type="header">
                        <Row>
                            <Column header="№" :rowspan="3" />
                            <Column header="Наименование энергетического или водогрейного котла (станционный №, тип, марка, год ввода)" :rowspan="3" />
                        </Row>
                        <Row>
                            <Column header="Мощность, МВТ" />
                            <Column bodyStyle="text-align:center" header="Параметры пара (давление, кгс/см2 температура оС). Параметры газа. " :rowspan="2"  />

                            <Column bodyStyle="text-align:center" header="Внутренний относительный КПД" :colspan="2" />
                            <Column bodyStyle="text-align:center" header="Парковый ресурс, час" :rowspan="2"  />
                            <Column header="Наработка, час " :rowspan="2" />
                            <Column header="Износ, %" :rowspan="2"  />
                            <Column header="" :rowspan="2"  />
                        </Row>

                        <Row>
                            <Column header="Расход пара, тонн/час (газа, м3/час)"   />
                            <Column header="Проектное"  />
                            <Column header="Фактическое" />
                        </Row>

                    </ColumnGroup>

                    <Column field="id" bodyStyle="text-align:center" header="Code">
                        <template >
                            <InputText style="width: 20%" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="name" bodyStyle="text-align:center" header="Status">
                        <template #editor="{ data, field }">
                            <Dropdown v-model="data[field]" :options="equipments" optionLabel="name" optionValue="name" placeholder="Выберите наименование">
                            </Dropdown>
                        </template>
                        <template #body="slotProps">
                            {{slotProps.data.name}}
                        </template>
                    </Column>
                    <Column field="consumption" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="parameters" header="Name" bodyStyle="text-align:center">
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
                            <Textarea   v-model="data[field]" rows="4" cols="22" />
                        </template>
                    </Column>
                    <Column field="operating" header="Price" bodyStyle="text-align:center">
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

                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddEquipmentTable3, 'Основные технические характеристики гидротурбины', hydroTurbine, 'hydroTurbine')"/>

                <DataTable showGridlines v-model:editingRows="editingRowsHydroTurbine" :value="hydroTurbine" editMode="row" dataKey="id"
                           @row-edit-save="onRowEditSaveHydroTurbine" tableClass="editable-cells-table">

                    <ColumnGroup type="header">
                        <Row>
                            <Column header="№" :rowspan="3" />
                            <Column header="Тип турбины" :rowspan="3" />
                        </Row>
                        <Row>

                            <Column bodyStyle="text-align:center" header="Мощность" :colspan="2" />
                            <Column bodyStyle="text-align:center" header="Напор" :colspan="2" />
                            <Column bodyStyle="text-align:center" header="Частота вращения" :colspan="2" />


                            <Column bodyStyle="text-align:center" header="Диаметр рабочего колеса" :rowspan="2"  />
                            <Column header="Парковый ресурс, час" :rowspan="2" />
                            <Column header="Наработка, час" :rowspan="2" />
                            <Column header="Износ, %" :rowspan="2"  />
                            <Column header="" :rowspan="2"  />
                        </Row>

                        <Row>
                            <Column header="Номинальная"  />
                            <Column header="Расчетная" />

                            <Column header="Номинальный"  />
                            <Column header="Расчетный" />

                            <Column header="Номинальная"  />
                            <Column header="Расчетная" />
                        </Row>

                    </ColumnGroup>

                    <Column field="id" bodyStyle="text-align:center" header="Code">
                        <template >
                            <InputText style="width: 20%" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="type" bodyStyle="text-align:center" header="Status">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column field="powerNominal" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="powerCalculated" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column field="pressureNominal" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="pressureCalculated" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column field="frequencyNominal" header="Price" bodyStyle="text-align:center" >
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="frequencyCalculated" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column field="diameter" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="resource" header="Price" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="operating" header="Name" bodyStyle="text-align:center">
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
                <h5>Основные технические характеристики генераторов</h5>
                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddEquipmentTable4, 'Основные технические характеристики генераторов', generator, 'generator')"/>

                <DataTable showGridlines v-model:editingRows="editingRowsGenerator" :value="generator" editMode="row" dataKey="id"
                           @row-edit-save="onRowEditSaveGenerator" tableClass="editable-cells-table" tableStyle="min-width: 50rem">

                    <ColumnGroup type="header">
                        <Row>
                            <Column header="№" :rowspan="3" />
                            <Column header="Наименование генератора (станционный №, тип, марка, год ввода)" :rowspan="3" />
                        </Row>
                        <Row>

                            <Column bodyStyle="text-align:center" header="Номинальные значения" :colspan="5" />

                            <Column header="Парковый ресурс, час" :rowspan="2" />
                            <Column header="Наработка, час" :rowspan="2" />
                            <Column header="Износ, %" :rowspan="2"  />
                            <Column header="" :rowspan="2"  />
                        </Row>

                        <Row>
                            <Column header="Мощность кВА"  />
                            <Column header="Коэффициент мощности (cos φ)" />
                            <Column header="Ток статора, А"  />
                            <Column header="Напряжение обмотки статора, В" />
                            <Column header="КПД при Pн, %"  />

                        </Row>

                    </ColumnGroup>

                    <Column field="id" bodyStyle="text-align:center" header="Code">
                        <template >
                            <InputText style="width: 20%" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="name" bodyStyle="text-align:center" header="Status">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column field="power" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="powerCoefficient" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column field="amper" header="Name" >
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="voltage" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column field="kpd" header="Price" bodyStyle="text-align:center" >
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="resource" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column field="operating" header="Name" bodyStyle="text-align:center">
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
                <h5>Основные технические характеристики блочных трансформаторов</h5>

                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddEquipmentTable5, 'Основные технические характеристики блочных трансформаторов', transformer, 'transformer')"/>

                <DataTable showGridlines v-model:editingRows="editingRowsTransformer" :value="transformer" editMode="row" dataKey="id"
                           @row-edit-save="onRowEditSaveTransformer" tableClass="editable-cells-table" tableStyle="min-width: 50rem">

                    <ColumnGroup type="header">
                        <Row>
                            <Column header="№" :rowspan="3" />
                            <Column header="Тип трансформатора" :rowspan="3" />
                            <Column header="Мощность кВА" :rowspan="3" />
                        </Row>
                        <Row>

                            <Column bodyStyle="text-align:center" header="Напряжение, В" :colspan="3" />
                            <Column bodyStyle="text-align:center" header="Потеря мощности, Вт" :colspan="2" />


                            <Column header="Ток холостого хода, %" :rowspan="2" />
                            <Column header="Напряжение КЗ, %" :rowspan="2" />
                            <Column header="Схема и группа соединений обмоток" :rowspan="2" />
                            <Column header="КПД" :rowspan="2" />
                            <Column header="Парковый ресурс, час" :rowspan="2" />
                            <Column header="Наработка, час" :rowspan="2"  />
                            <Column header="Износ, %" :rowspan="2"  />
                            <Column header="" :rowspan="2"  />
                        </Row>

                        <Row>
                            <Column header="BH"  />
                            <Column header="CH" />
                            <Column header="HH"  />

                            <Column header="Холостого хода" />
                            <Column header="КЗ"  />

                        </Row>

                    </ColumnGroup>

                    <Column field="id" bodyStyle="text-align:center" header="Code">
                        <template >
                            <InputText style="width: 20%" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="type" bodyStyle="text-align:center" header="Status">
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="power" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column field="voltageBH" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="voltageCH" header="Name" >
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="voltageHH" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column field="powerLossIDLE" header="Price" bodyStyle="text-align:center" >
                        <template #editor="{ data, field }">
                            <InputText class="w-8rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="powerLossKZ" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column field="amperIDLE" header="Name" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="voltageKZ" header="Price" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>

                    <Column field="schemeGroup" header="Price" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="kpd" header="Price" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="resource" header="Price" bodyStyle="text-align:center">
                        <template #editor="{ data, field }">
                            <InputText class="w-5rem" v-model="data[field]" />
                        </template>
                    </Column>
                    <Column field="operating" header="Price" bodyStyle="text-align:center">
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

        <DynamicDialog/>

    </div>
</template>


<style scoped>

</style>