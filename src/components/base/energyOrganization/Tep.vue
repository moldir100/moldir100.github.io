<script setup>
import {ref, onMounted, reactive} from 'vue';
import ProductService from '@/service/ProductService.js';
import InputLabel from "@/components/UI/Vinput.vue";

const products = ref();
const editingRows = ref([]);
const statuses = ref([
    { label: 'In Stock', value: 'INSTOCK' },
    { label: 'Low Stock', value: 'LOWSTOCK' },
    { label: 'Out of Stock', value: 'OUTOFSTOCK' }
]);

const technicalEconomicIndicators = reactive([
    {
        id: 1,
        number: 1,
        name_indicators: 'Установленная электрическая мощность',
        unit: 'МВт',
        y2017: '372,5',
        y2018: '372,5',
        y2019: '372,5',
        y2020: '372,5',
        y2021: '372,5'
    },
    {
        id: 2,
        number: 2,
        name_indicators: 'Располагаемая электрическая мощность',
        unit: 'МВт',
        y2017: '268,8',
        y2018: '327,8',
        y2019: '320,7',
        y2020: '320,8',
        y2021: '320,9'
    },
    {
        id: 3,
        number: 3,
        name_indicators: 'Установленная тепловая мощность',
        unit: 'Гкал',
        y2017: '881,7',
        y2018: '868,9',
        y2019: '859,9',
        y2020: '859,9',
        y2021: '859,9'
    },
    {
        id: 4,
        number: 4,
        name_indicators: 'Располагаемая тепловая мощность',
        unit: 'Гкал',
        y2017: '881,7',
        y2018: '868,9',
        y2019: '859,9',
        y2020: '859,9',
        y2021: '859,9'
    },
    {
        id: 5,
        number: 5,
        name_indicators: 'Выработка электрической энергии',
        unit: 'млн.кВтч',
        y2017: '1751,6',
        y2018: '1801,6',
        y2019: '2192,6',
        y2020: '2247,0',
        y2021: '2168,3'
    },
    {
        id: 6,
        number: 6,
        name_indicators: 'Отпуск электрической энергии',
        unit: 'млн.кВтч',
        y2017: '1464,3',
        y2018: '1499,0',
        y2019: '1852,0',
        y2020: '1901,3',
        y2021: '1825,1'
    },
    {
        id: 7,
        number: 7,
        name_indicators: 'Выработка тепловой энергии',
        unit: 'тыс. Гкал',
        y2017: '2560,0',
        y2018: '2681,6',
        y2019: '2603,8',
        y2020: '2556,2',
        y2021: '2630,0'
    },
    {
        id: 8,
        number: 8,
        name_indicators: 'Отпуск тепловой энергии',
        unit: 'тыс. Гкал',
        y2017: '2449,2',
        y2018: '2555,0',
        y2019: '2479,2',
        y2020: '2430,4',
        y2021: '2503,5'
    },
    {
        id: 9,
        number: 9,
        name_indicators: 'Собственные нужды электрическая энергия',
        unit: 'млн. кВтч',
        y2017: '272,1',
        y2018: '285,3',
        y2019: '323,4',
        y2020: '326,7',
        y2021: '324,8'
    },
    {
        id: 10,
        number: 9.1,
        name_indicators: 'Собственные нужды электрическая энергия',
        unit: '%',
        y2017: '15,5',
        y2018: '15,8',
        y2019: '14,7',
        y2020: '14,5',
        y2021: '15,0'
    },
    {
        id: 11,
        number: 10,
        name_indicators: 'Собственные нужды тепловая энергия',
        unit: 'тыс. Гкал',
        y2017: '106,1',
        y2018: '121,8',
        y2019: '119,9',
        y2020: '121,0',
        y2021: '121,7'
    },
    {
        id: 12,
        number: 10.1,
        name_indicators: 'Собственные нужды тепловая энергия',
        unit: '%',
        y2017: '4,1',
        y2018: '4,5',
        y2019: '4,6',
        y2020: '4,7',
        y2021: '4,6'
    },
    {
        id: 13,
        number: 11,
        name_indicators: 'Коэффициент использования установленной электрической мощности',
        unit: '%',
        y2017: '53,7',
        y2018: '55,2',
        y2019: '67,2',
        y2020: '68,7',
        y2021: '66,4'
    },
    {
        id: 14,
        number: 12,
        name_indicators: 'Коэффициент использования установленной теплововй мощности',
        unit: '%',
        y2017: '33,1',
        y2018: '35,2',
        y2019: '34,6',
        y2020: '33,8',
        y2021: '34,9'
    },
    {
        id: 15,
        number: 13,
        name_indicators: 'Удельный расход топлива на электрическую энергию',
        unit: 'гут/кВтч',
        y2017: '290,1',
        y2018: '299,6',
        y2019: '313,2',
        y2020: '320,1',
        y2021: '312,6'
    },
    {
        id: 16,
        number: 13.1,
        name_indicators: 'Удельный расход топлива на электрическую энергию',
        unit: 'г.н.т./кВтч',
        y2017: '-',
        y2018: '-',
        y2019: '-',
        y2020: '-',
        y2021: '-'
    },
    {
        id: 17,
        number: 14,
        name_indicators: 'Удельный расход топлива на тепловую энергию',
        unit: 'кгут/Гкал',
        y2017: '185,1',
        y2018: '184,5',
        y2019: '184,0',
        y2020: '184,4',
        y2021: '181,7'
    },
    {
        id: 18,
        number: 14.1,
        name_indicators: 'Удельный расход топлива на тепловую энергию',
        unit: 'кг.н.т./Гкал',
        y2017: '-',
        y2018: '-',
        y2019: '-',
        y2020: '-',
        y2021: '-'
    },
    {
        id: 19,
        number: 15,
        name_indicators: 'Общий КПД электростанции',
        unit: '%',
        y2017: '60,2',
        y2018: '59,6',
        y2019: '56,0',
        y2020: '54,9',
        y2021: '56,7'
    },
    {
        id: 20,
        number: 16,
        name_indicators: 'Износ электростанции*',
        unit: '%',
        y2017: '74,1',
        y2018: '58,1',
        y2019: '60,6',
        y2020: '63,0',
        y2021: '64,9'
    }
])

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

const measureIndicator  = reactive([
    'МВт', 'Гкал', 'млн.кВтч', 'тыс. Гкал', '%'
])

const teps = reactive([
    {
        id: 1,
        field: 'number',
        header: '№'
    },
    {
        id: 2,
        field: 'name_indicators',
        header: 'Наименование показателей'
    },
    {
        id: 3,
        field: 'unit',
        header: 'Ед. изм.'
    },
    {
        id: 4,
        field: 'y2017',
        header: '2017'
    },
    {
        id: 5,
        field: 'y2018',
        header: '2018'
    },
    {
        id: 6,
        field: 'y2019',
        header: '2019'
    },
    {
        id: 7,
        field: 'y2020',
        header: '2020'
    },
    {
        id: 8,
        field: 'y2021',
        header: '2021'
    }
])

</script>


<template>
    <div class="flex">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Технико - экономические показатели</h5>

                <DataTable showGridlines scrollable  v-model:editingRows="editingRows" :value="technicalEconomicIndicators" editMode="row" dataKey="id"
                           @row-edit-save="onRowEditSave" tableClass="editable-cells-table" >
                    <Column v-for="tep in teps" :key="tep.id" :field="tep.field" :header="tep.header">
                        <template #editor="{ data, field }">
                            <InputText v-if="field === 'name_indicators'" v-model="data[field]" />
                            <InputText v-if="field !== 'name_indicators'" class="w-5rem"  v-model="data[field]" />
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