import * as chalk from "chalk";
let multiplyTextColor = (amount:number, text:string="default", appendix?:string):string => {
    let newWord:string = "";
    for (let i:number = 0; i < amount; i++) {
        newWord += text;
        if(i !== amount -1) {
            newWord += " "
        }
        if(i===amount -1 && appendix !== undefined){
            newWord += appendix
        }
    }
    return newWord;
}
console.log(chalk.red(multiplyTextColor(3, "flower", "!")))