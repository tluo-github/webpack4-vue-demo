<template>
    <el-menu theme="dark" default-active="1" class="el-menu-demo" mode="horizontal"  :router="true">
            <el-menu-item index="/elindex/hot">精选</el-menu-item>
        <el-submenu index="2">
            <template slot="title">健身</template>
            <el-menu-item index="2-1">健美</el-menu-item>
            <el-menu-item index="2-2">短跑</el-menu-item>
            <el-menu-item index="2-3">户外运动</el-menu-item>
        </el-submenu>
        <el-menu-item index="3">格斗自学</el-menu-item>
    </el-menu>
</template>
<style>
     
</style>
<script>

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
