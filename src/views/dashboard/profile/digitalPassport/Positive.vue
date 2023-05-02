<script setup>
// import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'

import {ref} from "vue";

const customer3 = ref(null);

</script>


<template>
    <div>
        <div class="table-responsive">
            <table class="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th style="width: 50%">Наименование</th>
                    <th style="width: 200px">Ед. изм.</th>
                    <th style="width: 800px">Факт 2020г</th>
                    <th style="width: 200px">	2021г (План)</th>
                    <th style="width: 1000px">2021г (Факт)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">2</th>
                    <td>То же в % к выработке электроэнергии</td>
                    <td>54000</td>
                    <td>БКЗ 16-100</td>
                    <td>00002</td>
                    <td class="increasing">
                        <div class="flex justify-content-between">
                            <span>2022</span>
                            <div class="inline-block">
                                <svg style="margin-left: 15px; color: green;" font-weight="bold" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up bold" viewBox="0 0 16 16">
                                    <path  fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>на выработку электроэнергии</td>
                    <td>Турб.</td>
                    <td>ПТ-60-90</td>
                    <td>00003</td>
                    <td class="increasing">
                        <div class="flex justify-content-between">
                            <span>2005</span>
                            <div class="inline-block">
                                <svg style="margin-left: 15px; color: green;" font-weight="bold" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up bold" viewBox="0 0 16 16">
                                    <path  fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>то же в %</td>
                    <td>Турб.</td>
                    <td>ПТ-60-90</td>
                    <td>00003</td>
                    <td class="increasing">
                        <div class="flex justify-content-between">
                            <span>2023</span>
                            <div class="inline-block">
                                <svg style="margin-left: 15px; color: green;" font-weight="bold" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up bold" viewBox="0 0 16 16">
                                    <path  fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>на отпуск тепла</td>
                    <td>Турб.</td>
                    <td>ПТ-60-90</td>
                    <td>00003</td>
                    <td class="increasing">
                        <div class="flex justify-content-between">
                            <span>2015</span>
                            <div class="inline-block">
                                <svg style="margin-left: 15px; color: green;" font-weight="bold" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up bold" viewBox="0 0 16 16">
                                    <path  fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>на отпуск тепла</td>
                    <td>Турб.</td>
                    <td>ПТ-60-90</td>
                    <td>00003</td>
                    <td class="increasing">
                        <div class="flex justify-content-between">
                            <span>2019</span>
                            <div class="inline-block">
                                <svg style="margin-left: 15px; color: green;" font-weight="bold" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up bold" viewBox="0 0 16 16">
                                    <path  fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">7</th>
                    <td>удельный расход электроэнергии на отпусктепла</td>
                    <td>Турб.</td>
                    <td>ПТ-60-90</td>
                    <td>00003</td>
                    <td class="increasing">
                        <div class="flex justify-content-between">
                            <span>2017</span>
                            <div class="inline-block">
                                <svg style="margin-left: 15px; color: green;" font-weight="bold" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up bold" viewBox="0 0 16 16">
                                    <path  fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"/>
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<style scoped>
@import 'bootstrap/dist/css/bootstrap.css';
/*import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'*/

tr{
    height: 48px !important;
}
td, th{
    /*align-items: center;*/
    padding: 20px !important;
}
.decreasing span{
    color: red;
    font-weight: 500;
}
.increasing span{
    color: green;
    font-weight: 500;
}

/*oborudovanie*/
.oborud{
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
}
.oborud p{
    width: 510px;
    height: 34px;
    left: 43px;
    top: 53px;

    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 34px;
    display: flex;
    align-items: center;

    color: #C60D00;
}
.oborud table td{
    color: #215A96;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    align-items: center;
}


#current th{
    color: #8285AB;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
}

</style>