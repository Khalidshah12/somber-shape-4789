export const GetLocal = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    }
    catch (e) {
        return null;
    }
}

export const SetLocal = (key, value) => {
    console.log("Hello")
    return localStorage.setItem(key, JSON.stringify(value));
}
 