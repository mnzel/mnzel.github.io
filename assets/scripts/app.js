const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Dmass.net",
				weight: 12.3
			}, {
				text: "Smartmobe",
				weight: 8
			}, {
				text: "Omnicom Media Group",
				weight: 7
			}, {
				text: "neptrox",
				weight: 3
			}, {
				text: "bitsbeat",
				weight: 7
			}, {
				text: "SoftNep",
				weight: 10
			}, {
				text: "DoSupply Inc.",
				weight: 9
			}, {
				text: "Cloudfactory",
				weight: 15
			}, {
				text: "Jamkain Media Ventures",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Software QA Engineer.", "also do Technical Writing." //, "also do Technical Writing", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#00cec9"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
