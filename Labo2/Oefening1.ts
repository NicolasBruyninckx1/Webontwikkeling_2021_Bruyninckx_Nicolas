let getallen: Array<number> = [];
for (let i = 100; i <= 200; i++){
    getallen.push(i);
}

let positie: number = 0;
while(positie !== getallen.length){
    console.log(getallen[positie])
    positie++;
}

for (let i: number = 0; i <= getallen.length; i++){
    if (getallen[i] % 3 === 0){
        console.log(getallen[i]);
    }
}