<template>
  <span
    ><button
      class="edit"
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#editProduct"
      data-bs-whatever="@mdo"
    >
      <fa class="edit-icon" icon="fa-edit" />
    </button>
    <div
      class="modal fade"
      id="editProduct"
      tabindex="-1"
      aria-labelledby="editProductLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="editProductLabel">Edit</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit="update">
              <div class="mb-3">
                <label class="col-form-label">Name:</label>
                <input
                  v-model="mutableData.name"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Internal Reference:</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="mutableData.internal_ref"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Responsible:</label>
                <input
                  v-model="mutableData.responsible"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Barcode:</label>
                <input
                  v-model="mutableData.barcode"
                  type="text"
                  class="form-control"
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Sales Price:</label>
                <input
                  v-model="mutableData.sales_price"
                  type="number"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Cost:</label>
                <input
                  v-model="mutableData.cost"
                  type="number"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Product Category:</label>
                <input
                  v-model="mutableData.category"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Product Type:</label>
                <input
                  v-model="mutableData.product_type"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Quantity On Hand:</label>
                <input
                  v-model="mutableData.quantity_on_hand"
                  type="number"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Forecasted Quantity:</label>
                <input
                  v-model="mutableData.forcated_quantity"
                  type="number"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Activity Exception Dec:</label>
                <input
                  v-model="mutableData.activity"
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="btns">
                <button type="submit" class="btn btn-primary">Update</button>
              </div>
            </form>
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
    data: Object,
  },
  data: () => ({
    mutableData: {} as any,
  }),
  created() {
    this.mutableData = this.data;
  },

  methods: {
    ...mapActions("products", ["updateProduct"]),
    update(e: any) {
      e.preventDefault();
      this.updateProduct(this.mutableData);
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
