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
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Is A Company:</label>
                <input
                  class="form-check-input"
                  type="checkbox"
                  v-model="mutableData.is_company"
                  id="recipient-name"
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Related Company:</label>
                <input
                  type="text"
                  v-model="mutableData.related_company"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Address Type:</label>
                <input
                  type="text"
                  v-model="mutableData.address_type"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="col-form-label">Street:</label>
                <input
                  type="text"
                  v-model="mutableData.street"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">ZIP:</label>
                <input
                  type="number"
                  v-model="mutableData.zip"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">City:</label>
                <input
                  type="text"
                  v-model="mutableData.city"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">State:</label>
                <input
                  type="text"
                  v-model="mutableData.state"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Country:</label>
                <input
                  v-model="mutableData.country"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="btns">
                <button type="submit" class="btn btn-primary">
                  Add Vendor
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
    ...mapActions("vendors", ["updateVendor"]),
    update(e: any) {
      e.preventDefault();
      this.updateVendor(this.mutableData);
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
