<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<template>
  <div class="app">
    <Dashboard title="Products">
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#createProduct"
        data-bs-whatever="@mdo"
        class="btn btn-outline-primary mb-3"
      >
        Create Product
      </button>
      <table class="table">
        <thead>
          <tr>
            <th>Favorite</th>
            <th>Name</th>
            <th>Internal Reference</th>
            <th>Responsible</th>
            <th>Barcode</th>
            <th>Sales Price</th>
            <th>Cost</th>
            <th>Product Category</th>
            <th>Product Type</th>
            <th>Quantity On Hand</th>
            <th>Forecasted Quantity</th>
            <th>Activity Exception Decoration</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(product, index) in products.reverse()" :key="index">
            <td>{{ product.favorite }}</td>
            <td>{{ product.name }}</td>
            <td>{{ product.internal_ref }}</td>
            <td>{{ product.responsible }}</td>
            <td>{{ product.barcode }}</td>
            <td>{{ product.sales_price }}</td>
            <td>{{ product.cost }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.product_type }}</td>
            <td>{{ product.quantity_on_hand }}</td>
            <td>{{ product.forcated_quantity }}</td>
            <td>{{ product.activity }}</td>
            <td>
              <EditProduct :data="product" />
              <Delete :id="product.id" action="product" />
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="!products" class="empty">
        <img src="../assets/data.png" alt="" />
        <p>No products were found. !!</p>
      </div>
    </Dashboard>
    <div
      class="modal fade"
      id="createProduct"
      tabindex="-1"
      aria-labelledby="createProductLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="createProductLabel">
              Create Product
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
                <label class="col-form-label">Name:</label>
                <input
                  v-model="name"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Internal Reference:</label>
                <input
                  v-model="internal_ref"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Responsible:</label>
                <input v-model="responsible" type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Barcode:</label>
                <input v-model="barCode" type="text" class="form-control" />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Sales Price:</label>
                <input
                  v-model="sales_price"
                  type="number"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Cost:</label>
                <input
                  v-model="cost"
                  type="number"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Product Category:</label>
                <input
                  v-model="product_category"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Product Type:</label>
                <input
                  v-model="product_type"
                  type="text"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Quantity On Hand:</label>
                <input
                  v-model="qty_on_hand"
                  type="number"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Forecasted Quantity:</label>
                <input
                  v-model="for_qty"
                  type="number"
                  class="form-control"
                  required
                />
              </div>
              <div class="mb-3">
                <label class="col-form-label">Activity Exception Dec:</label>
                <input
                  v-model="activity_except"
                  type="text"
                  class="form-control"
                />
              </div>

              <div class="btns">
                <button type="submit" class="btn btn-primary">
                  Create Product
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
import EditProduct from "../components/EditProduct.vue";
import Delete from "../components/Delete.vue";

export default defineComponent({
  name: "ms-product",
  data: () => ({
    show: false,
    favorite: "Normal" as string,
    name: "" as string,
    internal_ref: "" as string,
    responsible: "" as string,
    barCode: "" as string,
    sales_price: null,
    cost: null,
    product_category: "" as string,
    product_type: "" as string,
    qty_on_hand: null,
    for_qty: null,
    activity_except: "" as string,
  }),
  components: {
    Dashboard,
    EditProduct,
    Delete,
  },
  computed: {
    ...mapState("products", ["products"]),
  },
  mounted() {
    this.getProducts();
  },
  methods: {
    ...mapActions("products", ["getProducts", "createProduct"]),

    submit(e: any) {
      e.preventDefault();
      this.createProduct({
        name: this.name,
        favorite: this.favorite,
        internal_ref: this.internal_ref,
        responsible: this.responsible,
        barcode: this.barCode,
        sales_price: this.sales_price,
        cost: this.cost,
        category: this.product_category,
        product_type: this.product_type,
        quantity_on_hand: this.qty_on_hand,
        forcated_quantity: this.for_qty,
        activity: this.activity_except,
      });
    },
  },
});
</script>

<style>
.table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

.table td,
.table th {
  border: 1px solid #ddd;
  padding: 8px;
}

.table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.table tr:hover {
  background-color: #ddd;
}

.table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(192, 142, 48);
  color: white;
}

.table .edit,
.delete {
  background-color: transparent;
  border: none;
  padding: 5px;
  cursor: p;
}

.table .edit {
  margin-right: 20px;
}

.table .edit-icon {
  color: #aaa;
}

.table .delete-icon {
  color: red;
}
.empty {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.empty img {
  height: 300px;
}

button {
  margin-right: 10px;
}
.btns {
  display: flex;
  justify-content: flex-end;
}
</style>
