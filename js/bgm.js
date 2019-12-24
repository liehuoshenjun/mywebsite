var ap3 = new APlayer
(
	{
		element: document.getElementById('player3'),//样式1
		narrow: false,
		autoplay: false,
		showlrc: true,
		music: 
		{
			title: 'BGM - Jar Of Love',
			author: '曲婉婷',
			url: 'bgm/jar-of-love.mp3',
			pic: 'images/bgm.jpg'
		}
	}
);
ap3.init();