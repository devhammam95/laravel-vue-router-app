<template>
    <div>
        <h1>Vue Router Demo App</h1>

        <p>
            <router-link :to="{ name: 'contact' }">Contact</router-link> |
            <router-link :to="{ name: 'about' }">About</router-link>
        </p>

        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    export default {
        name: "home.vue"
    }
</script>

<style scoped>

</style>