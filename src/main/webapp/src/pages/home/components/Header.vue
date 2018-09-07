<template>
    <div class="head-1">
        <div class="head-2">
            <ul class="nav nav-tabs nav-justified">
                <li role="presentation" class="active"><a href="#">首页</a></li>
                <li role="presentation"><a href="#">组织资讯</a></li>
                <li role="presentation"><a href="#">组织检索</a></li>
                <li role="presentation"><a href="#">交流社区</a></li>
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
    }
}

</script>

<style scoped>
    .head-1{
        width: 100%;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
    }
        .head-2{
            width: 1000px;
            margin: 0 auto;
            font-size: 18px;
        }
        a {
                color:black;
                text-decoration: none;
            }
</style>
