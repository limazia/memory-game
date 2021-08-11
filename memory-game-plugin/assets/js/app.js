var myBoard = new MemoryGame({
	wrapper: 'memo-board',
	images: [
		'images/Bird.png', 
		'images/Cat.png', 
		'images/Dog.png',
		'images/Snake.png',
		'images/Tiger.png',
		'images/Wolf.png',
	],
	backImage: 'https://thegolda.github.io/memory-game/memo_game/images/back.jpg',
	responsive: [
		{
			breakpoint: 768,
			columns: 4
		},
		{
			breakpoint: 968,
			columns: 3
		},
		{
			breakpoint: 1168,
			columns: 6
		},
		{
			breakpoint: 1268,
			columns: 7
		}
	],
	animation: 'flip',
	timer: true,
	time: 2,
	message: {
		success: 'Você resolveu o jogo',
		fail: 'Você perdeu',
		reset: 'Tem certeza?'
	}
});