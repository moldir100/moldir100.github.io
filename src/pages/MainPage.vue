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

const items = ref([
    {
        id: 1,
        title: 'Кабинет Энергопредприятия',
        icon: 'src/assets/icons/1.png',
        link: '/',
    },
    {
        id: 2,
        title: 'Кабинет потребителя',
        icon: 'src/assets/icons/2.png',
        link: '/',
    },
    {
        id: 3,
        title: 'Кабинет Гос.органа',
        icon: 'src/assets/icons/3.png',
        link: '/',
    },
    {
        id: 4,
        title: 'Кабинет Системного оператора',
        icon: 'src/assets/icons/4.png',
        link: '/'
    },
    {
        id: 5,
        title: 'Кабинет ЭСО',
        icon: 'src/assets/icons/5.png',
        link: '/',
    },
    {
        id: 6,
        title: 'Cloud ЭСО “Смена поставщика э/э”',
        icon: 'src/assets/icons/6.png',
        link: '/',
    },
    {
        id: 7,
        title: 'Согласование планов ремонтов',
        icon: 'src/assets/icons/7.png',
        link: '/',
    },
    {
        id: 8,
        title: 'Карта ВИЭ',
        icon: 'src/assets/icons/8.png',
        link: '/',
    },
    {
        id: 9,
        title: 'Карта линии электропередач и подстанций',
        icon: 'src/assets/icons/9.png',
        link: '/',
    },
    {
        id: 10,
        title: 'Кабинет Энергопредприятия',
        icon: 'src/assets/icons/10.png',
        link: '/',
    },
    {
        id: 11,
        title: 'scs',
        icon: 'src/assets/icons/11.png',
        link: '/',
    },
    {
        id: 12,
        title: 'Цифровая карта генерации',
        icon: 'src/assets/icons/12.png',
        link: '/',
    },
    {
        id: 13,
        title: 'НПА',
        icon: 'src/assets/icons/13.png',
        link: '/',
    },
    {
        id: 14,
        title: 'База Энергетик. Инвест программы',
        icon: 'src/assets/icons/14.png',
        link: '/',
    },
    {
        id: 15,
        title: 'ТОиР',
        icon: 'src/assets/icons/15.png',
        link: '/',
    }])

const itemsEquipment = ref([
    {
        id: 1,
        title: 'Заявки на закуп оборудования',
        icon: 'src/assets/icons/equipments/1.png',
        link: '/',
    },
    {
        id: 2,
        title: 'Турбины',
        icon: 'src/assets/icons/equipments/2.png',
        link: '/',
    },
    {
        id: 3,
        title: 'Генераторы',
        icon: 'src/assets/icons/equipments/3.png',
        link: '/',
    },
    {
        id: 4,
        title: 'Трансформаторы',
        icon: 'src/assets/icons/equipments/4.png',
        link: '/',
    },
    {
        id: 5,
        title: 'Распределительные оборудования',
        icon: 'src/assets/icons/equipments/5.png',
        link: '/',
    },
    {
        id: 6,
        title: 'Солнечные панели”',
        icon: 'src/assets/icons/equipments/6.png',
        link: '/',
    },
    {
        id: 7,
        title: 'Ветряные установки',
        icon: 'src/assets/icons/equipments/7.png',
        link: '/',
    },
    {
        id: 8,
        title: 'Поставщики оборудования',
        icon: 'src/assets/icons/equipments/8.png',
        link: '/',
    },
    {
        id: 9,
        title: 'Подрядные организации',
        icon: 'src/assets/icons/equipments/9.png',
        link: '/',
    },
    {
        id: 10,
        title: 'Котлоагрегаты',
        icon: 'src/assets/icons/equipments/10.png',
        link: '/',
    }
    ])
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
                    <a class="flex align-items-center" href="#"> <img src="@/assets/logo.svg" alt="KOREM Logo" class="mr-0 lg:mr-2"/></a>
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

<!--            Электроэнегетика-->
            <CardMain :items="items" :title="'Электроэнегетика'"/>

<!--            аналитика-->
            <div id="container" >
                <div class="grid ">
                    <div class="col-12 text-start mt-4 mb-2">
                        <p id="title">Аналитика</p>
                    </div>


                    <div class="col-12 md:col-6 lg:col-3 p-0 lg:pr-4 lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="@/assets/icons/analytics/1.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">Дэшборд производства электроэнергии</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 lg:col-3 p-0 lg:pr-4 lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="@/assets/icons/analytics/2.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">Дэшборд электропередач</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 lg:col-3 p-0 lg:pr-4 lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="@/assets/icons/analytics/3.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">Техническое состояние энергооборудования энергопреприятий</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 lg:col-3 p-0  lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="@/assets/icons/analytics/4.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">График ремонтов</h5>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-6 lg:col-3 p-0 lg:pr-4 lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="@/assets/icons/analytics/5.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">База кадров</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 lg:col-3 p-0 lg:pr-4 lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="@/assets/icons/analytics/6.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">Показатели АСКУЭ</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 lg:col-3 p-0 lg:pr-4 lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="@/assets/icons/analytics/7.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">Потери электроэнергии</h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 md:col-6 lg:col-3 p-0  lg:pb-5 mt-4 lg:mt-0" style="height: 160px; padding: 2px; border-radius: 10px;">
                        <div class="p-3 surface-card h-full flex" style="border-radius: 8px">
                            <div class="flex align-items-center justify-content-center ml-3">
                                <img alt="" src="@/assets/icons/analytics/8.png"/>
                            </div>
                            <div class="flex align-items-center justify-content-center ml-4">
                                <h5 class=" text-900">Безопасность</h5>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

<!--            База оборудования-->
            <CardMain :items="itemsEquipment" :title="'База оборудования'"/>

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
    background: url('@/assets/ТЭЦ-27 1.png') no-repeat center top;
}

</style>
