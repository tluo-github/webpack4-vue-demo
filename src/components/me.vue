<template>
    <div id="me">
        <myname v-bind:value=name></myname>
        <myage v-bind:value=age></myage>
    </div>
</template>
<script>
    import myname from "./myname.vue"
    import myage from "./myage.vue"
    export default {
        props:['name','age'],
        components: {
            'myage': myage,
            'myname' : myname
        }
    }
</script>