const sbutton     	= document.querySelector('.nbrSubmit');
const txtbox1     	= document.querySelector('.nbrField1');
const txtbox2    	= document.querySelector('.nbrField2');
const txtlabel     	= document.querySelector('.displaylabel');



	function dispVal(){
		let strq1 = Number(txtbox1.value);
		let strq2 = Number(txtbox2.value);

		function sum(a, b){
			return a + b;
		}

		let result = sum(strq1, strq2);
		let anstring = String(result);

		txtlabel.textContent = anstring;
		nbrField1.value = '';
		nbrField2.value = '';
	}
	sbutton.addEventListener('click', dispVal);	