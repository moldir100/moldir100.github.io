<script setup>
import {inject, onBeforeMount, onMounted, onUpdated, reactive, ref} from "vue";

const organizationType = reactive([
    {
        id: 1,
        type: 'energySupply',
        name: 'Энергопередающие'
    },
    {
        id: 2,
        type: 'energyTransfer',
        name: 'Энергоснабжащие'
    },
    {
        id: 3,
        type: 'energyProducer',
        name: 'Энергопроизводящие'
    }
])
const dialogRef = inject("dialogRef");
const type = ref(dialogRef.value.options.props.type)

const send = (e) => {
    dialogRef.value.close(e);
};
const closeDialog = (e) => {
    dialogRef.value.close(e);
};

const organization = ref('')

if(type.value === 'create') {
    organization.value = {
        id: dialogRef.value.options.props.dataLength + 1,
        name: '',
        status: 'active',
        address: '',
        type: ''
    }
}

if(type.value === 'update'){
    organization.value = dialogRef.value.options.props.selected
}


</script>


<template>
    <div class="grid">
        <div class="col-4">
            <h6>Название</h6>
            <InputText v-model="organization.name" class="w-full" label="Имя" placeholder="Введите"/>
        </div>
        <div class="col-4">
            <h6>Адрес</h6>
            <InputText v-model="organization.address" class="w-full" label="Адрес" placeholder="Введите"/>
        </div>
        <div class="col-4">
            <h6>Тип организации</h6>
            <Dropdown showClear v-model="organization.type"   :options="organizationType" optionLabel="name" placeholder="Выберите организацию" class="w-full" />
        </div>
    </div>

    <div class="mb-3 flex flex-row align-items-between">
        <Tag :style="{background: organization.status === 'block' ? 'red' : 'green'}" class="">{{organization.status}}</Tag>
    </div>

    <div class="flex justify-content-start mt-8">
        <Button type="button" label="Сохранить" icon="pi pi-check" @click="send(organization)" autofocus></Button>
        <Button type="button" label="Отменить" icon="pi pi-times" @click="closeDialog({ buttonType: 'No' })" text></Button>
    </div>

</template>


<style scoped>

</style>