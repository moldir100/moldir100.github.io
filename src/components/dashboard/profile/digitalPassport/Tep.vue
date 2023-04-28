<script setup>

</script>


<template>
    <div>
        <h5>ТЭП</h5>
        <div class="container mt-3">
            <div class="flex flex-row">
                <div class="col-4">
                    <div class="form__group">
                        <label for="">Генеральный директор</label>
                        <input type="text" required placeholder="Бердалин Ерлан Сайранович">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form__group">
                        <label for="">Группа компании*</label>
                        <input type="text" required placeholder="Пусто">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form__group">
                        <label for="">Главный инженер*</label>
                        <input type="text" required placeholder="Пусто">
                    </div>
                </div>
            </div>
            <div class="flex flex-row">
                <div class="col-4">
                    <div class="form__group">
                        <label for="">Город*</label>
                        <select name="" id="">
                            <option value="true">Астана</option>
                            <option value="false">Алматы</option>
                        </select>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form__group">
                        <label for="">Телефон</label>
                        <input type="text" required placeholder="+7 (7172) 620-456">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form__group">
                        <label for="">Дата первичной регистрации</label>
                        <input type="text" required placeholder="Пусто">
                    </div>
                </div>
            </div>
            <div class="flex flex-row">
                <div class="col-4">
                    <div class="form__group">
                        <label for="">Адрес*</label>
                        <input type="text" required placeholder="Ул. Домалак-Ана, 9">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form__group">
                        <label for="">Вид деятельности*</label>
                        <select>
                            <option>Энергопроизводящая организация</option>
                            <option>Энергопередающая организация</option>
                            <option>Энергоснабжающая организация</option>
                        </select>
                    </div>
                </div>
                <div class="col-2">
                    <div class="form__group">
                        <label for="">Оснащение АСКУЭ</label>
                        <select name="" id="">
                            <option value="true">Да</option>
                            <option value="false">Нет</option>
                        </select>
                    </div>
                </div>
                <div class="col-2">
                    <div class="form__group">
                        <label for="">Оснащение SKADA</label>
                        <select name="" id="">
                            <option value="yes">Да</option>
                            <option value="no">Нет</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="flex flex-row">
                <div class="col-4">
                    <div class="form__group">
                        <label for="">БИН*</label>
                        <input type="text" required placeholder="Бердалин Ерлан Сайранович">
                    </div>
                </div>
                <div class="col-4">
                    <div class="form__group">
                        <label for="">Предмет деятельности согласно Устава*</label>
                        <select>
                            <option>Передача и распределение электрической энергии</option>
                            <option>Передача и распределение электрической энергии</option>
                        </select>
                    </div>
                </div>
                <div class="col-4">
                    <div class="form__group">
                        <label for="">Климатические условия</label>
                        <input type="text" required placeholder="Пусто">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

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