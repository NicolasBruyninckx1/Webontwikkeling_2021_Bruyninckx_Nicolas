enum Color {
    Red,
    Orange,
    Yellow,
    Green,
    Blue,
    Indigo,
    Violet,
}

let rainbow: Array<string> = [];

for (let i: number = 0; i <= 6; i++){
    rainbow.push(Color[i]);
    console.log(rainbow[i]);
}


while(rainbow.length){
    let lastElement = rainbow.pop();
    console.log(lastElement);
}