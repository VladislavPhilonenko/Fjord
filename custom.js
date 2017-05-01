window.onload = function () {
	document.querySelector('.carousel__left').onclick = slideLeft;
	var left = 0;

	function slideLeft() {
		var widthImg = document.querySelector('.carousel__strip img').offsetWidth;
		var strip = document.querySelector('.carousel__strip');
		left = left - widthImg;
		if (left < 2 * -widthImg) {
			left = 0;
		}
		strip.style.left = left +'px';
	}


}
