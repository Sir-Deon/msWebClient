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
                <label class="col-form-label">Priority:</label>
                <input
                  v-model="mutableData.priority"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Order Reference:</label>
                <input
                  v-model="mutableData.order_reference"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Vendor:</label>
                <input
                  v-model="mutableData.vendor"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Purchase Representative</label>
                <input
                  v-model="mutableData.purchase_representative"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Order Deadline</label>
                <input
                  v-model="mutableData.order_deadline"
                  type="date"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Activities:</label>
                <input
                  v-model="mutableData.activities"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Source Document:</label>
                <input
                  v-model="mutableData.source_document"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Total:</label>
                <input
                  v-model="mutableData.Total"
                  type="number"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Status:</label>
                <input
                  v-model="mutableData.status"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="btns">
                <button type="submit" class="btn btn-primary">
                  Update Purchase
                </button>
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
  name: "edit-purchase",
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
    ...mapActions("purchases", ["updatePurchase"]),
    update(e: any) {
      e.preventDefault();
      this.updatePurchase(this.mutableData);
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
