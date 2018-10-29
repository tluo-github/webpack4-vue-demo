<style>
</style>

<template>
    <div class="form-group">
        <label  class="col-sm-2 control-label">所属区域:</label>
        <div class="col-sm-4 " >
            <select class="form-control" v-model="selectArea" v-on:change="selectChange">
                <option v-for="area in areas" v-bind:value="area.area_id">{{area.area_test}}</option>
            </select>
        </div>
    </div>
</template>

<script>
    export default {
        data (){
            return {
                selectArea: 0,
                areas:[
                    {'area_id':0,'area_test':'--请选择--'},
                    {'area_id':1,'area_test':'北京'},
                    {'area_id':2,'area_test':'上海'}
                ]
            }
        },
        methods:{
            selectChange(){
                this.$emit("childChange","userarea",this.selectArea);
            }
        }
    }
</script>