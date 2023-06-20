<script setup>
// import GSTC from "gantt-schedule-timeline-calendar";
// or if you encounter problems with the wasm loader

import {ref} from "vue";
import {useToast} from "primevue/usetoast";

const customers = ref();
const expandedRowGroups = ref();
const toast = useToast();
const onRowGroupExpand = (event) => {
    toast.add({ severity: 'info', summary: 'Row Group Expanded', detail: 'Value: ' + event.data, life: 3000 });
};
const onRowGroupCollapse = (event) => {
    toast.add({ severity: 'success', summary: 'Row Group Collapsed', detail: 'Value: ' + event.data, life: 3000 });
};
const calculateCustomerTotal = (name) => {
    let total = 0;

    if (customers.value) {
        for (let customer of customers.value) {
            if (customer.representative.name === name) {
                total++;
            }
        }
    }

    return total;
};
const getSeverity = (status) => {
    switch (status) {
        case 'unqualified':
            return 'danger';

        case 'qualified':
            return 'success';

        case 'new':
            return 'info';

        case 'negotiation':
            return 'warning';

        case 'renewal':
            return null;
    }
};
</script>


<template>
    <div class="border-round-lg bg-white p-3"> Согласование планов ремонтов </div>
    <DataTable v-model:expandedRowGroups="expandedRowGroups" :value="customers" tableStyle="min-width: 50rem"
               expandableRowGroups rowGroupMode="subheader" groupRowsBy="representative.name" @rowgroup-expand="onRowGroupExpand" @rowgroup-collapse="onRowGroupCollapse"
               sortMode="single" sortField="representative.name" :sortOrder="1">
        <template #groupheader="slotProps">
            <img :alt="slotProps.data.representative.name" :src="`https://primefaces.org/cdn/primevue/images/avatar/${slotProps.data.representative.image}`" width="32" style="vertical-align: middle" class="ml-2" />
            <span class="vertical-align-middle ml-2 font-bold line-height-3">{{ slotProps.data.representative.name }}</span>
        </template>
        <Column field="representative.name" header="Representative"></Column>
        <Column field="name" header="Name" style="width: 20%"></Column>
        <Column field="country" header="Country" style="width: 20%">
            <template #body="slotProps">
                <div class="flex align-items-center gap-2">
                    <img alt="flag" src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png" :class="`flag flag-${slotProps.data.country.code}`" style="width: 24px" />
                    <span>{{ slotProps.data.country.name }}</span>
                </div>
            </template>
        </Column>
        <Column field="company" header="Company" style="width: 20%"></Column>
        <Column field="status" header="Status" style="width: 20%">
            <template #body="slotProps">
                <Tag :value="slotProps.data.status" :severity="getSeverity(slotProps.data.status)" />
            </template>
        </Column>
        <Column field="date" header="Date" style="width: 20%"></Column>
        <template #groupfooter="slotProps">
            <div class="flex justify-content-end font-bold w-full">Total Customers: {{ calculateCustomerTotal(slotProps.data.representative.name) }}</div>
        </template>
    </DataTable>
</template>


<style scoped>

</style>