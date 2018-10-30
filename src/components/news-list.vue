<template>
    <div class="news-list">
        <div class="row">
            <div class="page-header" v-for="news in this.$store.getters.getNews">
                <h2><router-link :to="{ name: 'newsdetail', params: { newsid: news.newsid }}"> {{news.title}} </router-link> <small>{{news.pubtime}}</small></h2>
                <p>
                    {{news.desc}}
                </p>
            </div>

        </div>
    </div>

</template>
<style>

</style>
<script>

    export default{
        created(){
            if (this.$store.state.news.news_list.length == 0){
                this.$http.get("http://localhost:9090/newslist")
                    .then(function (res) {
                        this.$store.state.news.news_list = res.body;
                    },function (res) {
                        
                    })
            }
        }
    }
</script>
