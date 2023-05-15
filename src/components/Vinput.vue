<script>
export default {
    name: "InputLabel",
    props:{
        label: String,
        type: String,
        items: Object,
        style: String,
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
            <label for="email1" class="block text-900 text-base font-medium mb-2">{{ label }}</label>
            <!--        <InputText id="email1" type="text" placeholder="Пусто" class="w-2 md:w-30rem mb-5" style="padding: 1rem" v-model="email" />-->
            <InputText id="email1" type="text" placeholder="Пусто" class="lg:w-12 md:w-12 sm:w-100" v-model="email" v-on:input="updateValue($event.target.value)" />
        </div>

        <div v-if="type==='select'">
            <label for="email1" class="block text-900 text-base font-medium mb-2">{{ label }}</label>
            <Dropdown class="lg:w-12 md:w-12 sm:w-100" id="state" v-model="items.name" :options="items" optionLabel="name" placeholder="Выберите..."></Dropdown>
        </div>
    </div>
</template>


<style scoped>

</style>