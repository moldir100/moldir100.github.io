<script setup>
const props = defineProps({
    items: Array,
    title: String,
})

</script>


<template>
  <!--            электроэнергетика-->
    <div id="container" class="">
        <div class="grid justify-content-center">
            <div class="col-12 text-start mt-4 mb-2">
                <p id="title">{{title}}</p>
            </div>
            <div class="card">
                <div class="grid">
                    <div v-for="item in items" :key="item" class="col-12 lg:col-2  sm:col-5 mx-2 lg:mx-4 mb-5 text-center">
                        <router-link :to="item.link">
                                <span class="p-3 inline-block surface-card">
                                    <img alt="icon" :src="item.icon"/>
                                </span>
                        <p>{{ item.title }}</p>
                        </router-link>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>


<style scoped>
#title{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 630;
    font-size: 26px;
    color: #232859;
}


.card{
    background: #FFFFFF;
    border-radius: 10px;
    border: none;
}
.card p{
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 560;
    font-size: 16px;
    line-height: 16px;
    color: #232859;
    overflow: hidden;
    text-overflow: ellipsis;
}

#hat {
    background: red;
    width: 50px;
    height: 50px;
    position: absolute;
    /*right: 0;*/
    /*top: 0;*/
    transform: translate(40%,50%);
    z-index: 1;
}

</style>