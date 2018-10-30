<style>
</style>

<template>
    <div >
            <div class="form-group">
                <label  class="col-sm-2 control-label">用户名:</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control"
                          v-uname="showErrorLabel" v-on:change="userNameChange" v-model="username" :placeholder="placeholder">

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