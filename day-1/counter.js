const counter = (n) =>{
    let value = n;
    return () => {
        return value ++ 
    }
}
const count = counter(10);
console.log(count())
console.log(count())
