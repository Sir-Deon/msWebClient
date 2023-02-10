<template>
  <div class="side-bar">
    <div>
      <p class="title">MS Web Client</p>
    </div>
    <div>
      <ul>
        <li @click="route('/products')">
          <span
            ><fa icon="fa-bag-shopping" />
            <span class="label">Products</span></span
          >
        </li>
        <li @click="route('/vendors')">
          <span><fa icon="fa-shop" /> <span class="label">Vendors</span></span>
        </li>
        <li @click="route('/purchases')">
          <span>
            <fa icon="fa-cart-shopping" />
            <span class="label">Purchases</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Side-Bar",
  methods: {
    route(path: string) {
      this.$router.push(path);
    },
  },
});
</script>

<style>
.side-bar .title {
  font-weight: bold;
  font-size: 25px;
  align-self: center;
}
.side-bar ul li {
  list-style-type: none;
  padding: 10px;
  cursor: pointer;
  width: 80%;
}

.label {
  margin-left: 10px;
}

.side-bar ul li:hover {
  background-color: rgb(10, 10, 127);
  border-radius: 10px;
}
.side-bar ul li a {
  text-decoration: none;
  color: #fff;
}
</style>
