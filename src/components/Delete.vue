<template>
  <span
    ><button
      class="edit"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#deleteItem"
      data-bs-whatever="@mdo"
    >
      <fa class="delete-icon" icon="fa-trash" />
    </button>
    <div
      class="modal fade"
      id="deleteItem"
      tabindex="-1"
      aria-labelledby="deleteItemLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="deleteItemLabel">
              Delete {{ action }}
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>Are you sure you want to delete this {{ action }}?</p>
          </div>
          <div class="modal-footer">
            <button @click="destroy" type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div></span
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "edit-product",
  props: {
    id: Number,
    action: String,
  },
  methods: {
    ...mapActions("products", ["deleteProduct"]),
    ...mapActions("vendors", ["deleteVendor"]),
    ...mapActions("purchases", ["deletePurchase"]),
    destroy() {
      if (this.action === "product") {
        this.deleteProduct(this.id);
      }
      if (this.action === "vendor") {
        this.deleteVendor(this.id);
      }
      if (this.action === "purchase") {
        this.deletePurchase(this.id);
      }
    },
  },
});
</script>

<style>
.edit,
.delete {
  background-color: transparent;
  border: none;
  padding: 5px;
  cursor: p;
}

.edit {
  margin-right: 20px;
}

.edit-icon {
  color: #aaa;
}

.delete-icon {
  color: red;
}
</style>
