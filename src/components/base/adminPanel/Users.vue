<script setup>
import {defineAsyncComponent, reactive, ref} from "vue";
import {useDialog} from "primevue/usedialog";

const AddUser = defineAsyncComponent(() => import('@/components/base/adminPanel/AddUser.vue'));
const users = reactive([
    {
        id: 1,
        name: 'София',
        surname: 'Алексеева',
        email: 'john@gmail.com',
        organization: 'АО "КОРЭМ"',
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
        id: 2,
        name: 'John',
        surname: '222',
        email: 'john@gmail.com',
        organization: 'АО "КОРЭМ"',
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
        organization: 'АО "КОРЭМ"',
        position: 'HR менеджер',
        role: 'admin',
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
        name: 'John',
        surname: '222',
        email: 'john@gmail.com',
        organization: 'АО "КОРЭМ"',
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
const items = reactive([
    {
        label: 'Заблокировать',
        icon: 'pi pi-fw pi-lock',
        command: (event) => {

        }
    },
    {
        label: 'Редактировать',
        icon: 'pi pi-fw pi-pencil',
        command: (event) => {
            console.log("event", event)
            console.log("data", selectedData)
            showAddModal(AddUser, 'Редактировать','' , 'update', selectedData )
        }
    },
    {
        label: 'Удалить',
        icon: 'pi pi-fw pi-trash',
        command: (event) => {
        }
    },
]);
const selectedData = ref('')
const rowStyle = (data) => {
    if (data.status === 'block') {
        return { backgroundColor: '#F4DADA'  };
    }else{
        return { backgroundColor: 'white'}
    }
};
const toggleMenu = ( event, i) => {
    console.log("i",i)
    menu.value.toggle(event);
    selectedData.value = i
    // console.log("selectedData", selectedData)
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
                //find ip in users
                const user = users.find(item => item.id === options.data.id)
                console.log("uu", user)
                //update user by id

            }
        }
    })
}
</script>


<template>
    <div class="flex w-full">
        <div class="mt-3 col-12 border-round-lg bg-white">
            <div class="flex justify-content-between align-items-center">
                <h5>Пользователи (550)</h5>
<!--                <Button @click="visible = true" label="Добавить"/>-->
                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddUser, 'Создать', users, 'create', selectedData)"/>

            </div>
            <DataTable :rowStyle="rowStyle" class="mt-3"  :value="users" tableStyle="min-width: 50rem">
                <Column field="id" header="№" ></Column>
                <Column field="name" header="ФИО" class="p-0">
                    <template #body="slotProps">
                        <div class="flex justify-content-start">
<!--                            <div class="col-3" v-if="slotProps.data.img">-->
<!--                                <img :src="slotProps.data.img" width="60" alt=""/>-->
<!--                            </div>-->
                            <div class="col-9">
                                <p style="font-size: 16px; line-height: 16px;">{{ slotProps.data.name }} {{slotProps.data.surname}}</p>
                                <p style="font-size: 13px; color: #4B4A4A; line-height: 14px;">{{ slotProps.data.position }}</p>
                            </div>
                        </div>
                    </template>
                </Column>
                <Column field="email" header="Роль">
                    <template #body="slotProps">
                        <div class="flex align-items-center gap-2">
                            <Tag class="w-8 h-2rem" v-if="slotProps.data.role === 'user'" severity="success" :value="slotProps.data.role" rounded>Пользователь</Tag>
                            <Tag class="w-8 h-2rem"  v-if="slotProps.data.role === 'admin'" severity="primary" :value="slotProps.data.role" rounded>Админ</Tag>
                        </div>
                    </template>
                </Column>
                <Column field="status" header="Статус">
                    <template #body="slotProps" class="text-center">
                        <div class="flex align-items-center gap-2">
                            <p style="color: red" v-if="slotProps.data.status === 'block'">{{slotProps.data.status}}</p>
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
                        <div class="flex align-items-center gap-2">
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