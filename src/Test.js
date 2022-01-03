function descendingOrder(n){
    return (n + "")
        .split("")
        .sort(function(a, b) {
            return b - a;
        })
        .join("")
}

console.log(descendingOrder(1))