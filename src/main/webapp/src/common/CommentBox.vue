<template>
    <div id="my-comment">
            <textarea name="comment-input" 
                      id="comment-input" 
                      class="comment-input"
                      placeholder="发表你的评论" 
                      v-on:keyup="handleTextAreaHeight()"
                      v-model="commentText">
            </textarea>
            <div class="submit-cancel">
                <button class="btn btn-default comment-cancel"  >取消</button>
                <button class="btn btn-primary comment-submit"  @click="seecontent()">评论</button>  
            </div>
        </div>
</template>

<script>
export default {
    name:"CommentBox",
    data(){
        return{
            commentText:"",
        }
    },
    methods:{

        //设置文本框自动折行增加高度效果
        handleTextAreaHeight(){
            var commentInput = document.getElementById("comment-input")

            //通过检测用户回车键，计算用户在第几行输入文字
            var currentEnterCount = commentInput.value.split("\n").length
            
            //获取css里面设置的行高
            var lineHeight=window.getComputedStyle(commentInput,null).getPropertyValue('line-height')
            var lineHeightNum = Number(lineHeight.replace("px", ""))
            console.log('line-height:'+typeof(lineHeightNum)+lineHeightNum)

            //获取css里面设置的高
            var height =  window.getComputedStyle(commentInput,null).getPropertyValue('height')
            var HeightNum = Number(height.replace("px", ""))
            //console.log('height:'+typeof(HeightNum)+HeightNum)

            //获取enterCount属性值
            var enterCount = commentInput.getAttribute("enterCount")
            //console.log("当前回车数："+currentEnterCount)
            //console.log("回车数："+enterCount)

            //当行数大于回车数时，增加行高
            if (currentEnterCount < enterCount && enterCount != undefined){
                commentInput.style.height=(HeightNum - lineHeightNum)+"px"
                console.log('最后的height:'+commentInput.style.height)
            } else if (currentEnterCount > enterCount && enterCount != null) {
                //每行加入固定行高
                commentInput.style.height=(HeightNum + lineHeightNum)+"px"
                commentInput.setAttribute("enterCount", currentEnterCount);
                console.log('最后的height:'+commentInput.style.height)
            } 
            //记录当前行高
            commentInput.setAttribute("enterCount", currentEnterCount);
        },
    }
}
</script>

<style scoped>
     #comment-input{
            display: inline-block;
            width:100%;
            line-height: 15px;
            height: 37px;          /*border-box下居中文字要加上padding和border*/
            padding:10px 15px;
            border:1px solid #ddd;

            /*隐藏多行文本框的滚动条*/
            overflow: hidden;
        }
        .submit-cancel{
            display: flex;
            justify-content: flex-end;
        }
        .comment-cancel{
            margin-right: 10px;
        }
</style>
