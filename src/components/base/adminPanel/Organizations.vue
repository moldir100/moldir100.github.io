<script setup>
import {defineAsyncComponent, defineComponent, onBeforeMount, reactive, ref, watch} from "vue";
import {background} from "quill/ui/icons";
import {useDialog} from "primevue/usedialog";
import router from "@/router";
import {useRoute} from "vue-router";
const route = useRoute()

const AddOrganization = defineAsyncComponent(()=> import('@/components/base/adminPanel/AddOrganization.vue'))
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
const organizations = reactive([
    {
        id: 1,
        name: 'АО “Астана-Энергия” ТЭЦ-2',
        address: 'г.Нур-Султан, район “Байконыр” Промзона ТЭЦ-2 ',
        type: {
            id: 1,
            type: 'energySupply',
            name: 'Энергопередающие'
        },
        status: 'block',
    },
    {
        id: 2,
        name: 'ТОО "МАЭК-Казатомпром"',
        address: 'г.Нур-Султан, район “Байконыр” Промзона ТЭЦ-2 ',
        type: {
            id: 1,
            type: 'energyTransfer',
            name: 'Энергопередающие'
        },
        status: 'active',
    },
    {
        id: 3,
        name: 'ТОО «Экибастузская ГРЭС-1»',
        address: 'г.Нур-Султан, район “Байконыр” Промзона ТЭЦ-2 ',
        type: {
            id: 3,
            type: 'energyProducer',
            name: 'Энергопроизводящие'
        },
        status: 'block',
    },
    {
        id: 4,
        name: 'ЭС АО «ЕЭК» ERG, «Евразийская группа»',
        address: 'г.Нур-Султан, район “Байконыр” Промзона ТЭЦ-2 ',
        type: {
            id: 1,
            type: 'energySupply',
            name: 'Энергопередающие'
        },
        status: 'active',
    },
    {
        id: 5,
        name: 'ТОО «Главная распределительная энергостанция Топар»',
        address: 'г.Нур-Султан, район “Байконыр” Промзона ТЭЦ-2 ',
        type: {
            id: 3,
            type: 'energyProducer',
            name: 'Энергопроизводящие'
        },
        status: 'active',
    },
    {
        id: 6,
        name: 'АО «Жамбылская ГРЭС» им. Т.И. Батурова',
        address: 'г.Нур-Султан, район “Байконыр” Промзона ТЭЦ-2 ',
        type: {
            id: 3,
            type: 'energyProducer',
            name: 'Энергопроизводящие'
        },
        status: 'active',
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
            showAddModal(AddOrganization, 'Редактировать','' , 'update', selectedData.value )
        }
    },
    {
        label: 'Удалить',
        icon: 'pi pi-fw pi-trash',
        command: (event) => {
            console.log("удаление")
            const foundIndex = organizations.findIndex((item) => { return item.id === selectedData.value.id })
            console.log("index", foundIndex)
            organizations.splice(foundIndex, 1)
        }
    },
]);
const toggleMenu = ( event, i) => {
    menu.value.toggle(event);
    selectedData.value = i

    status.value = i.status === 'block' ? 'Разблокировать' :  'Заблокировать'
};
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
                organizations.push(newData)
            }else if(type === 'update'){

            }
        }
    })
}

const sortOrganizations = function(organizations) {
    if(!route.query.hasOwnProperty('type')){
        return organizations
    }else if(route.query.type){
        return organizations.filter((item)=>{
                return item.type === route.query.type
            })
    }
}

const value = ref('off');

const filter = reactive({
        name:   '',
        type:   '',
        status: ''
    })

</script>


<template>
    <div class="flex flex-column w-full">
        <div class="mt-3 col-12 border-round-lg bg-white">
            <h6>Фильтр</h6>
            <div class="grid justify-content-start">
                <div class="col-3"><InputText v-model="filter.name" class="w-full" placeholder="Поиск"/></div>
                <div class="col-3"><Dropdown v-model="filter.type" :options="organizationType" optionLabel="name" class="w-full" placeholder="Тип организации"/></div>
            </div>
        </div>
        <div class="mt-3 col-12 border-round-lg flex justify-content-between align-items-center">
            <h4>Организации ({{organizations.length}})</h4>
            <Button class="w-12rem" label="Создать" @click="showAddModal(AddOrganization, 'Создать', organizations, 'create', selectedData)"/>
        </div>
        <div v-for="item in sortOrganizations(organizations)" class="mt-2 flex border-round-lg col-12" :style="{'background-color' : item.status === 'block' ? 'rgb(244, 218, 218)' : 'white' }">
            <div class="col-11 p-0 flex justify-content-between pl-4">
                <section>
                    <h5>{{item.name}}</h5>
                    <span v-if="item.address">{{item.address}}</span><span v-else>Не указано</span>
                </section>

                <section style="text-align: end">
                    <p>
                        <i v-if="item.status === 'block'" class="pi pi-lock mr-2" style="color: red"></i>
                        <span v-if="item.status === 'block'" style="color: red">Заблокирован</span>
                        <span v-else style="color: green">-</span>
                    </p>
                    <p >{{item.type}}</p>
                </section>
            </div>
            <div class="col-1 p-0 flex justify-content-end ">
                <Button class="mt-2"  @click="toggleMenu($event, item)" icon="pi pi-ellipsis-v" severity="danger" text rounded aria-label="Cancel" />
            </div>
        </div>
        <Menu ref="menu" id="overlay_tmenu" :model="items" popup/>
        <DynamicDialog/>
    </div>
</template>


<style scoped>

</style>