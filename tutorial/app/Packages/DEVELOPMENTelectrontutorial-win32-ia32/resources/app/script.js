const electron = require('electron');

const { ipcRenderer } = electron;

$(document).ready(()=>{
	$('form').on('submit',(event)=>{
		
		event.preventDefault();
		const num1 = parseInt($("[name=num1]")[0].value);
		const num2 = parseInt($("[name=num2]")[0].value);
		num={};
		num={
			num1:num1,
			num2:num2
		}
		ipcRenderer.send('numbers:submit',num);

	});

	ipcRenderer.on('sum:send',(event,sum)=>{
			
			$('#sum').html('The Sum is '+sum);
		});

})