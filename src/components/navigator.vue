
<template>
    <div class="navBar">
        <span class="back"><img src="../assets/images/fh.png" alt="返回"></span>
        <span></span>
    </div>
</template>
<script>

export default {
    name: 'navigator',
    props:{
        // active:Number
    },
    data(){
        return{
            active:0
        }
    },
    beforeMount() {
        if (this.$route.name == 'shop-index') {
            this.active = 0
        }else if(this.$route.name == 'shop-my') {
            this.active = 1
        }
    },    

};
</script>
<style lang="less" scoped>
.navBar{
    height: 88rem;
    background-color: #fff;
    .back{
        width: 44rem;
        height: 44rem;
    }
}
</style>