   if (localStorage.getItem('username') && localStorage.getItem('password')) {
      var existingButton = document.createElement('button');
      existingButton.id = 'existing';
      existingButton.textContent = 'Login as existing user';
      document.body.appendChild(existingButton);

      existingButton.addEventListener('click', function() {
        var savedUsername = localStorage.getItem('username');
        alert('Logged in as ' + savedUsername);
      });
    }

    document.getElementById('submit').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission

      var username = document.getElementById('username').value;
      var password = document.getElementById('password').value;
      var rememberMe = document.getElementById('checkbox').checked;

      if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      alert('Logged in as ' + username);
    });