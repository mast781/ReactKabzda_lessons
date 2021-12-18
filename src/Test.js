

const circleIntersection = (a,b,r) => {
    let d = Math.sqrt((b[0]-a[0])**2 + (b[1]-a[1])**2)
    let s = r * (2*Math.acos(d/2*r)-Math.sin(2*Math.acos(d/2*r)))
    console.log(s)
}

console.log (circleIntersection([0,0],[7,0],5))