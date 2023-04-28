<script setup>

import ProfileSubheader from "@/components/dashboard/profile/ProfileSubheader.vue";
import {ref} from "vue";

</script>


<template>
    <div class="grid">
        <div class="col-12">
            <div class="card card-w-title profileInfo">
<!--                <h5>Профиль энергопредприятия</h5>-->
                <ProfileSubheader/>
            </div>

            <section class="container-fluid mt-0">
                <div class="container">
                    <div class="flex flex-row justify-content-between avatar__container">
                        <div class="flex flex-row">
                            <div class="avatar__container-img"><img src="../../../assets/img/avatar.png" alt=""></div>
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
                                <input class="mt-3" style="height: 40px" type="date"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <router-view></router-view>

        </div>
    </div>
</template>


<style scoped>
.col-12{
    padding: 0;
}
.card{
    margin-bottom: 1rem
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