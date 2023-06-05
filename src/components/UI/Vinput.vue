<script setup>
import {reactive, ref} from "vue";

defineProps({
    label: String,
    type: String,
    items: Object,
    style: String,
    placeholder: String,
    view: String,
    dateFormat: String,
    data: String,

    modelValue: String
})

let selectedValue = ref('')

defineEmits(['update:sendData'])

</script>


<template>
    <div>
        <div v-if="type==='input'">
<!--            <label for="email1" class="block text-900 text-base font-medium mb-2">{{ label }}</label>-->
            <!--        <InputText id="email1" type="text" placeholder="Пусто" class="w-2 md:w-30rem mb-5" style="padding: 1rem" v-model="email" />-->
<!--            <InputText id="email1" type="text" :placeholder="placeholder" class="w-full lg:w-12 md:w-12 sm:w-100 p-inputtext-sm" v-model="email" v-on:input="updateValue($event.target.value)" />-->

            <span class="p-float-label">
                <InputText class="w-full"  id="username"  v-on:input="updateValue($event.target.value)"/>
                <label for="username">{{label}}</label>
            </span>
        </div>

        <div v-if="type==='select'">
            <div class="p-float-label">
                <!--                <Dropdown  :value="modelValue" @input="updateValue" v-model="mValue" inputId="dd-city" :options="items" optionLabel="name" placeholder="Выберите" class="w-full" />-->
<!--                <Dropdown @update:modelValue="selectedValue = $event"  @input="sendData"  v-model:modelValue="selectedValue" inputId="dd-city" :options="items" optionLabel="name" placeholder="Выберите" class="w-full" />-->
                <Dropdown @input="$emit('update:sendData', $event.target.value)" @update:modelValue="modelValue => selectedValue = modelValue"   v-model:modelValue="selectedValue" inputId="dd-city" :options="items" optionLabel="name" placeholder="Выберите" class="w-full" />

                <label for="dd-city">{{label}}</label>
            </div>
        </div>

        <div v-if="type==='date'">
            <div class="p-float-label">
                <Calendar :view="view" :dateFormat="dateFormat"  :value="data"
                          @input="$emit('update:data', $event.target.value)" showIcon  class="w-full"/>
                <label for="dd-city">{{label}}</label>
                {{data}}
            </div>
        </div>

        <div v-if="type==='textArea'">
            <div class="p-float-label">
                <Textarea v-model="selected" rows="5" cols="30" class="w-full" />
                <label for="dd-city">{{label}}</label>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>