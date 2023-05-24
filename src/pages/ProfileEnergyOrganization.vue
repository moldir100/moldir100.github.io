<script setup>

import ProfileSubheader from "@/components/base/ProfileSubheader.vue";
import {ref, reactive} from "vue";

const items = reactive([
    {
        label: 'Дэшборды',
        icon: 'pi pi-fw pi-home',
        to: '/dashboard/profile'
    },
    {
        label: 'Цифровой паспорт',
        icon: 'pi pi-fw pi-calendar',
        to: '/dashboard/profile/digitalPassport'
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
                <TabMenu class="subHeader"  :model="items"/>
            </div>

<!--            <div class="card">-->
<!--                <div class="flex flex-row justify-content-between">-->
<!--                    <div class="flex flex-row">-->
<!--                        <div class="avatar__container-img"><img src="../assets/img/avatar.png" alt=""></div>-->
<!--                        <div class="avatar__container-info" style="margin-left: 40px">-->
<!--                            <div class="avatar__container-info-left">-->
<!--                                <p>Дата последнего изменения данных: <span>20.08.2022</span> <span>13:23:00</span></p>-->
<!--                                <h1 class="avatar__title">АО “Астана-Энергия” ТЭЦ-2</h1>-->
<!--                                <p>Бин: <span>041140002811</span></p>-->
<!--                                <p>Ссылка: <a href="">https://astana-energy.kz/</a></p>-->
<!--                            </div>-->
<!--                            <div class="avatar__container-info-right"></div>-->
<!--                        </div>-->
<!--                    </div>-->

<!--                    <div>-->
<!--                        <div class="flex flex-column">-->
<!--                            <button class="btn editBtn">-->
<!--                                <i class="pi pi-user-plus"></i>-->
<!--                                Редактировать-->
<!--                            </button>-->

<!--&lt;!&ndash;                            <input class="mt-3" style="height: 40px" type="date"/>&ndash;&gt;-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

            <div class=" flex bg-white border-round-lg mb-3">
                <div>
                    <img src="@/assets/img/1.png" alt="" />
                </div>
                <div>
                    <h1>АО “Астана-Энергия” ТЭЦ-2</h1>
                    <p>Бин: 041140002811</p>
                    <p>Ссылка: https://astana-energy.kz/</p>
                    <p>Дата последнего изменения данных: 20.08.2022 13:23:00</p>
                    <Button class="bg-blue-800 border-blue-800" label="Скачать PDF" icon="pi pi-file-pdf" />
                </div>
            </div>

            <router-view></router-view>

        </div>
    </div>
</template>


<style scoped>
.subHeader::v-deep(.p-tabmenu-nav) {
    /*overflow-x: inherit;*/
    /*overflow-y: hidden;*/
    /*display: flex;*/
    /*justify-content: space-between;*/
    /*align-items: center;*/
    /*height: 56px;*/
    /*padding-left: 1rem !important;*/
    /*padding-right: 1rem !important;*/

}
.subHeader::v-deep(li) {
    /*width: 250px;*/
}
@media screen and (max-width: 1300px) {
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