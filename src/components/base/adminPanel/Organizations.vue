<script setup>
import {reactive, ref} from "vue";
import {background} from "quill/ui/icons";

const organizationType = reactive([
    {
        id: 1,
        type: 'energySupply',
    },
    {
        id: 2,
        type: 'energyTransfer',
    },
    {
        id: 3,
        type: 'energyProducer'
    }
])

const organizations = reactive([
    {
        id: 1,
        code: '1',
        name: 'ТЭЦ 1',
        address: 'г.Нур-Султан, район “Байконыр” Промзона ТЭЦ-2 ',
        type: 'energySupply',
        status: 'block',
    },
    {
        id: 2,
        name: 'ТЛ 55',
        code: 2,
        address: 'г.Нур-Султан, район “Байконыр” Промзона ТЭЦ-2 ',
        type: 'energyTransfer',
        status: 'active',
    },
    {
        id: 3,
        name: 'ТЛ 55',
        code: 3,
        address: 'г.Нур-Султан, район “Байконыр” Промзона ТЭЦ-2 ',
        type: 'energyProducer',
        status: 'block',
    },
    {
        id: 4,
        name: 'ТЛ 55',
        code: 4,
        address: 'г.Нур-Султан, район “Байконыр” Промзона ТЭЦ-2 ',
        type: 'energySupply',
        status: 'active',
    },
    {
        id: 3,
        name: 'ТЛ 55',
        address: 'г.Нур-Султан, район “Байконыр” Промзона ТЭЦ-2 ',
        type: 'energyProducer',
        status: 'block',
    },
])

const menu = ref('')

const status = ref('')
const selectedData = ref('')
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

        }
    },
]);
const toggleMenu = ( event, i) => {
    menu.value.toggle(event);
    selectedData.value = i

    status.value = i.status === 'block' ? 'Разблокировать' :  'Заблокировать'
};

const value = ref('off');
const searchOrganization = ref('');
const options = ref(['Off', 'On']);

</script>


<template>
    <div class="flex flex-column w-full">
        <div class="mt-3 col-12 border-round-lg bg-white">
            <h6>Фильтр</h6>

            <div class="grid justify-content-start">
                <div class="col-3"><Dropdown class="w-full" v-model="searchOrganization" :options="organizations" optionLabel="name" placeholder="Организация"/></div>
                <div class="col-3"><InputText class="w-full" placeholder="Статус"/></div>
                <div class="col-3"><Dropdown class="w-full" placeholder="Область"/></div>
            </div>
        </div>
        <div class="mt-3 col-12 border-round-lg ">
            <div class="flex justify-content-between align-items-center">
                <h4>Организации ({{organizationType.length}})</h4>
                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddUser, 'Создать', users, 'create', selectedData)"/>
            </div>
        </div>
        <div v-for="item in organizations">
            <div class="mt-2 flex border-round-lg col-12" :style="{'background-color' : item.status === 'block' ? 'rgb(244, 218, 218)' : 'white' }">
                <div class="col-10 p-0 flex justify-content-between">
                    <section>
                        <h5>{{item.name}}</h5>
                        <p>{{item.address}}</p>
                    </section>

                    <section>
                        <p>
                            <i v-if="item.status === 'block'" class="pi pi-lock mr-2" style="color: red"></i>
                            <span v-if="item.status === 'block'" style="color: red">Заблокирован</span>
                        </p>
                        <p v-if="item.status === 'block'">{{item.status}}</p>
                    </section>
                </div>
                <div class="col-2 p-0 flex justify-content-end">
                    <Button @click="toggleMenu($event, item)" icon="pi pi-ellipsis-h " class="h-1rem" type="button"  aria-haspopup="true" aria-controls="overlay_tmenu"/>
                </div>
            </div>
        </div>

        <Menu ref="menu" id="overlay_tmenu" :model="items" popup/>

    </div>
</template>


<style scoped>

</style>