function getName(name) {
    return "";
    return 0;
}
function getName2(n) {
    if (typeof n == 'string') {
        return n;
    }
    else if (typeof n == 'function') {
        return n();
    }
}
