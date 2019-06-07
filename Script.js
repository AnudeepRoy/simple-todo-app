
clearAll = () =>{
	document.getElementById('task').value = '';
}



addTask = () =>{

	let info = document.getElementById('task').value

	let colors= ['info','success','warning','danger','primary'];
	
	let ran = Math.floor((Math.random()*((4-0)+1))+0);
	if(info){
	document.getElementById('tasks').insertAdjacentHTML ('beforeend',`
			<div class="alert alert-${colors[ran]} alert-dismissible fade show">
	  			<button type="button" class="close btn" data-dismiss='alert'><i class="fa fa-trash" aria-hidden="true"></i>
					</button>
	  				${info}
			</div>
		`)
	}
	document.getElementById('task').value = '';
}
