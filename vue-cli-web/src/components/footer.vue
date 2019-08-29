<template>
    <!--底部-->
    <div id="footer-wrapper">
        <div class="footer">
            <div class="qrcode">
            <img src="../assets/qrcode.jpg" />
            </div>
            <div class="f_nav">
            <ul>
                <li>
                <a href="javascript:;">牛皮纸</a>
                </li>
                <li>
                <a href="javascript:;">牛卡纸</a>
                </li>
                <li>
                <a href="javascript:;">瓦楞原纸</a>
                </li>
                <li>
                <a href="javascript:;">箱板纸</a>
                </li>
                <li>
                <a href="javascript:;">食品纸</a>
                </li>
            </ul>
            </div>
            <div class="f_contact">
            <ul>
                <li>
                <img src="../assets/1.png" />
                <span>13414469659</span>
                </li>
                <li>
                <img src="../assets/5.png" />
                <span>1135350255</span>
                </li>
                <li>
                <img src="../assets/3.png" />
                <span>a1135350255</span>
                </li>
                <li>
                <img src="../assets/2.png" />
                <span>13414469659@163.com</span>
                </li>
                <li>
                <img src="../assets/4.png" />
                <span>广东省深圳市龙华新区龙华街道卫东龙商务大厦B座15楼</span>
                </li>
            </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style lang="scss">
    /*底部*/
    #footer-wrapper{
      padding: 40px 0 0 ;
      background: #333333;
      .footer{
        width: 1200px;
        margin: 0 auto;
        background: url("../assets/footer_bg.jpg") no-repeat center center;
        height: 300px;
        .qrcode{
          text-align: center;
          display: block;
          margin-bottom: 30px;
        }
        .f_nav{
          display: block;
          ul{
            width: 100%;
            display: inline-block;
            text-align: center;
            li{
              display: inline-block;
              margin-right: 20px;
              a{
                color: #cecece;
                font-size: 16px;
              }
            }
            li:last-child{
              margin-right: 0;
            }
          }
        }
        .f_contact{
          margin-top: 25px;
          display: block;
          ul{
            width: 100%;
            display: inline-block;
            text-align: center;
            li{
              display: inline-block;
              margin-right: 50px;
              img{
                float:left;
                margin-top: 2px;
                margin-right: 3px;
              }
              span{
                font-size: 12px;
                color: #cecece;
              }
            }
          }
        }
      }
    }
</style>

