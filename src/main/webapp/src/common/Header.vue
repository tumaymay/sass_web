<template>
    <div id="head">
        <div class="head-inner">
            <ul class="nav nav-tabs nav-justified">
                <router-link to="/" tag="li" role="presentation"><a href="#">首页</a></router-link>
                <router-link to="/message" tag="li" role="presentation"><a href="#">组织资讯</a></router-link>
                <router-link to="/search" tag="li" role="presentation"><a href="#">组织检索</a></router-link>
                <router-link to="/community" tag="li" role="presentation"><a href="#">交流社区</a></router-link>
            </ul>
        </div>
    
    </div>  
    
</template>

<script>
export default {
    name:"HomeHeader",
    data(){
        return{

        }
    },
    mounted(){
      window.addEventListener('scroll',this.handleScroll)
    },
    methods:{
      handleScroll(){
        const Top= document.documentElement.scrollTop //获取滚动高度
        var header= document.getElementById('head')  //获取导航元素
        //const topHeight = header.offsetTop           //获取元素距离文档顶部的高度
        const headHeight = header.offsetHeight    //获取导航的高度
        var mainer= document.getElementById('main')  //获取主题元素
        //console.log(topHeight)
        console.log(Top)
        //console.log(headHeight)
        if(Top>150){
            console.log(mainer)
            header.style.position = 'fixed'
            header.style.top = '0'
            header.style.zIndex = '9999'
            mainer.className =  "changeMargin" 
        }
        else{
            header.style.position = 'static'
            mainer.className =  ""
        }
      }
    }
}

</script>

<style scoped>
    #head{
        width: 100%;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        /*position: fixed;
        top:0%;
        left: 0%;
        z-index: 999;*/
        background: #fff;
        
    }
        .head-inner{
            width: 1000px;
            margin: 0 auto;
            font-size: 18px;
        }
        a{
            color:black;
            text-decoration: none;
            }
</style>
