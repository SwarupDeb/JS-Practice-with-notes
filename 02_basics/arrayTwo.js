const phela = [1,2,3]
const dusra =[4,5,6]

const all = [...phela, ...dusra] //used spread operator

console.log(all);

const ano_arr = [1,2,3,[4,5,6],7, [8,9,11,[21,33]]]
const real_arr = ano_arr.flat(Infinity)
console.log(real_arr);

console.log(Array.isArray("Swarup"));
console.log(Array.from("Swarup"));
console.log(Array.from({name: "Swarup"})); // topic for interview