<script setup>
import {useLayout} from '@/layout/composables/layout';
import {computed, ref} from 'vue';
import AppConfig from '@/layout/AppConfig.vue';

const {layoutConfig} = useLayout();

const smoothScroll = (id) => {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
};

const logoUrl = computed(() => {
    return `layout/images/${layoutConfig.darkTheme.value ? 'logo-white' : 'logo-dark'}.svg`;
});


</script>


<template>
    <div class="surface-0 flex justify-content-center">
        <div id="home" class="landing-wrapper overflow-hidden" style="background-color: #F8F9FA">
            <div class="bg-white px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static " style="height: 60px">
                <a class="flex align-items-center" href="#"> <img src="src/assets/logo.svg" alt="KOREM Logo" class="mr-0 lg:mr-2"/></a>
                <div class="align-items-end surface-0  justify-content-end sm:flex sm:static  lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 ">
                    <div class="">
                        <Button label="Войти"
                                class="p-button-rounded border-none ml-5 font-light text-white line-height-2 bg-blue-500"></Button>
                    </div>
                </div>
            </div>


            <!--            <div id="tekst_sverhu_kartinki" class="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-center relative lg:static">-->
            <div id="tekst_sverhu_kartinki" class="grid justify-content-center align-items-end mt-1">
                <img src="src/assets/ТЭЦ-27%201.png" alt="" width=""/>
<!--                <div class="tekst_sverhu_kartinki_1">-->
<!--                    <span>Платформа энергетики</span>-->
<!--                </div>-->
            </div>

            <!--            Электроэнергетика-->
            <div id="features" class="py-4 px-4 lg:px-8 mx-0 lg:mx-8">
                <div class="grid justify-content-center">
                    <div class="col-12 text-start mt-3">
                        <h2 class="text-900 font-normal">Электроэнергетика</h2>
                        <!--                        <span class="text-600 text-2xl">Placerat in egestas erat...</span>-->
                    </div>

                    <div class="surface-section px-4 py-8 md:px-6 lg:px-8 text-center">
                        <div class="grid justify-content-center">
                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">Кабинет Энергопредприятия</div>
                            </div>
                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">Кабинет потребителя</div>
                            </div>
                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">Кабинет Гос.органа</div>
                            </div>
                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">Кабинет Системного оператора</div>
                            </div>
                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">Кабинет ЭСО</div>
                            </div>

                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">Cloud ЭСО “Смена поставщика э/э”</div>
                            </div>
                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">Тариф</div>
                            </div>
                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">Согласование планов ремонтов</div>
                            </div>
                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">Карта ВИЭ</div>
                            </div>
                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">Карта линии электропередач и подстанций</div>
                            </div>

                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">Карта Гидропотенциала</div>
                            </div>
                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">Цифровая карта генерации</div>
                            </div>
                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">НПА</div>
                            </div>
                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">База Энергетик. Инвест программы</div>
                            </div>
                            <div class="col-12 md:col-2 mx-4 mb-5 px-5">
                                <span class="p-3 shadow-2 mb-3 inline-block surface-card" style="border-radius: 10px">
                                    <i class="pi pi-desktop text-4xl text-blue-500"></i>
                                </span>
                                <div class="text-900 mb-3 font-medium">ТОиР</div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>


<!--            аналитика-->
            <div id="features" class="py-4 px-4 lg:px-8  mx-0 lg:mx-8">
                <div class="grid justify-content-center">
                    <div class="col-12 text-start ">
                        <h2 class="text-900 font-normal mb-2">Аналитика</h2>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                                style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(187, 199, 205, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-yellow-200 mb-3"
                                     style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-users text-2xl text-yellow-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">Easy to Use</h5>
                                <span class="text-600">Posuere morbi leo urna molestie.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                                style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-cyan-200 mb-3"
                                     style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-palette text-2xl text-cyan-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">Fresh Design</h5>
                                <span class="text-600">Semper risus in hendrerit.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                        <div
                                style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-indigo-200"
                                     style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-map text-2xl text-indigo-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">Well Documented</h5>
                                <span class="text-600">Non arcu risus quis varius quam quisque.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                                style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(145, 210, 204, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-bluegray-200 mb-3"
                                     style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-id-card text-2xl text-bluegray-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">Responsive Layout</h5>
                                <span class="text-600">Nulla malesuada pellentesque elit.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 lg:pb-5 mt-4 lg:mt-0">
                        <div
                                style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(187, 199, 205, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(145, 226, 237, 0.2), rgba(160, 210, 250, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-orange-200 mb-3"
                                     style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-star text-2xl text-orange-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">Clean Code</h5>
                                <span class="text-600">Condimentum lacinia quis vel eros.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pb-5 mt-4 lg:mt-0">
                        <div
                                style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(251, 199, 145, 0.2), rgba(246, 158, 188, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(212, 162, 221, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-pink-200 mb-3"
                                     style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-moon text-2xl text-pink-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">Dark Mode</h5>
                                <span class="text-600">Convallis tellus id interdum velit laoreet.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
                        <div
                                style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-teal-200 mb-3"
                                     style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-shopping-cart text-2xl text-teal-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">Ready to Use</h5>
                                <span class="text-600">Mauris sit amet massa vitae.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg:pr-5 mt-4 lg:mt-0">
                        <div
                                style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-blue-200 mb-3"
                                     style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-globe text-2xl text-blue-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">Modern Practices</h5>
                                <span class="text-600">Elementum nibh tellus molestie nunc non.</span>
                            </div>
                        </div>
                    </div>

                    <div class="col-12 md:col-12 lg:col-4 p-0 lg-4 mt-4 lg:mt-0">
                        <div
                                style="height: 160px; padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(160, 210, 250, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(246, 158, 188, 0.2), rgba(212, 162, 221, 0.2))"
                        >
                            <div class="p-3 surface-card h-full" style="border-radius: 8px">
                                <div class="flex align-items-center justify-content-center bg-purple-200 mb-3"
                                     style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                                    <i class="pi pi-fw pi-eye text-2xl text-purple-700"></i>
                                </div>
                                <h5 class="mb-2 text-900">Privacy</h5>
                                <span class="text-600">Neque egestas congue quisque.</span>
                            </div>
                        </div>
                    </div>

                    <div
                            class="col-12 mt-8 mb-8 p-2 md:p-8"
                            style="border-radius: 20px; background: linear-gradient(0deg, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #efe1af 0%, #c3dcfa 100%)"
                    >
                        <div class="flex flex-column justify-content-center align-items-center text-center px-3 py-3 md:py-0">
                            <h3 class="text-gray-900 mb-2">Joséphine Miller</h3>
                            <span class="text-gray-600 text-2xl">Peak Interactive</span>
                            <p class="text-gray-900 sm:line-height-2 md:line-height-4 text-2xl mt-4"
                               style="max-width: 800px">
                                “Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                                officia deserunt mollit anim id est laborum.”
                            </p>
                            <img src="/demo/images/landing/peak-logo.svg" class="mt-4" alt="Company logo"/>
                        </div>
                    </div>
                </div>
            </div>


            <div class="py-4 px-4 mx-0 mt-8 lg:mx-8">
                <div class="grid justify-content-between">
                    <div class="col-12 md:col-2" style="margin-top: -1.5rem">
                        <a @click="smoothScroll('#home')"
                           class="flex flex-wrap align-items-center justify-content-center md:justify-content-start md:mb-0 mb-3 cursor-pointer">
                            <img src="src/assets/10Adaptive5%201.svg" alt="footer sections" width="150" height="60" class="ml-5"/>
<!--                            <h4 class="font-medium text-3xl text-900">SAKAI</h4>-->
                        </a>
                    </div>

                    <div class="col-12 md:col-10 lg:col-7">
                        <div class="grid text-center md:text-left">
                            <div class="col-12 md:col-3">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Company</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">About Us</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">News</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Investor
                                    Relations</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Careers</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Media Kit</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Resources</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Get Started</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Learn</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Case Studies</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Community</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Discord</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Events<img
                                        src="/demo/images/landing/new-badge.svg" class="ml-2"/></a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">FAQ</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Blog</a>
                            </div>

                            <div class="col-12 md:col-3 mt-4 md:mt-0">
                                <h4 class="font-medium text-2xl line-height-3 mb-3 text-900">Legal</h4>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Brand Policy</a>
                                <a class="line-height-3 text-xl block cursor-pointer mb-2 text-700">Privacy Policy</a>
                                <a class="line-height-3 text-xl block cursor-pointer text-700">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <AppConfig simple/>
</template>

<style scoped>
#tekst_sverhu_kartinki {

    /*position: relative;*/

}

.tekst_sverhu_kartinki_1 {

    position: absolute;

    /*bottom: 10%;*/

    text-transform: uppercase;
    text-align: start;
    align-items: center;
    color: white;
    padding-top: 50px;

    height: 150px;
    width: 1200px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(140, 222, 121, 0.73) 100%);
    /*background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(137, 217, 118, 0.73) 100%);*/

    border-radius: 0px 0px 10px 10px;
    /*background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(160, 175, 151, 0.7) 100%);*/
    /*background: linear-gradient(353.8deg, rgba(21, 25, 29, 0.68) 3.95%, rgba(0, 0, 0, 0.679426) 3.96%, rgba(0, 0, 0, 0.679567) 8.91%, rgba(0, 0, 0, 0.679645) 14.15%, rgba(0, 0, 0, 0.679559) 18.95%, rgba(34, 38, 41, 0.6052) 30.75%, rgba(44, 56, 67, 0) 44.52%);*/


}

.tekst_sverhu_kartinki_1 span {

    font: bold 24px/44px Helvetica, Sans-Serif;

    /*background: #00000094;*/

    padding: 100px;

}


/*#hero {*/
/*    background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #eeefaf 0%, #c3e3fa 100%);*/
/*    height: 700px;*/
/*    overflow: hidden;*/
/*}*/

/*@media screen and (min-width: 768px) {*/
/*    #hero {*/
/*        -webkit-clip-path: ellipse(150% 87% at 93% 13%);*/
/*        clip-path: ellipse(150% 87% at 93% 13%);*/
/*        height: 530px;*/
/*    }*/
/*}*/

/*@media screen and (min-width: 1300px) {*/
/*    #hero > img {*/
/*        position: absolute;*/
/*    }*/

/*    #hero > div > p {*/
/*        max-width: 450px;*/
/*    }*/
/*}*/

/*@media screen and (max-width: 1300px) {*/
/*    #hero {*/
/*        height: 600px;*/
/*    }*/

/*    #hero > img {*/
/*        position: static;*/
/*        transform: scale(1);*/
/*        margin-left: auto;*/
/*    }*/

/*    #hero > div {*/
/*        width: 100%;*/
/*    }*/

/*    #hero > div > p {*/
/*        width: 100%;*/
/*        max-width: 100%;*/
/*    }*/
/*}*/
</style>
