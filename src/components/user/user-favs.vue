<template>
    <div class="form-group">
        <label  class="col-sm-2 control-label">你的爱好:</label>
        <div class="col-sm-10">
            <input type="text" class="form-control" v-model="inputText"/>
            <table class="table table-bordered" v-if="showTable()">
                <thead>
                    <th>类别1</th>
                    <th>类别2</th>
                </thead>
                <tbody>
                    <tr v-for="fav in getFavs">
                        <td>{{fav.class1}}</td>
                        <td v-for="code in filterClass2(fav.class2)"><a href="#"> {{code}}</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style>

</style>
<script>
    export default {
        data() {
            return {
                inputText:"",
                favs: [
                    {'class1':'web开发类','class2':["js","html","css"]},
                    {'class1':'编程类','class2':["java","python","php","go"]}
                ]
            }
        },
        methods:{
            showTable(){
                if (this.inputText == "")return false;
                return true;
            },
            filterClass2(class2){
                return class2.filter(function (code) {
                    return code.indexOf(this.inputText) >= 0
                }.bind(this));
            }
        },
        computed:{
            getFavs()
            {
                return this.favs.filter(function (abc) {
                    if(abc.class2.filter(function (code)
                        {
                            return code.indexOf(this.inputText) >= 0
                        }.bind(this)).length>0){
                            return true;
                    }
                    return false;
                }.bind(this))
            }
        }
    }
</script>