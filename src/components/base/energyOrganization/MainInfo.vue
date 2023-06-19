<script setup>

import InputLabel from "@/components/UI/Vinput.vue";
import {defineAsyncComponent, markRaw, reactive, ref} from "vue";
import {useDialog} from 'primevue/usedialog';

const AddGuild = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddGuild.vue'));

const inputItemsPassport = reactive([
    {
        id: 1,
        name: 'Наименование ЭПО',
        style: 'lg:col-4',
        items: [
            {
                id: 1,
                type: 'input',
                label: 'Полное название ЭПО',
                modelValue: ''
            },
            {
                id: 2,
                type: 'input',
                label: 'Короткое название ЭПО',
                modelValue: ''
            },
        ]
    },
    {
        id: 2,
        name: 'Юридический адрес',
        style: 'lg:col-4',
        items: [
            {
                id: 1,
                type: 'select',
                label: 'Город',
                placeholder: 'Пусто',
                icon: 'pi pi-fw pi-user',
                modelValue: '',
                items: [
                    {
                        name: 'Актау'
                    },
                    {
                        name: 'Астана'
                    },
                    {
                        name: 'Алматы'
                    }
                ]
            },
            {
                id: 1,
                type: 'input',
                label: 'Адрес',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
            },
        ]
    },
    {
        id: 3,
        name: 'Фактический адрес',
        style: 'lg:col-4',
        items: [
            {
                id: 1,
                type: 'select',
                label: 'Город',
                placeholder: 'Пусто',
                icon: 'pi pi-fw pi-user',
                modelValue: '',
                items: [
                    {
                        name: 'Актау'
                    },
                    {
                        name: 'Астана'
                    },
                    {
                        name: 'Алматы'
                    }
                ]
            },
            {
                id: 1,
                type: 'input',
                label: 'Адрес',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
            },
        ]
    },
    {
        id: 4,
        name: 'Местонахождение',
        style: 'lg:col-4',
        items: [
            {
                id: 1,
                type: 'select',
                label: 'Город',
                placeholder: 'Пусто',
                icon: 'pi pi-fw pi-user',
                modelValue: '',
                items: [
                    {
                        name: 'Актау'
                    },
                    {
                        name: 'Астана'
                    },
                    {
                        name: 'Алматы'
                    }
                ]
            },
            {
                id: 1,
                type: 'input',
                label: 'Адрес',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
            },
        ]
    },
    {
        id: 5,
        name: 'Геолокация',
        style: 'lg:col-4',
        items: [
            {
                id: 1,
                type: 'input',
                label: 'Широта',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
            }, {
                id: 2,
                type: 'input',
                label: 'Долгота',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
            },
        ]
    },
    {
        id: 6,
        name: 'БИН*',
        style: 'lg:col-4',
        items: [
            {
                id: 1,
                type: 'input',
                label: 'БИН*',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
            },
            {
                id: 2,
                type: 'date',
                label: 'Дата первичной регистрации',
                modelValue: '',
            },
        ]
    },
    {
        id: 7,
        name: 'Первый руководитель',
        style: 'lg:col-3',
        items: [
            {
                id: 1,
                type: 'input',
                label: 'ФИО',
                placeholder: 'Пусто',
                modelValue: '',
            },
            {
                id: 2,
                type: 'select',
                label: 'Должность',
                placeholder: 'Пусто',
                items: [
                    {
                        name: 'Генеральный директор'
                    },
                    {
                        name: 'Главный инженер'
                    },
                ],
                modelValue: '',
            },
            {
                id: 3,
                type: 'input',
                label: 'Мобильный номер',
                placeholder: 'Пусто',
                modelValue: '',
            },
            {
                id: 4,
                type: 'input',
                label: 'Городской номер',
                placeholder: 'Пусто',
                modelValue: '',
            },
        ]
    },
    {
        id: 8,
        name: 'Главный инженер',
        items: [
            {
                id: 1,
                type: 'input',
                label: 'ФИО',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
            },
            {
                id: 2,
                type: 'select',
                label: 'Должность',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
                items: [
                    {
                        name: 'Генеральный директор'
                    },
                    {
                        name: 'Главный инженер'
                    },
                ]
            },
            {
                id: 3,
                type: 'input',
                label: 'Мобильный номер',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
            },
            {
                id: 4,
                type: 'input',
                label: 'Городской номер',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
            },
        ]
    },
    {
        id: 9,
        name: 'Форма собственности',
        style: 'lg:col-4',
        items: [
            {
                id: 1,
                type: 'select',
                label: 'Форма собственности',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
                items: [
                    {
                        name: 'Частная'
                    },
                    {
                        name: 'Государственная'
                    },
                ]
            }
        ]
    },
    {
        id: 10,
        name: 'Учредители и доли участия',
        style: 'lg:col-4',
        items: [
            {
                id: 1,
                type: 'textArea',
                label: 'Учредители и доли участия',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
            },
        ]
    },
    {
        id: 11,
        name: 'Климатические условия',
        style: 'lg:col-4',
        items: [
            {
                id: 1,
                type: 'select',
                label: 'Форма собственности',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
                items: [
                    {
                        name: 'Частная'
                    },
                    {
                        name: 'Государственная'
                    },
                ]
            }
        ]
    },
    {
        id: 12,
        name: 'Контакты',
        style: 'lg:col-4',
        items: [
            {
                id: 1,
                type: 'input',
                label: 'Телефон приемной',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
            },
            {
                id: 2,
                type: 'input',
                label: 'Телефон канцелярии',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
            },
            {
                id: 3,
                type: 'input',
                label: 'Электронная почта',
                placeholder: 'Пусто',
                style: "lg:w-12 md:w-12 sm:w-100",
                modelValue: '',
            },
        ]
    },
]);

const company = reactive([
    {
        id: 1,
        type: 'textArea',
        label: 'Наименование области',
        value: '123'
    },
    {
        id: 2,
        type: 'textArea',
        label: 'Наименование города',
        value: ''
    },
])
const balance = reactive([
    {
        id: 1,
        name: 'Наименование ЭПО',
        style: 'lg:col-4',
        items: [
            {
                id: 1,
                type: 'input',
                label: 'Полное название ЭПО',
            },
            {
                id: 2,
                type: 'input',
                label: 'Короткое название ЭПО',
            },
        ]
    },
]);
const value = ref('<p><strong>Усть-Каменогорская ТЭЦ</strong>&nbsp;— ТОО «Усть-Каменогорская ТЭЦ» - теплоэлектроцентраль, расположенная в городе Усть-Каменогорске Восточно-Казахстанской области, Казахстан. Принадлежит ТОО «Шыгыс Energo («Шыгыс Энерго»)» (находится в частной собственности). Площадка ТОО «Усть-Каменогорская ТЭЦ» расположена в черте города в пределах второй надпойменной террасы р. Ульба. Занимаемая площадь 42 га. Установленная мощность ТОО «Усть-Каменогорская ТЭЦ» по состоянию на 01.01.2022г. года составляет:</p><p>- электрическая - 372,5 МВт</p><p>- тепловая – 859,9 Гкал/ч.</p>')
const valueTwo = ref('<p><strong>Усть-Каменогорская ТЭЦ</strong> (далее Предприятие) , осуществляет комбинированное производство и отпуск двух видов энергии – электрической и тепловой, - централизованное теплоснабжение потребителей с использованием отработавшей теплоты турбин (теплофикация) и выработку электроэнергии на базе теплового потребления.&nbsp;</p><p> Основным топливом для Предприятия является уголь, растопочным топливом является мазут.</p><p>Тепломеханическое оборудование теплоэлектроцентрали состоит из основных агрегатов (котлов, турбин) и их вспомогательного оборудования, объединенных с основным оборудованием единым технологическим процессом.</p><p>Электротехническое оборудование теплоэлектроцентрали состоит из электрических генераторов, силовых трансформаторов, вспомогательного электротехнического оборудования, связанных в электрическую схему Предприятия.</p><p>Доставка угля на Предприятие осуществляется по железной дороге полувагонами.&nbsp;</p><p>Устройства для разгрузки, подачи и подготовки угля, включает в себя вагоноопрокидыватели, открытый склад угля, размораживающее устройство, конвейеры подачи угля, угольные дробилки, бункера сырого угля, питатели сырого угля, угольные шаробарабанные мельницы. Вместе с бункерами пыли, топочными камерами котлов, газоходами котлов, золоуловителями, тягодутьевыми установками, воздуховодами, внешними газоходами, дымовыми трубами эти устройства образуют топливно-газовоздушный тракт электростанции.&nbsp;</p><p>Уголь высыпается в приемные бункера вагоноопрокидывателей, и далее поступает по ленточным конвейерам на склад или в бункеры&nbsp;котлоагрегатов. С бункеров котлоагрегатов смесь угольной пыли и транспортирующего его воздуха вдувается в топочную&nbsp;камеру&nbsp;котла через пылеугольные горелки. Сжигаемая в форме факела в топочной камере угольная пыль интенсивно отдает тепло воде, движущейся внутри труб экранов, покрывающих внутренние стены топочной камеры. Выходящие из топочной камеры газообразные продукты&nbsp;сгорания дымовые газы,&nbsp;последовательно омывают поверхности нагрева котла: пароперегреватель, экономайзер, воздухоподогреватель. Охлажденные дымовые газы отсасываются&nbsp;дымососами&nbsp;в дымовую трубу. Перед дымососами газы очищаются от золы в золоуловителях. Зола и шлак, выпавшие из топочной камеры, транспортируются водой к багерным насосам&nbsp;и далее прокачиваются на золоотвал.</p><p>Произведенный в котлоагрегатах острый перегретый пар, по трубопроводам поступает в турбины, которые вращают электрические генераторы. В турбоагрегатах, состоящих их турбины и генератора, происходит преобразования энергии острого пара в электрическую энергию и отбор низкопотенциального пара для подогрева сетевой воды, поступающей на горячее водоснабжение и теплофикацию. С шин генераторов электроэнергия поступает на повышающие трансформаторы связи с электрической системой и далее потребителям, а также на собственные нужды.&nbsp;</p><p>Заполнение котлов, восполнение потерь пара и конденсата на ТОО «Усть-Каменогорская ТЭЦ» и у потребителей осуществляется химической обессоленной водой, подготавливаемой в химическом отделении турбинного цеха.&nbsp;</p><p>Водоснабжение ТОО «Усть-Каменогорская ТЭЦ» осуществляется по водопроводам от предприятий АО "Оскемен-Водоканал" и АО «Ульбинский металлургический завод». От собственной береговой насосной станции из реки Ульба поступает промышленная вода.</p>')
const valueThree = ref('<p>Основные этапы развития станции:</p><p>1939 г. - разработан проект Усть-Каменогорской ТЭЦ.</p><p>1947 г. – введена во временную эксплуатацию первая очередь мощностью 6 664 кВт.</p><p>1951 г. – введена вторая очередь УК ТЭЦ. В течение последующих восьми лет, введены в эксплуатацию в общей сложности 14 котлоагрегатов и турбогенераторов.</p><p>1953 г. – ввод третьей очереди УК ТЭЦ, начало теплоснабжения г. Усть-Каменогорск.</p><p>1954 г. - 1959 гг. – ввод четвертой очереди УК ТЭЦ.</p><p>1963 г. - 1967 гг. – ввод пятой очереди.</p><p>1967 г. - 1970 гг. – ввод шестой очереди.</p><p>1991 г. - ввод котлоагрегата №15, расширение седьмой очереди УК ТЭЦ.</p><p>1997 г. - приобретение станции в собственность Корпорацией AES.</p><p>2004 г. - введен новый золоотвал (31 га).</p><p>2012 г. – завершен проект внедрения пылегазоочистных установок (батарейные эмульгаторы) на всех девяти котлоагрегатах.</p><p>2012 г. – ввод в эксплуатацию градирни с системой оборотного технического водоснабжения.</p><p>2013г. – произведена реконструкция ТАст.№11 с увеличением мощности со 100 до 120 МВт</p><p>2016г. - ввод в эксплуатацию турбоагрегата ст.№12 мощностью 120 МВт.</p><p>2017г. - приобретение станции в собственность Компании ККС.</p><p>В настоящее время на станции установлено 9 котлоагрегатов паропроизводительностью от 75 до 500 т/ч, 8 турбоагрегатов мощностью от 4 до 120 МВт.</p>')
const valueFour = ref('<p>В 2013 году была выполнена модернизация турбины типа Т-100-130 ст. № 11 с повышением электрической мощности до 120 МВт и заменой цилиндра высокого давления.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>В 2014 году была выполнена замена проточной части (ротора и цилиндра высокого давления) турбины типа Р-38-130-34&nbsp;&nbsp;ст.№9.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><p>В 2019 году была выполнена&nbsp;реконструкция золоотвала №3.</p>')

const selected = ref('')

const allData = reactive([
    {
        key: '0',
        type: 'country',
        label: 'Цех имени Айбола',
        data: 'ar',
        inf0: '',
        main: true,
        children: [
            {
                key: '0_0',
                type: 'country',
                label: 'СВ-1436/200-80 УХЛ4',
                count: '6',
                info: 'Гидрогенератор ',
                data: 'ar',
                children: [
                    {
                        key: '0_0_0',
                        type: 'country',
                        label: 'КРУ-10 кВ ГЭС (23 яч.)',
                        info: 'Комплектное распределительное устройство 10 кВ',
                        count: '1',
                        data: 'ar',
                    },
                    {
                        key: '0_0_1',
                        type: 'country',
                        label: 'КРУ-10 кВ ОРУ (16 яч.)',
                        info: 'Комплектное распределительное устройство 10 кВ',
                        count: '1',
                        data: 'hr'
                    }
                ]
            },
            {
                key: '0_1',
                type: 'country',
                label: 'ТЦ-250000/242-13,8кВ',
                count: '3',
                info: 'Блочные трансформатор',
                data: 'fr',
                children: [
                    {
                        key: '0_1_0',
                        type: 'country',
                        label: 'КТП',
                        count: '3',
                        info: 'Блочные трансформатор',
                        data: 'fr'
                    },
                    {
                        key: '0_1_1',
                        type: 'country',
                        label: 'UNITROL 6800',
                        count: '6',
                        info: 'Системы возбуждения гидрогенераторов',
                        data: 'ma'
                    }
                ]
            },
            {
                key: '0_2',
                type: 'country',
                label: 'RESIBLOC',
                info: 'Трансформатор возбуждения',
                count: '6',
                data: 'fr',
                children: []
            }
        ]
    },
    {
        key: '1',
        type: 'country',
        label: 'Цех 2',
        data: 'ar',
        main: true,
        inf0: '',
        children: [
            {
                key: '0_0',
                type: 'country',
                label: 'СВ-1436/200-80 УХЛ4',
                count: '6',
                info: 'Гидрогенератор ',
                data: 'ar',
                children: [
                    {
                        key: '0_0_0',
                        type: 'country',
                        label: 'КРУ-10 кВ ГЭС (23 яч.)',
                        info: 'Комплектное распределительное устройство 10 кВ',
                        count: '1',
                        data: 'ar',
                    },
                    {
                        key: '0_0_1',
                        type: 'country',
                        label: 'КРУ-10 кВ ОРУ (16 яч.)',
                        info: 'Комплектное распределительное устройство 10 кВ',
                        count: '1',
                        data: 'hr'
                    }
                ]
            },
            {
                key: '0_1',
                type: 'country',
                label: 'ТЦ-250000/242-13,8кВ',
                count: '3',
                info: 'Блочные трансформатор',
                data: 'fr',
                children: [
                    {
                        key: '0_1_0',
                        type: 'country',
                        label: 'КТП',
                        count: '3',
                        info: 'Блочные трансформатор',
                        data: 'fr'
                    },
                    {
                        key: '0_1_1',
                        type: 'country',
                        label: 'UNITROL 6800',
                        count: '6',
                        info: 'Системы возбуждения гидрогенераторов',
                        data: 'ma'
                    }
                ]
            },
            {
                key: '0_2',
                type: 'country',
                label: 'RESIBLOC',
                info: 'Трансформатор возбуждения',
                count: '6',
                data: 'fr',
                children: []
            }
        ]
    },
    {
        key: '2',
        type: 'country',
        label: 'Цех 3',
        data: 'ar',
        inf0: '',
        main: true,
        children: [
            {
                key: '0_0',
                type: 'country',
                label: 'СВ-1436/200-80 УХЛ4',
                count: '6',
                info: 'Гидрогенератор ',
                data: 'ar',
                children: [
                    {
                        key: '0_0_0',
                        type: 'country',
                        label: 'КРУ-10 кВ ГЭС (23 яч.)',
                        info: 'Комплектное распределительное устройство 10 кВ',
                        count: '1',
                        data: 'ar',
                    },
                    {
                        key: '0_0_1',
                        type: 'country',
                        label: 'КРУ-10 кВ ОРУ (16 яч.)',
                        info: 'Комплектное распределительное устройство 10 кВ',
                        count: '1',
                        data: 'hr'
                    }
                ]
            },
            {
                key: '0_1',
                type: 'country',
                label: 'ТЦ-250000/242-13,8кВ',
                count: '3',
                info: 'Блочные трансформатор',
                data: 'fr',
                children: [
                    {
                        key: '0_1_0',
                        type: 'country',
                        label: 'КТП',
                        count: '3',
                        info: 'Блочные трансформатор',
                        data: 'fr'
                    },
                    {
                        key: '0_1_1',
                        type: 'country',
                        label: 'UNITROL 6800',
                        count: '6',
                        info: 'Системы возбуждения гидрогенераторов',
                        data: 'ma'
                    }
                ]
            },
            {
                key: '0_2',
                type: 'country',
                label: 'RESIBLOC',
                info: 'Трансформатор возбуждения',
                count: '6',
                data: 'fr',
                children: []
            }
        ]
    },
]);

const data = ref('');

const visible = ref(false)

const menu = ref('')
const items = reactive([
    {
        label: 'Посмотреть',
        icon: 'pi pi-fw pi-eye',
        command: (event) => {
            showModal()
        }
    },
    {
        label: 'Редактировать',
        icon: 'pi pi-fw pi-pencil',
        command: (event) => {
            console.log(event)
        }
    },
    {
        label: 'Удалить',
        icon: 'pi pi-fw pi-trash',
        command: (event) => {
            console.log(event)
        }
    },
]);

const toggleMenu = (event, i) => {
    menu.value.toggle(event);
    data.value = i
};
const showModal = function () {
    visible.value = true
}
const dialog = useDialog();
const showAddModal = function (length) {
    dialog.open(AddGuild, {
        props: {
            header: 'Балансовая принадлежность',
            length: length,
            style: {
                width: '50vw',
            },
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
            modal: true
        },

        onClose: (options) => {
            const data = options.data;
            console.log("data", data)
            // if (data) {
            //     const buttonType = data.buttonType;
            //     const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data.name };
            //
            //     toast.add({ severity:'info', ...summary_and_detail, life: 3000 });
            // }
        }
    })
}

</script>


<template>
  <!--        1. Краткая справка:-->
    <div class="flex">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Краткая справка</h5>
                <Editor v-model="value" editorStyle="height: 120px"/>
            </div>
        </div>
    </div>
  <!--        2. Общие сведения:-->
    <div class="flex mt-3">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Общие сведения</h5>
                <Editor v-model="valueTwo" editorStyle="height: 170px"/>
            </div>
        </div>
    </div>
  <!--        3. История строительства и эксплуатации:-->
    <div class="flex mt-3">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>История строительства и эксплуатации</h5>
                <Editor v-model="valueThree" editorStyle="height: 200px"/>
            </div>
        </div>
    </div>
  <!--        4. Модернизация:-->
    <div class="flex mt-3">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Модернизация</h5>
                <Editor v-model="valueFour" editorStyle="height: 100px"/>
            </div>
        </div>
    </div>
  <!--        5. Паспортные данные: -->
    <div class="flex mt-3">
        <div class="col-12 border-round-lg bg-white">
            <div class="col-12 flex flex-column">
                <h5>Паспортные данные</h5>
                <div class="grid" v-for="item in inputItemsPassport" :key="item.id">
                    <div class="col-12 text-left mt-2 pb-0"><h6>{{ item.name }}</h6></div>
                    <div class="col-12 grid pb-1 pt-0">
                        <div :class='item.style' class="col-12 lg:col-3 md:col-6  pb-0" v-for="i in item.items"
                             :key="i.id">

                            <div v-if="i.type==='input'">
                                    <span class="p-float-label">
                                        <InputText v-model="i.modelValue" class="w-full" id="username"/>
                                        <label for="username">{{ i.label }}</label>
                                    </span>
                            </div>

                            <div v-if="i.type==='select'">
                                <div class="p-float-label">
                                    <Dropdown :value="i.modelValue" inputId="dd-city" :options="i.items"
                                              optionLabel="name" placeholder="Выберите" class="w-full"/>
                                    <label for="dd-city">{{ i.label }}</label>
                                </div>
                            </div>

                            <div v-if="i.type==='date'">
                                <div class="p-float-label">
                                    <Calendar :view="view" :dateFormat="dateFormat" :value="data"
                                              @input="$emit('update:data', $event.target.value)" showIcon
                                              class="w-full"/>
                                    <label for="dd-city">{{ label }}</label>
                                    {{ data }}
                                </div>
                            </div>

                            <div v-if="i.type==='textArea'">
                                <div class="p-float-label">
                                    <Textarea v-model="selected" rows="5" cols="30" class="w-full"/>
                                    <label for="dd-city">{{ label }}</label>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr class="sm:block">
                </div>
            </div>
        </div>
    </div>
  <!--        6. Предмет деятельности согласно Устава: -->
    <div class="flex mt-3">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Предмет деятельности согласно Устава</h5>
                <Editor v-model="valueFour" editorStyle="height: 100px"/>
            </div>
        </div>
    </div>
  <!--        7. Компания осуществляет производство электрической и тепловой энергии для потребителей: -->
    <div class="flex mt-3">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12">
                <h5>Компания осуществляет производство электрической и тепловой энергии для потребителей</h5>
                <div class="grid flex flex-column lg:flex-row md:flex-row mt-3">
                    <div class="col-12 lg:col-4 md:col-6 pb-1 pt-0" v-for="c in company" :key="c.id">
                        <h6>{{ c.label }}</h6>
                        <InputLabel :selected="selected" v-model="selected" :label="c.label"
                                    :type="c.type"></InputLabel>
                        <InlineMessage v-if="c.value === ''" class="h-1rem">Username is required</InlineMessage>
                    </div>
                </div>
            </div>
        </div>
    </div>
  <!--        8. Описание регулируемой деятельности-->
    <div class="flex mt-3">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Описание регулируемой деятельности</h5>
                <Editor v-model="valueFour" editorStyle="height: 100px"/>
            </div>
        </div>
    </div>
  <!--        9. Балансовая принадлежность организации включает: -->
    <div class=" border-round-lg p-4 bg-white mt-3">

        <div class="flex flex-row justify-content-between mb-3">
            <div class="flex">
                <h4 class="m-auto">Балансовая принадлежность</h4>
            </div>
        </div>

        <Button icon="pi pi-plus" label="Добавить цех" @click="showAddModal(allData.length)"/>
        <DynamicDialog/>

        <div class="flex flex-column " v-for="i in allData">
            <div class="border-round-lg flex flex-row justify-content-between p-3 pb-2 lg:w-3 mt-3"
                 style="border: #c4c4c4 1px solid">
                <div><h6>{{ i.label }}</h6></div>
                <Button icon="pi pi-ellipsis-h" class="h-1rem" type="button" @click="toggleMenu($event, i)"
                        aria-haspopup="true" aria-controls="overlay_tmenu"/>
            </div>
        </div>
        <Menu ref="menu" id="overlay_tmenu" :model="items" popup/>

        <Dialog v-model:visible="visible" maximizable modal :header="data.label" :style="{ width: '70vw' }">
            <div class="col-12 grid">
                <OrganizationChart id="orgChart" class="" :value="data" collapsible :selectionMode="'single'">
                    <template #country="slotProps">
                        <div class="flex flex-column align-items-center">
                            <div class="mt-3 font-medium text-lg"> {{ slotProps.node.label }}</div>
                            <div class="mt-3 font-normal text-lg" v-if="slotProps.node.main !== true">Тип: {{ slotProps.node.info }}</div>
                            <div class="mt-3 font-normal text-lg" v-if="slotProps.node.main !== true">Количество: {{ slotProps.node.count }} ед.</div>
                        </div>
                    </template>
                    <template #default="slotProps">
                        <span>{{slotProps.node.data.label}}</span>
                    </template>
                </OrganizationChart>
            </div>
        </Dialog>
    </div>

</template>


<style scoped>

</style>