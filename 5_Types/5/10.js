// Реализация Тасования Фишера — Йетса

function shuffle(arr){
	let j, temp;
	for(let i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

console.log(shuffle([1,2,3,4,5,6,7,8,9]));