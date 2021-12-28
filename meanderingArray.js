function meanderingArray(unsorted) {
	n = unsorted.length;

	unsorted.sort();

	let arrayTemp = new Array(n);

	let arrIdx = 0;

	for (let i = 0; i <= n / 2; i++) {
		let j = i + 1;
		if (arrIdx < n) {
			arrayTemp[arrIdx] = unsorted[i];
			arrIdx++;
			arrayTemp[arrIdx] = unsorted[unsorted.length - j];
			arrIdx++;
		}
	}

	for (let i = 0; i < n; i++) {
		unsorted[i] = arrayTemp[i];
	}
}

let arr = [5, 8, 1, 4, 2, 9, 3, 7, 6];
meanderingArray(arr);

for (let i = 0; i < n; i++) console.log(arr[i] + ' ');
