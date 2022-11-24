const product = [
    {
        _id: "67rdca3eeb7f6fgeed471815",
        name: "Apple iPhone 14 Pro",
        price: "152 999 ₽",
        type: "смартфон",
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471816",
        name: "Galaxy Z Fold4",
        price: "139 999 ₽",
        type: "смартфон",
        rate: 2.5,
        bookmark: false
    },
    {
        _id: "67rdca3eeb7f6fgeed471817",
        name: "Samsung Galaxy S22 Ultra",
        price: "104 999 ₽",
        type: "смартфон",
        rate: 3.5,
        bookmark: false
    }
];
if (!localStorage.getItem("product")) {
    localStorage.setItem("product", JSON.stringify(product));
}
const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(JSON.parse(localStorage.getItem("product")));
        }, 2000);
    });

const update = (id, data) =>
    new Promise((resolve) => {
        const product = JSON.parse(localStorage.getItem("product"));
        const productIndex = product.findIndex((u) => u._id === id);
        product[productIndex] = { ...product[productIndex], ...data };
        localStorage.setItem("product", JSON.stringify(product));
        resolve(product[productIndex]);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(
                JSON.parse(localStorage.getItem("product")).find(
                    (product) => product._id === id
                )
            );
        }, 1000);
    });
export default {
    fetchAll,
    getById,
    update
};
