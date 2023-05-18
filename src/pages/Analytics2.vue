<template>
    <div class="grid">
        <div class="col-12">
            <div class="card">
                <h5>Аналитика</h5>
                <p>Use this page to show analytics</p>
                <iframe title="Report Section" id="myIframe" src="https://app.powerbi.com/view?r=eyJrIjoiOTU0NGNhZTctMDk3OC00ZWM0LWJhOTUtYWYwZTdlNjA4YjgyIiwidCI6IjM0N2ZkODlmLTY5NmEtNDljYS05ZjhiLTk3MjRmNTc1MDQ3MSIsImMiOjl9" frameborder="0" allowFullScreen="true" scrolling="no"></iframe>

            </div>
        </div>
    </div>
</template>
<script setup>
</script>

<style lang="scss" scoped>

//.wrap {
//    display: inline-block;
//    justify-content: center;
//    /*width: 100%;*/
//    /*height: 950px;*/
//    /*overflow: hidden;*/
//}
//
iframe {
    margin-top: -240px !important;
    margin-left: -510px;
    //margin: auto;
    width: 170% !important;
    height: 1400px !important;
    /*-webkit-transform: scale(0.6);*/
    transform: scale(0.6);
    /*-webkit-transform-origin: 0 0;*/
    /*transform-origin: 0 0;*/
    background-image: url('https://f.hubspotusercontent40.net/hubfs/5621549/simple-preloader-gif.gif');
    background-size: 200px 200px;
    background-repeat: no-repeat;
    background-position: center;
}
</style>