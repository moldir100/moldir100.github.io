<script setup>

import ProfileSubheader from "@/components/base/ProfileSubheader.vue";
import {ref, reactive} from "vue";

const items = reactive([
    {
        label: 'Дэшборды',
        icon: 'pi pi-fw pi-home',
        to: '/profile/dashboard'
    },
    {
        label: 'Цифровой паспорт',
        icon: 'pi pi-fw pi-calendar',
        to: '/profile/digitalPassport'
    },
    {
        label: 'Журналы',
        icon: 'pi pi-fw pi-pencil',
        to: ''
    },
    {
        label: 'Согласование планов ремонта',
        icon: 'pi pi-fw pi-file',
        to: ''
    },
    {
        label: 'Тариф',
        icon: 'pi pi-fw pi-cog',
        to: ''
    },
    {
        label: 'Сотрудники',
        icon: 'pi pi-fw pi-cog',
        to: ''
    },
    {
        label: 'Настройки',
        icon: 'pi pi-fw pi-cog',
        to: ''
    }
])

</script>


<template>
    <div class="grid">
        <div class="col-12">

            <div class="surface-card m-0 list-none flex overflow-x-auto select-none mb-3">
                <TabMenu class="subHeader p-tabmenuitem" style=""  :model="items"/>
            </div>


            <router-view></router-view>

        </div>
    </div>
</template>


<style scoped>

/*.subHeader::v-deep(.p-tabmenu-nav, p-tabmenuitem. .p-menuitem-link){*/
.subHeader::v-deep( .p-menuitem-link){
    border: 2px black solid;
    height: 50px
}

@media screen and (max-width: 1436px) {
    .subHeader::v-deep(.p-tabmenu-nav) {
        overflow-x: inherit;
        overflow-y: hidden;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 51px;
        padding-left: 1rem !important;
        padding-right: 1rem !important;
    }
    .subHeader::v-deep(li) {
        width: 250px;
    }

    .subHeader::v-deep(.p-tabmenu-nav li) {
        width: 250px;
        display: flex;
        justify-content: space-between;
    }

    /* width */
    .subHeader::v-deep(.p-tabmenu-nav)::-webkit-scrollbar {
        margin-top: 15px;
        width: 5px;   /* vertical scrollbar width */
        height: 5px;
    }
    /* Track */
    .subHeader::v-deep(.p-tabmenu-nav)::-webkit-scrollbar-track {
    //box-shadow: inset 0 0 5px grey;
        margin-top: 15px;
        border-radius: 10px;
    }
    /* Handle */
    .subHeader::v-deep(.p-tabmenu-nav)::-webkit-scrollbar-thumb {
        background: #7e808b;
        border-radius: 10px;
        /*min-height: 50px;*/
    }

}

.col-12{
    padding: 0;
}



.profileInfo{
    padding: 5px;
}

/* avatar */

.avatar__container {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    padding: 20px;
    background: #FFFFFF;
    border-radius: 2px;
}


.editBtn{
    width: 220px;
    height: 48px;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
    color: #FFFFFF;
    background: #215A96;
    border-radius: 8px;
    border: 1px solid #215A96
;
}

</style>