<template>
    <div id="CommonHeader">
        <!--顶部-->
        <div id="top-wrapper">
            <div class="top">
                <div class="top_login">
                    <span>Hi，欢迎来材料网~</span>
                    <a href="javascript:;" class="login">【请登录】</a>
                    <a href="javascript:;" class="register">【免费注册】</a>
                </div>
                <div class="top_right">
                    <div class="linkIndex">
                        <ul>
                            <li>
                                <a href="javascript:;">
                                    <i class="oHome"></i>
                                    <span>企讯网首页</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <i class="vip"></i>
                                    <span>会员中心</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <span>帮助中心</span>
                                </a>
                            </li>
                            <li>
                                <a href="javascript:;">
                                    <span>黄金广告位</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="border"></div>

                    <!--网站导航-->
                    <div class="siteNav" @mouseleave="pullShow = false">
                        <div class="siteNavText" @mouseenter="pullShow = true">
                            <a href="javascript:;">
                                <i class="navIcon"></i>
                                <span>网站导航</span>
                                <i class="down"></i>
                            </a>
                        </div>
                        <div class="pull_down" v-if="pullShow">
                            <a href="javascript:;">供应库</a>
                            <a href="javascript:;">求购中心</a>
                            <a href="javascript:;">产品</a>
                            <a href="javascript:;">黄页</a>
                            <a href="javascript:;">资讯</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--头部内容-->
        <div id="header-wrapper">
            <div class="header">
                <div class="logo">
                    <a href="javascript:;">
                        
                    </a>
                </div>
                <div class="company">
                    <h3>东莞伽立实业投资有限公司</h3>
                    <div class="huiyuan">
                        <ul>
                            <li>
                                <i class="yun"></i>
                                <span>AI云网通 第<small>1</small>年</span>
                            </li>
                            <li>
                                <i class="v"></i>
                                <span>实力认证</span>
                            </li>
                            <li>
                                <i class="qi"></i>
                                <span>认证企业</span>
                            </li>
                            <li>
                                <i class="qrcode"></i>
                                <span>移动店铺</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="searchInput">
                    <div class="se_in">
                        <el-input type="text" v-model="searchValue" placeholder="输入关键词"></el-input>
                        <div class="select_down" @mouseleave="AccessLeave()">
                            <a href="javascript:;" @mouseenter="AccessSeenter()"><span id="innerHTML">{{productType}}</span><i class="down"></i></a>
                            <div class="select_down_c" v-if="Access">
                                <dl id="dl">
                                    <dd @click="productType=item.value" v-for="(item,index) in dl" :key="index"><a href="#" class="inner">{{item.value}}</a></dd>
                                </dl>
                            </div>
                        </div>
                        <div class="keywords">
                            <a href="javascript:;" class="active">工程机械</a>
                            <a href="javascript:;" class="active">环保</a>
                            <a href="javascript:;">五金</a>
                            <a href="javascript:;">化工</a>
                            <a href="javascript:;">安全</a>
                        </div>
                    </div>
                    <div class="se_in_btn">
                        <a href="javascript:;">搜索</a>
                    </div>
                </div>
                <div class="issue">
                    <a href="javascript:;">发布供应</a>
                </div>
            </div>
        </div>

        <!--公司内容-->
        <div id="company-wrapper">
            <div class="company">
                <div class="companyName">
                    <h3>东莞市伽立实业投资有限公司</h3>
                    <p>To provide you with the best quality goods and services</p>
                </div>
                <div class="companyTel">
                    <div class="TelIcon">
                        <i></i>
                    </div>
                    <div class="TelText">
                        <p class="p1">联系电话：</p>
                        <p class="p2">13925566414</p>
                    </div>
                </div>
                <div class="qrcode" @click="clickShowLeave()">
                    <a href="javascript:;">
                        <img src="../assets/qrcode.png" />
                    </a>
                </div>
                <div class="zhanxian">
                    <ul>
                        <li>
                            <i class="icon01"></i>
                            <p class="iconColor1">如实描述</p>
                        </li>
                        <li>
                            <i class="icon02"></i>
                            <p class="iconColor2">用心服务</p>
                        </li>
                        <li>
                            <i class="icon03"></i>
                            <p class="iconColor3">品质保障</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!--导航-->
        <div id="nav-wrapper">
            <div class="nav">
                <ul id="menu">
                    <li>
                        <a href="/">首页</a>
                    </li>
                    <router-link to="/product">
                        <li class="firstLevel" v-for="(firstList,index) in threeText" :key="index">
                            <a href="javascript:;">{{firstList.label}}</a>
                            <ul v-if="firstList.childrens.length>0" id="two">
                                <li class="secondLevel" v-for="(secondList,index) in firstList.childrens" :key="index">
                                    <a href="javascript:;">{{secondList.label}}</a>
                                    <ul class="thirdLevel" id="three">
                                        <li v-for="(thirdList,index) in secondList.childrens" :key="index">
                                            <a href="javascript:;">{{thirdList.label}}</a>
                                        </li>
                                    </ul>
                                </li>			
                            </ul>
                        </li>
                    </router-link>
                    <li>
                        <a href="javascript:;">联系我们</a>
                    </li>
                    <li>
                        <a href="javascript:;">公司介绍</a>
                    </li>
                    <router-link to="/credit">
                        <li>
                            <a href="javascript:;">诚信档案</a>
                        </li>
                    </router-link>
                </ul>
            </div>
        </div>

        <!--在线留言-->
        <el-dialog
        :title="companyName"
        v-if="ShowLeave"
        :visible.sync="ShowLeave"
        custom-class="leave"
        :close-on-click-modal="false"
        width="620px">
            <Leave></Leave>
        </el-dialog>
        
    </div>
</template>

<script>
import Leave from "./leave";
export default {
    // props:['showLeave'],
    // name:'aaa',
    components:{Leave},
    data(){
        return{
            pullShow:false,
            searchValue:'',
            Access:false,
            companyName:'',
            ShowLeave:false,
            threeText:[
                {
                    label:'牛皮纸', 
                    value:'牛皮纸',
                    childrens:[
                        {
                            label:"雪白牛皮纸2",
                            value:"雪白牛皮纸2",
                            childrens:[
                                {
                                    label:"雪白牛皮纸3_1",
                                    value:"雪白牛皮纸3_1"
                                },
                                {
                                    label:"雪白牛皮纸3_2",
                                    value:"雪白牛皮纸3_2"
                                }
                            ]
                        }
                    ]
                },
                {
                    label:'牛卡纸', 
                    value:'牛卡纸',
                    childrens:[
                        {
                            label:"雪白牛皮纸2",
                            value:"雪白牛皮纸2",
                            childrens:[
                                {
                                    label:"雪白牛皮纸3_1",
                                    value:"雪白牛皮纸3_1"
                                },
                                {
                                    label:"雪白牛皮纸3_2",
                                    value:"雪白牛皮纸3_2"
                                }
                            ]
                        }
                    ]
                },
                {
                    label:'白牛皮纸', 
                    value:'白牛皮纸',
                    childrens:[
                        {
                            label:"雪白牛皮纸2",
                            value:"雪白牛皮纸2",
                            childrens:[
                                {
                                    label:"雪白牛皮纸3_1",
                                    value:"雪白牛皮纸3_1"
                                },
                                {
                                    label:"雪白牛皮纸3_2",
                                    value:"雪白牛皮纸3_2"
                                }
                            ]
                        }
                    ]
                },
                {
                    label:'精制牛皮纸', 
                    value:'精制牛皮纸',
                    childrens:[
                        {
                            label:"雪白牛皮纸2",
                            value:"雪白牛皮纸2",
                            childrens:[
                                {
                                    label:"雪白牛皮纸3_1",
                                    value:"雪白牛皮纸3_1"
                                },
                                {
                                    label:"雪白牛皮纸3_2",
                                    value:"雪白牛皮纸3_2"
                                }
                            ]
                        }
                    ]
                },
                {
                    label:'食品级牛皮纸', 
                    value:'食品级牛皮纸',
                    childrens:[
                        {
                            label:"雪白牛皮纸2",
                            value:"雪白牛皮纸2",
                            childrens:[
                                {
                                    label:"雪白牛皮纸3_1",
                                    value:"雪白牛皮纸3_1"
                                },
                                {
                                    label:"雪白牛皮纸3_2",
                                    value:"雪白牛皮纸3_2"
                                }
                            ]
                        }
                    ]
                },
                {
                    label:'进口牛皮纸', 
                    value:'进口牛皮纸',
                    childrens:[
                        {
                            label:"雪白牛皮纸2",
                            value:"雪白牛皮纸2",
                            childrens:[
                                {
                                    label:"雪白牛皮纸3_1",
                                    value:"雪白牛皮纸3_1"
                                },
                                {
                                    label:"雪白牛皮纸3_2",
                                    value:"雪白牛皮纸3_2"
                                }
                            ]
                        }
                    ]
                }
            ],
            dl:[
                {
                    value:'供应'
                },
                {
                    value:'求购'
                },
                {
                    value:'公司'
                },
                {
                    value:'资讯'
                }
            ],
            productType:'供应'
        }
    },
    methods:{
        //移入
        AccessSeenter(){
            this.Access = true;
        },
        //移出
        AccessLeave(){
            this.Access = false;
        },
        getCompany(){
            this.companyName = '东莞市伽立集团有限公司';
        },
        clickShowLeave(){
            this.ShowLeave = true;
        },
    },
    mounted(){
        this.getCompany();
    }
}
</script>

<style lang="scss">
    #CommonHeader{
        /*顶部*/
        #top-wrapper{
            height: 30px;
            background: #333;
            .top{
                width: 1200px;
                margin: 0 auto;
                .top_login{
                    float:left;
                    height: 30px;
                    line-height: 30px;
                    span{
                        color:#fff;
                        font-size: 12px;
                        float:left;
                    }
                    a{
                        float:left;
                    }
                    .login{
                        color: #47C2FB;
                        font-size: 12px;
                    }
                    .register{
                       color: #ff5f00;
                       font-size: 12px;
                    }
                }
                .top_right{
                    float: right;
                    height: 30px;
                    line-height: 30px;
                    .linkIndex{
                        float:left;
                        height: 30px;
                        padding: 0 20px;
                        box-sizing: border-box;
                        ul{
                            display: inline-block;
                            li{
                                float:left;
                                margin-right: 18px;
                                a{
                                    font-size: 12px;
                                    color:#fff;
                                    .oHome{
                                        width: 13px;
                                        height: 13px;
                                        background: url("../assets/qx-index.png") no-repeat;
                                        display: inline-block;
                                        position: relative;
                                        top: 1px;
                                    }
                                    .vip{
                                        width: 12px;
                                        height: 12px;
                                        background: url("../assets/h-1.png") no-repeat;
                                        position: relative;
                                        display: inline-block;
                                        top: 1px;
                                    }
                                }
                                a:hover{
                                    span{
                                        color: #47C2FB;
                                    }
                                }
                            }
                        }
                    }
                    .border{
                        float: left;
                        width: 1px;
                        height: 14px;
                        background: #999;
                        margin-top: 8px;
                    }
                    .siteNav{
                        float:left;
                        margin-left: 30px;
                        margin-right: 30px;
                        .siteNavText{
                            position: relative;
                            z-index: 2;
                            a{
                                .navIcon{
                                    width:12px;
                                    height: 10px;
                                    background: url("../assets/h-2.png") no-repeat;
                                    position: relative;
                                    display: inline-block;
                                    top: 1px;
                                }
                                span{
                                    font-size: 12px;
                                    color:#fff;
                                }
                                .down{
                                    width: 6px;
                                    height: 4px;
                                    background: url("../assets/h-3.png") no-repeat;
                                    display: inline-block;
                                    position: relative;
                                    top: -1px;
                                }
                            }
                            a:hover{
                                span{
                                    color:#47C2FB;
                                }
                            }
                        }
                        
                        .pull_down{
                            background: #fff;
                            position: absolute;
                            padding: 0 10px;
                            box-sizing: border-box;
                            width: 210px;
                            height: 40px;
                            line-height: 40px;
                            margin-left: -100px;
                            border: 1px solid #e9e9e9;
                            margin-top: -1px;
                            z-index: 1;
                            a{
                                color: #999;
                                font-size: 12px;
                            }
                            a:hover{
                                color:#47C2FB;
                            }
                        }
                    }
                }
            }
        }

        /*头部logo那一块*/
        #header-wrapper{
            height: 94px;
            background:#f3f3f3;
            border-bottom: 1px solid #FF6C00;
            .header{
                width: 1200px;
                margin: 0 auto;
                //logo
                .logo{
                    float:left;
                    margin-top: 23.5px;
                    border-right: 1px solid #E3E3E3;
                    padding-right: 24px;
                    a{
                        background:url("../assets/qx-logo.png") no-repeat;
                        width: 251px;
                        height: 47px;
                        display: inline-block;
                        position: relative;
                    }
                }
                //公司名称
                .company{
                    float:left;
                    padding:0 25px;
                    margin-top: 23px;
                    margin-left: 5px;
                    h3{
                        font-size: 15px;
                        color: #1B1B1B;
                        font-weight: bold;
                        margin: 0 0 10px 0;
                    }
                    .huiyuan{
                        float: left;
                        ul{
                            li{
                                float:left;
                                margin-right: 23px;
                                .yun{
                                    width: 16px;
                                    height: 19px;
                                    background: url("../assets/qx-ico1.png") no-repeat;
                                    background-size: 16px 19px;
                                    display: inline-block;
                                    position: relative;
                                }
                                .v{
                                    width: 16px;
                                    height: 19px;
                                    background: url("../assets/qx-ico2.png") no-repeat;
                                    background-size: 16px 19px;
                                    display: inline-block;
                                    position: relative;
                                }
                                .qi{
                                    width: 16px;
                                    height: 19px;
                                    background: url("../assets/qx-ico3.png") no-repeat;
                                    background-size: 16px 19px;
                                    display: inline-block;
                                    position: relative;
                                }
                                .qrcode{
                                    width: 15px;
                                    height: 15px;
                                    background: url("../assets/qx-ico4.png") no-repeat;
                                    background-size: 15px 15px;
                                    display: inline-block;
                                    position: relative;
                                    top: 2px;
                                }
                                i{
                                    float: left;
                                    margin-right: 5px;
                                }
                                span{
                                    color: #343434;
                                    font-size: 12px;
                                }
                            }
                        }
                    }
                }
                //input框
                .searchInput{
                    float: left;
                    margin-top: 23px;
                    margin-left: 15px;
                    .se_in{
                        width: 295px;
                        height: 43px;
                        border: 1px #0167bc solid;
                        background: #fff;
                        position: relative;
                        padding: 5px 0;
                        box-sizing: border-box;
                        float:left;
                        .el-input{
                            padding-left: 58px;
                            width: 230px;
                            height: 30px;
                            
                            .el-input__inner{
                                border: none;
                                background: transparent;
                                height: 30px;
                                border-left: 1px solid #E3E3E3;
                            }
                        }
                        .select_down{
                            box-sizing: border-box;
                            // padding: 3px 5px 3px 15px;
                            position:absolute;
                            left: 0;
                            top:0;
                            width:58px;
                            height: 42px;
                            line-height: 39px;
                            a{
                                padding-left: 16px;
                                span{
                                    font-size: 13px;
                                    color: #666;
                                    margin-right: 5px;
                                }
                                .down{
                                    width: 6px;
                                    height: 4px;
                                    background: url("../assets/h-3.png") no-repeat;
                                    display: inline-block;
                                    position: relative;
                                    top: -1px;
                                }
                            }
                        }
                        //供应下拉内容
                        .select_down_c{
                            width: 58px;
                            position: absolute;
                            top: 41px;
                            background: #fff;
                            border: 1px solid #0167BC;
                            left: -1px;
                            box-sizing: border-box;
                            z-index: 2;
                            border-top: none;
                            dl{
                                margin: 0;
                                dd{
                                    margin: 0; 
                                    text-align: center;
                                    height: 30px;
                                    line-height: 30px;
                                    a{
                                        padding-left: 0;
                                        color: #666;
                                        font-size: 12px;
                                    }
                                    a:hover{
                                        color:#47C2FB;
                                    }
                                }
                            }
                        }
                        .keywords{
                            margin-top: 10px;
                            a{
                                font-size: 12px;
                                padding: 0 8px;
                                color: #CBCBCB;
                            }
                            .active{
                                color: #FF702A;
                            }
                        }
                    }
                    .se_in_btn{
                        float:left;
                        width: 67px;
                        height: 43px;
                        background: #0167bc;
                        text-align: center;
                    }
                    .se_in_btn a{
                        display: inline-block;
                        text-align: center;
                        line-height: 43px;
                        font-size: 15px;
                        color:#fff;
                        width: 100%;
                        height: 100%;
                    }
                }

                //发布供应
                .issue{
                    float: right;
                    width: 76px;
                    height: 43px;
                    border: 1px #e5e5e5 solid;
                    background: #ffffff;
                    text-align: center;
                    line-height: 43px;
                    margin-top: 23px;
                    box-sizing: border-box;
                    a{
                        width: 100%;
                        height: 100%;
                        display: inline-block;
                        color:#666666;
                        font-size: 15px;
                    }
                }
            }
        }

        /*公司内容*/
        #company-wrapper{
            width: 100%;
            height: 146px;
            background: url("../assets/qx-ban.png") no-repeat;
            background-size: 100%;
            .company{
                width: 1200px;
                margin: 0 auto;
                .companyName{
                    float:left;
                    margin-top: 43px;
                    h3{
                        color: #222222;
                        font-size: 24px;
                        font-weight: 500;
                    }
                    p{
                        color: #FF702A;
                        font-size: 13px;
                        margin-top: 5px;
                    }
                }
                .companyTel{
                    float:left;
                    margin-left: 165px;
                    margin-top: 45px;
                    .TelIcon{
                        float:left;
                        i{
                            width: 50px;
                            height: 50px;
                            background: url("../assets/tel.gif") no-repeat;
                            display:inline-block;
                        }
                    }
                    .TelText{
                        float:left;
                        margin-left: 10px;
                        .p1{
                            font-size: 20px;
                            color: #1B1B1B;
                            font-weight: bold;
                        }
                        .p2{
                            font-size: 24px;
                            color: #D81E06;
                            font-weight: bold;
                        }
                    }
                }
                .qrcode{
                    float:left;
                    margin-left:35px;
                    margin-top: 30px;
                }
                .zhanxian{
                    float:right;
                    margin-top: 35px;
                    ul{
                        display: inline-block;
                        li{
                            float:left;
                            height: 80px;
                            margin: 0 20px;
                            i{
                                width: 50px;
                                height: 50px;
                            }
                            p{
                               font-size: 12px;
                               margin-top: 8px; 
                            }
                            .icon01{
                                background: url("../assets/qx-ico5.png") no-repeat;
                                display: inline-block;
                                background-size:100%;
                            }
                            .iconColor1{
                                color: #D41817;
                            }
                            .icon02{
                                background: url("../assets/qx-ico6.png") no-repeat;
                                display: inline-block;
                                background-size:100%;
                            }
                            .iconColor2{
                                color: #4F30DC;
                            }
                            .icon03{
                                background: url("../assets/qx-ico7.png") no-repeat;
                                display: inline-block;
                                background-size:100%;
                            }
                            .iconColor3{
                                color: #FF702A;
                            }
                        }
                    }
                }
            }
        }

        /*导航*/
        #nav-wrapper{
            height: 42px;
	        background-color: #2468b6;
            width: 100%;
            .nav{
                width: 1200px;
                margin: 0 auto;
                height: 42px;
                line-height: 42px;
                #menu{
                    display: flex;
                    position: relative;
                    #two{
                        position: absolute;
                        width: 100%;
                        background: #2c80d1;
                        .secondLevel{
                            width: 100%;
                            height: 40px;
                            line-height: 40px;
                            box-sizing: border-box;
                            #three{
                                position: absolute;
                                left: 120px;
                                top: 0;
                                background: #1873cc;
                                width:120px;
                                text-align: center;
                                li{
                                    width: 100%;
                                    display: inline-block;
                                    height: 40px;
                                    line-height: 40px;
                                }
                            }
                        }
                    }
                }
                .firstLevel{
                    position: relative;
                    min-width: 120px;
                    cursor: pointer;
                }
                .secondLevel{
                    display: none;
                }
                .secondLevel a{
                    font-size: 14px;
                }
                .firstLevel:hover .secondLevel{
                    display: block;
                }
                .thirdLevel{
                    display: none;
                }
                .thirdLevel a{
                    font-size: 14px;
                }
                .secondLevel:hover .thirdLevel{
                    display: block;
                }
                ul{
                    li{
                        float:left;
                        text-align: center;
                        width: 120px;
                        a{
                            color: #ffffff;
                            font-size:16px;
                        }
                        .two{
                            position: absolute;
                        }
                    }
                    li:hover{
                        background: #2c80d1;
                    }
                }
            }
        }

        //在线留言
        .leave{
            width: 626px;
            height: 575px;
            .el-dialog__header{
                padding: 0 15px;
                height: 60px;
                line-height: 60px;
                border-bottom: 1px #e6e6e6 solid;
                .el-dialog__title{
                    font-size: 18px;
                    color: #575757;
                }
                .el-dialog__headerbtn{
                    i{
                        font-size: 25px;
                    }
                }
            }
            .el-dialog__body{
                padding: 0;
            }
        }
    }
</style>

