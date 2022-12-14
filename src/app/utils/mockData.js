import { useEffect, useState } from "react";
import professions from "../mockData/professions.json";
import qualities from "../mockData/qualities.json";
import users from "../mockData/users.json";
import carts from "../mockData/carts.json";
import products from "../mockData/products.json";
import categories from "../mockData/categories.json";
import httpService from "../services/http.service";

const useMockData = () => {
    const statusConsts = {
        idle: "NotStarted",
        pending: "In Process",
        successed: "Ready",
        error: "Error occured"
    };

    const [error, setError] = useState(null);
    const [status, setStatus] = useState(statusConsts.idle);
    const [progress, setProgress] = useState(0);
    const [count, setCount] = useState(0);
    const summeryCount =
        professions.length +
        qualities.length +
        users.length +
        products.length +
        carts.length +
        categories.length;
    const incrementCount = () => {
        setCount((prevState) => prevState + 1);
    };

    const updateProgress = () => {
        if (count !== 0 && status === statusConsts.idle) {
            setStatus(statusConsts.pending);
        }
        const newProgress = Math.floor((count / summeryCount) * 100);
        if (progress < newProgress) {
            setProgress(() => newProgress);
        }
        if (newProgress === 100) {
            setStatus(statusConsts.successed);
        }
    };

    useEffect(() => {
        updateProgress();
    }, [count]);

    async function initialize() {
        try {
            for (const prof of professions) {
                await httpService.put("profession/" + prof._id, prof);
                incrementCount();
            }
            for (const user of users) {
                await httpService.put("user/" + user._id, user);
                incrementCount();
            }
            for (const qual of qualities) {
                await httpService.put("quality/" + qual._id, qual);
                incrementCount();
            }
            for (const product of products) {
                await httpService.put("product/" + product._id, product);
                incrementCount();
            }
            for (const category of categories) {
                await httpService.put("category/" + category._id, category);
                incrementCount();
            }
            for (const cart of carts) {
                await httpService.put("cart/" + cart._id, cart);
                incrementCount();
            }
        } catch (error) {
            setError(error);
            setStatus(statusConsts.errors);
        }
    }
    return { error, initialize, progress, status };
};

export default useMockData;
