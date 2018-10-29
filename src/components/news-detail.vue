<template>
    <div class="news-detail">
        <div class="row">
            <div class="page-header">
                <h2>{{newsdetail.title}} <small>{{newsdetail.pubtime}}</small></h2>
                <p>
                    {{newsdetail.desc}}
                </p>
            </div>

        </div>
    </div>
</template>
<style>

</style>
<script>
    export default {
        created(){
            this.$http.get('http://localhost:9090/news?newsid=' + this.$route.params.newsid).then(response => {
                // success callback
                this.newsdetail = response.body;
            }, response => {
                // error callback
            });
        },
        data() {
            return {
                newsdetail: {}
            }
        }
    }
</script>