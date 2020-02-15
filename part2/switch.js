const sbutton     	= document.querySelector('.nbrSubmit');
const txtbox     	= document.querySelector('.nbrField');
const txtlabel     	= document.querySelector('.displaylabel');

	function dispVal(){
		let strq = Number(txtbox.value);

		switch (strq) {
		  case 3:
		  	txtlabel.textContent = 'Too enough brah'
		    break;
		  case 4:
		    txtlabel.textContent = 'Damn Right!'
		    break;
		  case 5:
		    txtlabel.textContent = 'Too much brah'
		    break;
		  default:
		    txtlabel.textContent = 'wtf'
		    break;
		}

		nbrField.value = '';
	}
	sbutton.addEventListener('click', dispVal);	