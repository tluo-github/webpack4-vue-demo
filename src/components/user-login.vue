<style>
    @import "./../css/bootstrap.css";
    #user{
        margin-left: 50px;
    }
</style>

<template>
    <div id="user" class="col-md-8 col-md-offset-2">
        <h2 class="text-center">用户登录</h2>
        <form class="form-horizontal">
            <username placeholder="输入你的用户名" ref="uname"></username>
            <userpass></userpass>
            <usersubmit></usersubmit>
        </form>
    </div>
</template>

<script>
    import username from "./user/user-name.vue"
    import usersubmit from "./user/user-submit.vue"
    import userpass from "./user/user-pass.vue"
    export  default{
        components: {
            'username': username,
            'usersubmit': usersubmit,
            'userpass' : userpass
        }
    }
</script>