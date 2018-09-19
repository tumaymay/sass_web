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
                        <div class="dep-reply">
                            <span class="glyphicon glyphicon-share-alt"></span>
                            回复
                        </div>
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
                        <div class="comment-tool" v-show="!showReply">
                            <div class="dep-zan">
                                <span class="glyphicon glyphicon-heart"></span>
                                赞
                            </div>
                            <div class="dep-reply" @click="showReply=!showReply">
                                <span class="glyphicon glyphicon-share-alt"></span>
                                回复
                            </div>
                        </div>
                        <!--回复评论-->
                        <div class="my-comment" v-show="showReply">
                            <input type="text" class="comment-input form-control" placeholder="发表你的评论" v-model="commentText"/>
                            <button class="btn btn-primary comment-submit"  >评论</button>
                        </div>
                    </div>    
                </div>
            </li>
        </ul>
        <div class="my-comment">
            <textarea name="comment-input" id="comment-input" class="comment-input"></textarea>
            <div class="submit-cancel">
                <button class="btn btn-default comment-submit"  >取消</button>
                <button class="btn btn-primary comment-submit"  @click="seecontent()">评论</button>
                
            </div>
            
        </div>
    </div>  
    
</template>

<script>
export default {
    name:"Comment",
    data(){
        return{
            showReply:false,
            commentText:"",
        }
    },
    props:{
        CommentList:Array,
        Comments:[]
    },
    methods:{
        seecontent(){
            var content = document.getElementById("comment-input")
            console.log(content.text)
        }
    }
    
}

</script>

<style scoped>
.comment{
    font-size: 16px;
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
        .comment-input{
            box-sizing: content-box;
            display: inline-block;
            width:100%;
            line-height: 35px;
            height: 35px;
            padding: 1px 5px;
            margin-right: 16px;

            /*隐藏多行文本框的滚动条*/
            overflow: hidden;
        }

</style>
