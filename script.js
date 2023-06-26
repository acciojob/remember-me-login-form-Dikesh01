//your JS code here. If required.


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


















