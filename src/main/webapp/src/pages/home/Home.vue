<template>
    <div>
        <home-main :depList="depList"
                   :actList="actList" 
                   :clubList="clubList" 
                   :renewList="renewList" 
                   :fireList="fireList" >
        </home-main>
    </div>
</template>

<script>
import HomeMain from './components/Main'

export default {
    name:"Home",
    components:{
        HomeMain,
    },
    data(){
        return{
            depList:[],
            actList:[],
            clubList:[],
            renewList:[],
            fireList:[],
        }
    },
    created(){
        console.log("cr")
    },
    activated(){
        console.log("ac")
    },
    mounted(){
        console.log("mo")
        this.getHomeInfo()
    },
    methods:{
        getHomeInfo(){
            this.$axios.get('api/main.json')
                .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc(res){
            res=res.data
            if(res.ret && res.data){
                this.depList = res.data.depList
                this.actList = res.data.actList
                this.clubList = res.data.clubList
                this.renewList = res.data.renewList
                this.fireList = res.data.fireList
            }
        }
    }
}
</script>

<style scoped>

</style>
