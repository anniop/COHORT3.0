function checkeven(ages) {
    if(ages %2 == 0) {
        console.log(ages);
    }
}
const ages = [21,44,65,2,3,4,88];
const result = ages.filter(checkeven);
console.log(result);