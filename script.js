//#1
function isOldEnoughToVote(age) {
    if(age >= 18){
        return true
    }else{
        return false
    }
}

//#2
function getProperty(obj, key) {
    return obj[key]

    var obj = {
        key: 'value'
    };
}

//#3
function addProperty(obj, key) {
    return obj[key] = true
}

//#4
function removeProperty(obj, key) {
    delete obj[key]

}
//#5
function isEven(num) {
    if(num%2 == 0){
        return true
    }else{
        return false
    }
}

//#6
function isOdd(num) {
    if(num%2 == 1){
        return true
    }else{
        return false
    }
}

//#7
function addToFront(arr, element) {
    arr.unshift(element)
    return arr
}

//#8
function addToBack(arr, element) {
    arr.push(element);
    return arr
}

//#9
function joinArrays(arr1, arr2) {
    return arr1.concat(arr2)
}

//#10
function getAllWords(str) {
    if(str==''){
        return [];
    }
    return str.split(" ")
}

//#11
function extend(obj1, obj2) {
    for(var key in obj2){
        if(!(key in obj1)){
            obj1[key]=obj2[key]
        }
    }
    return obj1
}

//#12
function removeStringValues(obj) {
    for(var key in obj){
        if(typeof obj[key]=="string"){
            delete obj[key]
        }
    }
    return obj
}

//#13
function getIndexOf(char, str) {
    return str.indexOf(char)
}

//#14
function keep(array, keeper) {
    var newArray = []
    for(var i=0;i<array.length;i++){
        if(array[i]==keeper){
            newArray.push(array[i])
        }
    }
    return newArray
}

//#15
function getLargestElementAtProperty(obj, key) {
    // your code here
    var num = undefined
    if(Array.isArray(obj[key])){
        num=obj[key][0]
        for(var i = 0; i<obj[key].length;i++){
            if(obj[key][i]>num){
                var num = obj[key][i]
            }
        }
    }
    return num
}

//#16
function calculateBillTotal(preTaxAndTipAmount) {
    return Math.round(1000*preTaxAndTipAmount*1.245)/1000
}

//#17
function sumDigits(number) {
    output = [],
        sNumber = number.toString();
    var finalNumber = 0

    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        output.push(+sNumber.charAt(i));
    }
    if(number<0){
        for (var j=1; j<output.length;j++){
            if(output[j] != output[1]){
                finalNumber += output[j]
            }else{
                finalNumber -= output[j]
            }
            console.log("hi")
        }
    }else{
        for (var k=0; k<output.length;k++){
            finalNumber += output[k]
        }
    }
    console.log(finalNumber);
    return finalNumber
}

//#18
function listAllValues(obj) {
    // your code here
    var arr = []
    for(var keys in obj){
        arr.push(obj[keys]);
    }
    return arr
}

//#19
function detectOutlierValue(string) {
    var arr = string.split(" ");
    var arrE = []
    var arrO = []

    arr.forEach(function (num, index) {
        if (num % 2 === 0) {
            arrE.push(index)
        } else {
            arrO.push(index)
        }
    })

    if (arrE.length == 1) {
        return arrE[0] + 1
    } else if (arrO.length == 1) {
        return arrO[0] + 1
    }
}

//#20
function search(array, value) {
    var midpoint = 0
    if(array.length%2 === 1){
        midpoint = array.length/2 - .5
    }else{
        midpoint = array.length/2
    }
    var num = 0
    console.log(midpoint)

    if(value >= array[midpoint]){
        for(var  i = midpoint; i <= array.length; i++){
            if(value == array[i]){
                midpoint = Math.floor(array.indexOf(array[i]))
            }
        }
    }else{
        for(var j = 0; j <= array[midpoint]; j++){
            if(value == array[j]){
                midpoint = Math.floor(array.indexOf(array[j]))
            }
        }
    }
    if(midpoint == 3){
        return null
    }
    return midpoint
}