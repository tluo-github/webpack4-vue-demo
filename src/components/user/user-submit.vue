<style>
</style>

<template>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="button" class="btn btn-success" v-on:click="submit">提交</button>
            </div>
        </div>
</template>

<script>
    export default {
        methods:{
            submit(){
               // alert(this.$parent.$data.username+'--' + this.$parent.$data.userpass);
                this.$store.commit("showUserName");
            }
        }
    }
</script>