<template>
    <div id="main">
        <div id="main-inner">
            <div class="dep">
                <div class="dep-header">
                    <h3 class="dep-title">部门快讯</h3>
                </div>
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
                                    <a id="dep-text">
                                        {{item.text}}
                                    </a>
                                </div>
                                </div>

                        </li>
                        
                    </ul>
                </div>
            </div>



            <div class="act">
                <div class="act-header">
                    <h3 class="act-title">活动预告</h3>
                </div>
                <div class="act-body" >
                    <div v-for="item of actList" :key="item.id" class="act-content">
                        
                        <ul class="list-group list-group-act" >
                            <li class="list-group-item list-group-item-act ">{{item.text}}</li>
                        </ul>
                        <div class="act-time">
                            {{item.time}}
                        </div>
                    </div>
                    
                </div>
            </div>



            <div class="club">
                <div class="club-header">
                    <h3 class="club-title">社团风采</h3>
                </div>
                <div class="club-body" >
                </div>
            </div>

            <!--<div class="renew">
                <div class="renew-header">
                    <h3 class="renew-title">最新招聘</h3>
                </div>
                <div class="renew-body" >
                </div>
            </div>

            <div class="fire">
                <div class="fire-header">
                    <h3 class="fire-title">活跃团体</h3>
                </div>
                <div class="fire-body" >
                </div>
            </div>-->
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeMain",
    data(){
        return{
            depList:[{
                id:1,
                time:"一小时前",
                img:require("../../../assets/pic.jpg"),
                title:"飞扬青春",
                text:"一年一度的互联网嘉年华大赛开始啦，如果你对软件设计有兴趣，希望和小伙伴们一展身手，就加入我们吧，以团队合作的方式报名 ",
            },
            {
                id:2,
                time:"一天前",
                img:require("../../../assets/pic.jpg"),
                title:"飞扬青春",
                text:"一年一度的互联网嘉年华大赛开始啦，如果你对软件设计有兴趣，希望和小伙伴们一展身手，就加入我们吧，以团队合作的方式报名",
            },
            {
                id:3,
                time:"两天前",
                img:require("../../../assets/pic.jpg"),
                title:"飞扬青春",
                text:"一年一度的互联网嘉年华大赛开始啦，如果你对软件设计有兴趣，希望和小伙伴们一展身手，就加入我们吧，以团队合作的方式报名",
            },
            {
                id:4,
                time:"一周前",
                img:require("../../../assets/pic.jpg"),
                title:"飞扬青春",
                text:"一年一度的互联网嘉年华大赛开始啦，如果你对软件设计有兴趣，希望和小伙伴们一展身手，就加入我们吧，以团队合作的方式报名",
            },
            ],
            actList:[{
                id:1,
                time:"一小时前",
                img:require("../../../assets/pic.jpg"),
                title:"飞扬青春",
                text:"一年一度的互联网嘉年华大赛开始啦，如果你对软件设计有兴趣，希望和小伙伴们一展身手，就加入我们吧，以团队合作的方式报名 ",
            },
            {
                id:2,
                time:"一天前",
                img:require("../../../assets/pic.jpg"),
                title:"飞扬青春",
                text:"一年一度的互联网嘉年华大赛开始啦，如果你对软件设计有兴趣，希望和小伙伴们一展身手，就加入我们吧，以团队合作的方式报名",
            },
            {
                id:3,
                time:"两天前",
                img:require("../../../assets/pic.jpg"),
                title:"飞扬青春",
                text:"一年一度的互联网嘉年华大赛开始啦，如果你对软件设计有兴趣，希望和小伙伴们一展身手，就加入我们吧，以团队合作的方式报名",
            },
            {
                id:4,
                time:"一周前",
                img:require("../../../assets/pic.jpg"),
                title:"飞扬青春",
                text:"一年一度的互联网嘉年华大赛开始啦，如果你对软件设计有兴趣，希望和小伙伴们一展身手，就加入我们吧，以团队合作的方式报名",
            },
            {
                id:1,
                time:"一小时前",
                img:require("../../../assets/pic.jpg"),
                title:"飞扬青春",
                text:"一年一度的互联网嘉年华大赛开始啦，如果你对软件设计有兴趣，希望和小伙伴们一展身手，就加入我们吧，以团队合作的方式报名 ",
            },
            {
                id:2,
                time:"一天前",
                img:require("../../../assets/pic.jpg"),
                title:"飞扬青春",
                text:"一年一度的互联网嘉年华大赛开始啦，如果你对软件设计有兴趣，希望和小伙伴们一展身手，就加入我们吧，以团队合作的方式报名",
            },
            {
                id:3,
                time:"两天前",
                img:require("../../../assets/pic.jpg"),
                title:"飞扬青春",
                text:"一年一度的互联网嘉年华大赛开始啦，如果你对软件设计有兴趣，希望和小伙伴们一展身手，就加入我们吧，以团队合作的方式报名",
            },
            {
                id:4,
                time:"一周前",
                img:require("../../../assets/pic.jpg"),
                title:"飞扬青春",
                text:"一年一度的互联网嘉年华大赛开始啦，如果你对软件设计有兴趣，希望和小伙伴们一展身手，就加入我们吧，以团队合作的方式报名",
            },
            ],
        }
    }
}
</script>

<style scoped>
 #main{
    width:100%;
    height:100%;
    background: #f6f6f6;
}
    #main-inner{
        
        margin:10px auto;
        width:1000px;

        
    }
    #main-inner:after{
        content: " ";
        clear: both;
        display: block;
        overflow: hidden;
        font-size: 0;
        height: 0;
    } 
    /*.dep,.act,.club,.renew,.fire{
        background: #fff;
    }*/
        #main-inner>div{
            background: #fff;
        }
        .dep,.act,.club,.renew,.fire{
            margin-bottom: 10px;
            float: left;
            box-shadow: 0 1px 3px rgba(26,26,26,.1);
            padding-left:16px;
        }
             .dep-header,.act-header,.club-header,.renew-header,.fire-headers{
                width: 60%;
                height:35px;
                background: #9B0D14;
                border-radius: 5px 30px 30px 5px;
                color: #fff;
                display: flex;
                align-items: center;
                padding-left: 16px;
                margin-top: 10px;
                margin-bottom: 10px;
                overflow: hidden;
                
            }
               .dep-title,.act-title,.club-title,.renew-title,.fire-title{
                   margin: 0;
               }
        .dep{
            margin-right: 10px;
            width: 650px;  
        }
        .act{
            padding-right:16px;
            padding-bottom: 14px;
            width: 340px;  
        }
           
               .list-group-dep{
                   margin-right: 16px;
                   margin-bottom: 0%;
               }
               .list-group-item-dep{
                   border: none;
               }

            .media-object{
                width: 100px;
                height: 50px;
            }
            .media-heading{
                font-weight:bolder;
            }
           a {
                color:black;
                text-decoration: none;
            }
            .border-bottom{
                border-bottom: 1.5px solid green;
            }
        .act{
            width:340px;
            float: left;
            margin-bottom: 10px;
        }
        
            .list-group-act{
                margin-bottom: 0;
                width: 80%;
            }
            .list-group-item-act{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                border: none;
                border-bottom: 1px solid rgb(223, 219, 219);
                border-radius: 0;
                
            }
            .act-content{
                display: flex;
            }
                .act-time{
                   flex: 1;
                    height: 41px;
                    line-height: 41px;
                    text-align: right;
                    font-size: 10px;
                }
</style>
