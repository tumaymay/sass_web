<template>
    <div id="wrapper">
        <div class="dep">
            <div class="dep-content" :class="{bodyHeight:isShow}" ref="bodyFont">
                <h4 class="dep-heading">互联网嘉年华大赛圆满落幕</h4>
                <div class="dep-author">
                    <span class="glyphicon glyphicon-user"></span>
                    互联网系学习部
                </div>
                <img src="../../../assets/pic.jpg" alt="...">
                <a id="dep-text" href="#">
                    <p>
                        互联网嘉年华大赛圆满落幕
                    </p>
                    <p>
                        互联网嘉年华大赛圆满落幕
                    </p>
                    <p>
                        互联网嘉年华大赛圆满落幕
                    </p>
                    <p>
                        互联网嘉年华大赛圆满落幕
                    </p>
                    <p>
                        互联网嘉年华大赛圆满落幕
                    </p>
                    <p>
                        互联网嘉年华大赛圆满落幕
                    </p>
                    <p>
                        互联网嘉年华大赛圆满落幕
                    </p>
                    <p>
                        互联网嘉年华大赛圆满落幕
                    </p>
                    <p>
                        互联网嘉年华大赛圆满落幕
                    </p>
                    <p>
                        互联网嘉年华大赛圆满落幕
                    </p>        
                </a>
            </div>
            <div class="dep-footer">
                <div class="dep-left">
                    <div class="dep-zan" @click="zanCount++">
                        <span class="glyphicon glyphicon-heart"></span>
                        赞{{zanCount}}
                    </div>
                    <div class="dep-discuss" @click="showComment=!showComment">
                        <span class="glyphicon glyphicon-info-sign"></span>
                        评论
                    </div>
                    <div class="dep-reader">
                        <span class="glyphicon glyphicon-eye-open"></span>
                        阅读量{{readCount}}
                    </div>
                </div>
                <div class="dep-right">
                    <button class="read-all" id="read-all" @click="changeHeight()">
                        阅读全文
                        <span class="glyphicon glyphicon-menu-down"></span>
                    </button>
                </div>
                
            </div>
            <div class="dep-comment" v-show="showComment">
                <dep-comment :CommentList="depCommentList"></dep-comment>
            </div>
        </div>
    </div>
</template>

<script>
import DepComment from '../../../common/Comment'
export default {
    name:"MessageDep",
    components:{
        DepComment,
    },
     data(){
        return{
            depList:[],
            isShow:false,
            curHeight:0,
            bodyHeight:400,
            zanCount:0,
            readCount:0,
            depCommentList:[],
            showComment:false,
        }
    },
    activated(){
        this.getMessageInfo()
        this.getDepCommentInfo()
    },
    mounted(){
        setTimeout(()=>{
          this.contentToggle();
        },100)
    },
    methods:{
        //获取页面文章信息
        getMessageInfo(){
            this.$axios.get('api/main.json')
                .then(this.getMessageInfoSucc)
        },
        getMessageInfoSucc(res){
            res=res.data
            if(res.ret && res.data){
                this.depList = res.data.depList
            }
        },

        //获取评论信息
        getDepCommentInfo(){
            this.$axios.get('api/depComment.json')
                .then(this.getDepCommentInfoSucc)
        },
        getDepCommentInfoSucc(res){
            res=res.data
            if(res.ret && res.data){
                this.depCommentList = res.data.depCommentList
            }
        },
        
        //添加样式形成卷帘效果
        contentToggle(){
        this.curHeight=this.$refs.bodyFont.offsetHeight;//获取文章实际高度
        if(this.curHeight>this.bodyHeight){
          this.isShow=true;
        }else{
          this.isShow=false;
        }
      },

      //阅读全文——>收起效果
      changeHeight(){
          var readAll= document.getElementById("read-all")
          var readAllContent= readAll.innerHTML
          if(readAllContent.indexOf("阅读全文")>0 && this.isShow){              
              readAllContent="收起"
              this.isShow=false
              console.log(readAllContent)
          }
          else{
              readAllContent="阅读全文"
              this.isShow=true
          }
      }


    }
}

</script>
    
<style scoped>

 .dep{
        background: #fff;
        margin-bottom: 10px;
        float: left;
        box-shadow: 0 1px 3px rgba(26,26,26,.1);
        padding:16px;
        position: relative;
        }
        .dep-content{
            height:auto;
            max-height: 100%;
            overflow: hidden;   
        }
        .bodyHeight{
            height: 400px;
        }
        .dep-footer{
            display: flex;
            justify-content: space-between;
            margin: 20px 16px;
            font-size: 16px;
            color:#8590a6;
        }
            .dep-left{
                display: flex;
                justify-content: space-between;

            }
                .dep-zan,.dep-discuss,.dep-reader{
                    padding-right:50px;
                    cursor: pointer;
                }
            .read-all{
                background: transparent;
                border: none;
                outline: none;
            }
        /*数据库获取到富文本编辑器内容后删除 */
        
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
                        height: 144px;
                    }
                    .media-heading{
                        font-weight:bolder;
                        width: 60%;
                    }
                a {
                    color:black;
                    text-decoration: none;
                }
                .all-text{
                    text-align: right;
                }
           
                


</style>
