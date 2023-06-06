<script setup>
import {reactive} from "vue";

const power = reactive([
    {
        name: 'Техническое и оборотное водоснабжение',
        value: ''
    },
    {
        name: 'Углеподача',
        value: ''
    },
    {
        name: 'Пылеприготовление',
        value: ''
    },
    {
        name: 'Мазутное и газовое хозяйство',
        value: ''
    },
    {
        name: 'Химводоочистка',
        value: ''
    },
    {
        name: 'Гидрозолоудаление',
        value: ''
    },
    {
        name: 'Газоочистка',
        value: ''
    },
    {
        name: 'Пристанционный тепловой узел',
        value: ''
    },
    {
        name: 'Теплофикационные установки',
        value: ''
    },
    {
        name: 'Электрическая часть станции',
        value: ''
    }
])
</script>


<template>
    <div class="flex">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Краткое описание деятельности и основных производственных мощностей, цехов, участков:</h5>
                <div class="mb-4" v-for="(i,idx) in power" :key="idx" >
                    <p style="font-family: 'Roboto', sans-serif; font-style: normal;font-weight: 300;font-size: 16px;line-height: 16px;color: #232859;">{{ i.name }}</p>
                    <Editor v-model="i.value" editorStyle="height: 150px"/>
                </div>

            </div>
        </div>
    </div>
</template>


<style scoped>

</style>