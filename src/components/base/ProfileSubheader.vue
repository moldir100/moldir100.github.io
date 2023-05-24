<script setup>
import {computed, onMounted, reactive, ref, watch} from "vue";
import {useRoute} from "vue-router";

const route = useRoute()

// const name = 'MyCoolComponent';

let isProfile = ref(false)
let isDigitalPassport = ref(false)

if(route.path === '/dashboard/profile'){
    isProfile = true
    isDigitalPassport = false
}
if(route.path === '/dashboard/profile/digitalPassport'){
    isDigitalPassport = true
    isProfile = false
}

// You can watch the property for triggering some other action on change
watch(() => route.path, () => {
    // Do something here...
    if(route.path === '/dashboard/profile'){
        isProfile = true
        isDigitalPassport = false
    }
    if(route.path === '/dashboard/profile/digitalPassport'){
        isDigitalPassport = true
        isProfile = false
    }
});

// })
</script>


<template>
    <div>
        <p style="display: none">Current route name: {{ route.name }}</p>
        <ul class="menu surface-card m-0 list-none flex overflow-x-auto select-none">
            <li class="pr-3"><router-link to="/dashboard/profile" v-bind:class="{active: isProfile}"
                    class="item cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple text-700"><i
                    class="pi pi-home mr-2"></i><span class="font-medium">Профиль энергопредприятия</span><span class="p-ink"
                                                                                               role="presentation"
                                                                                               aria-hidden="true"></span></router-link>
            </li>
            <li class="flex align-items-center">
                <div class="border-right-1 surface-border" style="width: 1px; height: 50%;"></div>
            </li>
            <li class="px-3"><router-link to=""
                    class="item cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple text-700"><i
                    class="pi pi-users mr-2"></i><span class="font-medium">Нарушения</span><span class="p-ink"
                                                                                               role="presentation"
                                                                                               aria-hidden="true"></span></router-link>
            </li>
            <li class="flex align-items-center">
                <div class="border-right-1 surface-border" style="width: 1px; height: 50%;"></div>
            </li>
            <li class="px-3"><router-link to="/dashboard/profile/digitalPassport" v-bind:class="{active: isDigitalPassport}"
                    class="item cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple text-700"><i
                    class="pi pi-shopping-cart mr-2"></i><span class="font-medium">Цифровой паспорт</span><span class="p-ink"
                                                                                                     role="presentation"
                                                                                                     aria-hidden="true"
                                                                                                     style="height: 109px; width: 109px; top: -18.1001px; left: -22.875px;"></span></router-link>
            </li>
            <li class="flex align-items-center">
                <div class="border-right-1 surface-border" style="width: 1px; height: 50%;"></div>
            </li>
            <li class="px-3"><a
                    class="item cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple text-700"><i
                    class="pi pi-user mr-2"></i><span class="font-medium">Сообщения о ТН</span><span class="p-ink"
                                                                                              role="presentation"
                                                                                              aria-hidden="true"
                                                                                              style="height: 119px; width: 125px; top: -17.1001px; left: -51.525px;"></span></a>
            </li>
            <li class="flex align-items-center">
                <div class="border-right-1 surface-border" style="width: 1px; height: 50%;"></div>
            </li>
            <li class="px-3"><a
                    class="item cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150v text-700"><i
                    class="pi pi-cog mr-2"></i><span class="font-medium">Дэшборд</span><span class="p-ink"
                                                                                              role="presentation"
                                                                                              aria-hidden="true"></span></a>
            </li>
            <li class="flex align-items-center">
                <div class="border-right-1 surface-border" style="width: 1px; height: 50%;"></div>
            </li>
            <li class="px-3"><a
                    class="item cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150v text-700"><i
                    class="pi pi-cog mr-2"></i><span class="font-medium">Настройки</span><span class="p-ink"
                                                                                                       role="presentation"
                                                                                                       aria-hidden="true"></span></a>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.item{
    height: 60px !important;
}
.item:hover{
    background-color: #152957 !important;
}
.item:hover span, .item:hover i{
    color: #FFFFFF;
}
.active{
    /*background-color: #707fc4;*/
    background-color: #364770;
}
.active span, .active i{
    color: #FFFFFF;
}
.flex{
    display: flex;
    justify-content: space-around;
}

.menu{
    padding-bottom: 5px;
    padding-top: 5px;
}
/* width */
.menu::-webkit-scrollbar {
    margin-top: 15px;
    width: 5px;   /* vertical scrollbar width */
    height: 5px;
}

/* Track */
.menu::-webkit-scrollbar-track {
//box-shadow: inset 0 0 5px grey;
    margin-top: 15px;
    border-radius: 10px;
}

/* Handle */
.menu::-webkit-scrollbar-thumb {
    background: #7e808b;
    border-radius: 10px;
    min-height: 50px;
}
</style>