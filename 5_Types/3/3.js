let truncate = (str, length) => {
    if(str.length > length) return str.slice(0, 19) + "...";
    else return str
}