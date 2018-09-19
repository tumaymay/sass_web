<template>
    <div id="main">
        <div id="main-inner">
            <div class="dep">
                <div class="dep-header">
                    <h3 class="dep-title">部门快讯</h3>
                </div>
                <div id="more-dep">
                    <a href="" id="more-dep-inner">更多>></a>
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



            <div class="act">
                <div class="act-header">
                    <h3 class="act-title">活动预告</h3>
                </div>
                <div id="more-act">
                        <a href="" id="more-act-inner">更多>></a>
                    </div>
                <div class="act-body" >
                    <div v-for="item of actList" :key="item.id" class="act-content">
                        <ul class="list-group list-group-act" >
                            <li class="list-group-item list-group-item-act ">
                                <a href="" id="act-text">{{item.text}}</a>
                                <div class="act-time">
                                    {{item.time}}
                                </div>
                            </li>
                        </ul>
                        
                    </div>   
                </div>
            </div>



            <div class="club">
                <div id="more-club">
                        <a href="" id="more-club-inner">更多>></a>
                </div>
                <div class="club-header">
                    <h3 class="club-title">社团风采</h3>
                </div>
                <div class="club-body" >
                    <div id="myCarousel" class="carousel slide">
                        <!-- 轮播（Carousel）指标 -->
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                        </ol>   
                        <!-- 轮播（Carousel）项目 -->
                        <div class="carousel-inner">
                            
                            <div class="item club-item" 
                            v-for="item of clubList" 
                            :key="item.clubid" :class="item.clubid===111? 'active':''">
                                <img :src="item.clubimg" class="club-img">
                                <div class="carousel-caption">{{item.title}}</div>
                            </div>
                            <!--
                            <div class="item active">
                                <img src="../../../assets/pic.jpg" alt="First slide">
                            </div>
                            <div class="item">
                                <img src="../../../assets/pic.jpg" alt="Second slide">
                            </div>
                            <div class="item">
                                <img src="../../../assets/pic.jpg" alt="Third slide">
                            </div>-->
                        </div>
                        <!-- 轮播（Carousel）导航 -->
                        <a class="carousel-control left" href="#myCarousel" data-slide="prev"> 
                            <span _ngcontent-c3="" aria-hidden="true" class="glyphicon glyphicon-chevron-left lr-icon"></span>
                        </a>
                        <a class="carousel-control right" href="#myCarousel" data-slide="next">
                            <span _ngcontent-c3="" aria-hidden="true" class="glyphicon glyphicon-chevron-right lr-icon"></span>
                        </a>
                    </div>

                    <div>
                        <ul class="list-group list-group-club">
                            <li class="list-group-item list-group-item-club"  v-for="item of clubList" :key="item.clubid">
                                <a href="#" class="club-a">{{item.title}}</a>
                                <div class="act-author">
                                    <span class="glyphicon glyphicon-user"></span>
                                    发布者-{{item.author}}
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                    
                </div>
            </div>
            
       <div class="renew">
                <div id="more-renew">
                    <a href="" id="more-club-inner">更多>></a>
                </div>
                <div class="renew-header">
                    <h3 class="renew-title">组织招新</h3>
                </div>
                <div class="renew-body" >
                    <div>
                        <ul class="list-group list-group-renew">
                            <li class="list-group-item list-group-item-renew"  v-for="item of renewList" :key="item.id">
                                <a href="#" class="renew-a">{{item.title}}</a>
                                <div class="renew-author">
                                    <span class="glyphicon glyphicon-user"></span>
                                    {{item.author}}
                                </div>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>

            <div class="fire">
                <div class="fire-header">
                    <h3 class="fire-title">活跃团体</h3>
                </div>
                <div class="fire-body" >
                    <div class="row">
                        <div v-for="item of fireList" :key="item.id" class="fire-item">
                            <div class="thumbnail">
                                <div class="img-wrapper">
                                    <img :src="item.img" alt="..." class="fire-img">
                                </div>
                                <div class="caption">
                                    <h4><a href="" class="fire-a">{{item.name}}</a></h4>
                                <p class="fire-org">{{item.org}}</p>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="morefire"><a href="#" class="morefire-inner">查看更多热门团体>></a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"HomeMain",
    data(){
        return{
            
        }
    },
    props:{
        depList:Array,
        actList:Array,
        clubList:Array,
        renewList:Array,
        fireList:Array,
    }
}
</script>

<style scoped>
.changeMargin{
    margin-top:47px;
}
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
        .dep,.act,.club,.fire,.renew{
            margin-bottom: 10px;
            float: left;
            box-shadow: 0 1px 3px rgba(26,26,26,.1);
            padding-left:16px;
            position: relative;
        }
             .dep-header,.act-header,.club-header,.fire-header,.renew-header{
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
        .dep,.club{
            margin-right: 10px;
            width: 650px;
              
        }
            #dep-text{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    height: 40px;
                    line-height: 20px;
                    position: relative;
            }
            #dep-text:hover{
                color: #A44624;
            }
            .dep-author,.act-author{
                color: grey;
                text-align: right;
                font-size: 14px;
            }
        .club,.fire,.renew{
            width: 100%;
        }
        .act,{
            padding-right:16px;
            padding-bottom: 14px;
            width: 340px;  
        }
            #act-text:hover{
                color: #A44624;
            }
        #more-dep,#more-act,#more-club,#more-renew{
            position: absolute;
            top: 6%;
            right: 7%;
            text-align: right;
            font-size: 16px;
            font-weight: bold;
        }
        #more-act-inner:hover{
            text-decoration: underline;
            color: #A44624;
        }
        .morefire-inner:hover{
            text-decoration: underline;
            color: #A44624;
        }
        .fire-a:hover{
            color: #A44624;
        }
        
        
           
               .list-group-dep{
                   margin-right: 16px;
                   margin-bottom: 0%;
               }
               .list-group-item-dep,.list-group-item-renew{
                   border: none;
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
            .border-bottom{
                border-bottom: 1px solid green;
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
                padding: 5px;  
            }
            .act-content{
                display: flex;
            }
            
                .act-time{
                   text-align: right;
                   padding: 2px 0 0 0;
                   color: grey;
                }
            .club-body{
                width: 100%;
                position: relative;
               
            }
            .club-item{
                width:492px;
                height:296px;
            }
            .club-img{
                display: block;
                width: 100%;
                height:100%;
                
            }
            .renew-body{
                width: 100%;
                position: relative;
               
            }

            .carousel{
                width: 50%;
            }
            
            .carousel-caption{
                left: 0%;
                bottom: 0%;
                text-align: left;
                padding-left: 16px;
                font-size: 20px;
                width: 100%;
                background-image: linear-gradient(rgba(39, 37, 37, 0.2),black);
                /*省略号显示*/
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
                padding-bottom: 9px;

            }
            .list-group-club{
                position: absolute;
                top: 0%;
                right: 5%;
                width: 40%;
            }
            .list-group-item-club{
                border: none;
                font-size: 16px;
                
            }
                .club-a{
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                    height: 40px;
                    line-height: 20px;
                }
                .club-a:hover{
                    text-decoration: underline;
                    color: #A44624;
                }
            
            #more-club-inner:hover{
                text-decoration: underline;
                color: #9B0D14;
            }
            .fire-item{
                width: 20%;
                float: left;
            }
            .thumbnail{
                text-align: center;
                border:none;
                padding-top:10px;
            }
            .img-wrapper{
                width: 100px;
                height: 100px;
                border: 10px solid #eee;
                overflow: hidden;
                position: relative;
                border-radius: 50%;
                margin: 0 auto;
                box-sizing: content-box;
                
            }
            .row{
                margin-right: 0%;
            }
                .fire-img{
                    height: 100%;
                    width: auto;
                    
                }
                .fire-org{
                    color: #25A992;
                }
                .fire-body{
                    position: relative;
                }
                    .morefire{
                        text-align: right;
                        padding: 0 16px 16px 0;
                        position: absolute;
                        right: 0;
                        bottom: 0%;
                        color: grey;
                        
                    }
                    .renew-a{
                        font-size: 16px;
                    }
        .renew-a:hover{
            color: #A44624;
        }

        .renew-author{
            float: right;
            text-align: right;
            padding: 2px 0 0 0;
            color: grey;
            margin-right:50px;
        }
</style>
