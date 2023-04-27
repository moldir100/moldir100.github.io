<template>
    <div className="grid">
        <div className="col-12">
            <div className="card">
                <h5>Аналитика</h5>
                <p>Use this page to show analytics.</p>
                <iframe height="910px" width="100%" class="responsive-iframe" id="myIframe"  title="Report Section" src="https://app.powerbi.com/view?r=eyJrIjoiMTY3ZmU2NTYtNzRhZS00NzJiLTg2MWUtOGQ5ODliMTRhOWIyIiwidCI6IjM0N2ZkODlmLTY5NmEtNDljYS05ZjhiLTk3MjRmNTc1MDQ3MSIsImMiOjl9" frameborder="0" allowFullScreen></iframe>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>

<style lang="scss">
//.wrap {
//    display: inline-block;
//    justify-content: center;
//    /*width: 100%;*/
//    /*height: 950px;*/
//    /*overflow: hidden;*/
//}
//
iframe {
    margin-top: -200px !important;
    margin-left: -250px;
    width: 135% !important;
    height: 1400px !important;
    /*-webkit-transform: scale(0.6);*/
    transform: scale(0.7);
    /*-webkit-transform-origin: 0 0;*/
    /*transform-origin: 0 0;*/
    background-image: url('https://f.hubspotusercontent40.net/hubfs/5621549/simple-preloader-gif.gif');
    background-size: 200px 200px;
    background-repeat: no-repeat;
    background-position: center;
}
</style>