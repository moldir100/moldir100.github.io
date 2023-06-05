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

const data =reactive([
    {"id": "1000","code": "f230fh0g3","name": "Bamboo Watch","description": "Product Description","image": "bamboo-watch.jpg","price": 65,"category": "Accessories","quantity": 24,"inventoryStatus": "INSTOCK","rating": 5},
    {"id": "1001","code": "nvklal433","name": "Black Watch","description": "Product Description","image": "black-watch.jpg","price": 72,"category": "Accessories","quantity": 61,"inventoryStatus": "INSTOCK","rating": 4},
    {"id": "1002","code": "zz21cz3c1","name": "Blue Band","description": "Product Description","image": "blue-band.jpg","price": 79,"category": "Fitness","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 3},
    {"id": "1003","code": "244wgerg2","name": "Blue T-Shirt","description": "Product Description","image": "blue-t-shirt.jpg","price": 29,"category": "Clothing","quantity": 25,"inventoryStatus": "INSTOCK","rating": 5},
    {"id": "1004","code": "h456wer53","name": "Bracelet","description": "Product Description","image": "bracelet.jpg","price": 15,"category": "Accessories","quantity": 73,"inventoryStatus": "INSTOCK","rating": 4},
    {"id": "1005","code": "av2231fwg","name": "Brown Purse","description": "Product Description","image": "brown-purse.jpg","price": 120,"category": "Accessories","quantity": 0,"inventoryStatus": "OUTOFSTOCK","rating": 4},
    {"id": "1006","code": "bib36pfvm","name": "Chakra Bracelet","description": "Product Description","image": "chakra-bracelet.jpg","price": 32,"category": "Accessories","quantity": 5,"inventoryStatus": "LOWSTOCK","rating": 3},
    {"id": "1007","code": "mbvjkgip5","name": "Galaxy Earrings","description": "Product Description","image": "galaxy-earrings.jpg","price": 34,"category": "Accessories","quantity": 23,"inventoryStatus": "INSTOCK","rating": 5},
    {"id": "1008","code": "vbb124btr","name": "Game Controller","description": "Product Description","image": "game-controller.jpg","price": 99,"category": "Electronics","quantity": 2,"inventoryStatus": "LOWSTOCK","rating": 4},
    {"id": "1009","code": "cm230f032","name": "Gaming Set","description": "Product Description","image": "gaming-set.jpg","price": 299,"category": "Electronics","quantity": 63,"inventoryStatus": "INSTOCK","rating": 3}
])

let tariffs = reactive([
    {
        id: 1,
        number: 1,
        name_indicators: 'Тариф ',
        unit: 'тенге/кВтч',
        y2017: '7,50',
        y2018: '7,50',
        y2019: '5,69/6,44',
        y2020: '6,44/7,72',
        y2021: '7,72/9,68/8,48',
        y2022: '8,48'
    },
    {
        id: 2,
        number: 2,
        name_indicators: 'Себестоимость',
        unit: 'тенге/кВтч',
        y2017: '5,73',
        y2018: '5,72',
        y2019: '5,92',
        y2020: '6,39',
        y2021: '6,91',
        y2022: '8,70'
    },
    {
        id: 3,
        number: 3,
        name_indicators: 'Топливная составляющая (уголь, мазут), в т.ч.',
        unit: 'тенге/кВтч',
        y2017: '2,00',
        y2018: '2,34',
        y2019: '2,50',
        y2020: '2,60',
        y2021: '2,80',
        y2022: '3,52'
    },
    {
        id: 4,
        number: 3.1,
        name_indicators: 'Стоимость топлива (уголь Каражыра)',
        unit: 'тенге/тонна',
        y2017: '2848,21',
        y2018: '2991,07',
        y2019: '3141,07',
        y2020: '3298,21',
        y2021: '3582,52',
        y2022: '3833,04'
    },
    {
        id: 5,
        number: 3.2,
        name_indicators: 'Объем топлива (уголь Каражыра)',
        unit: 'тонн',
        y2017: '491799',
        y2018: '503760',
        y2019: '713542',
        y2020: '857351',
        y2021: '862667',
        y2022: '867166'
    },
    {
        id: 6,
        number: 3.3,
        name_indicators: 'Цена транспортировки (уголь Каражыра)',
        unit: 'тенге/тонна',
        y2017: '1711,12',
        y2018: '2101,90',
        y2019: '2192,71',
        y2020: '2307,96',
        y2021: '2402.16',
        y2022: '2865.85'
    },
    {
        id: 7,
        number: 3.4,
        name_indicators: 'Цена транспортировки (уголь Каражыра)',
        unit: 'тенге/кВтч',
        y2017: '0,0012',
        y2018: '0,0014',
        y2019: '0,0012',
        y2020: '0,0013',
        y2021: '0,0013',
        y2022: '0,0016'
    },

    {
        id: 8,
        number: 3.5,
        name_indicators: 'Стоимость топлива (уголь Майкуба)',
        unit: 'тенге/тонна',
        y2017: '2533,44',
        y2018: '2638,39',
        y2019: '2638,39',
        y2020: '2902,00',
        y2021:  '-',
        y2022: '-'
    },
    {
        id: 9,
        number: 3.6,
        name_indicators: 'Объем топлива (уголь Майкуба)',
        unit: 'тонн',
        y2017:  '150953',
        y2018: '187893',
        y2019: '156768',
        y2020: '41202',
        y2021: '-',
        y2022: '-'
    },
    {
        id: 10,
        number: 3.7,
        name_indicators: 'Цена транспортировки (уголь Майкуба)',
        unit: 'тенге/тонна',
        y2017: '1962,78',
        y2018: '2439,29',
        y2019: '2639,89',
        y2020: '2352,37',
        y2021: '-',
        y2022: '-',
    },
    {
        id: 11,
        number: 3.8,
        name_indicators: 'Цена транспортировки (уголь Майкуба)',
        unit: 'тенге/кВтч',
        y2017: '0,0013',
        y2018: '0,0016',
        y2019: '0,0014',
        y2020: '0,0012',
        y2021: '0,0000',
        y2022: '0,0000'
    },

    {
        id: 12,
        number: 3.9,
        name_indicators: 'Стоимость топлива (мазут)',
        unit: 'тенге/тонна',
        y2017: '36108,94',
        y2018: '43698,71',
        y2019:'61521,83',
        y2020: '78436,35',
        y2021: '70736,96',
        y2022: '79919,80'
    },
    {
        id: 11,
        number: 3.9,
        name_indicators: 'Объем топлива (мазут)',
        unit: 'тонн',
        y2017: '760',
        y2018: '535',
        y2019: '890',
        y2020: '534',
        y2021: '603',
        y2022: '894'
    },
    {
        id: 11,
        number: 4,
        name_indicators: 'Амортизация',
        unit: 'тенге/кВтч',
        y2017: '0,61',
        y2018: '0,62',
        y2019: '0,59',
        y2020: '0,69',
        y2021: '0,98',
        y2022: '1,10'
    }
])


const onRowEditSave = (event) => {
    let { newData, index } = event;

    products.value[index] = newData;
};

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
    },
    {
        id: 8,
        field: 'y2022',
        header: '2022'
    }
])

let nestedRouteItems = ref([
    {
        label: 'Все',
        // to: '/profile/digitalPassport/tep'
        to: ''
    },
    {
        label: 'По производству электрической энергии',
        to: ''
    },
    {
        label: 'По производству тепловой энергии',
        to: ''
    },
]);

const active = ref(0)



const tabChange = function (event){
    if(event.index === 0) {
        tariffs = reactive([
            {
                id: 1,
                number: 1,
                name_indicators: 'Тариф ',
                unit: 'тенге/кВтч',
                y2017: '7,50',
                y2018: '7,50',
                y2019: '5,69/6,44',
                y2020: '6,44/7,72',
                y2021: '7,72/9,68/8,48',
                y2022: '8,48'
            },
            {
                id: 2,
                number: 2,
                name_indicators: 'Себестоимость',
                unit: 'тенге/кВтч',
                y2017: '5,73',
                y2018: '5,72',
                y2019: '5,92',
                y2020: '6,39',
                y2021: '6,91',
                y2022: '8,70'
            },
            {
                id: 3,
                number: 3,
                name_indicators: 'Топливная составляющая (уголь, мазут), в т.ч.',
                unit: 'тенге/кВтч',
                y2017: '2,00',
                y2018: '2,34',
                y2019: '2,50',
                y2020: '2,60',
                y2021: '2,80',
                y2022: '3,52'
            },
            {
                id: 4,
                number: 3.1,
                name_indicators: 'Стоимость топлива (уголь Каражыра)',
                unit: 'тенге/тонна',
                y2017: '2848,21',
                y2018: '2991,07',
                y2019: '3141,07',
                y2020: '3298,21',
                y2021: '3582,52',
                y2022: '3833,04'
            },
            {
                id: 5,
                number: 3.2,
                name_indicators: 'Объем топлива (уголь Каражыра)',
                unit: 'тонн',
                y2017: '491799',
                y2018: '503760',
                y2019: '713542',
                y2020: '857351',
                y2021: '862667',
                y2022: '867166'
            },
            {
                id: 6,
                number: 3.3,
                name_indicators: 'Цена транспортировки (уголь Каражыра)',
                unit: 'тенге/тонна',
                y2017: '1711,12',
                y2018: '2101,90',
                y2019: '2192,71',
                y2020: '2307,96',
                y2021: '2402.16',
                y2022: '2865.85'
            },
            {
                id: 7,
                number: 3.4,
                name_indicators: 'Цена транспортировки (уголь Каражыра)',
                unit: 'тенге/кВтч',
                y2017: '0,0012',
                y2018: '0,0014',
                y2019: '0,0012',
                y2020: '0,0013',
                y2021: '0,0013',
                y2022: '0,0016'
            },

            {
                id: 8,
                number: 3.5,
                name_indicators: 'Стоимость топлива (уголь Майкуба)',
                unit: 'тенге/тонна',
                y2017: '2533,44',
                y2018: '2638,39',
                y2019: '2638,39',
                y2020: '2902,00',
                y2021:  '-',
                y2022: '-'
            },
            {
                id: 9,
                number: 3.6,
                name_indicators: 'Объем топлива (уголь Майкуба)',
                unit: 'тонн',
                y2017:  '150953',
                y2018: '187893',
                y2019: '156768',
                y2020: '41202',
                y2021: '-',
                y2022: '-'
            },
            {
                id: 10,
                number: 3.7,
                name_indicators: 'Цена транспортировки (уголь Майкуба)',
                unit: 'тенге/тонна',
                y2017: '1962,78',
                y2018: '2439,29',
                y2019: '2639,89',
                y2020: '2352,37',
                y2021: '-',
                y2022: '-',
            },
            {
                id: 11,
                number: 3.8,
                name_indicators: 'Цена транспортировки (уголь Майкуба)',
                unit: 'тенге/кВтч',
                y2017: '0,0013',
                y2018: '0,0016',
                y2019: '0,0014',
                y2020: '0,0012',
                y2021: '0,0000',
                y2022: '0,0000'
            },

            {
                id: 12,
                number: 3.9,
                name_indicators: 'Стоимость топлива (мазут)',
                unit: 'тенге/тонна',
                y2017: '36108,94',
                y2018: '43698,71',
                y2019:'61521,83',
                y2020: '78436,35',
                y2021: '70736,96',
                y2022: '79919,80'
            },
            {
                id: 11,
                number: 3.9,
                name_indicators: 'Объем топлива (мазут)',
                unit: 'тонн',
                y2017: '760',
                y2018: '535',
                y2019: '890',
                y2020: '534',
                y2021: '603',
                y2022: '894'
            },
            {
                id: 11,
                number: 4,
                name_indicators: 'Амортизация',
                unit: 'тенге/кВтч',
                y2017: '0,61',
                y2018: '0,62',
                y2019: '0,59',
                y2020: '0,69',
                y2021: '0,98',
                y2022: '1,10'
            }
        ])
    }
    if(event.index === 1) {
        tariffs = reactive([
            {
                id: 1,
                number: 1,
                name_indicators: 'Тариф  По производству электрической энергии',
                unit: 'тенге/кВтч',
                y2017: '7,50',
                y2018: '7,50',
                y2019: '5,69/6,44',
                y2020: '6,44/7,72',
                y2021: '7,72/9,68/8,48',
                y2022: '8,48'
            },
            {
                id: 2,
                number: 2,
                name_indicators: 'Себестоимость',
                unit: 'тенге/кВтч',
                y2017: '5,73',
                y2018: '5,72',
                y2019: '5,92',
                y2020: '6,39',
                y2021: '6,91',
                y2022: '8,70'
            },
            {
                id: 3,
                number: 3,
                name_indicators: 'Топливная составляющая (уголь, мазут), в т.ч.',
                unit: 'тенге/кВтч',
                y2017: '2,00',
                y2018: '2,34',
                y2019: '2,50',
                y2020: '2,60',
                y2021: '2,80',
                y2022: '3,52'
            },
            {
                id: 4,
                number: 3.1,
                name_indicators: 'Стоимость топлива (уголь Каражыра)',
                unit: 'тенге/тонна',
                y2017: '2848,21',
                y2018: '2991,07',
                y2019: '3141,07',
                y2020: '3298,21',
                y2021: '3582,52',
                y2022: '3833,04'
            },
            {
                id: 5,
                number: 3.2,
                name_indicators: 'Объем топлива (уголь Каражыра)',
                unit: 'тонн',
                y2017: '491799',
                y2018: '503760',
                y2019: '713542',
                y2020: '857351',
                y2021: '862667',
                y2022: '867166'
            },
            {
                id: 6,
                number: 3.3,
                name_indicators: 'Цена транспортировки (уголь Каражыра)',
                unit: 'тенге/тонна',
                y2017: '1711,12',
                y2018: '2101,90',
                y2019: '2192,71',
                y2020: '2307,96',
                y2021: '2402.16',
                y2022: '2865.85'
            },
            {
                id: 7,
                number: 3.4,
                name_indicators: 'Цена транспортировки (уголь Каражыра)',
                unit: 'тенге/кВтч',
                y2017: '0,0012',
                y2018: '0,0014',
                y2019: '0,0012',
                y2020: '0,0013',
                y2021: '0,0013',
                y2022: '0,0016'
            },

            {
                id: 8,
                number: 3.5,
                name_indicators: 'Стоимость топлива (уголь Майкуба)',
                unit: 'тенге/тонна',
                y2017: '2533,44',
                y2018: '2638,39',
                y2019: '2638,39',
                y2020: '2902,00',
                y2021:  '-',
                y2022: '-'
            },
            {
                id: 9,
                number: 3.6,
                name_indicators: 'Объем топлива (уголь Майкуба)',
                unit: 'тонн',
                y2017:  '150953',
                y2018: '187893',
                y2019: '156768',
                y2020: '41202',
                y2021: '-',
                y2022: '-'
            },
            {
                id: 10,
                number: 3.7,
                name_indicators: 'Цена транспортировки (уголь Майкуба)',
                unit: 'тенге/тонна',
                y2017: '1962,78',
                y2018: '2439,29',
                y2019: '2639,89',
                y2020: '2352,37',
                y2021: '-',
                y2022: '-',
            },
            {
                id: 11,
                number: 3.8,
                name_indicators: 'Цена транспортировки (уголь Майкуба)',
                unit: 'тенге/кВтч',
                y2017: '0,0013',
                y2018: '0,0016',
                y2019: '0,0014',
                y2020: '0,0012',
                y2021: '0,0000',
                y2022: '0,0000'
            },

            {
                id: 12,
                number: 3.9,
                name_indicators: 'Стоимость топлива (мазут)',
                unit: 'тенге/тонна',
                y2017: '36108,94',
                y2018: '43698,71',
                y2019:'61521,83',
                y2020: '78436,35',
                y2021: '70736,96',
                y2022: '79919,80'
            },
            {
                id: 11,
                number: 3.9,
                name_indicators: 'Объем топлива (мазут)',
                unit: 'тонн',
                y2017: '760',
                y2018: '535',
                y2019: '890',
                y2020: '534',
                y2021: '603',
                y2022: '894'
            },
            {
                id: 11,
                number: 4,
                name_indicators: 'Амортизация',
                unit: 'тенге/кВтч',
                y2017: '0,61',
                y2018: '0,62',
                y2019: '0,59',
                y2020: '0,69',
                y2021: '0,98',
                y2022: '1,10'
            }
        ])
    }
    if(event.index === 2) {
        tariffs = reactive([
            {
                id: 1,
                number: 1,
                name_indicators: 'Тариф  По производству тепловой энергии',
                unit: 'тенге/кВтч',
                y2017: '7,50',
                y2018: '7,50',
                y2019: '5,69/6,44',
                y2020: '6,44/7,72',
                y2021: '7,72/9,68/8,48',
                y2022: '8,48'
            },
            {
                id: 2,
                number: 2,
                name_indicators: 'Себестоимость',
                unit: 'тенге/кВтч',
                y2017: '5,73',
                y2018: '5,72',
                y2019: '5,92',
                y2020: '6,39',
                y2021: '6,91',
                y2022: '8,70'
            },
            {
                id: 3,
                number: 3,
                name_indicators: 'Топливная составляющая (уголь, мазут), в т.ч.',
                unit: 'тенге/кВтч',
                y2017: '2,00',
                y2018: '2,34',
                y2019: '2,50',
                y2020: '2,60',
                y2021: '2,80',
                y2022: '3,52'
            },
            {
                id: 4,
                number: 3.1,
                name_indicators: 'Стоимость топлива (уголь Каражыра)',
                unit: 'тенге/тонна',
                y2017: '2848,21',
                y2018: '2991,07',
                y2019: '3141,07',
                y2020: '3298,21',
                y2021: '3582,52',
                y2022: '3833,04'
            },
            {
                id: 5,
                number: 3.2,
                name_indicators: 'Объем топлива (уголь Каражыра)',
                unit: 'тонн',
                y2017: '491799',
                y2018: '503760',
                y2019: '713542',
                y2020: '857351',
                y2021: '862667',
                y2022: '867166'
            },
            {
                id: 6,
                number: 3.3,
                name_indicators: 'Цена транспортировки (уголь Каражыра)',
                unit: 'тенге/тонна',
                y2017: '1711,12',
                y2018: '2101,90',
                y2019: '2192,71',
                y2020: '2307,96',
                y2021: '2402.16',
                y2022: '2865.85'
            },
            {
                id: 7,
                number: 3.4,
                name_indicators: 'Цена транспортировки (уголь Каражыра)',
                unit: 'тенге/кВтч',
                y2017: '0,0012',
                y2018: '0,0014',
                y2019: '0,0012',
                y2020: '0,0013',
                y2021: '0,0013',
                y2022: '0,0016'
            },

            {
                id: 8,
                number: 3.5,
                name_indicators: 'Стоимость топлива (уголь Майкуба)',
                unit: 'тенге/тонна',
                y2017: '2533,44',
                y2018: '2638,39',
                y2019: '2638,39',
                y2020: '2902,00',
                y2021:  '-',
                y2022: '-'
            },
            {
                id: 9,
                number: 3.6,
                name_indicators: 'Объем топлива (уголь Майкуба)',
                unit: 'тонн',
                y2017:  '150953',
                y2018: '187893',
                y2019: '156768',
                y2020: '41202',
                y2021: '-',
                y2022: '-'
            },
            {
                id: 10,
                number: 3.7,
                name_indicators: 'Цена транспортировки (уголь Майкуба)',
                unit: 'тенге/тонна',
                y2017: '1962,78',
                y2018: '2439,29',
                y2019: '2639,89',
                y2020: '2352,37',
                y2021: '-',
                y2022: '-',
            },
            {
                id: 11,
                number: 3.8,
                name_indicators: 'Цена транспортировки (уголь Майкуба)',
                unit: 'тенге/кВтч',
                y2017: '0,0013',
                y2018: '0,0016',
                y2019: '0,0014',
                y2020: '0,0012',
                y2021: '0,0000',
                y2022: '0,0000'
            },

            {
                id: 12,
                number: 3.9,
                name_indicators: 'Стоимость топлива (мазут)',
                unit: 'тенге/тонна',
                y2017: '36108,94',
                y2018: '43698,71',
                y2019:'61521,83',
                y2020: '78436,35',
                y2021: '70736,96',
                y2022: '79919,80'
            },
            {
                id: 11,
                number: 3.9,
                name_indicators: 'Объем топлива (мазут)',
                unit: 'тонн',
                y2017: '760',
                y2018: '535',
                y2019: '890',
                y2020: '534',
                y2021: '603',
                y2022: '894'
            },
            {
                id: 11,
                number: 4,
                name_indicators: 'Амортизация',
                unit: 'тенге/кВтч',
                y2017: '0,61',
                y2018: '0,62',
                y2019: '0,59',
                y2020: '0,69',
                y2021: '0,98',
                y2022: '1,10'
            }
        ])
    }
}
</script>



<template>
    <div class="flex">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Тарифы</h5>

                <TabMenu v-model:activeIndex="active" :model="nestedRouteItems" @tab-change="tabChange" />

                <DataTable scrollable  v-model:editingRows="editingRows" :value="tariffs" editMode="row" dataKey="id"
                           @row-edit-save="onRowEditSave" tableClass="editable-cells-table" >
                    <Column v-for="tep in teps" :key="tep.id" :field="tep.field" :header="tep.header">
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
.seeAll{
    background-color: white;
    height: 45px;
    width: 150px;
    box-sizing: border-box;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
}
.settings{
    background-color: white;
    height: 45px;
    width: 45px;
    box-sizing: border-box;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
}

.seeAll:hover, .settings:active{
    color: #fff;
    background-color: #215A96;
    border-color: #215A96;
    /*.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open>.dropdown-toggle.btn-primary {*/
    /*    color: #fff;*/
    /*    background-color: #00b3db;*/
    /*    border-color: #285e8e; !*set the color you want here*!*/
    /*}*/
}
/*passport Details*/
#passportDetails{
    background: #FFFFFF;
    /* In progress */

    /*border: 1px solid rgba(21, 41, 87, 0.5);*/
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

/*passport details*/

.form__group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.form__group label {
    font-weight: 700;
    font-size: 14px;
    color: #152957;
    margin-bottom: 10px;
}

.form__group input,
.form__group select {
    background: #F5F5F5;
    border: 1px solid #152957;
    border-radius: 8px;
    width: 100%;
    height: 28px;
    outline: none;
    padding: 0 8px;
}
#required{
    color: red
}
</style>