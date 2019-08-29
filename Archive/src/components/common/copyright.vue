<template>
    <div class="row">
        <div class="col-xs-12 tc fs-12 lh-18 p-t-10 p-b-10 f-shallow">
            <span v-html="content" class="link"></span>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                content: ''
            }
        },
        created: function () {
            var _this = this
            _this.content = _this.settings().copyright
        }
    }
</script>
<style>
</style>

