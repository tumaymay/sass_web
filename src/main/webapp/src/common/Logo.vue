<template>
    <div class="logo-container">
        <div class="logo">
            <img src="../assets/banner.png" alt="" class="banner">
            <!--<div class="title">
                <h1 class="inner-title">
                大学生组织交流网
                </h1>
            </div> -->
              
        </div>
        
    </div>
</template>

<script>
export default {
    name:"HomeLogo",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.logo-container{
    width: 100%;
    height:150px;
    overflow: hidden;
     position: relative;
    
   
    

    
}

    .logo{
        width:100%;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        margin-top: -120px;
       
        
        
    }
        .inner-title{
            width: 400px;
            height:58px;
            color:#fff;
            /*text-shadow:2px 2px 6px rgb(73, 73, 73); */   
            position: absolute;
            bottom:0;
            top: 0;
            left: 0;
            right: 0;
            margin: auto 30px;
            
        }
</style>
