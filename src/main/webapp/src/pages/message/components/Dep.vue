<template>
    <div>
        <div class="dep">
            <div class="dep-body">
                <ul class="list-group list-group-dep" v-for="item of depList" :key="item.id">
                    <li class="list-group-item list-group-item-dep border-bottom">
                        
                        <div class="media">
                            <div class="media-left media-top">
                                <a href="#">
                                <img class="media-object" :src="item.img" alt="...">
                                </a>
                            </div>
                            <div class="media-body">
                                <h4 class="media-heading">{{item.title}}</h4>
                                <div class="dep-author">
                                    <span class="glyphicon glyphicon-user"></span>
                                    发布者-{{item.author}}
                                </div>
                                <a id="dep-text" href="#">
                                    {{item.text}}
                                </a>
                            </div>
                            </div>
                    </li>    
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"MessageDep",
     data(){
        return{
            depList:[],
        }
    },
    activated(){
        this.getMessageInfo()
    },
    methods:{
        getMessageInfo(){
            this.$axios.get('api/main.json')
                .then(this.getMessageInfoSucc)
        },
        getMessageInfoSucc(res){
            res=res.data
            if(res.ret && res.data){
                this.depList = res.data.depList
            }
        }
    }
}

</script>
    
<style scoped>
 .dep,{
            margin-bottom: 10px;
            float: left;
            box-shadow: 0 1px 3px rgba(26,26,26,.1);
            padding-left:16px;
            position: relative;
        }
 #dep-text{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 5;
                    overflow: hidden;
                    height: 100px;
                    line-height: 20px;
                    position: relative;
            }
            #dep-text:hover{
                color: #A44624;
            }
            .dep-author{
                color: grey;
                text-align: right;
                font-size: 14px;
            }
.list-group-dep{
                   margin-right: 16px;
                   margin-bottom: 0%;
               }
               .list-group-item-dep{
                   margin-bottom: 100px;
               }
 .media-object{
                width: 110px;
                height: 84px;
            }
            .media-heading{
                font-weight:bolder;
                width: 60%;
            }
           a {
                color:black;
                text-decoration: none;
            }
    
</style>
