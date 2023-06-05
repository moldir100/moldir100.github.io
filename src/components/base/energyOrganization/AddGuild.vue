<script setup>
import InputLabel from "@/components/UI/Vinput.vue";
defineEmits(['update:modelValue'])

import {inject, reactive, ref} from "vue";

const dialogRef = inject("dialogRef");

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
const modelValue = ref('')

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
            label: label,
            inputs: [
                {
                    id: 1,
                    type: 'select',
                    label: 'Тип',
                    placeholder: 'Пусто',

                    items: [
                        {
                            name: 'Гидрогенератор '
                        },
                        {
                            name: 'Блочные трансформатор'
                        },
                        {
                            name: 'Трансформатор собственных нужд'
                        }
                    ]
                },
                {
                    id: 2,
                    type: 'input',
                    label: 'Наименование',
                    placeholder: 'Пусто',
                    style: "lg:w-12 md:w-12 sm:w-100",
                },
                {
                    id: 3,
                    type: 'input',
                    label: 'Количество',
                    placeholder: 'Пусто',
                    style: "lg:w-12 md:w-12 sm:w-100",
                },
            ],
            subRow: []
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
const addSubRow = function(id){
    const sweetArray = [2, 3, 4, 5, 35]
    const sweeterArray = sweetArray.map(sweetItem => {
        return sweetItem * 2
    })
    console.log(sweeterArray)

    newRow.map(item => {
        const index = item.id === id
        console.log('index', index)
        console.log('item', item)
        item.subRow.push(
            {
                id: item.subRow.length +1,
                inputs: [
                    {
                        id: 1,
                        type: 'select',
                        label: 'Тип',
                        placeholder: 'Пусто',

                        items: [
                            {
                                name: 'Гидрогенератор '
                            },
                            {
                                name: 'Блочные трансформатор'
                            },
                            {
                                name: 'Трансформатор собственных нужд'
                            }
                        ]
                    },
                    {
                        id: 2,
                        type: 'input',
                        label: 'Наименование',
                        placeholder: 'Пусто',
                        style: "lg:w-12 md:w-12 sm:w-100",
                    },
                    {
                        id: 3,
                        type: 'input',
                        label: 'Количество',
                        placeholder: 'Пусто',
                        style: "lg:w-12 md:w-12 sm:w-100",
                    },
                ],
            }
            // [{
            //     id: 1,
            //     type: 'select',
            //     label: 'Тип',
            //     placeholder: 'Пусто',
            //
            //     items: [
            //         {
            //             name: 'Гидрогенератор '
            //         },
            //         {
            //             name: 'Блочные трансформатор'
            //         },
            //         {
            //             name: 'Трансформатор собственных нужд'
            //         }
            //     ]
            // },
            // {
            //     id: 2,
            //     type: 'input',
            //     label: 'Наименование',
            //     placeholder: 'Пусто',
            //     style: "lg:w-12 md:w-12 sm:w-100",
            // },
            // {
            //     id: 3,
            //     type: 'input',
            //     label: 'Количество',
            //     placeholder: 'Пусто',
            //     style: "lg:w-12 md:w-12 sm:w-100",
            // },]
        )
        return newRow
    })

}

</script>


<template>
    <div>
<!--        выбрать цех-->
        <div class="flex ">
            <div class="col-12 lg:col-4 md:col-6 pb-1 pt-0" v-for="i in guilds" :key="i.id">
                <h6>{{i.label}}</h6>
<!--                <InputLabel @update:modelValue="modelValue = $event.name" v-model:modelValue="modelValue" @update:sendData="value => modelValue = value"  :label="i.name" :type="i.type" :items="i.items"></InputLabel>-->
                <InputLabel  v-model="modelValue" @update:modelValue="modelValue = $event.name"  :label="i.name" :type="i.type" :items="i.items"></InputLabel>
            </div>
<!--            <div v-if="guild !== '' " class="col-12 lg:col-4 md:col-6 pb-1 pt-0 flex align-content-end pt-5" v-for="i in guilds" :key="i.id">-->
            <div class="col-12 lg:col-6 md:col-6 pb-1 pt-0 flex align-content-end pt-5" v-for="i in guilds" :key="i.id">
                <Button class="h-3rem" type="button" label="Основное оборуд" icon="pi pi-plus" @click="addRow('main')"></Button>
                <Button class="h-3rem ml-3" type="button" severity="warning" label="Вспом. оборудование" icon="pi pi-plus" @click="addRow('dop')"></Button>
            </div>
        </div>

<!--        form lines-->
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
                        <InputLabel :label="item.name" :type="item.type" :items="item.items"></InputLabel>
                    </div>
                </div>
                <div class="col-3 flex justify-content-evenly">
                    <Button @click="addSubRow(i.id)" icon="pi pi-plus" severity="warning" rounded aria-label="Filter" />
                    <Button @click="dropRow(i.id)"  icon="pi pi-times" severity="danger" rounded aria-label="Filter" />
                </div>
            </div>
<!--            subRow-->
            <div class="flex flex-row justify-content-end"  v-for="(item, index) in i.subRow" :key="index">
                <div class="col-1">
                    {{idx+1}}.{{index+1}}
                </div>
                <div class="col-7 flex flex-row justify-content-between ">
                    <div class="col-3  p-0 m-0" v-for="item in i.inputs" :key="i.id">
                        <InputLabel :label="item.name" :type="item.type" :items="item.items"></InputLabel>
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