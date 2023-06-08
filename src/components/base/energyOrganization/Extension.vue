<script setup>
import {ref, onMounted, reactive, defineAsyncComponent} from 'vue';
import {useDialog} from "primevue/usedialog";

const AddEquipmentTable6 = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddEquipmentTable6.vue'));
const AddEquipmentTable7 = defineAsyncComponent(() => import('@/components/base/energyOrganization/AddEquipmentTable7.vue'));

const products = ref();
const editingRowsExtensions = ref([]);
const editingRowsPlanEquipment = ref([]);

const extensions = reactive([
    {
        id: 1,
        name_equipment: ' Гидроагрегат №1 (СВ1436/200-80 УХЛ-4 / ПЛ 50-8-850)',
        date: '№ 21 от 21.04.2021 г.',
        organization: ' ТОО "Павлодар Электростройсервис"',
        extension: '2028 г.'
    },
    {
        id: 2,
        name_equipment: ' Гидроагрегат №2(СВ1436/200-80 УХЛ-4 / ПЛ 50-8-850)',
        date: '№ 6-1 от 30.03.2022 г.',
        organization: ' ТОО "Павлодар Электростройсервис"',
        extension: '2028 г.'
    },
    {
        id: 3,
        name_equipment: ' Гидроагрегат №3 (СВ1436/200-80 УХЛ-4 / ПЛ 50-8-850)',
        date: '№ 8 от 02.04.2019 г.',
        organization: ' ТОО "Павлодар Электростройсервис"',
        extension: '2028 г.'
    },
    {
        id: 4,
        name_equipment: ' Гидроагрегат №4 (СВ1436/200-80 УХЛ-4 / ПЛ 50-8-850)',
        date: '№ 56 от 05.04.2016 г.',
        organization: ' ТОО "ВК Промэнергоремонт"',
        extension: '2028 г.'
    },
    {
        id: 5,
        name_equipment: ' Гидроагрегат №5 (СВ1436/200-80 УХЛ-4 / ПЛ 50-8-850)',
        date: '№ 79 от 10.04.2017 г.',
        organization: ' ТОО "ВК Промэнергоремонт"',
        extension: '2028 г.'
    },
    {
        id: 6,
        name_equipment: ' Гидроагрегат №6 (СВ1436/200-80 УХЛ-4 / ПЛ 50-8-850)',
        date: '№ 4 от 03.04.2018 г.',
        organization: 'ТОО "ВК Промэнергоремонт"',
        extension: '2028 г.'
    },


])
const planEquipment = reactive([
    {
        id: 1,
        name_equipment: '-',
        date: '№ 21 от 21.04.2021 г.',
        organization: '-',
        extension: '2028 г.'
    },
    {
        id: 2,
        name_equipment: '-',
        date: '-',
        organization: ' ТОО "Павлодар Электростройсервис"',
        extension: '2028 г.'
    },


])
const onRowEditSaveExtensions = (event) => {
    let { newData, index } = event;

    extensions[index] = newData;
};
const onRowEditSavePlanEquipment = (event) => {
    let { newData, index } = event;

    planEquipment[index] = newData;
};

const equipments = reactive([
    {
        id: 1,
        name: 'Ст.№ 7, ЦКТИ-75-39, 1953 г.',
        type: 'Котельные оборудования',
        count: 2
    },
    {
        id: 1,
        name: 'Ст.№ 8, ЦКТИ-75-39, 1956 г.',
        type: 'Котельные оборудования',
        count: 2
    },

])

const teps = reactive([
    {
        id: 1,
        field: 'id',
        header: '№'
    },
    {
        id: 2,
        field: 'name_equipment',
        header: 'Наименование оборудования'
    },
    {
        id: 3,
        field: 'date',
        header: '№ и дата акта'
    },
    {
        id: 4,
        field: 'organization',
        header: 'Наименование Организации'
    },
    {
        id: 5,
        field: 'extension',
        header: 'Срок продления эксплуатации'
    },

])
const teps2 = reactive([
    {
        id: 1,
        field: 'id',
        header: '№'
    },
    {
        id: 2,
        field: 'name_equipment',
        header: 'Наименование оборудования'
    },
    {
        id: 3,
        field: 'date',
        header: 'МВт, тонн/час, кВА'
    },
    {
        id: 4,
        field: 'organization',
        header: 'Отклонение от паркового ресурса'
    },
    {
        id: 5,
        field: 'extension',
        header: 'Планируемый год вывода'
    },
])

const dialog = useDialog()
const showAddModal = function (value, name, object, type ){
    dialog.open( value,{
        props: {
            header: name,
            dataLength: object.length,
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
            if(type === 'extensions'){
                const newData = options.data;
                extensions.push(...newData)
            }else
            if(type === 'planEquipment'){
                const newData = options.data;
                planEquipment.push(...newData)
            }
        }
    })
}

</script>


<template>
    <div class="flex flex-column">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Информация по продлению сроков эксплуатации основного оборудования</h5>

                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddEquipmentTable6, 'Информация по продлению сроков эксплуатации основного оборудования', extensions, 'extensions')"/>

                <DataTable showGridlines scrollable  v-model:editingRows="editingRowsExtensions" :value="extensions" editMode="row" dataKey="id"
                           @row-edit-save="onRowEditSaveExtensions" tableClass="editable-cells-table" >
                    <Column bodyStyle="text-align:center" v-for="tep in teps" :key="tep.id" :field="tep.field" :header="tep.header">
                        <template #editor="{ data, field }">
                            <p v-if="field === 'id'">{{data[field]}}</p>
                            <InputText v-if="field !== 'name_equipment' && field !== 'id'" v-model="data[field]" />
                            <Dropdown v-if="field === 'name_equipment'" v-model="data[field]" :options="equipments" optionLabel="name" optionValue="name" placeholder="Выберите оборудование">
                            </Dropdown>
                        </template>
                    </Column>
                    <Column :rowEditor="true" bodyStyle="text-align:center"></Column>
                </DataTable>

            </div>
        </div>

        <div class="mt-3 col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Информация по планируемому выбытию основного оборудования</h5>

                <Button class="mb-3 w-12rem" label="Создать" @click="showAddModal(AddEquipmentTable7, 'Информация по планируемому выбытию основного оборудования', planEquipment, 'planEquipment')"/>

                <DataTable showGridlines scrollable  v-model:editingRows="editingRowsPlanEquipment" :value="planEquipment" editMode="row" dataKey="id"
                           @row-edit-save="onRowEditSavePlanEquipment" tableClass="editable-cells-table" >
                    <Column bodyStyle="text-align:center" v-for="tep in teps2" :key="tep.id" :field="tep.field" :header="tep.header">
                        <template #editor="{ data, field }">
                            <p v-if="field === 'id'">{{data[field]}}</p>
                            <InputText v-if="field !== 'name_equipment' && field !== 'id'" v-model="data[field]" />
                            <Dropdown v-if="field === 'name_equipment'" v-model="data[field]" :options="equipments" optionLabel="name" optionValue="name" placeholder="Выберите оборудование">
                            </Dropdown>
                        </template>
                    </Column>
                    <Column :rowEditor="true" bodyStyle="text-align:center"></Column>
                </DataTable>

            </div>
        </div>

        <DynamicDialog/>
    </div>
</template>


<style scoped>

</style>