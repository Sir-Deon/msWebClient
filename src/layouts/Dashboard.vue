<template>
  <div class="dashboard">
    <div class="sidebar">
      <Sidebar />
    </div>
    <div class="main">
      <Appbar :title="title" />
      <div class="body">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Appbar from "../components/Appbar.vue";
import Sidebar from "../components/Sidebar.vue";
export default defineComponent({
  name: "Dash-board",
  props: {
    title: String,
  },
  components: {
    Appbar,
    Sidebar,
  },
});
</script>

<style>
.dashboard {
  display: flex;
}
.sidebar {
  flex: 1;
  background-color: rgb(10, 2, 60);
  padding: 20px;
  color: #fff;
  height: 100vh;
}
.main {
  flex: 8;
  height: 100vh;
}
.body {
  padding: 20px 30px;
}
</style>
