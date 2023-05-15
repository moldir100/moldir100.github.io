<script>
import {reactive} from "vue";

// const isAbsent = reactive({isAbsent: ''})
export default {
    props: {
        labelName: String
    },
    // setup(props) {
    //     if (props.foo === isAbsent) {
    //         // foo не был указан.
    //     }
    // }
}
</script>


<template>
  <span class="p-float-label mt-3">
      <Calendar v-model="date" inputId="birth_date" showIcon />
      <label for="birth_date">{{ labelName }}</label>
  </span>
</template>


<style scoped>

</style>