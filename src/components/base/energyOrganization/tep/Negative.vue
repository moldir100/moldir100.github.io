<script>
// import {ref} from "vue";

export default {
    name: 'Negative',
    setup(){

    }
}

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
                    <th scope="row">1</th>
                    <td>Потребление электроэнергии на СН</td>
                    <td>540121</td>
                    <td>540222</td>
                    <td>да</td>
                    <td class="decreasing">
                        <div class="flex justify-content-between">
                            <span class="text-end">2022</span>
                            <div class="inline-block">
                                <svg style="margin-left: 15px; color: red;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                                </svg>
                            </div>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>То же в % к выработке электроэнергии</td>
                    <td>54000</td>
                    <td>БКЗ 16-100</td>
                    <td>00002</td>
                    <td class="decreasing">
                        <div class="flex justify-content-between">
                            <span class="text-end">2022</span>
                            <div class="inline-block">
                                <svg style="margin-left: 15px; color: red;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
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
                    <td class="decreasing">
                        <div class="flex justify-content-between">
                            <span class="text-end">2022</span>
                            <div class="inline-block">
                                <svg style="margin-left: 15px; color: red;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
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
                    <td class="decreasing">
                        <div class="flex justify-content-between">
                            <span class="text-end">2022</span>
                            <div class="inline-block">
                                <svg style="margin-left: 15px; color: red;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
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
                    <td class="decreasing">
                        <div class="flex justify-content-between">
                            <span class="text-end">2022</span>
                            <div class="inline-block">
                                <svg style="margin-left: 15px; color: red;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
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
                    <td class="decreasing">
                        <div class="flex justify-content-between">
                            <span class="text-end">2022</span>
                            <div class="inline-block">
                                <svg style="margin-left: 15px; color: red;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
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

tr{
    height: 48px;
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
#seeAll{
    color:#215A96;
}
#seeAll:hover, #seeAll:active{
    color: #fff;
    background-color: #215A96;
    border-color: #215A96;
    /*.btn-primary:hover, .btn-primary:focus, .btn-primary:active, .btn-primary.active, .open>.dropdown-toggle.btn-primary {*/
    /*    color: #fff;*/
    /*    background-color: #00b3db;*/
    /*    border-color: #285e8e; !*set the color you want here*!*/
    /*}*/
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