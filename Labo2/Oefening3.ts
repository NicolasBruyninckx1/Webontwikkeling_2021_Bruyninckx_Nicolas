let veelvouden: Array<number> = []
for (let i: number = 0; i <= 10; i++){
    veelvouden.push(i*7);
}

for (let i: number = 0; i < veelvouden.length; i++){
    if (veelvouden[i] % 3 === 0 && veelvouden[i] % 5 === 0){
        continue;
    }
    else if(veelvouden[i] % 3 === 0 || veelvouden[i] % 5 === 0){
        console.log(veelvouden[i]);
    }
}

for (let i: number = 1; i < veelvouden.length; i++){
  (veelvouden[i] % 3 === 0 || veelvouden[i] % 5 === 0) ? console.log(veelvouden[i]) :undefined;
}