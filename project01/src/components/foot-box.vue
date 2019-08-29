<template>
    <div id="ft">
			<div class="layout">
				<div class="main-wrap">
					<div class="footer-content-box box no-mb">
						<div class="w1200 clearfix">
							<div class="infor-box">
								<p class="m-b-10">{{info.shop.name}}</p>
								<p class="address">地址：{{info.shop.address}}</p>
								<p class="tele">联系电话：{{info.shop.tele}}</p>

							</div>
							<div class="link-box">
								<p class="m-b-15">友情链接：<a href="http://www.cailiao.com">中国材料网</a> </p>
								<p class="m-b-15">技术支持：<a href="http://www.cailiao.com">中国材料网</a> </p>
							</div>
						</div>
					</div>
					<div class="footer-bottom-box">
						{{info.shop.name}}版权所有
					</div>
				</div>
			</div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            info: {
                shop: {},
            },
        }
    },
    created(){
        // 请求后台资源并放到list中
        let _this = this
        _this.api('index/index', {shop_id:window._global.shop_id}, function (resp) {
            _this.render(resp.data)

        });
    }
}
</script>
<style scoped> 

</style>

