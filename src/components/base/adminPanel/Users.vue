<script setup>
import {defineAsyncComponent, reactive, ref} from "vue";
import {useDialog} from "primevue/usedialog";

const AddUser = defineAsyncComponent(() => import('@/components/base/adminPanel/AddUser.vue'));

const currentUser = reactive({
    id: 1,
    name: 'Молдир',
    surname: 'Куанышбаева',
    role: 'admin'
})

const users = reactive([
    {
        id: 1,
        name: 'София',
        surname: 'Алексеева',
        patronymic: 'Сергеевна',
        email: 'john@gmail.com',
        organization: { name: 'АО "КОРЭМ"', code: 'NY' },
        iin: '992255512875',
        position: 'Энергетик',
        role: 'admin',
        status: 'block',
        online: true,
        img: 'https://onlinepngtools.com/images/examples-onlinepngtools/man-on-the-mountain-edge-avatar.png',
        registerDate: '21.10.2022 13:20:22',
        permissions: [
            {
                id: 1,
                name: "Цифровой паспорт",
                read: true,
                create: true,
                update: true,
                delete: true,
            },
            {
                id: 2,
                name: "Кабинет",
                read: true,
                create: true,
                update: true,
                delete: true
            },
            {
                id: 3,
                name: "Журнал",
                read: true,
                create: true,
                update: true,
                delete: false
            },
        ]
    },
    {
        id: 2,
        name: 'John',
        surname: '222',
        email: 'john@gmail.com',
        organization: { name: 'АО "КОРЭМ"', code: 'NY' },
        iin: '992255512875',
        position: 'HR менеджер',
        role: 'user',
        status: 'active',
        online: false,
        img: 'https://onlinepngtools.com/images/examples-onlinepngtools/man-on-the-mountain-edge-avatar.png',
        registerDate: '10.01.2019 12:10:20',
        permissions: [
            {
                id: 1,
                name: "Цифровой паспорт",
                read: true,
                create: true,
                update: false,
                delete: false,
            },
            {
                id: 2,
                name: "Кабинет",
                read: false,
                create: true,
                update: false,
                delete: true
            },
            {
                id: 3,
                name: "Журнал",
                read: true,
                create: false,
                update: false,
                delete: false
            },
        ]
    },
    {
        id: 3,
        name: 'John',
        surname: '222',
        email: 'john@gmail.com',
        organization: { name: 'АО "КОРЭМ"', code: 'NY' },
        iin: '992255512875',
        position: 'HR менеджер',
        role: 'superadmin',
        status: 'block',
        online: false,
        img: 'https://onlinepngtools.com/images/examples-onlinepngtools/man-on-the-mountain-edge-avatar.png',
        registerDate: '10.01.2019 12:10:20',
        permissions: [
            {
                id: 1,
                name: "Цифровой паспорт",
                read: true,
                create: true,
                update: false,
                delete: false,
            },
            {
                id: 2,
                name: "Кабинет",
                read: false,
                create: true,
                update: false,
                delete: true
            },
            {
                id: 3,
                name: "Журнал",
                read: true,
                create: false,
                update: false,
                delete: false
            },
        ]
    },
    {
        id: 4,
        name: 'Кайрат',
        surname: 'Тлеуов',
        email: 'john@gmail.com',
        organization: {},
        iin: '992255512875',
        position: 'HR менеджер',
        role: 'user',
        status: 'active',
        online: false,
        img: 'https://onlinepngtools.com/images/examples-onlinepngtools/man-on-the-mountain-edge-avatar.png',
        registerDate: '10.01.2019 12:10:20',
        permissions: [
            {
                id: 1,
                name: "Цифровой паспорт",
                read: true,
                create: true,
                update: false,
                delete: false,
            },
            {
                id: 2,
                name: "Кабинет",
                read: false,
                create: true,
                update: false,
                delete: true
            },
            {
                id: 3,
                name: "Журнал",
                read: true,
                create: false,
                update: false,
                delete: false
            },
        ]
    },
    {
        id: 5,
        name: 'Арман',
        surname: 'Арманов',
        email: 'john@gmail.com',
        organization: {},
        iin: '992255512875',
        position: 'HR менеджер',
        role: 'user',
        status: 'active',
        online: false,
        img: 'https://onlinepngtools.com/images/examples-onlinepngtools/man-on-the-mountain-edge-avatar.png',
        registerDate: '10.01.2019 12:10:20',
        permissions: [
            {
                id: 1,
                name: "Цифровой паспорт",
                read: true,
                create: true,
                update: false,
                delete: false,
            },
            {
                id: 2,
                name: "Кабинет",
                read: false,
                create: true,
                update: false,
                delete: true
            },
            {
                id: 3,
                name: "Журнал",
                read: true,
                create: false,
                update: false,
                delete: false
            },
        ]
    },
])
const toggleMenu = ( event, i) => {
    menu.value.toggle(event);
    selectedData.value = i

    status.value = i.status === 'block' ? 'Разблокировать' :  'Заблокировать'

};
const selectedData = ref('')
const status = ref('')
const items = reactive([
    {
        label: status,
        icon: 'pi pi-fw pi-lock',
        command: (event) => {
            selectedData.value.status =  selectedData.value.status === 'active' ? 'block' : 'active'
        }
    },
    {
        label: 'Редактировать',
        icon: 'pi pi-fw pi-pencil',
        command: (event) => {
            showAddModal(AddUser, 'Редактировать','' , 'update', selectedData.value )
        }
    },
    {
        label: 'Удалить',
        icon: 'pi pi-fw pi-trash',
        command: (event) => {
           const foundIndex = users.findIndex((item) => { return item.id === selectedData.value.id})
            users.splice(foundIndex, 1)
        }
    },
]);
const rowStyle = (data) => {
    if (data && data.status === 'block') {
        return { backgroundColor: '#F4DADA'};
    }
    return { backgroundColor: 'white'}
};
const menu = ref('')
const dialog = useDialog()
const showAddModal = function (value, name, object, type, selected ){
    dialog.open( value,{
        props: {
            header: name,
            dataLength: object.length,
            selected: selected,
            type: type,
            style: {
                width: '80vw',
            },
            breakpoints:{
                '960px': '75vw',
                '640px': '90vw'
            },
            modal: true
        },
        onClose: (options) => {
            if(type === 'create'){
                const newData = options.data;
                users.push(newData)
            }else if(type === 'update'){

            }
        }
    })
}
</script>


<template>
    <div class="flex flex-column w-full">
        <div class="mt-3 col-12 border-round-lg bg-white">
            <h6>Фильтр</h6>

            <div class="flex justify-content-start">
                <InputText class="col-3 mr-3" placeholder="ФИО"/>
                <InputText class="col-3" placeholder="ИИН"/>
            </div>
        </div>
        <div class="mt-3 col-12 border-round-lg bg-white">

            <div class="flex justify-content-between align-items-center">
                <h5>Пользователи ({{users.length}})</h5>
                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddUser, 'Создать', users, 'create', selectedData)"/>
            </div>

            <DataTable :rowStyle="rowStyle" class="mt-3"  :value="users" tableStyle="min-width: 50rem">
                <template #empty> Ничего не найдено </template>
                <Column field="id" header="№"/>
                <Column field="name" header="ФИО" class="p-0 p-3">
                    <template #body="slotProps">
                        <div class="flex justify-content-start">
                            <div class="">
                                <p style="font-size: 16px; line-height: 16px;">{{ slotProps.data.name }} {{slotProps.data.surname}} {{slotProps.data.patronymic}}</p>
                                <p style="font-size: 13px; color: #4B4A4A; line-height: 14px;">
                                    <span v-if="slotProps.data.position">{{ slotProps.data.position }} </span> <span v-else> - </span>
                                    <span v-if="slotProps.data.organization.name">/ {{slotProps.data.organization.name}}</span><span v-else> / -</span></p>
                            </div>
                        </div>
                    </template>
                </Column>
                <Column field="email" header="Роль">
                    <template #body="slotProps">
                        <div class="flex align-items-center gap-2">
                            <Tag class="w-8 h-2rem" v-if="slotProps.data.role === 'user'" severity="success" :value="slotProps.data.role" rounded>Пользователь</Tag>
                            <Tag class="w-8 h-2rem"  v-if="slotProps.data.role === 'admin'" severity="primary" :value="slotProps.data.role" rounded>Админ</Tag>
                            <Tag class="w-8 h-2rem"  v-if="slotProps.data.role === 'superadmin'" severity="warning" :value="slotProps.data.role" rounded>Суперадмин</Tag>
                        </div>
                    </template>
                </Column>
                <Column field="status" header="Статус">
                    <template #body="slotProps" class="text-center">
                        <div class="flex align-items-center gap-2" v-if="slotProps.data.status === 'block'">
                            <i class="pi pi-lock" style="color: red"></i>
                            <p style="color: red">Заблокирован</p>
                        </div>
                    </template>
                </Column>
                <Column field="" header="Дата регистрации">
                    <template #body="slotProps">
                        <div class="flex align-items-center gap-2">
                            {{slotProps.data.registerDate}}
                        </div>
                    </template>
                </Column>
                <Column field="" header="">
                    <template #body="slotProps">
                        <div class="flex align-items-center">
                            <Button @click="toggleMenu($event, slotProps.data)" icon="pi pi-ellipsis-h " class="h-1rem" type="button"  aria-haspopup="true" aria-controls="overlay_tmenu"/>
                        </div>
                    </template>
                </Column>
            </DataTable>

            <Menu ref="menu" id="overlay_tmenu" :model="items" popup/>

            <DynamicDialog/>

        </div>
    </div>
</template>


<style scoped>

</style>