<template>
    <div>
        <jobHeader></jobHeader>
        <router-view></router-view>
        <jobFooter></jobFooter>
    </div>
</template>
<script>
import jobHeader from '@/components/job/jobheader.vue'
import jobFooter from '@/components/job/jobfooter.vue'
export default {
    components:{
        jobHeader,
        jobFooter
    }
}
</script>
<style scoped>
    
</style>