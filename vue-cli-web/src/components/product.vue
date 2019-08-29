<template>
    <div id="product">
        <!--头部-->
        <commonHeader></commonHeader>

        <!--内容-->
        <div id="product-main">
            <div class="main">
                <div class="location">
                    <p>
                        <a href="javascript:;">当前位置：</a><a href="javascript:;">首页</a>><a href="javascript:;">产品中心</a>
                    </p>
                </div>
                <div class="product_list">
                    <div class="p_left">
                        <h3>产品分类</h3>
                        <ul>
                            <li v-for="(one,index) in product" :key="index" class="oneMenu">
                                <a href="javascript:;" @click="twoMenu(one)">{{one.value}}</a>
                                <ul v-if="one.isSubShow">
                                    <li v-for="(two,index) in one.childrens" :key="index" class="twoMenu">
                                        <a href="javascript:;" @click="threeMenu(two)">{{two.value}}</a>
                                        <ul v-if="two.isSubShow">
                                            <li v-for="(three,index) in two.childrens" :key="index" class="threeMenu">
                                                <a href="javascript:;">{{three.value}}</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            
                        </ul>
                    </div>
                    <div class="p_right">
                        <div class="pr_product">
                            <ul>
                                <li>
                                    <a href="javascript:;">
                                    <div class="newHot_img">
                                        <img src="../assets/product_01.jpg" />
                                    </div>
                                    <div class="newHot_text">
                                        <p>上课了就腐烂卡萨丁积分离开是大姐夫理科生的积分</p>
                                    </div>
                                    <div class="newHot_bottom">
                                        <h4>￥5600.00</h4>
                                        <span>≥1吨</span>
                                    </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                    <div class="newHot_img">
                                        <img src="../assets/product_01.jpg" />
                                    </div>
                                    <div class="newHot_text">
                                        <p>上课了就腐烂卡萨丁积分离开是大姐夫理科生的积分</p>
                                    </div>
                                    <div class="newHot_bottom">
                                        <h4>￥5600.00</h4>
                                        <span>≥1吨</span>
                                    </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                    <div class="newHot_img">
                                        <img src="../assets/product_01.jpg" />
                                    </div>
                                    <div class="newHot_text">
                                        <p>上课了就腐烂卡萨丁积分离开是大姐夫理科生的积分</p>
                                    </div>
                                    <div class="newHot_bottom">
                                        <h4>￥5600.00</h4>
                                        <span>≥1吨</span>
                                    </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                    <div class="newHot_img">
                                        <img src="../assets/product_01.jpg" />
                                    </div>
                                    <div class="newHot_text">
                                        <p>上课了就腐烂卡萨丁积分离开是大姐夫理科生的积分</p>
                                    </div>
                                    <div class="newHot_bottom">
                                        <h4>￥5600.00</h4>
                                        <span>≥1吨</span>
                                    </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                    <div class="newHot_img">
                                        <img src="../assets/product_01.jpg" />
                                    </div>
                                    <div class="newHot_text">
                                        <p>上课了就腐烂卡萨丁积分离开是大姐夫理科生的积分</p>
                                    </div>
                                    <div class="newHot_bottom">
                                        <h4>￥5600.00</h4>
                                        <span>≥1吨</span>
                                    </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                    <div class="newHot_img">
                                        <img src="../assets/product_01.jpg" />
                                    </div>
                                    <div class="newHot_text">
                                        <p>上课了就腐烂卡萨丁积分离开是大姐夫理科生的积分</p>
                                    </div>
                                    <div class="newHot_bottom">
                                        <h4>￥5600.00</h4>
                                        <span>≥1吨</span>
                                    </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                    <div class="newHot_img">
                                        <img src="../assets/product_01.jpg" />
                                    </div>
                                    <div class="newHot_text">
                                        <p>上课了就腐烂卡萨丁积分离开是大姐夫理科生的积分</p>
                                    </div>
                                    <div class="newHot_bottom">
                                        <h4>￥5600.00</h4>
                                        <span>≥1吨</span>
                                    </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:;">
                                    <div class="newHot_img">
                                        <img src="../assets/product_01.jpg" />
                                    </div>
                                    <div class="newHot_text">
                                        <p>上课了就腐烂卡萨丁积分离开是大姐夫理科生的积分</p>
                                    </div>
                                    <div class="newHot_bottom">
                                        <h4>￥5600.00</h4>
                                        <span>≥1吨</span>
                                    </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--分页-->
                        <div class="page">
                            <el-pagination
                            background
                            layout="prev, pager, next"
                            :total="1000">
                            </el-pagination>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!--底部-->
        <Footer></Footer>
    </div>
</template>
<script>
import commonHeader from "./header"
import Footer from "./footer"
export default {
    components:{commonHeader,Footer},
    data(){
        return{
            product:[
                {
                    label:'食品纸',
                    value:'食品纸',
                    isSubShow:false,
                    childrens:[
                        {
                            label:'食品纸2',
                            value:'食品纸2',
                            isSubShow:false,
                            childrens:[
                                {
                                    label:'食品纸3',
                                    value:'食品纸3',
                                }
                            ]
                        }
                    ]
                },
                {
                    label:'牛皮纸',
                    value:'牛皮纸',
                    isSubShow:false,
                    childrens:[
                        {
                            label:'牛皮纸2',
                            value:'牛皮纸2',
                            isSubShow:false,
                            childrens:[
                                {
                                    label:'牛皮纸3',
                                    value:'牛皮纸3',
                                }
                            ]
                        }
                    ]
                },
                {
                    label:'牛卡纸',
                    value:'牛卡纸',
                    isSubShow:false,
                    childrens:[
                        {
                            label:'牛卡纸2',
                            value:'牛卡纸2',
                            isSubShow:false,
                            childrens:[
                                {
                                    label:'牛卡纸3',
                                    value:'牛卡纸3',
                                }
                            ]
                        }
                    ]
                },
                {
                    label:'纸袋纸',
                    value:'纸袋纸',
                    isSubShow:false,
                    childrens:[
                        {
                            label:'纸袋纸2',
                            value:'纸袋纸2',
                            isSubShow:false,
                            childrens:[
                                {
                                    label:'纸袋纸3',
                                    value:'纸袋纸3',
                                }
                            ]
                        }
                    ]
                }
            ],
            
        }
    },
    methods: {
        twoMenu(model){
            model.isSubShow = !model.isSubShow;
        },
        threeMenu(model){
            model.isSubShow = !model.isSubShow;
        }

    },
}
</script>

<style lang="scss">
    #product{
        #product-main{
            overflow: hidden;
            .main{
                width: 1200px;
                margin: 0 auto;
                //当前位置
                .location{
                    width: 100%;
                    display: inline-block;
                    padding: 30px 0 20px 0;
                    border-bottom: 1px #eaeaea solid;
                    p{
                        font-size: 16px;
                        color: #404040;
                        a{
                            font-size: 16px;
                            color: #404040;
                        }
                    }
                }
                //内容
                .product_list{
                    width: 100%;
                    margin-top: 40px;
                    .p_left{
                       width: 170px;
                       float: left;
                       margin-right: 60px; 
                       border: solid 1px #dcdcdc;
                       box-sizing: border-box;
                       h3{
                           background: #2468b6;
                           width: 100%;
                           height: 50px;
                           line-height: 50px;
                           text-align: center;
                           font-size: 18px;
                           color: #fff;
                       }
                       ul{
                           .oneMenu{
                               padding: 15px 0;
                               border-bottom: 1px #dcdcdc solid;
                               a{
                                   color: #2c80d1;
                                   font-size: 16px;
                               }
                           }
                           .oneMenu:last-child{
                               border-bottom: none;
                           }
                           li{
                               width: 100%;
                               text-align: center;
                           }
                           .twoMenu{
                               
                               a{
                                   color: #282828;
                                    font-size: 12px;
                                    padding: 15px 0 0 0;
                                    display: inline-block;
                               }
                           }
                           .threeMenu{
                               a{
                                   color: #4a9eff;
                                    font-size: 12px;
                                    padding: 15px 0 0 0;
                               }
                           }
                       }
                    }
                    .p_right{
                        width:970px;
                        float:left;
                        padding-bottom: 50px;
                        .pr_product{
                            width: 100%;
                            display: inline-block;
                            ul{
                                width: 100%;
                                display: inline-block;
                                li{
                                    width: 225px;
                                    height: 370px;
                                    background-color: #ffffff;
                                    box-shadow: 0px 0px 9px 0px 
                                        rgba(0, 0, 0, 0.08);
                                    border: solid 1px #dcdcdc;
                                    float:left;
                                    margin-right: 20px;
                                    margin-bottom: 25px;
                                    .newHot_img{
                                        width:100%;
                                        height: 250px;
                                        display: flex;
                                        align-items: center;
                                        justify-content: center;
                                        img{
                                            width: 100%;
                                            height: 100%;
                                        }
                                    }
                                    .newHot_text{
                                        padding-bottom: 20px;
                                        height: 46px;
                                        border-bottom: 1px #e6e6e6 solid;
                                        p{
                                            padding: 0 10px;
                                            box-sizing: border-box;
                                            text-overflow: -o-ellipsis-lastline;
                                            overflow: hidden;
                                            text-overflow: ellipsis;
                                            display: -webkit-box;
                                            -webkit-line-clamp: 2;
                                            line-clamp: 2;
                                            -webkit-box-orient: vertical;
                                            color: #0f0f0f;
                                            font-size: 12px;
                                            line-height: 30px;
                                        }
                                    }
                                    .newHot_bottom{
                                        height: 55px;
                                        padding: 0 15px;
                                        box-sizing: border-box;
                                        line-height: 55px;
                                        h4{
                                            color: #d30202;
                                            font-size: 14px;
                                            font-weight: 700;
                                            float:left;
                                        }
                                        span{
                                            color: #a3a3a3;
                                            font-size: 12px;
                                            font-weight: 700;
                                            float:right;
                                        }
                                    }
                                }
                                li:nth-child(4n){
                                margin-right: 0;
                                }
                            }
                        }
                        .page{
                            width: 100%;
                            display: inline-block;
                            text-align: center;

                        }
                    }
                }
            }
        }
    }
</style>

