import axios from "axios";
const base_url_api = "/api"

export default {
    getAllMenus: () =>
    axios.get(`${base_url_api}/menu`),
    getOneMenu: (id) =>
    axios.get(`${base_url_api}/menu/${id}/edit`),
    addMenu: (menu) =>
    axios.post(`${base_url_api}/menu`,menu),
    updateMenu: (menu,id) =>
    axios.put(`${base_url_api}/menu/${id}`,menu),
    deleteMenu: (id) =>
    axios.delete(`${base_url_api}/menu/${id}`),

    getAllItems: () =>
    axios.get(`${base_url_api}/item`),
    getOneItem: (id) =>
    axios.get(`${base_url_api}/item/${id}/edit`),
    addItem: (item) =>
    axios.post(`${base_url_api}/item`,item),
    updateItem: (item,id) =>
    axios.put(`${base_url_api}/item/${id}`,item),
    deleteItem: (id) =>
    axios.delete(`${base_url_api}/item/${id}`)
}