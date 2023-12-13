function isValidEmail(email) {
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};

function isValidName(name) {
    return /^[a-zA-Zа-яА-я- ]+$/.test(name);
}

export { isValidEmail, isValidName }