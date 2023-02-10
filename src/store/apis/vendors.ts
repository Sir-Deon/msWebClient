/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

export const get = async () => {
  try {
    const results = await axios.get("/vendors/");
    return results;
  } catch (error) {
    console.error(error);
  }
};
export const create = async (data: any) => {
  try {
    const results = await axios.post("/add-vendor/", data);
    return results;
  } catch (error) {
    console.error(error);
    alert("Operation unsuccessful !!");
  }
};
export const update = async (data: any) => {
  try {
    const results = await axios.put(`/update-vendor/${data.id}`, data);
    return results;
  } catch (error) {
    console.error(error);
    alert("Operation unsuccessful !!");
  }
};
export const destroy = async (id: number) => {
  try {
    const results = await axios.delete(`/delete-vendor/${id}`);
    return results;
  } catch (error) {
    console.error(error);
    alert("Operation unsuccessful !!");
  }
};
