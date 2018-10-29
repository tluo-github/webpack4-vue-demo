<style>
</style>

<template>
    <div >
            <div class="form-group">
                <label  class="col-sm-2 control-label">用户名:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control"
                          v-uname="showLabel" v-on:change="userNameChange" v-model="username" :placeholder="placeholder">
                    <label v-if="showErrorLabel" class="label label-danger">用户名不合法</label>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        mounted(){

        },
        props:['placeholder'],
        data: function () {
            return {
                username:"",
                showErrorLabel: false
            }
        },
        methods:{
            showLabel(){
                if(this.checkUserName(this.username)){
                    this.showErrorLabel=false;
                } else {
                    this.showErrorLabel=true;
                }

            },
            userNameChange(){

                this.$emit("childChange","username",this.username);

            }
        }
    }
</script>