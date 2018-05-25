<template>
    <div>
        <nav class="navbar navbar-default navbar-fixed-top">
            <div class="container">

                <div class="navbar-header">
                    <router-link class="navbar-brand" :to="{name:'home'}">
                        VueRouter App
                    </router-link>
                </div>

            <ul class="nav navbar-nav navbar-right ">
            <li><router-link :to="{ name: 'home' }">   Home   </router-link></li>
            <li><router-link :to="{ name: 'about' }">  About  </router-link></li>
            <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
            </ul>

            </div>
        </nav>

        <div class="container">
            <router-view></router-view>
        </div>

    </div>

</template>

<script>
    export default {
        name: "core.vue"
    }
</script>
<style>
    body { padding-top: 70px; }

</style>
<style lang="sass">

    $icon-font-path: "../../../../node_modules/bootstrap-sass/assets/fonts/bootstrap/"
    @import '../../../../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss'

</style>