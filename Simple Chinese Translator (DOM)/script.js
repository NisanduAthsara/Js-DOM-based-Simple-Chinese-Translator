document.getElementById("form").addEventListener("click",
	function(event){
		event.preventDefault();
	}
)

let translating_word;
function myfunc(){
	let user_word = document.getElementById("word").value;
	let final_word = user_word.toLowerCase();
	let translating_word_display = document.querySelector(".transled-p");
	document.querySelector(".copy-btn").style.display = "block";

	switch(final_word){
		case 'one':
			translating_word_display.innerHTML = "Translated Word : <span>Yī</span>";
			translating_word = "Yī";
			break;
		case 'two':
			translating_word_display.innerHTML = "Translated Word : <span>Èr</span>";
			translating_word = "Èr";
			break;
		case 'three':
			translating_word_display.innerHTML = "Translated Word : <span>Sān</span>";
			translating_word = "Sān";
			break;
		case 'four':
			translating_word_display.innerHTML = "Translated Word : <span>Sì</span>";
			translating_word = "Sì";
			break;
		case 'five':
			translating_word_display.innerHTML = "Translated Word : <span>Wǔ</span>";
			translating_word = "Wǔ";
			break;
		case 'six':
			translating_word_display.innerHTML = "Translated Word : <span>Liù</span>";
			translating_word = "Liù";
			break;	
		case 'seven':
			translating_word_display.innerHTML = "Translated Word : <span>Qī</span>";
			translating_word = "Qī";
			break;	
		case 'eight':
			translating_word_display.innerHTML = "Translated Word : <span>Bā</span>";
			translating_word = "Bā";
			break;	
		case 'nine':
			translating_word_display.innerHTML = "Translated Word : <span>Jiǔ</span>";
			translating_word = "Jiǔ";
			break;	
		case 'ten':
			translating_word_display.innerHTML = "Translated Word : <span>Shí</span>";
			translating_word = "Shí";
			break;
		default:
			translating_word_display.innerHTML = "<span>Sorry I can't Translate!</span>";
			document.querySelector(".copy-btn").style.display = "none";
			break;	

	}
	
}

function resetfun(){
	location.reload();
}
 
function copytxt(){
	navigator.clipboard.writeText(translating_word);
	alert("Text is copied to clipboard!");
} 