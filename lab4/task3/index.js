// Введення масиву b
const n = parseInt(prompt("Введіть кількість елементів масиву: "));
const b = [];
for (let i = 0; i < n; i++) {
	b.push(parseInt(prompt(`Введіть ${i + 1}-й елемент масиву B: `)));
}

// Сортування за зменшенням методом вставки
for (let i = 1; i < n; i++) {
	const key = b[i];
	let j = i - 1;
	while (j >= 0 && b[j] < key) {
		b[j + 1] = b[j];
		j--;
	}
	b[j + 1] = key;
}

// Виведення відсортованого масиву b
console.log("Відсортований масив B за зменшенням:", b);
