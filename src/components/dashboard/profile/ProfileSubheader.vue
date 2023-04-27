<script setup>
</script>


<template>
    <div>
        <ul class="surface-card m-0 list-none flex overflow-x-auto select-none">
            <li class="pr-3"><router-link to=""
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
            <li class="px-3"><a
                    class="item cursor-pointer px-4 py-3 flex align-items-center hover:surface-100 border-round transition-colors transition-duration-150 p-ripple text-700"><i
                    class="pi pi-shopping-cart mr-2"></i><span class="font-medium">Цифровой паспорт</span><span class="p-ink"
                                                                                                     role="presentation"
                                                                                                     aria-hidden="true"
                                                                                                     style="height: 109px; width: 109px; top: -18.1001px; left: -22.875px;"></span></a>
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
.flex{
    display: flex;
    justify-content: space-around;
}
</style>