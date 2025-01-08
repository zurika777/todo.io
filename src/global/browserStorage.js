const __exists =(key) => {
    return localStorage.getItem(key) !== null;
};

const __get =(key) => {
    return JSON.parse(localStorage.getItem(key));
};
const __set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const browserStorage = {
    exists: __exists,
    get: __get,
    set: __set
};