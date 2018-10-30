export default {
    state:{
        news_list:[]
    },
    mutations:{
    },
    getters: {
        getNews: state => {
            return state.news_list.filter(function (news) {
                return !news.isdeleted;
            })
        }
    }
}