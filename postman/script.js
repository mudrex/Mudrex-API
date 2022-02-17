var timeInSeconds = Math.floor(Date.now() / 1000).toString();
var sigString = (
  client_id + timeInSeconds + user_id
);

SECRET = CryptoJS.HmacSHA256(
  sigString,
  client_secret
).toString().toUpperCase();


// Setting enviroment variable.
pm.environment.set("SECRET_KEY", SECRET) // Can be accessed as {{SECRET_KEY}}

