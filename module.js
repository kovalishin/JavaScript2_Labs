export function mortgage(S, p, n) { 
    p /= 12*100;    
    return S * (p * (1 + p)**(n*12)) / ((1 + p)**(n*12) - 1);    
}

export function overprice(S, p, n) {
    let overBill = mortgage(S, p, n) * n * 12 - S;
    return overBill;
}
