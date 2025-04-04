exports.gcd = (a, b) => {
    let c;
    while ((c = a % b) != 0)  {
        a = b;
        b = c;
    }
    return b;
}