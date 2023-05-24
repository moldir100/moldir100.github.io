<script setup>

import Chart from 'primevue/chart';
import {reactive} from 'vue'

const technicalEconomicIndicators = reactive([
    {
        id: 1,
        number: 1,
        name_indicators: 'Установленная электрическая мощность',
        unit: {
            name_1: 'МВт'
        },
        y2017: {
            number_1: '372,5'
        },
        y2018: {
            number_1: '372,5'
        },
        y2019: {
            number_1: '372,5'
        },
        y2020: {
            number_1: '372,5'
        },
        y2021: {
            number_1: '372,5'
        }
    },
    {
        id: 2,
        number: 2,
        name_indicators: 'Располагаемая электрическая мощность',
        unit: {
            name_1: 'МВт'
        },
        y2017: {
            number_1: '268,8'
        },
        y2018: {
            number_1: '327,8'
        },
        y2019: {
            number_1: '320,7'
        },
        y2020: {
            number_1: '320,8'
        },
        y2021: {
            number_1: '320,9'
        }
    },
    {
        id: 3,
        number: 3,
        name_indicators: 'Установленная тепловая мощность',
        unit: {
            name_1: 'Гкал'
        },
        y2017: {
            number_1: '881,7'
        },
        y2018: {
            number_1: '868,9'
        },
        y2019: {
            number_1: '859,9'
        },
        y2020: {
            number_1: '859,9'
        },
        y2021: {
            number_1: '859,9'
        }
    },
    {
        id: 4,
        number: 4,
        name_indicators: 'Располагаемая тепловая мощность',
        unit: {
            name_1: 'Гкал'
        },
        y2017: {
            number_1: '881,7'
        },
        y2018: {
            number_1: '868,9'
        },
        y2019: {
            number_1: '859,9'
        },
        y2020: {
            number_1: '859,9'
        },
        y2021: {
            number_1: '859,9'
        }
    },
    {
        id: 5,
        number: 5,
        name_indicators: 'Выработка электрической энергии',
        unit: {
            name_1: 'млн.кВтч'
        },
        y2017: {
            number_1: '1751,6'
        },
        y2018: {
            number_1: '1801,6'
        },
        y2019: {
            number_1: '2192,6'
        },
        y2020: {
            number_1: '2247,0'
        },
        y2021: {
            number_1: '2168,3'
        }
    },
    {
        id: 6,
        number: 6,
        name_indicators: 'Отпуск электрической энергии',
        unit: {
            name_1: 'млн.кВтч'
        },
        y2017: {
            number_1: '1464,3'
        },
        y2018: {
            number_1: '1499,0'
        },
        y2019: {
            number_1: '1852,0'
        },
        y2020: {
            number_1: '1901,3'
        },
        y2021: {
            number_1: '1825,1'
        }
    },
    {
        id: 7,
        number: 7,
        name_indicators: 'Выработка тепловой энергии',
        unit: {
            name_1: 'тыс. Гкал'
        },
        y2017: {
            number_1: '2560,0'
        },
        y2018: {
            number_1: '2681,6'
        },
        y2019: {
            number_1: '2603,8'
        },
        y2020: {
            number_1: '2556,2'
        },
        y2021: {
            number_1: '2630,0'
        }
    },
    {
        id: 8,
        number: 8,
        name_indicators: 'Отпуск тепловой энергии',
        unit: {
            name_1: 'тыс. Гкал'
        },
        y2017: {
            number_1: '2449,2'
        },
        y2018: {
            number_1: '2555,0'
        },
        y2019: {
            number_1: '2479,2'
        },
        y2020: {
            number_1: '2430,4'
        },
        y2021: {
            number_1: '2503,5'
        }
    },
    {
        id: 9,
        number: 9,
        name_indicators: 'Собственные нужды электрическая энергия',
        unit: {
            name_1: 'млн. кВтч',
            name_2: '%'
        },
        y2017: {
            number_1: '272,1',
            number_2: '15,5'
        },
        y2018: {
            number_1: '285,3',
            number_2: '15,8'
        },
        y2019: {
            number_1: '323,4',
            number_2: '14,7'
        },
        y2020: {
            number_1: '326,7',
            number_2: '14,5'
        },
        y2021: {
            number_1: '324,8',
            number_2: '15,0'
        }
    },
    {
        id: 10,
        number: 10,
        name_indicators: 'Собственные нужды тепловая энергия',
        unit: {
            name_1: 'тыс. Гкал',
            name_2: '%'
        },
        y2017: {
            number_1: '106,1',
            number_2: '4,1'
        },
        y2018: {
            number_1: '121,8',
            number_2: '4,5'
        },
        y2019: {
            number_1: '119,9',
            number_2: '4,6'
        },
        y2020: {
            number_1: '121,0',
            number_2: '4,7'
        },
        y2021: {
            number_1: '121,7',
            number_2: '4,6'
        }
    },
    {
        id: 11,
        number: 11,
        name_indicators: 'Коэффициент использования установленной электрической мощности',
        unit: {
            name_1: '%'
        },
        y2017: {
            number_1: '53,7'
        },
        y2018: {
            number_1: '55,2'
        },
        y2019: {
            number_1: '67,2'
        },
        y2020: {
            number_1: '68,7'
        },
        y2021: {
            number_1: '66,4'
        }
    },
    {
        id: 12,
        number: 12,
        name_indicators: 'Коэффициент использования установленной теплововй мощности',
        unit: {
            name_1: '%'
        },
        y2017: {
            number_1: '33,1'
        },
        y2018: {
            number_1: '35,2'
        },
        y2019: {
            number_1: '34,6'
        },
        y2020: {
            number_1: '33,8'
        },
        y2021: {
            number_1: '34,9'
        }
    },
    {
        id: 13,
        number: 13,
        name_indicators: 'Удельный расход топлива на электрическую энергию',
        unit: {
            name_1: 'гут/кВтч',
            name_2: 'г.н.т./кВтч'
        },
        y2017: {
            number_1: '290,1',
            number_2: '-'
        },
        y2018: {
            number_1: '299,6',
            number_2: '-'
        },
        y2019: {
            number_1: '313,2',
            number_2: '-'
        },
        y2020: {
            number_1: '320,1',
            number_2: '-'
        },
        y2021: {
            number_1: '312,6',
            number_2: '-'
        }
    },
    {
        id: 14,
        number: 14,
        name_indicators: 'Удельный расход топлива на тепловую энергию',
        unit: {
            name_1: 'кгут/Гкал',
            name_2: 'кг.н.т./Гкал'
        },
        y2017: {
            number_1: '185,1',
            number_2: '-'
        },
        y2018: {
            number_1: '184,5',
            number_2: '-'
        },
        y2019: {
            number_1: '184,0',
            number_2: '-'
        },
        y2020: {
            number_1: '184,4',
            number_2: '-'
        },
        y2021: {
            number_1: '181,7',
            number_2: '-'
        }
    },
    {
        id: 15,
        number: 15,
        name_indicators: 'Общий КПД электростанции',
        unit: {
            name_1: '%'
        },
        y2017: {
            number_1: '60,2'
        },
        y2018: {
            number_1: '59,6'
        },
        y2019: {
            number_1: '56,0'
        },
        y2020: {
            number_1: '54,9'
        },
        y2021: {
            number_1: '56,7'
        }
    },
    {
        id: 16,
        number: 16,
        name_indicators: 'Износ электростанции*',
        unit: {
            name_1: '%'
        },
        y2017: {
            number_1: '74,1'
        },
        y2018: {
            number_1: '58,1'
        },
        y2019: {
            number_1: '60,6'
        },
        y2020: {
            number_1: '63,0'
        },
        y2021: {
            number_1: '64,9'
        }
    }
])

const passportData = reactive([
    {
        id: 1,
        number: 1,
        name: 'Полное наименование ЭПО',
        description: 'Товарищество с ограниченной ответственностью «Усть-Каменогорская ТЭЦ»'
    },
    {
        id: 2,
        number: 2,
        name: 'Адрес предприятия (фактический)',
        description: 'РК, ВКО, г. Усть-Каменогорск, ул. Промышленная, 2'
    },
    {
        id: 3,
        number: 3,
        name: 'Адрес предприятия (юридический)',
        description: 'РК, ВКО, г. Усть-Каменогорск, ул. Промышленная, 2'
    },
    {
        id: 4,
        number: 4,
        name: 'Местонахождение',
        description: 'РК, ВКО, г. Усть-Каменогорск, ул. Промышленная, 2'
    },
    {
        id: 5,
        number: 5,
        name: 'Геолокация по google карте (координаты)',
        description: 'Широта 49.982781849999995 / Долгота 82.61372686558872'
    },
    {
        id: 6,
        number: 6,
        name: 'БИН',
        description: '030540000538'
    },
    {
        id: 7,
        number: 7,
        name: 'Дата первичной регистрации',
        description: '06 мая 2003 г.'
    },
    {
        id: 8,
        number: 8,
        name: 'Первый руководитель (ФИО полностью): контактные данные (сотовый, городской)',
        description:
            'Генеральный директор – Бексолтан Айдын Ордабекұлы, мобильный +7-701-533-33-75, городской: 8 (7232) 290-359'
    },
    {
        id: 9,
        number: 9,
        name: 'Главный инженер (ФИО полностью): контактные данные (сотовый, городской)',
        description:
            'Директор по эксплуатации – главный инженер Ахметжанов Нурлан Габдулович, мобильный: +7-701-513-02-82, городской: 8 (7232) 290-280'
    },
    {
        id: 10,
        number: 10,
        name: 'Форма собственности',
        description: 'Частная'
    },
    {
        id: 11,
        number: 11,
        name: 'Учредители и доли участия',
        description: 'ТОО «Шыгыс Energo («Шыгыс Энерго»)», 100 % доля участия'
    },
    {
        id: 12,
        number: 12,
        name: 'Телефон приемной, канцелярии и электронная почта',
        description: 'Приемная: 8/7232/290-359'
    },
    {
        id: 13,
        number: 13,
        name: 'Климатические условия',
        description: 'Климат резко-континентальный'
    }
])

const thermalEnergyTariff = reactive([
    {
        id: 1,
        number: 1,
        name_indicators: 'Тариф ',
        unit: {
            name_1: 'тенге/кВтч'
        },
        y2017: {
            number_1: '7,50'
        },
        y2018: {
            number_1: '7,50'
        },
        y2019: {
            number_1: '5,69/6,44'
        },
        y2020: {
            number_1: '6,44/7,72'
        },
        y2021: {
            number_1: '7,72/9,68/8,48'
        },
        y2022: {
            number_1: '8,48'
        }
    },
    {
        id: 2,
        number: 2,
        name_indicators: 'Себестоимость',
        unit: {
            name_1: 'тенге/кВтч'
        },
        y2017: {
            number_1: '5,73'
        },
        y2018: {
            number_1: '5,72'
        },
        y2019: {
            number_1: '5,92'
        },
        y2020: {
            number_1: '6,39'
        },
        y2021: {
            number_1: '6,91'
        },
        y2022: {
            number_1: '8,70'
        }
    },
    {
        id: 3,
        number: 3,
        name_indicators: 'Топливная составляющая (уголь, мазут), в т.ч.',
        unit: {
            name_1: 'тенге/кВтч'
        },
        y2017: {
            number_1: '2,00'
        },
        y2018: {
            number_1: '2,34'
        },
        y2019: {
            number_1: '2,50'
        },
        y2020: {
            number_1: '2,60'
        },
        y2021: {
            number_1: '2,80'
        },
        y2022: {
            number_1: '3,52'
        }
    },
    {
        id: 4,
        number: 3.1,
        name_indicators: 'Стоимость топлива (уголь Каражыра)',
        unit: {
            name_1: 'тенге/тонна'
        },
        y2017: {
            number_1: '2848,21'
        },
        y2018: {
            number_1: '2991,07'
        },
        y2019: {
            number_1: '3141,07'
        },
        y2020: {
            number_1: '3298,21'
        },
        y2021: {
            number_1: '3582,52'
        },
        y2022: {
            number_1: '3833,04'
        }
    },
    {
        id: 5,
        number: 3.2,
        name_indicators: 'Объем топлива (уголь Каражыра)',
        unit: {
            name_1: 'тонн'
        },
        y2017: {
            number_1: '491799'
        },
        y2018: {
            number_1: '503760'
        },
        y2019: {
            number_1: '713542'
        },
        y2020: {
            number_1: '857351'
        },
        y2021: {
            number_1: '862667'
        },
        y2022: {
            number_1: '867166'
        }
    },
    {
        id: 6,
        number: 3.3,
        name_indicators: 'Цена транспортировки (уголь Каражыра)',
        unit: {
            name_1: 'тенге/тонна',
            name_2: 'тенге/кВтч'
        },
        y2017: {
            number_1: '1711,12',
            number_2: '0,0012'
        },
        y2018: {
            number_1: '2101,90',
            number_2: '0,0014'
        },
        y2019: {
            number_1: '2192,71',
            number_2: '0,0012'
        },
        y2020: {
            number_1: '2307,96',
            number_2: '0,0012'
        },
        y2021: {
            number_1: '2402,16',
            number_2: '0,0013'
        },
        y2022: {
            number_1: '2865,85',
            number_2: '0,0016'
        }
    },
    {
        id: 7,
        number: 3.4,
        name_indicators: 'Стоимость топлива (уголь Майкуба)',
        unit: {
            name_1: 'тенге/тонна'
        },
        y2017: {
            number_1: '2533,44'
        },
        y2018: {
            number_1: '2638,39'
        },
        y2019: {
            number_1: '2638,39'
        },
        y2020: {
            number_1: '2902,00'
        },
        y2021: {
            number_1: '-'
        },
        y2022: {
            number_1: '-'
        }
    },
    {
        id: 8,
        number: 3.5,
        name_indicators: 'Объем топлива (уголь Майкуба)',
        unit: {
            name_1: 'тонн'
        },
        y2017: {
            number_1: '150953'
        },
        y2018: {
            number_1: '187893'
        },
        y2019: {
            number_1: '156768'
        },
        y2020: {
            number_1: '41202'
        },
        y2021: {
            number_1: '-'
        },
        y2022: {
            number_1: '-'
        }
    },
    {
        id: 9,
        number: 3.6,
        name_indicators: 'Цена транспортировки (уголь Майкуба)',
        unit: {
            name_1: 'тенге/тонна',
            name_2: 'тенге/кВтч'
        },
        y2017: {
            number_1: '1962,78',
            number_2: '0,0013'
        },
        y2018: {
            number_1: '2439,29',
            number_2: '0,0016'
        },
        y2019: {
            number_1: '2639,89',
            number_2: '0,0014'
        },
        y2020: {
            number_1: '2352,37',
            number_2: '0,0012'
        },
        y2021: {
            number_1: '-',
            number_2: '0,0000'
        },
        y2022: {
            number_1: '-',
            number_2: '0,0000'
        }
    },
    {
        id: 10,
        number: 3.7,
        name_indicators: 'Стоимость топлива (мазут)',
        unit: {
            name_1: 'тенге/тонна'
        },
        y2017: {
            number_1: '36108,94'
        },
        y2018: {
            number_1: '43698,71'
        },
        y2019: {
            number_1: '61521,83'
        },
        y2020: {
            number_1: '78436,35'
        },
        y2021: {
            number_1: '70736,96'
        },
        y2022: {
            number_1: '79919,80'
        }
    },
    {
        id: 11,
        number: 3.8,
        name_indicators: 'Объем топлива (мазут)',
        unit: {
            name_1: 'тонн'
        },
        y2017: {
            number_1: '760'
        },
        y2018: {
            number_1: '535'
        },
        y2019: {
            number_1: '890'
        },
        y2020: {
            number_1: '534'
        },
        y2021: {
            number_1: '603'
        },
        y2022: {
            number_1: '894'
        }
    },
    {
        id: 11,
        number: 4,
        name_indicators: 'Амортизация',
        unit: {
            name_1: 'тенге/кВтч'
        },
        y2017: {
            number_1: '0,61'
        },
        y2018: {
            number_1: '0,62'
        },
        y2019: {
            number_1: '0,59'
        },
        y2020: {
            number_1: '0,69'
        },
        y2021: {
            number_1: '0,98'
        },
        y2022: {
            number_1: '1,10'
        }
    }
])

const tepHeader = reactive([
    {
        field: 'number',
        header: '№'
    },
    {
        field: 'name_indicators',
        header: 'Наименование показателей'
    },
    {
        field: 'unit',
        header: 'Ед. изм.'
    },
    {
        field: 'y2017',
        header: '2017'
    },
    {
        field: 'y2018',
        header: '2018'
    },
    {
        field: 'y2019',
        header: '2019'
    },
    {
        field: 'y2020',
        header: '2020'
    },
    {
        field: 'y2021',
        header: '2021'
    }
])

const chartOptions = reactive({
    responsive: true,
    stacked: true,
})

const chartDataElectric = reactive({
    labels: [ '2019', '2020', '2021', '2022'],
    datasets: [
        {
            label: 'План (млн.тенге)',
            backgroundColor: '#3b82f6',
            data: [1212190, 993166, 1833819.396, 1356209]
        },
        {
            label: 'Факт (млн.тенге)',
            backgroundColor: '#e9b308',
            data: [1212190, 993166, 1833819.396, 1356209]
        },
        {
            label: '-',
            backgroundColor: 'red',
            data: [49, 76, 64, 0]
        }
    ],

})

const chartDataThermo = reactive({
    labels: [ '2019', '2020', '2021', '2022'],
    datasets: [
        {
            label: 'План (млн.тенге)',
            backgroundColor: '#3b82f6',
            data: [1414303, 774162, 1059965, 1700589]
        },
        {
            label: 'Факт (млн.тенге)',
            backgroundColor: '#e9b308',
            data: [1416578, 779191, 1064561, 0]
        },
        {
            label: '-',
            backgroundColor: 'red',
            data: [26, 7, 5, 0]
        }
    ],

})

const chartDataDoughnut = reactive({
    labels: ['2019', '2020', '2021', '2022'],
    datasets: [
        {
            backgroundColor: ['#23c560', '#e9b308', '#3b82f6', '#fe3e32'],
            data: [1913273, 1934020, 1957266, 0]
        }
    ]
})

</script>
<template>
  <!-- ТЭП -->
    <div class=" border-round-lg p-4 bg-white">
        <div class="flex flex-row justify-content-between mb-3">
            <div  class="flex">
            <h4 class="m-auto">Технико - экономические показатели</h4>
            </div>
            <router-link to="">
                <button  class="seeAll btn btn-outline-secondary">Посметреть все
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#152957" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </router-link>
        </div>

            <DataTable showGridlines :value="technicalEconomicIndicators" >
                <div v-for="(item, idx) in tepHeader" :key="idx">
                    <Column :field="item.field" :header="item.header">
                        <template v-if="item.field.hasOwnProperty('u')" #body="slotProps">
                            <div>
                                {{ slotProps.data.unit.name_1 }}
                            </div>
                            <div>
                                {{ slotProps.data.unit.name_2 }}
                            </div>
                        </template>

                        <template v-if="item.field.hasOwnProperty('y20')" #body="slotProps">
                            <div>
                                {{ slotProps.data.y2017.number_1 }}
                            </div>
                            <div>
                                {{ slotProps.data.y2017.number_2 }}
                            </div>
                        </template>
                    </Column>
                </div>
            </DataTable>


    </div>
  <!-- ТЭП -->

  <!-- Краткая справка -->
    <div class=" border-round-lg p-4 bg-white mt-3">
        <div class="flex flex-row justify-content-between mb-3">
            <div  class="flex">
                <h4 class="m-auto">Краткая справка</h4>
            </div>

        </div>
        <p>
            <span class="font-bold">Усть-Каменогорская ТЭЦ</span> — ТОО «Усть-Каменогорская ТЭЦ» -
            теплоэлектроцентраль, расположенная в городе Усть-Каменогорске Восточно-Казахстанской
            области, Казахстан. Принадлежит ТОО «Шыгыс Energo («Шыгыс Энерго»)» (находится в частной
            собственности). Площадка ТОО «Усть-Каменогорская ТЭЦ» расположена в черте города в пределах
            второй надпойменной террасы р. Ульба. Занимаемая площадь 42 га. Установленная мощность ТОО
            «Усть-Каменогорская ТЭЦ» по состоянию на 01.01.2022г. года составляет: <br />
            - электрическая - 372,5 МВт <br />
            - тепловая – 859,9 Гкал/ч.
        </p>
    </div>
  <!-- Краткая справка -->

  <!-- Паспортные данные -->
    <div class=" border-round-lg p-4 bg-white mt-3">
        <div class="flex flex-row justify-content-between mb-3">
            <div  class="flex">
                <h4 class="m-auto">Паспортные данные</h4>
            </div>
            <router-link to="">
                <button  class="seeAll btn btn-outline-secondary">Посметреть все
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#152957" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </router-link>
        </div>
        <DataTable showGridlines :value="passportData">
            <Column field="number" header="№"></Column>
            <Column field="name" header="Наименование"></Column>
            <Column field="description" header="Описание"></Column>
        </DataTable>
    </div>
  <!-- Паспортные данные -->

  <!-- Тарифы -->
    <div class=" border-round-lg p-4 bg-white mt-3">
        <div class="flex flex-row justify-content-between mb-3">
            <div  class="flex">
                <h4 class="m-auto">Тарифы</h4>
            </div>
            <router-link to="">
                <button  class="seeAll btn btn-outline-secondary">Посметреть все
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#152957" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </router-link>
        </div>
        <h6>По производству электрической энергии</h6>
        <DataTable showGridlines :value="thermalEnergyTariff">
            <Column field="number" header="№"></Column>
            <Column field="name_indicators" header="Наименование показателей"></Column>
            <Column field="unit" header="Ед. изм.">
                <template #body="slotProps">
                    <div>
                        {{ slotProps.data.unit.name_1 }}
                    </div>
                    <div>
                        {{ slotProps.data.unit.name_2 }}
                    </div>
                </template>
            </Column>

            <Column field="y2017" header="2017">
                <template #body="slotProps">
                    <div>
                        {{ slotProps.data.y2017.number_1 }}
                    </div>
                    <div>
                        {{ slotProps.data.y2017.number_2 }}
                    </div>
                </template>
            </Column>

            <Column field="y2018" header="2018">
                <template #body="slotProps">
                    <div>
                        {{ slotProps.data.y2018.number_1 }}
                    </div>
                    <div>
                        {{ slotProps.data.y2018.number_2 }}
                    </div>
                </template>
            </Column>

            <Column field="y2019" header="2019">
                <template #body="slotProps">
                    <div>
                        {{ slotProps.data.y2019.number_1 }}
                    </div>
                    <div>
                        {{ slotProps.data.y2019.number_2 }}
                    </div>
                </template>
            </Column>

            <Column field="y2020" header="2020">
                <template #body="slotProps">
                    <div>
                        {{ slotProps.data.y2020.number_1 }}
                    </div>
                    <div>
                        {{ slotProps.data.y2020.number_2 }}
                    </div>
                </template>
            </Column>

            <Column field="y2021" header="2021">
                <template #body="slotProps">
                    <div>
                        {{ slotProps.data.y2021.number_1 }}
                    </div>
                    <div>
                        {{ slotProps.data.y2021.number_2 }}
                    </div>
                </template>
            </Column>

            <Column field="y2022" header="2022">
                <template #body="slotProps">
                    <div>
                        {{ slotProps.data.y2022.number_1 }}
                    </div>
                    <div>
                        {{ slotProps.data.y2022.number_2 }}
                    </div>
                </template>
            </Column>
        </DataTable>
    </div>
  <!-- Тарифы -->

<!-- Инвестиционная программа/Электрическая энергия -->
    <div class=" border-round-lg p-4 bg-white mt-3">
        <div class="flex flex-row justify-content-between mb-3">
            <div  class="flex">
                <h4 class="m-auto">Инвестиционная программа</h4>
            </div>
        </div>

        <h6>Инвестиционная программа по электрической энергии</h6>

        <div class="flex">
            <div class="col-12 lg:col-8">
                <Chart type="bar" :data="chartDataElectric" :options="chartOptions" class="w-full h-30rem" style="width: 100%"  />
            </div>
            <div class="col-12 lg:col-4">
                <Chart type="doughnut" :data="chartDataDoughnut" :options="chartOptions" class="w-full h-30rem" />
            </div>
        </div>


    </div>
<!-- Инвестиционная программа -->

<!-- Инвестиционная программа/Тепловая энергия -->
    <div class=" border-round-lg p-4 bg-white mt-3">

        <h6>Инвестиционная программа по тепловой энергии:</h6>

        <div class="flex">
            <div class="col-12 lg:col-8">
                <Chart type="bar" :data="chartDataThermo" :options="chartOptions" class="w-full h-30rem" />
            </div>
            <div class="col-12 lg:col-4">
                <Chart type="doughnut" :data="chartDataDoughnut" :options="chartOptions" class="w-full h-30rem"  />
            </div>
        </div>


    </div>
<!-- Инвестиционная программа -->

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

.seeAll:hover, .settings:active{
    color: #fff;
    background-color: #215A96;
    border-color: #215A96;
}
</style>