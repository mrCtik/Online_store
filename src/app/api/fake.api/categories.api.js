export const professions = [
    { _id: "67rdca3eeb7f6fgeed471818", name: "Смартфон" },
    { _id: "67rdca3eeb7f6fgeed471820", name: "Одежда" },
    { _id: "67rdca3eeb7f6fgeed471814", name: "Физик" },
    { _id: "67rdca3eeb7f6fgeed471822", name: "Инженер" },
    { _id: "67rdca3eeb7f6fgeed471824", name: "Актер" },
    { _id: "67rdca3eeb7f6fgeed471829", name: "Повар" }
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(professions);
        }, 2000);
    });

export default {
    fetchAll
};
