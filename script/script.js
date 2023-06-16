
		const gato = document.querySelector('.gato');
		const pipe = document.querySelector('.pipe');


		const jump = () => {
			gato.classList.add('jump');

			setTimeout(() => {
				gato.classList.remove('jump');
			}, 500);
		}

		const loop = setInterval(()=>{
			const pipePosition = pipe.offsetLeft;
			const gatoPosition = +window.getComputedStyle(gato).bottom.replace('px', '');
			console.log(gatoPosition);
			if (pipePosition <= 110 && pipePosition > 0 && gatoPosition < 80) {
				pipe.style.animation = 'none';
				pipe.style.left = '110px';

				gato.style.animation = 'none';
				gato.style.left = `${gatoPosition}px`;

				gato.src = 'img/gato.png';
				alert('Voce perdeu o jogo, tente de novo');
				clearInterval(loop);
			}
		}, 10);

		document.addEventListener('keydown', jump);