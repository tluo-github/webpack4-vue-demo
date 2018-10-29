<style>
    @import "./../css/bootstrap.css";
    #user{
        margin-left: 50px;
    }
</style>

<template>
    <div id="user" class="col-md-8 col-md-offset-2">
        <h2 class="text-center" v-if="isadmin">管理员登录</h2>
        <h2 class="text-center" v-else>用户登录</h2>
        <form class="form-horizontal">
            <username placeholder="输入你的用户名"></username>
            <userpass></userpass>
            <userarea></userarea>
            <usersubmit></usersubmit>
            <input type="button" value="父组件测试" v-on:click="show"/>
        </form>
    </div>
</template>

<script>
    import username from "./user/user-name.vue"
    import usersubmit from "./user/user-submit.vue"
    import userpass from "./user/user-pass.vue"
    import userarea from "./user/user-area.vue"
    export  default{

        mounted(){
            this.$children.forEach(function (cc) {
                cc.$on("childChange",this.setValue)
            }.bind(this))
        },
        data (){
            return {
                username:"",
                userpass:"",
                isadmin:false,
                userarea:0
            }
        },
        methods:{
            setValue(key, value){
                this.$data[key] = value;
            },
            setUserName(uname){
                this.username = uname;
            },
            setUserPass(upass){
                this.userpass = upass;
            },
            show(){
                alert(this.userarea);
            },
            getIsAdmin(){
                //return window.location.hash='#admin';
            }

        },
        components: {
            'username': username,
            'usersubmit': usersubmit,
            'userpass' : userpass,
            'userarea' : userarea
        }
    }
</script>