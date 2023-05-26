<script>
import {onMounted, ref} from "vue";
import InputLabel from "@/components/UI/Vinput.vue";

export default {
    name: 'Tep',
    components: {InputLabel},
    setup() {
        let negativeTable = ref([])
        let nestedRouteItems = ref([
            {
                label: 'Все',
                to: '/profile/digitalPassport/tep'
            },
            {
                label: 'Положительные',
                to: '/profile/digitalPassport/tep/positive'
            },
            {
                label: 'Отрицательные',
                to: '/profile/digitalPassport/tep/negative'
            },
        ]);

        const getNegativeTable = async () => {
            negativeTable = fetch(`http://localhost:3000/negative`)
        }
        console.log("uigbeh")

        onMounted(getNegativeTable)

        return {
            nestedRouteItems,
            getNegativeTable,
        }
    }
}

</script>


<template>
    <div class="grid pt-3 pr-3">
        <div class="card ">
            <h5>Технико - экономические показатели</h5>

            <TabMenu :model="nestedRouteItems" />
            <router-view />

            <div class="grid">
                <div class="col-4" v-for="item in inputItemsPassport" :key="item.id">
                    <InputLabel :label="item.label" :type="item.type" :items="item.items" />
                </div>
            </div>
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