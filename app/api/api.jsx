import axios from 'axios';

module.exports = {
    getProducts: function () {
        return axios.get("/products.json").then(function (res) {
            return res.data;
        }).catch(function (res) {
            return "An error occured";
        })
    }
}