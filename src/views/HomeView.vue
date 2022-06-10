<template>
  <div class="home">
    <div>home</div>
    <router-link to="/home/modal">modal</router-link> |
    <router-link to="/home/table">table</router-link>
    <router-link to="/home/modal-table">modal-table</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
};
</script>
