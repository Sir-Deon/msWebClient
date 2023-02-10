<template>
  <div class="app">
    <Dashboard title="Purchases">
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#createPurchase"
        data-bs-whatever="@mdo"
        class="btn btn-outline-primary mb-3"
      >
        Create Purchase Order
      </button>
      <table class="table">
        <thead>
          <tr>
            <th>Priority</th>
            <th>Order Reference</th>
            <th>Vendor</th>
            <th>Purchase representative</th>
            <th>Order deadline</th>
            <th>Activities</th>
            <th>Source document</th>
            <th>Total</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(purchase, index) in purchases.reverse()" :key="index">
            <td>{{ purchase.priority }}</td>
            <td>{{ purchase.order_reference }}</td>
            <td>{{ purchase.vendor }}</td>
            <td>{{ purchase.purchase_representative }}</td>
            <td>{{ purchase.order_deadline }}</td>
            <td>{{ purchase.activities }}</td>
            <td>{{ purchase.source_document }}</td>
            <td>{{ purchase.Total }}</td>
            <td>{{ purchase.status }}</td>
            <td>
              <EditPurchase :data="purchase" />
              <Delete action="purchase" :id="purchase.id" />
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="!purchases" class="empty">
        <img src="../assets/data.png" alt="" />
        <p>No purchases were found. !!</p>
      </div>
    </Dashboard>
    <div
      class="modal fade"
      id="createPurchase"
      tabindex="-1"
      aria-labelledby=" createPurchaseLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id=" createPurchaseLabel">
              Create Purchase Order
            </h1>
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
                <label class="col-form-label">Priority:</label>
                <input
                  v-model="purchase.priority"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Order Reference:</label>
                <input
                  v-model="purchase.order_reference"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Vendor:</label>
                <select v-model="purchase.vendor" b class="form-select">
                  <option disabled>Please select one</option>
                  <option
                    v-for="(vendor, index) in vendors"
                    :key="index"
                    :value="vendor.name"
                  >
                    {{ vendor.name }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label class="col-form-label">Purchase Representative</label>
                <input
                  v-model="purchase.purchase_representative"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Order Deadline</label>
                <input
                  v-model="purchase.order_deadline"
                  type="date"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Activities:</label>
                <input
                  v-model="purchase.activities"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Source Document:</label>
                <input
                  v-model="purchase.source_document"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Total:</label>
                <input
                  v-model="purchase.Total"
                  type="number"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Status:</label>
                <input
                  v-model="purchase.status"
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  required
                />
              </div>
              <div class="btns">
                <button type="submit" class="btn btn-primary">
                  Create Purchase
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
import EditPurchase from "../components/EditPurchase.vue";
import Delete from "../components/Delete.vue";
export default defineComponent({
  name: "ms-purchases",
  components: {
    Dashboard,
    EditPurchase,
    Delete,
  },
  data: () => ({
    purchase: {
      priority: "Normal" as string,
      order_reference: "" as string,
      vendor: "" as string,
      purchase_representative: "Admin" as string,
      order_deadline: "" as string,
      activities: null,
      source_document: "" as string,
      Total: null,
      status: "" as string,
    },
  }),
  computed: {
    ...mapState("purchases", ["purchases"]),
    ...mapState("vendors", ["vendors"]),
  },
  mounted() {
    this.getPurchases();
    this.getVendors();
  },
  methods: {
    ...mapActions("purchases", ["getPurchases", "createPurchase"]),
    ...mapActions("vendors", ["getVendors"]),
    submit(e: any) {
      e.preventDefault();
      this.createPurchase(this.purchase);
    },
  },
});
</script>

<style></style>
