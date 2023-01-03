export const products = [
    // {
    //     _id: "67rdca3eeb7f6fgeed471815",
    //     name: "Apple iPhone 14 Pro",
    //     price: "152 999 ₽",
    //     type: "смартфон",
    //     rate: 2.5,
    //     bookmark: false
    // },
    // {
    //     _id: "67rdca3eeb7f6fgeed471816",
    //     name: "Galaxy Z Fold4",
    //     price: "139 999 ₽",
    //     type: "смартфон",
    //     rate: 2.5,
    //     bookmark: false
    // },
    // {
    //     _id: "67rdca3eeb7f6fgeed471817",
    //     name: "Samsung Galaxy S22 Ultra",
    //     price: "104 999 ₽",
    //     type: "смартфон",
    //     rate: 3.5,
    //     bookmark: false
    // },
    // {
    //     _id: "1",
    //     category: "men's clothing",
    //     description:
    //         "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    //     image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    //     price: "109.95",
    //     title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    // },
    {
        _id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        description:
            "Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5” hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        rating: { rate: 2.9, count: 470 }
    },
    {
        _id: 11,
        title: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
        price: 109,
        description:
            "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
        category: "electronics",
        image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        rating: { rate: 4.8, count: 319 }
    },
    {
        _id: 12,
        title: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        price: 114,
        description:
            "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
        category: "electronics",
        image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        rating: { rate: 4.8, count: 400 }
    },
    {
        _id: 13,
        title: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
        price: 599,
        description:
            "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        rating: { rate: 2.9, count: 250 }
    },
    {
        _id: 14,
        title: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED ",
        price: 999.99,
        description:
            "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
        category: "electronics",
        image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        rating: { rate: 2.2, count: 140 }
    }
];
// if (!localStorage.getItem("product")) {
//     localStorage.setItem("product", JSON.stringify(product));
// }
// const fetchAll = () =>
//     new Promise((resolve) => {
//         window.setTimeout(function() {
//             resolve(JSON.parse(localStorage.getItem("product")));
//         }, 2000);
//     });

// const update = (id, data) =>
//     new Promise((resolve) => {
//         const product = JSON.parse(localStorage.getItem("product"));
//         const productIndex = product.findIndex((u) => u._id === id);
//         product[productIndex] = { ...product[productIndex], ...data };
//         localStorage.setItem("product", JSON.stringify(product));
//         resolve(product[productIndex]);
//     });https://online-shop-firebase-2976b-default-rtdb.europe-west1.firebasedatabase.app/

// const getById = (id) =>
//     new Promise((resolve) => {
//         window.setTimeout(function() {
//             resolve(
//                 JSON.parse(localStorage.getItem("product")).find(
//                     (product) => product._id === id
//                 )
//             );
//         }, 1000);
//     });

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(products);
        }, 2000);
    });

const getById = (id) =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(products.find((product) => product._id === id));
        }, 1000);
    });

export default {
    fetchAll,
    getById
    // update
};
// export function fetchAll() {
//     return product;
// }
