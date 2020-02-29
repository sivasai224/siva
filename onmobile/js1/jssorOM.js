jQuery(document).ready(function ($) {
 
	function InitSlider(sliderContainerId, MAX_WIDTH, autoPlayOption, sliderWidth, slideSpacing) {
		var jssorSliderOptions = {
			$AutoPlay: true,
			$AutoPlaySteps: 1,
			$SlideDuration: 560,
			$FillMode: 2,
			$SlideWidth: Number(sliderWidth),
			$SlideSpacing: Number(slideSpacing),
			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$,
				$Steps: 1
			},
			$BulletNavigatorOptions: {
				$Class: $JssorBulletNavigator$
			}
		};
			
		var jssorSlider = new $JssorSlider$(sliderContainerId, jssorSliderOptions);
	
		ScaleSlider(jssorSlider);

		function ScaleSlider(jssorSlider) {
			var containerWidth = document.body.clientWidth;

			if (containerWidth) {
										
				if(sliderContainerId == "sliderContainer1"){
					var expectedWidth = Math.min(Number(MAX_WIDTH) || containerWidth, containerWidth);
				
					if(containerWidth > 479){
						jssorSlider.$ScaleWidth(expectedWidth);
					}
					else{
						var expectedheight = (expectedWidth * 340)/ 600;				
						jssorSlider.$ScaleSize(expectedWidth, expectedheight);
					}
				}
				
				
				
				
			}
			else {
				window.setTimeout(ScaleSlider(jssorSlider), 30);
			}
		}


		$Jssor$.$AddEvent(window, "load", ScaleSlider(jssorSlider));
		$Jssor$.$AddEvent(window, "resize", ScaleSlider(jssorSlider));
		$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider(jssorSlider));
         
	}

	var slider1 = InitSlider("sliderContainer1", 2600, 0, 1366, 0);
	
	
	

});