<script setup>
import InputLabel from "@/components/UI/Vinput.vue";
defineEmits(['update:modelValue'])

import {inject, reactive, ref} from "vue";

const dialogRef = inject("dialogRef");

const root = dialogRef.value.options.props.length + 1
console.log("dialogRef.value.options.props.length", dialogRef.value.options.props.length)

const closeDialog = (e) => {
    dialogRef.value.close(e);
};
const guilds = reactive([
    {
        id:3,
        type: 'select',
        label: 'Название цеха',
        placeholder: 'Пусто',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                name: 'Цех 1'
            },
            {
                name: 'Цех 2'
            },
            {
                name: 'Цех 3'
            }
        ]
    },
]);

const data =  {
    key: root, //ключ 1
    type: 'country',
    label: '', //цех 2
    data: 'ar',
    main: true,
    children: [
        {
            key: '0_0', //ключ 1_0
            type: 'country',
            label: 'СВ-1436/200-80 УХЛ4',
            count: '6',
            info: 'Гидрогенератор ',
            data: 'ar',
            children: [
                {
                    key: '0_0_0', //ключ 0_0_0
                    type: 'country',
                    label: 'КРУ-10 кВ ГЭС (23 яч.)',
                    info: 'Комплектное распределительное устройство 10 кВ',
                    count: '1',
                    data: 'ar',
                },
                {
                    key: '0_0_1', //ключ 0_0_1
                    type: 'country',
                    label: 'КРУ-10 кВ ОРУ (16 яч.)',
                    info: 'Комплектное распределительное устройство 10 кВ',
                    count: '1',
                    data: 'hr'
                }
            ]
        },
        {
            key: '0_1', //ключ 0_1
            type: 'country',
            label: 'ТЦ-250000/242-13,8кВ',
            count: '3',
            info: 'Блочные трансформатор',
            data: 'fr',
            children: [
                {
                    key: '0_1_0', //ключ 0_1_0
                    type: 'country',
                    label: 'КТП',
                    count: '3',
                    info: 'Блочные трансформатор',
                    data: 'fr'
                },
                {
                    key: '0_1_1', //ключ 0_1_1
                    type: 'country',
                    label: 'UNITROL 6800',
                    count: '6',
                    info: 'Системы возбуждения гидрогенераторов',
                    data: 'ma'
                }
            ]
        },
    ]
}

const  modelValue = ref('')
const newRow = reactive([]);
const addRow = function (type){
    let label = ''
    if(type === 'main'){
        label = 'Основное оборудоание'
    }else{
        label = 'Вспомогательное оборудование'
    }
    newRow.push(
        {
            id: newRow.length +1,
            // key: root + '_' + newRow.length+1,
            key: root + '_' + newRow.length+1,
            label: label,
            inputs: [
                {
                    id: 1,
                    type: 'select',
                    label: 'Тип',
                    placeholder: 'Пусто',
                    value: '',
                    items: [
                        {
                            name: 'Котельные оборудования '
                        },
                        {
                            name: 'Турбинные оборудования (паровые турбины, газовые турбины, газопоршневые двигатели)'
                        },
                        {
                            name: 'Гидротурбины'
                        },
                        {
                            name: 'Генераторы, блочные трансформаты и трансформаторы'
                        },
                        {
                            name: 'остальные'
                        }
                    ]
                },
                {
                    id: 2,
                    type: 'input',
                    label: 'Наименование',
                    placeholder: 'Пусто',
                    value: '',
                    style: "lg:w-12 md:w-12 sm:w-100",
                },
                {
                    id: 3,
                    type: 'input',
                    label: 'Количество',
                    placeholder: 'Пусто',
                    value: '',
                    style: "lg:w-12 md:w-12 sm:w-100",
                },
            ],
            children: []
        }
    )
}
const dropRow = function (id){
    console.log('id', id)
    const index = newRow.findIndex(object =>{
        console.log(object)
        return object.id === id
    });

    console.log('index',index)

    newRow.splice(index, 1)
}
const addChildren = function(id){
    console.log('id', id)
    newRow.find((item) => {
        if(item.id === id){
            item.children.push({
                id: id +1,
                inputs: [{
                    id: 1,
                    type: 'select',
                    label: 'Тип',
                    placeholder: 'Пусто',
                    value: '',
                    items: [
                        {
                            name: 'Котельные оборудования '
                        },
                        {
                            name: 'Турбинные оборудования (паровые турбины, газовые турбины, газопоршневые двигатели)'
                        },
                        {
                            name: 'Гидротурбины'
                        },
                        {
                            name: 'Генераторы, блочные трансформаты и трансформаторы'
                        },
                        {
                            name: 'остальные'
                        }
                    ]
                    },
                         {
                    id: 2,
                    type: 'input',
                    label: 'Наименование',
                    placeholder: 'Пусто',
                    value: '',
                    style: "lg:w-12 md:w-12 sm:w-100",
                },
                         {
                    id: 3,
                    type: 'input',
                    label: 'Количество',
                    placeholder: 'Пусто',
                    value: '',
                    style: "lg:w-12 md:w-12 sm:w-100",
                }],
            })
        }
        // return item.id === id
    })
}

const arrToCreate = reactive({
        key: dialogRef.value.options.props.length + 1,
        type: 'country',
        label: '',
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
        ]
    })


</script>


<template>
    <div>
<!--        выбрать цех-->
        <div class="flex ">
            <div class="col-12 lg:col-4 md:col-6 pb-1 pt-0" v-for="i in guilds" :key="i.id">
                <h6>{{i.label}}</h6>
                <div class="p-float-label">
                    <Dropdown v-model="arrToCreate.label" inputId="dd-city" :options="i.items" optionLabel="name" placeholder="Выберите" class="w-full" />
                </div>
            </div>

            <div v-if="arrToCreate.label !== ''" class="col-12 lg:col-6 md:col-6 pb-1 pt-0 flex align-content-end pt-5" v-for="i in guilds" :key="i.id">
                <Button class="h-3rem" type="button" label="Основное оборуд" icon="pi pi-plus" @click="addRow('main')"></Button>
                <Button class="h-3rem ml-3" type="button" severity="warning" label="Вспом. оборудование" icon="pi pi-plus" @click="addRow('dop')"></Button>
            </div>
        </div>

<!--        form lines/ Основное оборудование -->
        <div class="flex flex-column mt-3" v-for="(i,idx) in newRow" :key="i.id">
            <div class="flex flex-row">
                <div><h6>{{i.label}}</h6></div>
            </div>
<!--            row-->
            <div class="flex flex-row">
                <div class="col-1">
                    {{idx+1}}
                </div>
                <div class="col-8 flex flex-row justify-content-between ">
                    <div class="col-3  p-0 m-0" v-for="item in i.inputs" :key="i.id">
                        <div v-if="item.type==='input'">
                            <span class="p-float-label">
                                <InputText v-model="item.value" class="w-full"  id="username"/>
                                <label for="equipmentName">{{item.label}}</label>
                            </span>
                        </div>

                        <div v-if="item.type==='select'">
                            <div class="p-float-label">
                                <Dropdown  v-model="item.value" inputId="dd-city" :options="item.items" optionLabel="name" placeholder="Выберите" class="w-full" />
                                <label for="dd-city">{{i.label}}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 flex justify-content-evenly">
                    <Button @click="addChildren(i.id)" icon="pi pi-plus" severity="warning" rounded aria-label="Filter" />
                    <Button @click="dropRow(i.id)"  icon="pi pi-times" severity="danger" rounded aria-label="Filter" />
                </div>
            </div>
<!--            children-->
            <div class="flex flex-row justify-content-end"  v-for="(item, index) in i.children" :key="index">
                <div class="col-1">
                    {{idx+1}}.{{index+1}}
                </div>
                <div class="col-7 flex flex-row justify-content-between ">
                    <div class="col-3  p-0 m-0" v-for="item in item.inputs" :key="i.id">
                        <div v-if="item.type==='input'">
                            <span class="p-float-label">
                                <InputText v-model="item.value" class="w-full"  id="username"/>
                                <label for="equipmentName">{{item.name}}</label>
                            </span>
                        </div>

                        <div v-if="item.type==='select'">
                            <div class="p-float-label">
                                <Dropdown :value="item.value" v-model="item.value" inputId="dd-city" :options="item.items" optionLabel="name" placeholder="Выберите" class="w-full" />
                                <label for="dd-city">{{item.name}}</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-3 flex justify-content-evenly">
                    <Button  icon="pi pi-times" severity="danger" rounded aria-label="Filter" />
                </div>
            </div>

        </div>

<!--        footer кнопка сохранить-->
        <div class="flex justify-content-start mt-8">
            <Button type="button" label="Сохранить" icon="pi pi-check" @click="closeDialog({ buttonType: 'Yes' })" autofocus></Button>
            <Button type="button" label="Отменить" icon="pi pi-times" @click="closeDialog({ buttonType: 'No' })" text></Button>
        </div>
    </div>
</template>

<style scoped>

</style>