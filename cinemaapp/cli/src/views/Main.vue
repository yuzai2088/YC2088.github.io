<template>
    <div>
        <router-view></router-view>
        <!-- <Foot></Foot> -->
        <VFoot></VFoot>
    </div>
</template>


<script>
import Foot from "@/components/Foot.vue"
import VFoot from "@/components/Vfoot.vue"
export default {
    name:'wh1910',
    components:{
        Foot,
        VFoot
    }
}
</script>
