<script setup>
import { useLayout } from '@/layout/composables/layout';
import {computed, ref} from 'vue';
import AppConfig from '@/layout/AppConfig.vue';

const { layoutConfig } = useLayout();

const smoothScroll = (id) => {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
};

// const logo = '../assets/logo.svg'

//
// const logoUrl = computed(() => {
//     return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
// });
</script>

<template>
    <div class="flex justify-content-center">
        <div class="landing-wrapper overflow-hidden" style="background-color: #F8F9FA">
<!--            header-->
            <div style="background: white; height: 60px">
                <div id="container" class="flex align-items-center  justify-content-between relative lg:static" style="height: 60px">
                    <a class="flex align-items-center" href="#"> <img src="../assets/logo.svg" alt="KOREM Logo" class="mr-0 lg:mr-2"/></a>
                    <div class="align-items-end  justify-content-end   lg:flex  lg:static  left-0  lg:px-0 ">
                        <div class="">
                            <router-link to="/auth/login">
                            <Button label="Войти" class="p-button-rounded border-none  font-light text-white line-height-2" style="background-color: #152957"></Button>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

<!--            hero banner section-->
            <div id="hero" class="flex flex-column pt-8 pb-8">
                <div id="container"  class="flex align-content-end lg:h-24rem">
                    <h1 class="text-6xl font-bold text-white line-height-2">
                        <span class="font-light block">Цифровая платформа энергетики</span>CPE
                    </h1>
<!--                    <p class="font-normal text-2xl line-height-3 md:mt-3 text-gray-700">Sed blandit libero volutpat sed cras. Fames ac turpis egestas integer. Placerat in egestas erat...</p>-->
<!--                    <Button label="Get Started" class="p-button-rounded text-xl border-none mt-5 bg-blue-500 font-normal text-white line-height-3 px-3"></Button>-->
                </div>
            </div>

<!--            электроэнергетика-->
            <div id="container" class="">
                <div class="grid justify-content-center">
                    <div class="col-12 text-start mt-4 mb-2">
                        <p id="title">Электроэнегетика</p>
                    </div>

                    <div class="card">
                        <div class="grid justify-content-center">

                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <router-link to="/">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/1.png"/>
                                </span>
                                <!--                                <div class="text-900 mb-3 font-medium">Кабинет Энергопредприятия</div>-->
                                <p>Кабинет Энергопредприятия</p>
                                </router-link>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/2.png"/>
                                </span>
                                <p>Кабинет потребителя</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/3.png"/>
                                </span>
                                <p>Кабинет Гос.органа</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/4.png"/>
                                </span>
                                <p>Кабинет Системного оператора</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/5.png"/>
                                </span>
                                <p>Кабинет ЭСО</p>
                            </div>

                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/6.png"/>
                                </span>
                                <p>Cloud ЭСО “Смена поставщика э/э”</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/7.png"/>
                                </span>
                                <p>Тариф</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/8.png"/>
                                </span>
                                <p>Согласование планов ремонтов</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/9.png"/>
                                </span>
                                <p>Карта ВИЭ</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/10.png"/>
                                </span>
                                <p>Карта линии электропередач и подстанций</p>
                            </div>

                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/11.png"/>
                                </span>
                                <p>Карта Гидропотенциала</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/12.png"/>
                                </span>
                                <p>Цифровая карта генерации</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/13.png"/>
                                </span>
                                <p>НПА</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/14.png"/>
                                </span>
                                <p>База Энергетик. Инвест программы</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/15.png"/>
                                </span>
                                <p>ТОиР</p>
<!--                                <h4 id="hat">2024</h4>-->
                            </div>

                        </div>
                    </div>
                </div>
            </div>

<!--            аналитика-->
            <div id="container" >
                <div class="grid ">
                    <div class="col-12 text-start mt-8 mb-2">
                        <p id="title">Аналитика</p>
                    </div>


                    <div class="col-12 md:col-6 lg:col-3 p-0 lg:pr-4 lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="../assets/icons/analytics/1.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">Дэшборд производства электроэнергии</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 lg:col-3 p-0 lg:pr-4 lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="../assets/icons/analytics/2.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">Дэшборд электропередач</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 lg:col-3 p-0 lg:pr-4 lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="../assets/icons/analytics/3.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">Техническое состояние энергооборудования энергопреприятий</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 lg:col-3 p-0  lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="../assets/icons/analytics/4.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">График ремонтов</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-6 lg:col-3 p-0 lg:pr-4 lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="../assets/icons/analytics/5.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">База кадров</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 lg:col-3 p-0 lg:pr-4 lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="../assets/icons/analytics/6.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">Показатели АСКУЭ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 lg:col-3 p-0 lg:pr-4 lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="../assets/icons/analytics/7.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">Потери электроэнергии</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 lg:col-3 p-0  lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="../assets/icons/analytics/8.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">Безопасность</h5>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

<!--            База оборудования-->
            <div id="container" class="">
                <div class="grid justify-content-center">
                    <div class="col-12 text-start mt-8 mb-2">
                        <p id="title">База оборудования</p>
                    </div>

                    <div class="card">
                        <div class="grid justify-content-center">
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/equipments/1.png"/>
                                </span>
                                <!--                                <div class="text-900 mb-3 font-medium">Кабинет Энергопредприятия</div>-->
                                <p>Заявки на закуп оборудования</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/equipments/2.png"/>
                                </span>
                                <p>Кабинет потребителя</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/equipments/3.png"/>
                                </span>
                                <p>Кабинет Гос.органа</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/equipments/4.png"/>
                                </span>
                                <p>Кабинет Системного оператора</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/equipments/5.png"/>
                                </span>
                                <p>Кабинет ЭСО</p>
                            </div>


                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/equipments/6.png"/>
                                </span>
                                <p>Cloud ЭСО “Смена поставщика э/э”</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/equipments/7.png"/>
                                </span>
                                <p>Тариф</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/equipments/8.png"/>
                                </span>
                                <p>Согласование планов ремонтов</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/equipments/9.png"/>
                                </span>
                                <p>Карта ВИЭ</p>
                            </div>
                            <div class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="" src="../assets/icons/equipments/10.png"/>
                                </span>
                                <p>Карта линии электропередач и подстанций</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

<!--            Footer-->
            <div class="py-4 px-4 mx-0 mt-8 " style="background-color: #152957">
                <div id="container" class="grid justify-content-between">
                    <div class="col-12 md:col-2">
                        <a @click="smoothScroll('#home')" class="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
<!--                            <img :src="logoUrl" alt="footer sections" width="50" height="50" class="mr-2" />-->
                            <h4 class="font-medium text-3xl text-900 text-white">KOREM</h4>
                        </a>
                    </div>

                    <div class="col-12 md:col-10 lg:col-5">
                        <div class="grid text-center md:text-left">
                            <div class="col-12 lg:col-6 md:col-3">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900 text-white">Компания</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-white">О нас</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-white">Новости</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-white">Админстрирование</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-white">Поиск</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-white">Поддержка</a>
                            </div>


                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900 text-white">Доп.функции</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-white">Контакты</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-white">FAQ</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-white">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<!--    <AppConfig simple />-->
</template>

<style scoped>
#container{
    /*height: 100%;*/
    margin-left: 14% ;
    margin-right: 14% ;
}

@media screen and (max-width: 1770px) {
    #container {
        margin-left: 7% ;
        margin-right: 7% ;
    }
}

#title{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 630;
    font-size: 26px;
    color: #232859;
}
#hero {
    background: linear-gradient(353.8deg, rgba(21, 25, 29, 0.68) 3.95%, rgba(0, 0, 0, 0.679426) 3.96%, rgba(0, 0, 0, 0.679567) 8.91%, rgba(0, 0, 0, 0.679645) 14.15%, rgba(0, 0, 0, 0.679559) 18.95%, rgba(34, 38, 41, 0.6052) 30.75%, rgba(44, 56, 67, 0) 44.52%), url('@/assets/ТЭЦ-27 1.png') no-repeat center top;
    background-size: cover;
}
@media (min-width: 768px) {
    background: url('ТЭЦ-27 1.png') no-repeat center top;
}

.card{
    background: #FFFFFF;
    border-radius: 10px;
    border: none;
}
.card p{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 560;
    font-size: 16px;
    line-height: 16px;
    color: #232859;
    overflow: hidden;
    text-overflow: ellipsis;
}

#hat {
    background: red;
    width: 50px;
    height: 50px;
    position: absolute;
    /*right: 0;*/
    /*top: 0;*/
    transform: translate(40%,50%);
    z-index: 1;
}

/*.text-center {*/
/*    border-radius: 10px;*/
/*    text-align: center;*/
/*    overflow: hidden;*/
/*    text-overflow: ellipsis;*/
/*    &:hover {*/
/*        transition: all 0.2s ease-out;*/
/*        box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);*/
/*        border-radius: 10px;*/
/*        border: 1px solid #cccccc;*/
/*        background-color: white;*/
/*    }*/
/*}*/
</style>
