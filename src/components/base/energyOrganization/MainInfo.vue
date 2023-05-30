<script setup>

import InputLabel from "@/components/UI/Vinput.vue";
import {ref} from "vue";

const inputItemsPassport = ref([
    {
        id:1,
        type: 'select',
        label: 'Город',
        placeholder: 'Пусто',
        icon: 'pi pi-fw pi-user',
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
        id: 2,
        type: 'input',
        label: 'Телефон',
        placeholder: 'Пусто',
        style: "lg:w-12 md:w-12 sm:w-100",
        // icon: 'pi pi-fw pi-table',
        to: '/profile/digitalPassport/tep'
    },
    {
        id: 3,
        type: 'input',
        placeholder: 'Пусто',
        label: 'Дата первичной регистрации',
        style: "lg:w-12 md:w-12 sm:w-100",
        icon: 'pi pi-fw pi-envelope',
    },
    {
        id: 4,
        type: 'input',
        label: 'Адрес',
        placeholder: 'Пусто',
        style: "lg:w-12 md:w-12 sm:w-100",
        icon: 'pi pi-fw pi-envelope',
    },
    {
        id: 5,
        type: 'input',
        label: 'Вид деятельности*',
        placeholder: 'Пусто',
        style: "lg:w-12 md:w-12 sm:w-100",
        icon: 'pi pi-fw pi-user',
    },
    {
        id:6,
        type: 'select',
        placeholder: 'Пусто',
        label: 'Оснащение АСКУЭ',
        icon: 'pi pi-fw pi-user',
        style: 'col-2',
        items: [
            {
                name: 'Да'
            },
            {
                name: 'Нет'
            },
        ]
    },
    {
        id:7,
        type: 'select',
        label: 'Оснащение SKADA',
        icon: 'pi pi-fw pi-user',
        placeholder: 'Пусто',
        style: 'col-2',
        items: [
            {
                name: 'Да'
            },
            {
                name: 'Нет'
            },
        ]
    },
    {
        id: 8,
        type: 'input',
        label: 'БИН*',
        placeholder: 'Пусто',
        style: "lg:w-12 md:w-12 sm:w-100",
        icon: 'pi pi-fw pi-user',
    },
    {
        id:9,
        type: 'select',
        label: 'Предмет деятельности согласно Устава*',
        icon: 'pi pi-fw pi-user',
        placeholder: 'Пусто',
        style: 'lg:w-12 md:w-12 sm:w-100',
        items: [
            {
                name: 'Передача и распределение электрической энергии'
            },
            {
                name: 'Передача и распределение электрической энергии'
            },
        ]
    },
    {
        id: 10,
        type: 'input',
        placeholder: 'Пусто',
        label: 'Климатические условия',
        style: "lg:w-12 md:w-12 sm:w-100",
        icon: 'pi pi-fw pi-user',
    },
]);

const inputItemsMainInfo = ref([
    {
        id:1,
        type: 'input',
        label: 'Общая протяженность сетей, км',
        placeholder: '(summ Lvl+Lkl)',
        icon: 'pi pi-fw pi-user',
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
        id: 2,
        type: 'input',
        label: 'Информация по потерям, %',
        style: "lg:w-12 md:w-12 sm:w-100",
        // icon: 'pi pi-fw pi-table',
        to: '/profile/digitalPassport/tep'
    },
    {
        id: 3,
        type: 'input',
        label: 'Количество подстанции (ПС)',
        style: "lg:w-12 md:w-12 sm:w-100",
        icon: 'pi pi-fw pi-envelope',
    },
    {
        id: 4,
        type: 'input',
        label: 'Зона обслуживания эл. сетей, км2',
        style: "lg:w-12 md:w-12 sm:w-100",
        icon: 'pi pi-fw pi-envelope',
    },
    {
        id: 5,
        type: 'input',
        label: 'Тариф (на транспортировку э/э), без учета НДС, тенге/кВтч',
        style: "lg:w-12 md:w-12 sm:w-100",
        icon: 'pi pi-fw pi-user',
    },
    {
        id:6,
        type: 'select',
        label: 'Годовой объём передачи электроэнергии, млн.кВтч',
        icon: 'pi pi-fw pi-user',
        style: 'col-2',
        items: [
            {
                name: 'Да'
            },
            {
                name: 'Нет'
            },
        ]
    },
]);

const value = ref('<p><strong>Усть-Каменогорская ТЭЦ</strong>&nbsp;— ТОО «Усть-Каменогорская ТЭЦ» - теплоэлектроцентраль, расположенная в городе Усть-Каменогорске Восточно-Казахстанской области, Казахстан. Принадлежит ТОО «Шыгыс Energo («Шыгыс Энерго»)» (находится в частной собственности). Площадка ТОО «Усть-Каменогорская ТЭЦ» расположена в черте города в пределах второй надпойменной террасы р. Ульба. Занимаемая площадь 42 га. Установленная мощность ТОО «Усть-Каменогорская ТЭЦ» по состоянию на 01.01.2022г. года составляет:</p><p>- электрическая - 372,5 МВт</p><p>- тепловая – 859,9 Гкал/ч.</p>')
const valueMain = ref('<p><strong>Усть-Каменогорская ТЭЦ</strong> (далее Предприятие) , осуществляет комбинированное производство и отпуск двух видов энергии – электрической и тепловой, - централизованное теплоснабжение потребителей с использованием отработавшей теплоты турбин (теплофикация) и выработку электроэнергии на базе теплового потребления.&nbsp;</p><p> Основным топливом для Предприятия является уголь, растопочным топливом является мазут.</p><p>Тепломеханическое оборудование теплоэлектроцентрали состоит из основных агрегатов (котлов, турбин) и их вспомогательного оборудования, объединенных с основным оборудованием единым технологическим процессом.</p><p>Электротехническое оборудование теплоэлектроцентрали состоит из электрических генераторов, силовых трансформаторов, вспомогательного электротехнического оборудования, связанных в электрическую схему Предприятия.</p><p>Доставка угля на Предприятие осуществляется по железной дороге полувагонами.&nbsp;</p><p>Устройства для разгрузки, подачи и подготовки угля, включает в себя вагоноопрокидыватели, открытый склад угля, размораживающее устройство, конвейеры подачи угля, угольные дробилки, бункера сырого угля, питатели сырого угля, угольные шаробарабанные мельницы. Вместе с бункерами пыли, топочными камерами котлов, газоходами котлов, золоуловителями, тягодутьевыми установками, воздуховодами, внешними газоходами, дымовыми трубами эти устройства образуют топливно-газовоздушный тракт электростанции.&nbsp;</p><p>Уголь высыпается в приемные бункера вагоноопрокидывателей, и далее поступает по ленточным конвейерам на склад или в бункеры&nbsp;котлоагрегатов. С бункеров котлоагрегатов смесь угольной пыли и транспортирующего его воздуха вдувается в топочную&nbsp;камеру&nbsp;котла через пылеугольные горелки. Сжигаемая в форме факела в топочной камере угольная пыль интенсивно отдает тепло воде, движущейся внутри труб экранов, покрывающих внутренние стены топочной камеры. Выходящие из топочной камеры газообразные продукты&nbsp;сгорания дымовые газы,&nbsp;последовательно омывают поверхности нагрева котла: пароперегреватель, экономайзер, воздухоподогреватель. Охлажденные дымовые газы отсасываются&nbsp;дымососами&nbsp;в дымовую трубу. Перед дымососами газы очищаются от золы в золоуловителях. Зола и шлак, выпавшие из топочной камеры, транспортируются водой к багерным насосам&nbsp;и далее прокачиваются на золоотвал.</p><p>Произведенный в котлоагрегатах острый перегретый пар, по трубопроводам поступает в турбины, которые вращают электрические генераторы. В турбоагрегатах, состоящих их турбины и генератора, происходит преобразования энергии острого пара в электрическую энергию и отбор низкопотенциального пара для подогрева сетевой воды, поступающей на горячее водоснабжение и теплофикацию. С шин генераторов электроэнергия поступает на повышающие трансформаторы связи с электрической системой и далее потребителям, а также на собственные нужды.&nbsp;</p><p>Заполнение котлов, восполнение потерь пара и конденсата на ТОО «Усть-Каменогорская ТЭЦ» и у потребителей осуществляется химической обессоленной водой, подготавливаемой в химическом отделении турбинного цеха.&nbsp;</p><p>Водоснабжение ТОО «Усть-Каменогорская ТЭЦ» осуществляется по водопроводам от предприятий АО "Оскемен-Водоканал" и АО «Ульбинский металлургический завод». От собственной береговой насосной станции из реки Ульба поступает промышленная вода.</p>')
</script>


<template>
    <!--        1. Краткая справка:-->
    <div class="flex  ">
        <div class="col-12 border-round-lg bg-white ml-0">
            <h5>Краткая справка</h5>
            <div class="col-12 flex flex-column">
                <Editor  v-model="value" editorStyle="height: 140px" />
            </div>
        </div>
    </div>

    <!--        2. Общие сведения:-->
    <div class="flex mt-3">
        <div class="col-12 border-round-lg bg-white ml-0">
            <h5>Общие сведения</h5>
            <div class="col-12 flex flex-column">
                <Editor  v-model="valueMain" editorStyle="height: 350px" />
            </div>
        </div>
    </div>
    <!--        паспортные данные-->
    <div class="flex mt-3">
        <div class="col-12 border-round-lg bg-white">
            <h5>Паспортные данные</h5>
            <div class="grid">
                <div class="col-4" v-for="item in inputItemsPassport" :key="item.id">
                    <InputLabel :label="item.label" :type="item.type" :items="item.items" />
                </div>
            </div>
        </div>
    </div>
    <!--        Общие сведения-->
    <div class="flex mt-3">
<!--        Общие сведения-->
        <div class="col-7 p-0 pb-3">
            <div class="border-round-lg bg-white p-3 h-full" >
                <h5>Общие сведения</h5>
                <div class="grid">
                    <div class="col-6" v-for="item in inputItemsMainInfo" :key="item.id">
                        <InputLabel :label="item.label" :type="item.type" :items="item.items" :placholder="item.placeholder" />
                    </div>
                </div>
            </div>
        </div>

        <div class="col-5">
            <div class="flex">
                <div class="col-12 lg:col-7 p-0">
                    <!--                    Количество подстанций-->
                    <div class="border-round-lg bg-white">
                        <h6>Количество подстанций</h6>
                        <p>Уровни напряжения, ед </p>

                        <div class="grid justify-content-start">
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="1150 кВ"></div>
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="Пусто"></div>
                        </div>

                        <div class="grid justify-content-start mt-2">
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="1150 кВ"></div>
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="Пусто"></div>
                        </div>

                        <div class="grid justify-content-start mt-2">
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="1150 кВ"></div>
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="Пусто"></div>
                        </div>

                        <div class="grid justify-content-start mt-2">
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="1150 кВ"></div>
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="Пусто"></div>
                        </div>

                        <div class="grid justify-content-start mt-2">
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="1150 кВ"></div>
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="Пусто"></div>
                        </div>

                        <div class="grid justify-content-start mt-2 mb-2">
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="1150 кВ"></div>
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="Пусто"></div>
                        </div>



                    </div>
                </div>
                <div class="col-12 lg:col-5 p-0">
                    <!--                    Персонал-->
                    <div class="card h-full">
                        <h6>Персонал</h6>
                        <p>Кол-во администртивного персонала</p>
                        <input  class="col-12 rounded" style="height: 16px" type="text" placeholder="40" disabled>
                        <p class="mt-3">Кол-во производственного персонала</p>
                        <input  class="col-12 rounded" style="height: 16px" type="text" placeholder="165" disabled>
                    </div>
                </div>
            </div>
<!--            Протяженность сетей-->
            <div class="flex">
                <div class="col-12 card mt-3">
                    <div>Протяженность сетей</div>
                    <div class="row">
                        <div class="col-6 mt-2 mb-2">
                            КЛ, км
                            <input class="rounded" type="text" disabled>
                        </div>
                        <div class="col-6 mt-2 mb-2">
                            ВЛ, км
                            <input class="rounded" type="text" disabled>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--        Вложения-->
    <div class="grid pr-3">
        <div class="col-12 card mt-3">
        <h5>Вложения</h5>
        <div class="col-12 flex flex-column">
            <a href="">Ген.план.pdf</a>
            <a href="">Акт.ремонтных работ.pdf</a>
        </div>
    </div>
    </div>
<!--    Основное оборудование-->
    <div class="grid pt-3 pr-3">
        <div class="card mt-3">
            <h5>Основное оборудование</h5>

            <Button icon="pi pi-plus" severity="info" aria-label="Filter" />
            <Button icon="pi pi-pencil" class="ml-3" severity="warning" aria-label="Bookmark" />
            <Button icon="pi pi-times" class="ml-3" severity="danger" aria-label="Search" />

            <div class="grid">
                <div class="col-4" v-for="item in inputItemsPassport" :key="item.id">
                    <InputLabel :label="item.label" :type="item.type" :items="item.items" />
                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>
#digitalPassport{
    background: #FFFFFF;
    /* In progress */

    /*border: 1px solid rgba(21, 41, 87, 0.5);*/
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.18));
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
    display: grid;
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