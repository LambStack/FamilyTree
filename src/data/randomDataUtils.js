export function genUUID() {
	return performance.now() + '' + Math.random();
}

export function genName() {
	const nameList = [
		'Adam Ondra',
		'Shauna Coxsey',
		'Kyra Condie',
		'Jimmy Webb',
		'Daniel Woods',
		'Dave MacCleod',
		'Lynn Hill',
		'Brooke Rabatou',
		'Alex Megos',
		'Guiliano Cameroni',
		'Sofya Yokoyama',
		'Kim Jian',
		'Stefano Ghisolfi',
	];

	return nameList[Math.floor(Math.random() * nameList.length)];
}

export function genColor() {
	const colorList = [
		{ colorName: 'Aero', hex: '#7CB9E8' },
		{ colorName: 'Alizarin', hex: '#DB2D43' },
		{ colorName: 'Almond', hex: '#EFDECD' },
		{ colorName: 'Blush', hex: '#DE5D83' },
		{ colorName: 'Eggshell', hex: '#F0EAD6' },
		{ colorName: 'Emerald', hex: '#50C878' },
		{ colorName: 'Fallow', hex: '#C19A6B' },
		{ colorName: 'Gamboge', hex: '#E49B0F' },
		{ colorName: 'Grenadier', hex: '#D34600' },
		{ colorName: 'Mauve', hex: '#E0B0FF' },
		{ colorName: 'Ochre', hex: '#CC7722' },
		{ colorName: 'Saffron', hex: '#F4C430' },
	];

	return colorList[Math.floor(Math.random() * colorList.length)];
}
