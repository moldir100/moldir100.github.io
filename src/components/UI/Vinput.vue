<script>
export default {
    name: "InputLabel",
    props:{
        label: String,
        type: String,
        items: Object,
        style: String,
        placeholder: String,
    },
    setup(){
        function updateValue(value) {
            this.$emit("passData", { value: value });
        }
    }
}
</script>


<template>
    <div>
        <div v-if="type==='input'">
<!--            <label for="email1" class="block text-900 text-base font-medium mb-2">{{ label }}</label>-->
            <!--        <InputText id="email1" type="text" placeholder="Пусто" class="w-2 md:w-30rem mb-5" style="padding: 1rem" v-model="email" />-->
<!--            <InputText id="email1" type="text" :placeholder="placeholder" class="w-full lg:w-12 md:w-12 sm:w-100 p-inputtext-sm" v-model="email" v-on:input="updateValue($event.target.value)" />-->

            <span class="p-float-label">
                <InputText class="w-full"  id="username" v-model="value" v-on:input="updateValue($event.target.value)"/>
                <label for="username">{{label}}</label>
            </span>
        </div>

        <div v-if="type==='select'">
            <div class="p-float-label">
                <Dropdown v-model="selectedCity" inputId="dd-city" :options="items" optionLabel="name" placeholder="Выберите" class="w-full" />
                <label for="dd-city">{{label}}</label>
            </div>
<!--            <label for="email1" class="block text-900 text-base font-medium mb-2">{{ label }}</label>-->
<!--            <Dropdown class="w-full lg:w-12 md:w-12 sm:w-100 p-inputtext-sm" id="state" v-model="items.name" :options="items" optionLabel="name" placeholder="Выберите..."></Dropdown>-->
        </div>

        <div v-if="type==='date'">
            <div class="p-float-label">
                <Calendar v-model="date" showIcon  class="w-full"/>
                <label for="dd-city">{{label}}</label>
            </div>
        </div>

        <div v-if="type==='textArea'">
            <div class="p-float-label">
                <Textarea v-model="value" rows="5" cols="30" class="w-full" />
                <label for="dd-city">{{label}}</label>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>