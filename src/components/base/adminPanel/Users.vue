<script setup>
import {reactive, ref} from "vue";

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
        registerDate: '21.10.2022 13:20:22'
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
        registerDate: '10.01.2019 12:10:20'
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
        registerDate: '10.01.2019 12:10:20'
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
        registerDate: '10.01.2019 12:10:20'
    },
    {
        id: 5,
        name: 'John',
        surname: '222',
        email: 'john@gmail.com',
        organization: 'АО "КОРЭМ"',
        position: 'HR менеджер',
        role: 'admin',
        status: 'active',
        online: false,
        img: 'https://onlinepngtools.com/images/examples-onlinepngtools/man-on-the-mountain-edge-avatar.png',
        registerDate: '10.01.2019 12:10:20'
    },
    {
        id: 6,
        name: 'John',
        surname: '222',
        email: 'john@gmail.com',
        organization: 'АО "КОРЭМ"',
        position: 'HR менеджер',
        role: 'admin',
        status: 'active',
        online: false,
        img: 'https://onlinepngtools.com/images/examples-onlinepngtools/man-on-the-mountain-edge-avatar.png',
        registerDate: '10.01.2019 12:10:20'
    },
])

const items = reactive([
    {
        label: 'Заблокировать',
        icon: 'pi pi-fw pi-lock',
        command: (event) => {
            console.log("посмотреть")
            console.log("event", event.item)
        }
    },
    {
        label: 'Редактировать',
        icon: 'pi pi-fw pi-pencil',
        command: (event) => {
            console.log(event)
        }
    },
    {
        label: 'Удалить',
        icon: 'pi pi-fw pi-trash',
        command: (event) => {
            console.log(event)
        }
    },
]);

const roles = reactive(['admin', 'user'])
const rowStyle = (data) => {
    if (data.status === 'block') {
        return { backgroundColor: '#F4DADA'  };
    }
};
const toggleMenu = (event, i) => {
    console.log("i", i)
    console.log("i", i.status)
    if(i.status === 'block'){
        console.log("Разблокр")
        items[0].label === 'blocked'
    }else{
        console.log("blocked")
    }
    menu.value.toggle(event);
    data.value = i
};

const menu = ref('')
const visible = ref(false)

const newUser = reactive( {
    id: users.length + 1,
    name: '',
    surname: '',
    userName: '',
    iin: '',
    email: '',
    organization: '',
    position: '',
    role: '',
    status: '',
    online: '',
    img: '',
    registerDate: new Date().toLocaleString()
})

const addNewUser = function (newUser){
    users.push(newUser)
    visible.value = false
    newUser.value =  {
        id: users.length + 1,
        name: '',
        surname: '',
        userName: '',
        iin: '',
        email: '',
        organization: '',
        position: '',
        role: '',
        status: '',
        online: '',
        img: '',
        registerDate: new Date().toLocaleString()
    }
}

</script>


<template>
    <div class="flex w-full">
        <div class="mt-3 col-12 border-round-lg bg-white">
            <div class="flex justify-content-between align-items-center">
                <h5>Пользователи (550)</h5>
                <Button @click="visible = true" label="Добавить"/>
            </div>

            <DataTable class="mt-3" :rowStyle="rowStyle"  :value="users" tableStyle="min-width: 50rem">
                <Column field="id" header="№" ></Column>
                <Column field="name" header="ФИО" class="p-0">
                    <template #body="slotProps">
                        <div class="flex justify-content-start">
                            <div class="col-3">
                                <img :src="slotProps.data.img" width="60" alt=""/>
                            </div>
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
            <Dialog v-model:visible="visible" maximizable modal :header="'Добавить'" :style="{ width: '70vw' }">
                <div class="col-12 grid">
                    <div class="col-4">
                        <p>Фамилия</p>
                        <InputText v-model="newUser.surname" placeholder="Введите..." class="w-full"/>
                    </div>

                    <div class="col-4">
                        <p>Имя</p>
                        <InputText v-model="newUser.name" placeholder="Введите..." class="w-full"/>
                    </div>

                    <div class="col-4">
                        <p>ИИН</p>
                        <InputText v-model="newUser.iin" placeholder="Введите..." class="w-full"/>
                    </div>

                    <div class="col-4">
                        <p>Роль</p>
                        <Dropdown v-model="newUser.role" class="w-full" :options="roles"  placeholder="Выберите роль" />
                    </div>

                    <div class="col-4">
                        <p>Имя пользователя</p>
                        <InputText v-model="newUser.userName" placeholder="Введите..." class="w-full"/>
                    </div>

                    <div class="col-4">
                        <p>E-mail</p>
                        <InputText v-model="newUser.email" placeholder="Введите..." class="w-full"/>
                    </div>

                    <div class="col-4">
                        <p>Организация</p>
                        <InputText v-model="newUser.organization" placeholder="Введите..." class="w-full"/>
                    </div>

                    <div class="col-4">
                        <p>Должность </p>
                        <InputText v-model="newUser.position" placeholder="Введите..." class="w-full"/>
                    </div>

                </div>
                <template #footer>
                    <Button label="Отменить" icon="pi pi-times" @click="visible = false" text />
                    <Button label="Сохранить" icon="pi pi-check" @click="addNewUser(newUser)" autofocus />
                </template>
            </Dialog>

        </div>
    </div>
</template>


<style scoped>

</style>