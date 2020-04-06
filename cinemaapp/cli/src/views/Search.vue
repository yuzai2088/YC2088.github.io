<template>
    <div>
        <Head title="搜索" :show="true"  :search="true" ></Head>
        <van-search placeholder="请输入关键字" v-model="keyword" />
    </div>
</template>

<script>
export default {
    data(){
        return {
            keyword:'1910'
        }
    }
}
</script>
