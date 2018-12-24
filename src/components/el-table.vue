<template>
    <el-table
            :data="this.$store.state.news.tableData"
            style="width: 100%" @cell-click="test">
        <el-table-column
                prop="date"
                label="日期"
                width="180">
        </el-table-column>
        <el-table-column
                prop="name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="address"
                label="地址">
        </el-table-column>
    </el-table>
</template>

<script>
    export default {
        methods:{
            test(row,column,cell, event)
            {
                alert(33);
            }
        }
    }
</script>