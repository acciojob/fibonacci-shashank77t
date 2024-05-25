function fibonacci(num) {

    if (num === 0) {
        return 0;
    } else if (num === 1) {
        return 1;
    }

    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        let next = a + b;
        a = b;
        b = next;
    }
    return b;
}
}

module.exports = fibonacci;
