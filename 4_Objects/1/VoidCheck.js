const isEmpty = (obj) => {
    for (const key in obj) {
        return true;
    }
    return false;
}