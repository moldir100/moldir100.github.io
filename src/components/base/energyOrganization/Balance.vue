<script setup>
const selected = ref('')
const AddGuild = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddGuild.vue'));

const allData = reactive([
    {
        key: '0',
        type: 'country',
        label: 'Цех имени Айбола',
        data: 'ar',
        inf0: '',
        main: true,
        children: [
            {
                key: '0_0',
                type: 'country',
                label: 'СВ-1436/200-80 УХЛ4',
                count: '6',
                info: 'Гидрогенератор ',
                data: 'ar',
                children: [
                    {
                        key: '0_0_0',
                        type: 'country',
                        label: 'КРУ-10 кВ ГЭС (23 яч.)',
                        info: 'Комплектное распределительное устройство 10 кВ',
                        count: '1',
                        data: 'ar',
                    },
                    {
                        key: '0_0_1',
                        type: 'country',
                        label: 'КРУ-10 кВ ОРУ (16 яч.)',
                        info: 'Комплектное распределительное устройство 10 кВ',
                        count: '1',
                        data: 'hr'
                    }
                ]
            },
            {
                key: '0_1',
                type: 'country',
                label: 'ТЦ-250000/242-13,8кВ',
                count: '3',
                info: 'Блочные трансформатор',
                data: 'fr',
                children: [
                    {
                        key: '0_1_0',
                        type: 'country',
                        label: 'КТП',
                        count: '3',
                        info: 'Блочные трансформатор',
                        data: 'fr'
                    },
                    {
                        key: '0_1_1',
                        type: 'country',
                        label: 'UNITROL 6800',
                        count: '6',
                        info: 'Системы возбуждения гидрогенераторов',
                        data: 'ma'
                    }
                ]
            },
            {
                key: '0_2',
                type: 'country',
                label: 'RESIBLOC',
                info: 'Трансформатор возбуждения',
                count: '6',
                data: 'fr',
                children: []
            }
        ]
    },
    {
        key: '1',
        type: 'country',
        label: 'Цех 2',
        data: 'ar',
        main: true,
        inf0: '',
        children: [
            {
                key: '0_0',
                type: 'country',
                label: 'СВ-1436/200-80 УХЛ4',
                count: '6',
                info: 'Гидрогенератор ',
                data: 'ar',
                children: [
                    {
                        key: '0_0_0',
                        type: 'country',
                        label: 'КРУ-10 кВ ГЭС (23 яч.)',
                        info: 'Комплектное распределительное устройство 10 кВ',
                        count: '1',
                        data: 'ar',
                    },
                    {
                        key: '0_0_1',
                        type: 'country',
                        label: 'КРУ-10 кВ ОРУ (16 яч.)',
                        info: 'Комплектное распределительное устройство 10 кВ',
                        count: '1',
                        data: 'hr'
                    }
                ]
            },
            {
                key: '0_1',
                type: 'country',
                label: 'ТЦ-250000/242-13,8кВ',
                count: '3',
                info: 'Блочные трансформатор',
                data: 'fr',
                children: [
                    {
                        key: '0_1_0',
                        type: 'country',
                        label: 'КТП',
                        count: '3',
                        info: 'Блочные трансформатор',
                        data: 'fr'
                    },
                    {
                        key: '0_1_1',
                        type: 'country',
                        label: 'UNITROL 6800',
                        count: '6',
                        info: 'Системы возбуждения гидрогенераторов',
                        data: 'ma'
                    }
                ]
            },
            {
                key: '0_2',
                type: 'country',
                label: 'RESIBLOC',
                info: 'Трансформатор возбуждения',
                count: '6',
                data: 'fr',
                children: []
            }
        ]
    },
    {
        key: '2',
        type: 'country',
        label: 'Цех 3',
        data: 'ar',
        inf0: '',
        main: true,
        children: [
            {
                key: '0_0',
                type: 'country',
                label: 'СВ-1436/200-80 УХЛ4',
                count: '6',
                info: 'Гидрогенератор ',
                data: 'ar',
                children: [
                    {
                        key: '0_0_0',
                        type: 'country',
                        label: 'КРУ-10 кВ ГЭС (23 яч.)',
                        info: 'Комплектное распределительное устройство 10 кВ',
                        count: '1',
                        data: 'ar',
                    },
                    {
                        key: '0_0_1',
                        type: 'country',
                        label: 'КРУ-10 кВ ОРУ (16 яч.)',
                        info: 'Комплектное распределительное устройство 10 кВ',
                        count: '1',
                        data: 'hr'
                    }
                ]
            },
            {
                key: '0_1',
                type: 'country',
                label: 'ТЦ-250000/242-13,8кВ',
                count: '3',
                info: 'Блочные трансформатор',
                data: 'fr',
                children: [
                    {
                        key: '0_1_0',
                        type: 'country',
                        label: 'КТП',
                        count: '3',
                        info: 'Блочные трансформатор',
                        data: 'fr'
                    },
                    {
                        key: '0_1_1',
                        type: 'country',
                        label: 'UNITROL 6800',
                        count: '6',
                        info: 'Системы возбуждения гидрогенераторов',
                        data: 'ma'
                    }
                ]
            },
            {
                key: '0_2',
                type: 'country',
                label: 'RESIBLOC',
                info: 'Трансформатор возбуждения',
                count: '6',
                data: 'fr',
                children: []
            }
        ]
    },
]);

const data = ref('');

const visible = ref(false)

const menu = ref('')
const items = reactive([
    {
        label: 'Посмотреть',
        icon: 'pi pi-fw pi-eye',
        command: (event) => {
            showModal()
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

import {defineAsyncComponent, reactive, ref} from "vue";
import {useDialog} from "primevue/usedialog";

const toggleMenu = (event, i) => {
    menu.value.toggle(event);
    data.value = i
};
const showModal = function () {
    visible.value = true
}
const dialog = useDialog();
const showAddModal = function (length) {
    dialog.open(AddGuild, {
        props: {
            header: 'Балансовая принадлежность',
            length: length,
            style: {
                width: '50vw',
            },
            breakpoints: {
                '960px': '75vw',
                '640px': '90vw'
            },
            modal: true
        },

        onClose: (options) => {
            const data = options.data;
            console.log("data", data)
            // if (data) {
            //     const buttonType = data.buttonType;
            //     const summary_and_detail = buttonType ? { summary: 'No Product Selected', detail: `Pressed '${buttonType}' button` } : { summary: 'Product Selected', detail: data.name };
            //
            //     toast.add({ severity:'info', ...summary_and_detail, life: 3000 });
            // }
        }
    })
}
</script>


<template>
    <div class=" border-round-lg p-4 bg-white">

        <div class="flex flex-row justify-content-between mb-3">
            <div class="flex">
                <h4 class="m-auto">Балансовая принадлежность</h4>
            </div>
        </div>

        <Button icon="pi pi-plus" label="Добавить цех" @click="showAddModal(allData.length)"/>
        <DynamicDialog/>

        <div class="flex flex-column " v-for="i in allData">
            <div class="border-round-lg flex flex-row justify-content-between p-3 pb-2 lg:w-3 mt-3"
                 style="border: #c4c4c4 1px solid">
                <div><h6>{{ i.label }}</h6></div>
                <Button icon="pi pi-ellipsis-h" class="h-1rem" type="button" @click="toggleMenu($event, i)"
                        aria-haspopup="true" aria-controls="overlay_tmenu"/>
            </div>
        </div>
        <Menu ref="menu" id="overlay_tmenu" :model="items" popup/>

        <Dialog v-model:visible="visible" maximizable modal :header="data.label" :style="{ width: '70vw' }">
            <div class="col-12 grid">
                <OrganizationChart id="orgChart" class="" :value="data" collapsible :selectionMode="'single'">
                    <template #country="slotProps">
                        <div class="flex flex-column align-items-center">
                            <div class="mt-3 font-medium text-lg"> {{ slotProps.node.label }}</div>
                            <div class="mt-3 font-normal text-lg" v-if="slotProps.node.main !== true">Тип: {{ slotProps.node.info }}</div>
                            <div class="mt-3 font-normal text-lg" v-if="slotProps.node.main !== true">Количество: {{ slotProps.node.count }} ед.</div>
                        </div>
                    </template>
                    <template #default="slotProps">
                        <span>{{slotProps.node.data.label}}</span>
                    </template>
                </OrganizationChart>
            </div>
        </Dialog>
    </div>
</template>


<style scoped>

</style>