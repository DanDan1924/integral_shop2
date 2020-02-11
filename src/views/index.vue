<template>
    <div class="index">
        <navigator></navigator>
        <tabbar></tabbar> 
    </div>
</template>

<script>
import tabbar from '../components/tabbar.vue'
import navigator from '../components/navigator.vue'

export default {
    name: 'shop-index',
    data() {
        return {
            
        }
    },
    created() {
        // if (this.$route.query.from == 'ucrm') {
        //     this.showHead = true
        // }

        // this.loasList('created')
        // this.loasType()
    },
    methods: {
        
    },
    components: {
        tabbar,
        navigator
    }
}
</script>

<style lang="scss" scoped>

</style>

