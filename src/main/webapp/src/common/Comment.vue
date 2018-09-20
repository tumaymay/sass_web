<template>
    <div id="comment-inner">
        <h3 class="comment-title">评论</h3>
        <p v-if="CommentList.length==0">暂无评论，我来发表第一篇评论！</p>
        <ul v-else class="list-group comment">
            <li class="list-group-item" v-for="item of CommentList" :key="item.id">
                <!--评论列表-->
                <div class="main-content">
                    <div class="header">
                        <div class="imgName-wrapper">
                            <img src="../assets/tou.jpg" alt="" class="img">
                            <b>{{item.name}}</b>
                        </div> 
                        <span class="time">{{item.time}}</span>
                    </div>
                    
                    <div class="comment-content">
                        {{item.content}}
                    </div>
                    <div class="comment-tool">
                        <div class="dep-zan">
                            <span class="glyphicon glyphicon-heart"></span>
                            赞
                        </div>
                        <div class="dep-reply" @click="handleReply(item.id)">
                            <span class="glyphicon glyphicon-share-alt"></span>
                            回复
                        </div>
                    </div>
                    <!--回复评论1-->
                     <div id="reply-1" >
                        <comment-box></comment-box>
                    </div>
                       
                    
                </div>
                
                <!--评论回复-->
                <div class="reply-content" v-if="item.reply.length>0">
                    <div v-for="reply of item.reply " :key="reply.id">
                        <div class="header">
                            <div class="imgName-wrapper">
                                <img src="../assets/tou.jpg" alt="" class="img">
                                <b>{{reply.reviewers}}    回复    {{reply.responder}}</b>
                        </div>                             
                            <span class="time">{{reply.time}}</span>
                        </div>
                        <div class="comment-content">
                            {{reply.content}}
                        </div>
                        <div class="comment-tool">
                            <div class="dep-zan">
                                <span class="glyphicon glyphicon-heart"></span>
                                赞
                            </div>
                            <div class="dep-reply" @click="handleReply(reply.id)">
                                <span class="glyphicon glyphicon-share-alt"></span>
                                回复
                            </div>
                        </div>

                        <!--回复评论2-->
                        <div id="reply-2">
                            <comment-box></comment-box>
                        </div>
                        

                    </div>    
                </div>
            </li>
        </ul>

        <!--评论区-->
        <comment-box></comment-box>
    </div>  
    
</template>

<script>
import CommentBox from './CommentBox'
export default {
    name:"Comment",
    components:{
        CommentBox,
    },
    data(){
        return{
            
            
        }
    },
    props:{
        CommentList:Array,
        Comments:[]
    },
    methods:{
        handleReply(index){
            var reply1 = document.getElementById("reply-1")
            reply1.style.display="block";
            console.log(index)
        }
        
    }
    
}

</script>

<style scoped>
.comment{
    font-size: 15px;
}
.comment-title{
    background: #eee;
    padding: 10px 0 10px 10px;
    margin-bottom: 0;
    
}

    
    .reply-content{
        margin:10px 0 10px 30px;
    }
     .comment-tool{
                display: flex;
                justify-content: space-between;
                margin:0 80% 0 15px;
                color:#8590a6;
            }
                .dep-zan,.dep-reply{
                    
                    cursor: pointer;
                }
        .time{
            color:#8590a6;
        }
        .header{
            display:flex;
            justify-content: space-between;
        }
        .comment-content,.comment-tool{
            margin-bottom: 10px;
        }
        .header{
            margin-bottom: 5px;
        }
        
        .img{
            width: 24px;
            height: 24px;

        }
        #reply-1,#reply-2{
            display: none;
        }
       

</style>
