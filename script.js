//your JS code here. If required.

if(localStorage.getItem('username') && localStorage.getItem('password')){
	var existingElement = document.createElement('button');
	existingElement.id = 'existing';
	existingElement.textContent = 'Login as existing user';

	let existingName = localStorage.getItem('username');

	alert(`Logged in as ${existingName}`);
}


const submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', getDetails)

function getDetails(event){
	event.preventDefault();
	const userName = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const remember = document.getElementById('checkbox').checked;

	if(remember){
		localStorage.setItem('username', userName);
		localStorage.setItem('password', password);
	}
	else{
		localStorage.removeItem('username');
		localStorage.removeItem('password');
	}
	
	alert(`Logged in as ${ userName}`);
}


















