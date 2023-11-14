// Add your code here

 const userData = {
    userName: "Bo Jackson",
    userEmail: "HumbleToTheEnd@gmail.com",
    id: "1",
 };
/*
 const configurationObj = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
    body: JSON.stringify(userData),
};
*/

 function submitData(name, email) {
return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({name, email}),
})
 .then(function (response) {
    return response.json();
 })
 .then(function (userData) {
    console.log(userData);
    document.body.innerHTML = userData.id
    // put the userData.id on the dom
 })
.catch(function (error) {
    alert("Bad things!");
    console.log(error.message)
    document.body.innerHTML = error.message
})
 };




