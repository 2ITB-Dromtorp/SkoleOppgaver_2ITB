function testing(code) {
	if (code == '<img src="">'.substr(0, code.length)) return true;
	else {
		return false;
	}
}

function tryHTML(element) {
	var outputElement = document.getElementById('htmlOutput');
	var errorElement = document.getElementById(
		element.getAttribute('data-error')
	);
	var code = element.value.trim();
	var elementProperty = element.getAttribute('data-property');

	if (elementProperty == 'img') {
		var url = code.replace(code.substr(0, Math.min(code.length, 9)), '');
		if (url.match(/"|">/g)) {
			url = url.replace(/"|>/g, '');
		}
		var expectedInputString = '<img src="' + url + '">';
		var expectedInput = expectedInputString.substr(0, code.length);
		var htmlCode = code.replace(url, '');

		if (htmlCode == '<img src="">') {
			// Legger til en alt="" attribute på slutten av
			// img - taggen, denne teksten vises når bildet
			// ikke kan lastes inn.
			output =
				'<img src="' +
				url +
				'" alt="Dette funket ikke. Sjekk at URLen lenker direkte til et bilde.">';
			errorElement.style.opacity = '0%';
			errorElement.style.maxHeight = '0rem';
		} else if (code == '' || code == expectedInput) {
			output =
				'<span>Bildet vises her hvis koden og URLen er gyldig.</span>';
			errorElement.style.opacity = '0%';
			errorElement.style.maxHeight = '0rem';
		} else {
			output =
				'<span>Bildet vises her hvis koden og URLen er gyldig.</span>';
			errorElement.style.opacity = '100%';
			errorElement.style.maxHeight = '1.5rem';
		}
		outputElement.innerHTML = output;
	}
}

function tryCSS(element) {
	var errorElement = document.getElementById(
		element.getAttribute('data-error')
	);
	var elementProperty = element.getAttribute('data-property');
	var code = element.innerHTML.replace(/&nbsp;|<br>/gi, '');
	var unsetRegex = /^\s*(h[1-6]{1}|p)\s*{\s*}\s*$/;

	const rulesetArr = code.split(/}/g);

	switch (elementProperty) {
		case 'font-size':
			var validRegex =
				/^\s*h[1-6]{1}\s*{\s*font-size:\s*\d+(px|rem|em|ch|cm|mm|in|%|pt|pc|ex|vw|vh|vmin|vmax)\s*;\s*}\s*$/;

			var anyErrors = false;

			for (i = 0; i < rulesetArr.length - 1; i++) {
				rulesetArr[i] = rulesetArr[i] + '}';

				if (rulesetArr[i].match(validRegex)) {
					// Get first two characters of string. E.g. h1, h2, h3, etc.
					var selector = rulesetArr[i].match(/h[1-6]{1}/);
					var value = rulesetArr[i].match(
						/\d+(px|rem|em|ch|cm|mm|in|%|pt|pc|ex|vw|vh|vmin|vmax)/g
					);
					document.getElementById(
						'css-task-1-' + selector
					).style.fontSize = value;
				} else if (
					// If they are default value, don't count them as errors
					rulesetArr[i].replace(/\s+|\n+/g, '').match(unsetRegex)
				);
				else anyErrors = true;
			}

			if (anyErrors) {
				errorElement.style.opacity = '100%';
				errorElement.style.maxHeight = '1.5rem';
			} else {
				errorElement.style.opacity = '0%';
				errorElement.style.maxHeight = '0rem';
			}
			break;

		case 'font-family':
			// Allow only specific fonts to either <h2> or <p>
			var validRegex =
				/^\s*(h2|p)\s*{\s*font-family:\s*('Lora'|'Merriweather'|'Inter'|'Montserrat'|'Noto Sans Mono'|'JetBrains Mono'|'Cousine'|sans-serif|serif|monospace|cursive|fantasy|unset|,|\s+)+\s*;\s*}\s*$/;
			var anyErrors = false;

			for (i = 0; i < rulesetArr.length - 1; i++) {
				rulesetArr[i] = rulesetArr[i] + '}';

				if (rulesetArr[i].match(validRegex)) {
					// Removes everything after "{" in the ruleset
					// var selector = rulesetArr[i].replace(/\s*|\n*/g, '');
					var selector = rulesetArr[i].trim().match(/^h2|^p/g);

					// Removes everything before the ":". after the ";" and spaces if there are any
					var value = rulesetArr[i].match(
						/'Lora'|'Merriweather'|'Inter'|'Montserrat'|'Noto Sans Mono'|'JetBrains Mono'|'Cousine'|sans-serif|serif|monospace|cursive|fantasy|unset/g,
						''
					);

					document.getElementById(
						'css-task-2-' + selector
					).style.fontFamily = value;

					// If any code is invalid: display the error message
				} else anyErrors = true;
			}

			if (anyErrors) {
				errorElement.style.opacity = '100%';
				errorElement.style.maxHeight = '1.5rem';
			} else {
				errorElement.style.opacity = '0%';
				errorElement.style.maxHeight = '0rem';
			}
			break;
	}
}

//function tryJS(element) {
// 	p5.js
//}

function checkLang(element) {
	var lang = element.getAttribute('data-language');
	if (lang == 'html') tryHTML(element);
	else if (lang == 'css') tryCSS(element);
	else if (lang == 'js') tryJS(element);
}

var inputArray = document.querySelectorAll('input, .input');
for (i = 0; i < inputArray.length; i++) {
	inputArray[i].addEventListener('input', checkLang(this));
}
