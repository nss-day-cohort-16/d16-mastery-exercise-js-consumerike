checkHeight();
var catchem = document.getElementById('catchem');
catchem.addEventListener("click", handleClicks);
catchem.addEventListener("keyup", handleKeyUp);

function handleKeyUp (event) {
	if (event.keyCode == 13) {
		checkHeight();
		
	}
}


function handleClicks (event) {
	if (submit === event.target) {
		checkHeight();
	}
}

var submit = document.getElementById('submit')

function checkHeight() {
	var inputHeight = document.getElementById('height').value;

	if (inputHeight) {
		checkCharacter(inputHeight);
	}
	else {
		alert("Please enter in a height.");
	}
}

function checkCharacter (inputHeight) {
	var inputCharacter = document.getElementById('character').value;
	if (inputCharacter) {
		 conditions(inputCharacter, inputHeight);
	}
	else {
		alert("Please enter in a character");
	}
}

function conditions (inputCharacter, inputHeight) {
	var oddTree = {
		height: inputHeight,
		character: inputCharacter
	};
	if (inputCharacter && inputHeight)  {
		growTree(oddTree);
	}

	// growTree(oddTree);
}


function growTree (oddTree) {
	
	var figure = oddTree.character;
	var bucket = "";
	var space = " ";


	  for (var i = 0; i < oddTree.height;  i++) {
	  	bucket = oddTree.character;
	    bucket = space.repeat(oddTree.height - i) + bucket;
	    bucket += figure.repeat(i * 2);
	  	console.log(bucket);
	  }

}






