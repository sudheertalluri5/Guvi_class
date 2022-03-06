let firstObject = {
    name: 'Lavish',
    age: 25
}
let secondObject = {
    age: 25,
    name: 'Lavish'
}
let thirdObject = {
    name: 'Sudheer',
    age: 22
}

function isEqual(obj1, obj2){
    obj1_keys = Object.keys(obj1);
    obj2_keys = Object.keys(obj2);
    if (obj1_keys.length == obj2_keys.length){
        let equal = true;
        for(let key of obj1_keys){
            if (key in obj2){
                if (obj1[key] != obj2[key]){
                    equal = false;
                    break;
                }
            }
            else{
                eqaul = false;
                break;
            }
        }
        return equal;
    }
    else{
        return false;
    }
}

console.log(isEqual(firstObject, secondObject)); //true
console.log(isEqual(thirdObject, firstObject)); //false
