<script setup>
import {ref} from "vue";

const nestedRouteItems = ref([
    {
        label: 'Все',
        to: '/dashboard/profile/digitalPassport/tep'
    },
    {
        label: 'Положительные',
        to: '/dashboard/profile/digitalPassport/tep/positive'
    },
    {
        label: 'Отрицательные',
        to: '/dashboard/profile/digitalPassport/tep/negative'
    },
]);

</script>


<template>
    <div class="card">
        <h5>ТЭП</h5>
        <div class="col-12 lg:col-12">
            <div class="flex flex-row justify-content-between">
                <h5>Технико - экономические показатели</h5>
                <div>
                    <router-link to="">
                        <button class="settings btn" style="margin-right: 10px">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear" viewBox="0 0 16 16">
                                <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                                <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                            </svg>
                        </button>
                    </router-link>

                    <router-link to="">
                        <button  class="seeAll btn btn-outline-secondary">Посметреть все
                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 1.16683L7.33333 7.00016L1.5 12.8335" stroke="#152957" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </router-link>
                </div>
            </div>
            <TabMenu :model="nestedRouteItems" />
            <router-view />
        </div>
    </div>
</template>


<style scoped>
.seeAll{
    background-color: white;
    height: 45px;
    width: 150px;
    box-sizing: border-box;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
}
.settings{
    background-color: white;
    height: 45px;
    width: 45px;
    box-sizing: border-box;
    border: 1px solid #C4C4C4;
    border-radius: 5px;
}

.seeAll:hover, .settings:active{
    color: #fff;
    background-color: #215A96;
    border-color: #215A96;
    /*.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open>.dropdown-toggle.btn-primary {*/
    /*    color: #fff;*/
    /*    background-color: #00b3db;*/
    /*    border-color: #285e8e; !*set the color you want here*!*/
    /*}*/
}
/*passport Details*/
#passportDetails{
    background: #FFFFFF;
    /* In progress */

    /*border: 1px solid rgba(21, 41, 87, 0.5);*/
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

/*passport details*/

.form__group {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

.form__group label {
    font-weight: 700;
    font-size: 14px;
    color: #152957;
    margin-bottom: 10px;
}

.form__group input,
.form__group select {
    background: #F5F5F5;
    border: 1px solid #152957;
    border-radius: 8px;
    width: 100%;
    height: 28px;
    outline: none;
    padding: 0 8px;
}
#required{
    color: red
}
</style>