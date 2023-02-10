<template>
  <div class="app-bar d-flex justify-content-between align-items-center">
    <div>
      <p class="title">{{ title }}</p>
    </div>
    <div class="d-flex align-items-center">
      <img
        src="https://randomuser.me/api/portraits/men/10.jpg"
        alt=""
        class="image"
      />
      <p class="name">Admin</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App-bar",
  props: {
    title: String,
  },
});
</script>

<style>
.app-bar {
  padding: 10px 30px;
  border-bottom: solid 1px #ccc;
}

.app-bar .title {
  font-weight: bold;
  font-size: 25px;
  align-self: center;
  margin-top: 10px;
}
.image {
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  cursor: pointer;
}
.name {
  margin-top: 10px;
  font-size: 12px;
}
</style>
