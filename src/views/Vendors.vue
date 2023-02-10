<template>
  <div class="app">
    <Dashboard title="Vendors">
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#addVendors"
        data-bs-whatever="@mdo"
        class="btn btn-outline-primary mb-3"
      >
        Add Vendors
      </button>
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Is A Company</th>
            <th>Related Company</th>
            <th>Address Type</th>
            <th>Street</th>
            <th>ZIP</th>
            <th>City</th>
            <th>State</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(vendor, index) in vendors.reverse()" :key="index">
            <td>{{ vendor.name }}</td>
            <td>{{ vendor.is_company ? 1 : 0 }}</td>
            <td>{{ vendor.related_company }}</td>
            <td>{{ vendor.address_type }}</td>
            <td>{{ vendor.street }}</td>
            <td>{{ vendor.zip }}</td>
            <td>{{ vendor.city }}</td>
            <td>{{ vendor.state }}</td>
            <td>{{ vendor.country }}</td>
            <td>
              <EditVendor :data="vendor" />
              <Delete action="vendor" :id="vendor.id" />
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="!vendors" class="empty">
        <img src="../assets/data.png" alt="" />
        <p>No vendors were found. !!</p>
      </div>
    </Dashboard>
    <div
      class="modal fade"
      id="addVendors"
      tabindex="-1"
      aria-labelledby="addVendorsLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="addVendorsLabel">Add Vendors</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit="submit">
              <div class="mb-3">
                <label class="col-form-label">Name:</label>
                <input
                  v-model="vendor.name"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Is A Company:</label>
                <input
                  type="checkbox"
                  v-model="vendor.is_company"
                  id="recipient-name"
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Related Company:</label>
                <input
                  type="text"
                  v-model="vendor.related_company"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Address Type:</label>
                <input
                  type="text"
                  v-model="vendor.address_type"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>

              <div class="mb-3">
                <label class="col-form-label">Street:</label>
                <input
                  type="text"
                  v-model="vendor.street"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">ZIP:</label>
                <input
                  type="number"
                  v-model="vendor.zip"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">City:</label>
                <input
                  type="text"
                  v-model="vendor.city"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">State:</label>
                <input
                  type="text"
                  v-model="vendor.state"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Country:</label>
                <input
                  v-model="vendor.country"
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Dashboard from "../layouts/Dashboard.vue";
import { mapState, mapActions } from "vuex";
import EditVendor from "../components/EditVendor.vue";
import Delete from "../components/Delete.vue";

export default defineComponent({
  name: "ms-vendor",
  components: {
    Dashboard,
    EditVendor,
    Delete,
  },
  data: () => ({
    vendor: {
      name: "" as string,
      is_company: false as boolean,
      related_company: "" as string,
      address_type: "" as string,
      street: null,
      zip: null,
      city: "" as string,
      state: "" as string,
      country: null,
    },
  }),
  computed: {
    ...mapState("vendors", ["vendors"]),
  },
  mounted() {
    this.getVendors();
  },
  methods: {
    ...mapActions("vendors", ["getVendors", "createVendor"]),
    submit(e: any) {
      e.preventDefault();
      this.createVendor(this.vendor);
    },
  },
});
</script>

<style></style>
