<script setup>

import ProfileSubheader from "@/components/base/ProfileSubheader.vue";
import {ref, reactive} from "vue";

const items = reactive([
    {
        label: 'Дэшборды',
        icon: 'pi pi-fw pi-home',
        to: '/'
    },
    {
        label: 'Цифровой паспорт',
        icon: 'pi pi-fw pi-calendar',
        to: '/dashboard/profile/digitalPassport'
    },
    {
        label: 'Журналы',
        icon: 'pi pi-fw pi-pencil',
        to: '/edit'
    },
    {
        label: 'Согласование планов ремонта',
        icon: 'pi pi-fw pi-file',
        to: '/documentation'
    },
    {
        label: 'Тариф',
        icon: 'pi pi-fw pi-cog',
        to: '/settings'
    },
    {
        label: 'Сотрудники',
        icon: 'pi pi-fw pi-cog',
        to: '/settings'
    },
    {
        label: 'Настройки',
        icon: 'pi pi-fw pi-cog',
        to: '/settings'
    }
])
</script>


<template>
    <div class="grid">
        <div class="col-12">
            <div class="card mb-3">
                <TabMenu class="border-round-lg" :model="items" />
            </div>


            <div class="card card-w-title profileInfo">
<!--                <h5>Профиль энергопредприятия</h5>-->
                <ProfileSubheader/>
            </div>


            <div class="card">
                <div class="flex flex-row justify-content-between">
                    <div class="flex flex-row">
                        <div class="avatar__container-img"><img src="../assets/img/avatar.png" alt=""></div>
                        <div class="avatar__container-info" style="margin-left: 40px">
                            <div class="avatar__container-info-left">
                                <p>Дата последнего изменения данных: <span>20.08.2022</span> <span>13:23:00</span></p>
                                <h1 class="avatar__title">АО “Астана-Энергия” ТЭЦ-2</h1>
                                <p>Бин: <span>041140002811</span></p>
                                <p>Ссылка: <a href="">https://astana-energy.kz/</a></p>
                            </div>
                            <div class="avatar__container-info-right"></div>
                        </div>
                    </div>

                    <div>
                        <div class="flex flex-column">
                            <button class="btn editBtn">
                                <i class="pi pi-user-plus"></i>
                                Редактировать
                            </button>

<!--                            <input class="mt-3" style="height: 40px" type="date"/>-->
                        </div>
                    </div>
                </div>
            </div>

            <div class="card flex bg-white border-round-lg">
                <div>
                    <img src="@/assets/img/1.png" alt="" />
                </div>
                <div>
                    <h1>АО “Астана-Энергия” ТЭЦ-2</h1>
                    <p>Бин: 041140002811</p>
                    <p>Ссылка: https://astana-energy.kz/</p>
                    <p>Дата последнего изменения данных: 20.08.2022 13:23:00</p>
                    <Button label="Скачать PDF" icon="pi pi-file-pdf" />
                </div>
            </div>

            <router-view></router-view>

        </div>
    </div>
</template>


<style scoped>
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