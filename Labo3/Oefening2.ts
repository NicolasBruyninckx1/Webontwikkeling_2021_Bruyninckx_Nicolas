let reverseString = (word:string):string => {
    let newString:string = "";
    for (var i = word.length - 1; i >= 0; i--) {
        newString += word[i];
    }
    return newString;
}
console.log(reverseString('Hello'));