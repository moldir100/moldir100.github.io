<script setup>

import InputLabel from "@/components/Vinput.vue";
import {ref} from "vue";

const inputItems = ref([
    {
        id:1,
        type: 'select',
        label: 'Город',
        icon: 'pi pi-fw pi-user',
        items: [
            {
                name: 'Актау'
            },
            {
                name: 'Астана'
            },
            {
                name: 'Алматы'
            }
        ]
    },
    {
        id: 2,
        type: 'input',
        label: 'Телефон',
        style: "lg:w-12 md:w-12 sm:w-100",
        // icon: 'pi pi-fw pi-table',
        to: '/dashboard/profile/digitalPassport/tep'
    },
    {
        id: 3,
        type: 'input',
        label: 'Дата первичной регистрации',
        style: "lg:w-12 md:w-12 sm:w-100",
        icon: 'pi pi-fw pi-envelope',
    },
    {
        id: 4,
        type: 'input',
        label: 'Адрес',
        style: "lg:w-12 md:w-12 sm:w-100",
        icon: 'pi pi-fw pi-envelope',
    },
    {
        id: 5,
        type: 'input',
        label: 'Вид деятельности*',
        style: "lg:w-12 md:w-12 sm:w-100",
        icon: 'pi pi-fw pi-user',
    },
    {
        id:6,
        type: 'select',
        label: 'Оснащение АСКУЭ',
        icon: 'pi pi-fw pi-user',
        style: 'col-2',
        items: [
            {
                name: 'Да'
            },
            {
                name: 'Нет'
            },
        ]
    },
    {
        id:7,
        type: 'select',
        label: 'Оснащение SKADA',
        icon: 'pi pi-fw pi-user',
        style: 'col-2',
        items: [
            {
                name: 'Да'
            },
            {
                name: 'Нет'
            },
        ]
    },
    {
        id: 8,
        type: 'input',
        label: 'БИН*',
        style: "lg:w-12 md:w-12 sm:w-100",
        icon: 'pi pi-fw pi-user',
    },
    {
        id:9,
        type: 'select',
        label: 'Предмет деятельности согласно Устава*',
        icon: 'pi pi-fw pi-user',
        style: 'lg:w-12 md:w-12 sm:w-100',
        items: [
            {
                name: 'Передача и распределение электрической энергии'
            },
            {
                name: 'Передача и распределение электрической энергии'
            },
        ]
    },
    {
        id: 10,
        type: 'input',
        label: 'Климатические условия',
        style: "lg:w-12 md:w-12 sm:w-100",
        icon: 'pi pi-fw pi-user',
    },
]);

</script>


<template>
    <div>
 <!--        паспортные данные-->
        <div class="card">
            <h5>Паспортные данные</h5>
            <div class="grid">
                <div class="col-4" v-for="item in inputItems" :key="item.id">
                    <InputLabel :label="item.label" :type="item.type" :items="item.items" />
                </div>
            </div>
        </div>
<!--        Общие сведения-->
        <div class="grid mx-auto">

<!--            Общие сведения-->
            <div class="card  col-12 lg:col-8" >
                <h5>Общие сведения</h5>
                <div class="grid">
                    <div class="col-12 lg:col-4">
                        <div class="form__group">
                            <label for="">Генеральный директор</label>
                            <input type="text" required placeholder="Бердалин Ерлан Сайранович">
                        </div>
                    </div>
                    <div class="col-12 lg:col-4">
                        <div class="form__group">
                            <label for="">Группа компаний*</label>
                            <input type="text" required placeholder="АО «Астана-Энергия»">
                        </div>
                    </div>
                    <div class="col-12 lg:col-4">
                        <div class="form__group">
                            <label for="">Главный инженер*</label>
                            <input type="text" required placeholder="Пусто">
                        </div>
                    </div>
                </div>
                <div class="grid">
                    <div class="col-12 lg:col-4">
                        <div class="form__group">
                            <label for="">Город*</label>
                            <select name="" id="">
                                <option value="true">Астана</option>
                                <option value="false">Алматы</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 lg:col-4">
                        <div class="form__group">
                            <label for="">Телефон</label>
                            <input type="text" required placeholder="+7 (7172) 620-456">
                        </div>
                    </div>
                    <div class="col-12 lg:col-4">
                        <div class="form__group">
                            <label for="">Дата первичной регистрации</label>
                            <input type="text" required placeholder="Пусто">
                        </div>
                    </div>
                </div>
                <div class="grid">
                    <div class="col-12 lg:col-4">
                        <div class="form__group">
                            <label for="">Адрес*</label>
                            <input type="text" required placeholder="Ул. Домалак-Ана, 9">
                        </div>
                    </div>
                    <div class="col-12 lg:col-4">
                        <div class="form__group">
                            <label for="">Вид деятельности*</label>
                            <select>
                                <option>Энергопередающая организация</option>
                                <option>Энергопередающая 2</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 lg:col-2">
                        <div class="form__group">
                            <label for="">Оснащение АСКУЭ</label>
                            <select name="" id="">
                                <option value="true">Да</option>
                                <option value="false">Нет</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 lg:col-2">
                        <div class="form__group">
                            <label for="">Оснащение SKADA</label>
                            <select name="" id="">
                                <option value="yes">Да</option>
                                <option value="no">Нет</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="grid">
                    <div class="col-12 lg:col-4">
                        <div class="form__group">
                            <div><label for="">БИН</label><span id="required">*</span></div>
                            <input type="text" required placeholder="Бердалин Ерлан Сайранович">
                        </div>
                    </div>
                    <div class="col-12 lg:col-4">
                        <div class="form__group">
                            <div><label for="">Предмет деятельности согласно Устава*</label><span id="required">*</span></div>
                            <select>
                                <option>Передача и распределение электрической энергии</option>
                                <option>Передача и распределение электрической энергии</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-12 lg:col-4">
                        <div class="form__group">
                            <label for="">Климатические условия</label>
                            <input type="text" required placeholder="Пусто">
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12 lg:col-4">
                <div class="grid">

<!--                    Количество подстанций-->
                    <div class="card col-6" style="margin-left: auto">
                        <h6>Количество подстанций</h6>
                        <p>Уровни напряжения, ед </p>

                        <div class="grid justify-content-start">
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="1150 кВ"></div>
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="Пусто"></div>
                        </div>

                        <div class="grid justify-content-start mt-2">
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="1150 кВ"></div>
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="Пусто"></div>
                        </div>

                        <div class="grid justify-content-start mt-2">
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="1150 кВ"></div>
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="Пусто"></div>
                        </div>

                        <div class="grid justify-content-start mt-2">
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="1150 кВ"></div>
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="Пусто"></div>
                        </div>

                        <div class="grid justify-content-start mt-2">
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="1150 кВ"></div>
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="Пусто"></div>
                        </div>

                        <div class="grid justify-content-start mt-2 mb-2">
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="1150 кВ"></div>
                            <div class="col-6"><input style="width: 80px" class="rounded" type="text" disabled placeholder="Пусто"></div>
                        </div>



                    </div>

<!--                    Персонал-->
                    <div class="card col-5" style="margin-left: auto" >
                        <h6>Персонал</h6>
                        <p>Кол-во администртивного персонала</p>
                        <input  class="col-12 rounded" style="height: 16px" type="text" placeholder="40" disabled>
                        <p class="mt-3">Кол-во производственного персонала</p>
                        <input  class="col-12 rounded" style="height: 16px" type="text" placeholder="165" disabled>
                    </div>
                </div>

                <div class="grid m-auto">
                    <div class=" card  mt-2">
                        <div>Протяженность сетей</div>
                        <div class="row">
                            <div class="col-md-6 mt-2 mb-2">
                                КЛ, км
                                <input class="rounded" type="text" disabled>
                            </div>
                            <div class="col-md-6 mt-2 mb-2">
                                ВЛ, км
                                <input class="rounded" type="text" disabled>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--        Вложения-->
        <div class="card">
            <h5>Вложения</h5>
            <div class="col-12 flex flex-column">
                <a href="">Ген.план.pdf</a>
                <a href="">Акт.ремонтных работ.pdf</a>
            </div>
        </div>
    </div>
</template>


<style scoped>
#digitalPassport{
    background: #FFFFFF;
    /* In progress */

    /*border: 1px solid rgba(21, 41, 87, 0.5);*/
    border-radius: 8px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.18));
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
    display: grid;
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