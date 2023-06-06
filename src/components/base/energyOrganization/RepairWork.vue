<script setup>
import {ref, onMounted, reactive} from 'vue';
import ProductService from '@/service/ProductService.js';
import InputLabel from "@/components/UI/Vinput.vue";

const products = ref();
const editingRows = ref([]);
const statuses = ref([
    { label: 'In Stock', value: 'INSTOCK' },
    { label: 'Low Stock', value: 'LOWSTOCK' },
    { label: 'Out of Stock', value: 'OUTOFSTOCK' }
]);


const onRowEditSave = (event) => {
    let { newData, index } = event;

    products.value[index] = newData;
};
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

</script>



<template>
    <div class="flex">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Ремонтная кампания за 2019-2021 годы по основному оборудованию:</h5>

                <DataTable :value="customers" rowGroupMode="rowspan" groupRowsBy="representative.name" sortMode="single" sortField="representative.name" :sortOrder="1" tableStyle="min-width: 50rem">
                    <Column header="#" headerStyle="width:3rem">
                        <template #body="slotProps">
                            {{ slotProps.index + 1 }}
                        </template>
                    </Column>
                    <Column field="representative.name" header="Representative" style="min-width: 200px">
                        <template #body="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img :alt="slotProps.data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.data.representative.image}`" width="32" style="vertical-align: middle" />
                                <span>{{ slotProps.data.representative.name }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="name" header="Name" style="min-width: 200px"></Column>
                    <Column field="country" header="Country" style="min-width: 150px">
                        <template #body="slotProps">
                            <div class="flex align-items-center gap-2">
                                <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.data.country.code}`" style="width: 24px" />
                                <span>{{ slotProps.data.country.name }}</span>
                            </div>
                        </template>
                    </Column>
                    <Column field="company" header="Company" style="min-width: 200px"></Column>
                    <Column field="status" header="Status" style="min-width: 100px">
                        <template #body="slotProps">
                            <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
                        </template>
                    </Column>
                    <Column field="date" header="Date" style="min-width: 100px"></Column>
                </DataTable>

            </div>
        </div>
    </div>
</template>


<style scoped>

</style>