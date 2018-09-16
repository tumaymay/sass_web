<template>
    <main id="main">
        <div id="main-inner">
            <!--导航部分-->
            <nav id="nav">
                <div id="nav-inner">
                    <ul class="nav nav-tabs nav-stacked nav-border">
                        <router-link to="/message/dep" tag="li" role="presentation"><a href="#">部门快讯</a></router-link>
                        <router-link to="/message/act" tag="li" role="presentation"><a href="#">活动预告</a></router-link>
                        <router-link to="/message/club" tag="li" role="presentation"><a href="#">社团风采</a></router-link>
                        <router-link to="/message/renew" tag="li" role="presentation"><a href="#">组织招新</a></router-link>
                        <router-link to="/message/fire" tag="li" role="presentation"><a href="#">活跃团体</a></router-link>
                    </ul>
                </div>
            </nav>

            <!--主体部分-->
            <div class="content">
                <keep-alive>
                    <router-view/>
                </keep-alive>    
            </div>
        </div>    
    </main>  
</template>

<script>
export default {
    name:"Message",
   
}

</script>

<style scoped>
 #main{
    width:100%;
    height:100%;
    background: #f6f6f6;
    overflow: hidden;
}
    #main-inner{
        margin:10px auto;
        width:1000px;   
    }
    #nav,.content{
        background: #fff;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        float: left;
    }
    #nav{
        width: 200px;
    }
    .content{
        width: 790px;
        padding:16px;
        margin-left: 10px;
    }
    /*清除浮动*/
    #main-inner:after{
        content: " ";
        clear: both;
        display: block;
        overflow: hidden;
        font-size: 0;
        height: 0;
    } 
    #nav-inner{
        padding: 16px;
        font-size: 18px;
        
    }
    .nav-border{
        border-block-end: none;
    }
    a{
        color:black;
        text-decoration: none;
    }
    ul>li{
        padding: 20px 0 0 0;
        border-bottom:1px solid #2BA491;
    }
    
    
</style>
