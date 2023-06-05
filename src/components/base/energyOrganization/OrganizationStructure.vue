<script setup>
import {ref} from 'vue'
const data = ref({
    key: '0',
    type: 'person',
    styleClass: 'bg-indigo-500 text-white border-round-xl',
    data: {
        name: 'Генеральный директор',
        norm: '1',
        fact: '2'
    },
    children: [
        {
            key: '0_0',
            type: 'person',
            styleClass: 'bg-purple-500 text-white border-round-xl',
            data: {
                image: 'https://primefaces.org/cdn/primevue/images/avatar/annafali.png',
                name: 'Директор по ремонтам',
                norm: '1',
                fact: '2'
            },
            children: [
                {
                    label: 'Сотрудник 1',
                    styleClass: 'bg-purple-500 text-white border-round-xl',
                    norm: '1',
                    fact: '2'
                },
                {
                    label: 'Сотрудник 2',
                    styleClass: 'bg-purple-500 text-white border-round-xl',
                    norm: '1',
                    fact: '2'
                }
            ]
        },
        {
            key: '0_1',
            type: 'person',
            styleClass: 'bg-teal-500 text-white border-round-xl',
            data: {
                image: 'https://primefaces.org/cdn/primevue/images/avatar/stephenshaw.png',
                name: 'Финансовый директор',
                norm: '1',
                fact: '2'
            },
            children: [
                {
                    label: 'Сотрудник 3',
                    styleClass: 'bg-teal-500 text-white border-round-xl',
                    norm: '1',
                    fact: '2'
                },
                {
                    label: 'Сотрудник 4',
                    styleClass: 'bg-teal-500 text-white border-round-xl',
                    norm: '1',
                    fact: '2'
                }
            ]
        }
    ]
});
</script>


<template>
    <div class="flex">
        <div class="col-12 border-round-lg bg-white ml-0">
            <div class="col-12 flex flex-column">
                <h5>Организационная структура</h5>


                <OrganizationChart :value="data" collapsible>
                    <template #person="slotProps">
                        <div class="flex flex-column">
                            <div class="flex flex-column align-items-center">
                                <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                                <span>{{ slotProps.node.data.title }}</span>
                            </div>
                        </div>
                    </template>
                    <template #default="slotProps">
                        <span>{{ slotProps.node.label }}</span>
                    </template>
                </OrganizationChart>

            </div>
        </div>
        <OrganizationChart :value="data" collapsible>
            <template #person="slotProps">
                <div class="flex flex-column">
                    <div class="flex flex-column align-items-center">
                        <span class="font-bold mb-2">{{ slotProps.node.data.name }}</span>
                        <span>{{ slotProps.node.data.title }}</span>
                    </div>
                </div>
            </template>
            <template #default="slotProps">
                <span>{{ slotProps.node.label }}</span>
            </template>
        </OrganizationChart>
    </div>
</template>


<style scoped>

</style>