<script setup>
import {ref} from "vue";

defineProps({
    label: String,
    type: String,
    items: Object,
    style: String,
    placeholder: String,
    view: String,
    dateFormat: String,
    data: String,

    // selectedValue: String
})


const emit = defineEmits(['update:modelValue'])

let modelValue = ref('')

</script>


<template>
    <div>
        <div v-if="type==='input'">
            <span class="p-float-label">
                <InputText v-model="modelValue" class="w-full"  id="username"  v-on:input="updateValue($event.target.value)"/>
                <label for="username">{{label}}</label>
            </span>
        </div>

        <div v-if="type==='select'">
            <div class="p-float-label">
<!--                <Dropdown @update:modelValue="selectedValue = $event.name"  v-model:modelValue="selectedValue" inputId="dd-city" :options="items" optionLabel="name" placeholder="Выберите" class="w-full" />-->
                <Dropdown :value="modelValue" @input="updateValue" @update:modelValue="modelValue = $event.name"  v-model:modelValue="selectedValue" inputId="dd-city" :options="items" optionLabel="name" placeholder="Выберите" class="w-full" />

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