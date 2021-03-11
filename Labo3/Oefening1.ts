let items: Array<number> = [2, 5, 3, 7, 8, 10, 15, 18, 24, 111, 12, 19, 87];

let search = (zoekarray:Array<number>, getal:number) => {
    return zoekarray.indexOf(getal)
}
console.log(search(items, 5));
console.log(search(items, 15));