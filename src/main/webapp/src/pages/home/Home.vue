<template>
    <div>
        <home-logo></home-logo>
        <home-header></home-header>
        <home-main></home-main>
    </div>
</template>

<script>
import HomeMain from './components/main'
import HomeLogo from './components/Logo'
import HomeHeader from './components/Header'
export default {
    name:"Home",
    components:{
        HomeLogo,
        HomeHeader,
        HomeMain,
    },
    data(){
        return{

        }
    }
}
</script>

<style scoped>

</style>
