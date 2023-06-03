const password = 'pass';
if(password.length >= 12){
  console.log("password is a good length!");
} else if (password.length <= 12 && password.length >= 8){
  console.log('Nice one!');
} else if (password.length > 0 && password.length < 8){
    console.log('Not long enough!');
  } else {
    console.log('Please enter a password!')
  }
