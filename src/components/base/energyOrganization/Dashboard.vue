<script setup>

import Chart from 'primevue/chart';
import {computed, onMounted, reactive, ref} from 'vue'
import { verticalBar, doughnut, setChartOptions } from '@/models/charts/setChart'


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

// header таблицы
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


//onClick readMore button
const technicalEconomicIndicatorsSorted = computed(() => {
    if(showMore.value === false){
        return technicalEconomicIndicators.slice(0,5)
    }else
        return technicalEconomicIndicators
})

const passportDataSorted = computed(() => {
    if(showMore2.value === false){
        return passportData.slice(0,5)
    }else
        return passportData
})

const thermalEnergyTariffSorted = computed(() => {
    if(showMore3.value === false){
        return thermalEnergyTariff.slice(0,5)
    }else
        return thermalEnergyTariff
})

const showMore = ref(false)
const hidden = ref(true)
const showMore2 = ref(false)
const showMore3 = ref(false)

const isClicked = ref(false)
const active = ref(0);
const toggle = function (){
    isClicked.value = !isClicked.value;
    if (isClicked.value) active.value = 1
    else active.value = 0
}


onMounted(() => {
    chartData.value = verticalBar(chart)
    chartData2.value = doughnut(chart)
    chartData3.value = verticalBar(chart2)
    chartData4.value = doughnut(chart2)
    chartOptions.value = setChartOptions()
})

const chartData = ref()
const chartData2 = ref()
const chartData3 = ref()
const chartData4 = ref()
const chartOptions = ref()

let chart = reactive({
    labels: [2019, 2020, 2021, 2022],
    data: [
        {
            label: 'План (млн. тенге)',
            color: 'blue',
            data: [1212190, 993166, 1833819, 1356209]
        },
        {
            label: 'Факт (млн. тенге)',
            color: 'yellow',
            data: [1212190, 993166, 1833819, 1356209]
        }
    ],
    data2: [49, 76, 64, 0]
})

let chart2 = reactive({
    labels: [2019, 2020, 2021, 2022],
    data: [
        {
            label: 'План (млн. тенге)',
            color: 'blue',
            data: [1414303, 774162, 1059965, 1700589]
        },
        {
            label: 'Факт (млн. тенге)',
            color: 'yellow',
            data: [1416578, 779191, 1064561, 0]
        }
    ],
    data2: [26, 7, 5, 0]
})

const seeMore = ref(false)

</script>
<template>
    <!-- Краткая справка -->
    <div class=" border-round-lg p-4 bg-white ">
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

    <!-- Общие сведения -->
    <div class=" border-round-lg p-4 bg-white mt-3 ">
        <div class="flex flex-row justify-content-between mb-3">
            <div  class="flex">
                <h4 class="m-auto">Общие сведения</h4>
            </div>
        </div>
        <div class="overflow-hidden" :class="{ 'h-full' : seeMore}" style="height: 105px">
            <p><strong>Усть-Каменогорская ТЭЦ</strong> (далее Предприятие) , осуществляет комбинированное производство и отпуск двух видов энергии – электрической и тепловой, - централизованное теплоснабжение потребителей с использованием отработавшей теплоты турбин (теплофикация) и выработку электроэнергии на базе теплового потребления.&nbsp;</p><p> Основным топливом для Предприятия является уголь, растопочным топливом является мазут.</p><p>Тепломеханическое оборудование теплоэлектроцентрали состоит из основных агрегатов (котлов, турбин) и их вспомогательного оборудования, объединенных с основным оборудованием единым технологическим процессом.</p><p>Электротехническое оборудование теплоэлектроцентрали состоит из электрических генераторов, силовых трансформаторов, вспомогательного электротехнического оборудования, связанных в электрическую схему Предприятия.</p><p>Доставка угля на Предприятие осуществляется по железной дороге полувагонами.&nbsp;</p><p>Устройства для разгрузки, подачи и подготовки угля, включает в себя вагоноопрокидыватели, открытый склад угля, размораживающее устройство, конвейеры подачи угля, угольные дробилки, бункера сырого угля, питатели сырого угля, угольные шаробарабанные мельницы. Вместе с бункерами пыли, топочными камерами котлов, газоходами котлов, золоуловителями, тягодутьевыми установками, воздуховодами, внешними газоходами, дымовыми трубами эти устройства образуют топливно-газовоздушный тракт электростанции.&nbsp;</p><p>Уголь высыпается в приемные бункера вагоноопрокидывателей, и далее поступает по ленточным конвейерам на склад или в бункеры&nbsp;котлоагрегатов. С бункеров котлоагрегатов смесь угольной пыли и транспортирующего его воздуха вдувается в топочную&nbsp;камеру&nbsp;котла через пылеугольные горелки. Сжигаемая в форме факела в топочной камере угольная пыль интенсивно отдает тепло воде, движущейся внутри труб экранов, покрывающих внутренние стены топочной камеры. Выходящие из топочной камеры газообразные продукты&nbsp;сгорания дымовые газы,&nbsp;последовательно омывают поверхности нагрева котла: пароперегреватель, экономайзер, воздухоподогреватель. Охлажденные дымовые газы отсасываются&nbsp;дымососами&nbsp;в дымовую трубу. Перед дымососами газы очищаются от золы в золоуловителях. Зола и шлак, выпавшие из топочной камеры, транспортируются водой к багерным насосам&nbsp;и далее прокачиваются на золоотвал.</p><p>Произведенный в котлоагрегатах острый перегретый пар, по трубопроводам поступает в турбины, которые вращают электрические генераторы. В турбоагрегатах, состоящих их турбины и генератора, происходит преобразования энергии острого пара в электрическую энергию и отбор низкопотенциального пара для подогрева сетевой воды, поступающей на горячее водоснабжение и теплофикацию. С шин генераторов электроэнергия поступает на повышающие трансформаторы связи с электрической системой и далее потребителям, а также на собственные нужды.&nbsp;</p><p>Заполнение котлов, восполнение потерь пара и конденсата на ТОО «Усть-Каменогорская ТЭЦ» и у потребителей осуществляется химической обессоленной водой, подготавливаемой в химическом отделении турбинного цеха.&nbsp;</p><p>Водоснабжение ТОО «Усть-Каменогорская ТЭЦ» осуществляется по водопроводам от предприятий АО "Оскемен-Водоканал" и АО «Ульбинский металлургический завод». От собственной береговой насосной станции из реки Ульба поступает промышленная вода.</p>
        </div>
        <button @click="seeMore =! seeMore"> {{ seeMore ? "скрыть" : "показать еще"}}</button>
<!--        <button @click="seeMore =! seeMore"> {{ seeMore ? buttonHide : buttonShow}}</button>-->
<!--        <button @click="seeMore =! seeMore"> {{ filterModel.value ? filterModel.value[0] : 0 }}</button>-->
    </div>
    <!-- Общие сведения -->


    <!-- ТЭП -->
    <div class=" border-round-lg p-4 bg-white mt-3">
        <div class="flex flex-row justify-content-between mb-3">
            <div  class="flex">
                <h4 class="m-auto">Технико - экономические показатели</h4>
            </div>
            <router-link to="">
                <button @click="showMore =! showMore"  class="seeAll btn btn-outline-secondary">Посметреть все
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#152957" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </router-link>
        </div>

        <DataTable showGridlines :value="technicalEconomicIndicatorsSorted">
                <Column v-for="tep in teps" :key="tep.id" :field="tep.field" :header="tep.header" />
        </DataTable>

    </div>
  <!-- ТЭП -->

    <!-- ТЭП -->
<!--    <div class=" border-round-lg p-4 bg-white mt-3">-->
<!--        <div class="flex flex-row justify-content-between ">-->
<!--            <div  class="flex">-->
<!--                <h4 class="m-auto">Технико - экономические показатели</h4>-->
<!--            </div>-->
<!--            <router-link to="">-->
<!--                <button @click="hidden =! hidden"  class="seeAll btn btn-outline-secondary" label="Activate 1st">Посметреть все-->
<!--                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--                        <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#152957" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>-->
<!--                    </svg>-->
<!--                </button>-->
<!--            </router-link>-->
<!--        </div>-->


<!--        <DataTable class="mt-3" :class="{hidden: hidden}" showGridlines :value="technicalEconomicIndicators">-->
<!--            <Column v-for="tep in teps" :key="tep.id" :field="tep.field" :header="tep.header" />-->
<!--        </DataTable>-->

<!--    </div>-->
    <!-- ТЭП -->

  <!-- Паспортные данные -->
    <div class=" border-round-lg p-4 bg-white mt-3">
        <div class="flex flex-row justify-content-between mb-3">
            <div  class="flex">
                <h4 class="m-auto">Паспортные данные</h4>
            </div>
            <router-link to="">
                <button @click="showMore2 =! showMore2"  class="seeAll btn btn-outline-secondary">Посметреть все
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#152957" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </router-link>
        </div>
        <DataTable showGridlines :value="passportDataSorted">
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
                <button @click="showMore3 =! showMore3"  class="seeAll btn btn-outline-secondary">Посметреть все
                    <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#152957" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </router-link>
        </div>
        <h6>По производству электрической энергии</h6>
        <DataTable showGridlines :value="thermalEnergyTariffSorted">
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

        <div class="flex justify-content-between">
            <h6>Инвестиционная программа по электрической энергии</h6>
            <h6 class="mr-7">Освоено:</h6>
        </div>

        <div class="flex  justify-content-around border-round-lg p-4 bg-white">
            <div class=" lg:col-8">
                <Chart type="bar" :data="chartData" :options="chartOptions" class=" h-30rem" />
            </div>
            <div class=" lg:col-4">
                <Chart type="doughnut" :data="chartData2" :options="chartOptions" class=" h-30rem " />
            </div>
        </div>
    </div>
  <!-- Инвестиционная программа -->

  <!-- Инвестиционная программа/Тепловая энергия -->
    <div class=" border-round-lg p-4 bg-white mt-3">

        <div class="flex justify-content-between m-0">
            <h6>Инвестиционная программа по тепловой энергии:</h6>
            <h6 class="mr-7">Освоено:</h6>
        </div>

        <div class="flex  justify-content-around border-round-lg p-4 bg-white">
            <div class=" lg:col-8">
                <Chart type="bar" :data="chartData3" :options="chartOptions" class=" h-30rem" />
            </div>
            <div class=" lg:col-4">
                <Chart type="doughnut" :data="chartData4" :options="chartOptions" class=" h-30rem " />
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

.description-info {
    width: 400px;
}
.readLess {
    height: 109px;
    overflow: hidden;
}
.read-more, .read-less {
    display: inline-block;
}
.showMore{
    height: 100%
}
</style>