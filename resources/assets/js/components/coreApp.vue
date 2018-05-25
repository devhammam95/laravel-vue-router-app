<template>
    <div>
        <h3>VueRouter App</h3>
        <p>
            <router-link :to="{ name: 'home' }">   Home   </router-link>
            <router-link :to="{ name: 'about' }">  About  </router-link>
            <router-link :to="{ name: 'contact' }">Contact</router-link>
        </p>

        <div class="container">
            <router-view></router-view>
        </div>

    </div>

</template>

<script>
    export default {
        name: "coreApp.vue"
    }
</script>

<style scoped>

</style>