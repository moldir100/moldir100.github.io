<script setup>
import {inject, onBeforeMount, onMounted, onUpdated, reactive, ref} from "vue";

const dialogRef = inject("dialogRef");
const type = ref(dialogRef.value.options.props.type)

const send = (e) => {
    dialogRef.value.close(e);
};
const closeDialog = (e) => {
    dialogRef.value.close(e);
};

const user = ref('')
if(type.value === 'create') {
    user.value = {
        id: dialogRef.value.options.props.dataLength + 1,
        name: '',
        surname: '',
        userName: '',
        iin: '',
        email: '',
        organization: '',
        position: '',
        role: 'user',
        status: 'active',
        online: '',
        img: '',
        registerDate: new Date().toLocaleString(),
        permissions: [
            {
                id: 1,
                name: "Кабинет",
                read: true,
                create: true,
                update: false,
                delete: false,
            },
            {
                id: 2,
                name: "Цифровой паспорт",
                read: true,
                create: true,
                update: false,
                delete: false
            },
            {
                id: 3,
                name: "Журнал",
                read: true,
                create: false,
                update: false,
                delete: false
            },
            {
                id: 4,
                name: "Карта генерации",
                read: true,
                create: false,
                update: false,
                delete: false
            },
            {
                id: 5,
                name: "Тариф",
                read: true,
                create: false,
                update: false,
                delete: false
            },
            {
                id: 6,
                name: "Панель админстратора",
                read: false,
                create: false,
                update: false,
                delete: false
            },
        ]
    }
}

if(type.value === 'update'){
    user.value = dialogRef.value.options.props.selected
}

const selectedCustomers = ref();
const selectAll = ref(false);
const onSelectAllChange = (event) => {
    selectAll.value = event.checked;

    if (selectAll) {
        selectedCustomers.value = user.permissions;
    }
    else {
        selectAll.value = false;
        selectedCustomers.value = [];
    }
};

const organizations = reactive([
    { name: 'АО "КОРЭМ"', code: 'NY' },
    { name: 'АЭС Актобе', code: 'RM' },
    { name: 'КАЭНК', code: 'LDN' },
    { name: 'ТЭЦ 1', code: 'IST' },
    { name: 'ТЭЦ 7', code: 'PRS' },
]);
</script>


<template>
    <div class="grid">
        <div class="col-4">
            <h6>Имя</h6>
            <InputText v-model="user.name" class="w-full" label="Имя" placeholder="Введите"/>
        </div>
        <div class="col-4">
            <h6>Фамилия</h6>
            <InputText v-model="user.surname" class="w-full" label="Имя" placeholder="Введите"/>
        </div>
        <div class="col-4">
            <h6>ИИН</h6>
            <InputText maxlength="12" type="number" v-model="user.iin" class="w-full" label="Имя" placeholder="Введите"/>
        </div>
        <div class="col-4">
            <h6>E-mail</h6>
            <InputText v-model="user.email" class="w-full" label="Имя" placeholder="Введите"/>
        </div>
        <div class="col-4">
            <h6>Организация</h6>
            <Dropdown v-model="user.organization"  :options="organizations" optionLabel="name" placeholder="Выберите организацию" class="w-full" />
        </div>
        <div class="col-4">
            <h6>Должность</h6>
            <InputText v-model="user.position"  class="w-full" label="Имя" placeholder="Введите"/>
        </div>
    </div>

    <div class="mb-3 flex flex-row align-items-between">
        <Tag :style="{background: user.status === 'block' ? 'red' : 'green'}" class="">{{user.status}}</Tag>
    </div>

    <div class="flex flex-row align-items-between">
        <Checkbox v-model="user.role" inputId="ingredient1" name="pizza" value="Cheese" />
        <label for="ingredient1" class="ml-2"> Назначить локальным админстратором </label>
    </div>

    <h5>Пользовательские права доступа</h5>

    <DataTable :value="user.permissions" ref="dt" dataKey="id"
               v-model:selection="selectedCustomers" :selectAll="selectAll" tableStyle="min-width: 75rem">

        <Column field="name" header="">
        </Column>
        <Column field="read" header="Просмотр">
            <template #body="slotProps">
                <Checkbox v-model="slotProps.data.read" :binary="true"/>
            </template>
        </Column>
        <Column field="create" header="Добавление">
            <template #body="slotProps">
                <Checkbox v-model="slotProps.data.create" :binary="true"/>
            </template>
        </Column>
        <Column field="update" header="Редактирование">
            <template #body="slotProps">
                <Checkbox v-model="slotProps.data.update" :binary="true"/>
            </template>
        </Column>
        <Column field="delete" header="Удаление">
            <template #body="slotProps">
                <Checkbox v-model="slotProps.data.delete" :binary="true"/>
            </template>
        </Column>
    </DataTable>

    <div class="flex justify-content-start mt-8">
        <Button type="button" label="Сохранить" icon="pi pi-check" @click="send(user)" autofocus></Button>
        <Button type="button" label="Отменить" icon="pi pi-times" @click="closeDialog({ buttonType: 'No' })" text></Button>
    </div>

</template>


<style scoped>

</style>