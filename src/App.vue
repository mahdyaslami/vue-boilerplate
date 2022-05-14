<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
    <div>
        <div class="router-link-wrapper">
            <div>
                active route: {{ route.name }}
            </div>

            <router-link to="/">
                Go to Landing
            </router-link>

            <router-link to="/blog">
                Go to Blog
            </router-link>
        </div>

        <router-view />
    </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.router-link-wrapper {
    display: flex;
    flex-direction: column;
}
</style>
