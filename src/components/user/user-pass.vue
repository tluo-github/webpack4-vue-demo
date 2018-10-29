<style>
</style>

<template>
    <div class="form-group">
        <label for="inputPassword3" class="col-sm-2 control-label">Password</label>
        <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password" v-model="userpass" v-on:change="userPassChange">
        </div>
    </div>
</template>

<script>
    export default {
        data:function () {
          return {
              userpass:""
          }
        },
        methods:{
            userPassChange(){
                this.$emit("childChange","userpass",this.userpass)
            }

        }
    }
</script>