//obtener los elementos del DOM
const form= document.getElementById("form")
const email = document.getElementById("email")
const password = document.getElementById ("password")
const info = document.getElementById("info")


form.addEventListener("submit", function(evt){
    evt.preventDefault()
    let credentials = {
        email : email.value,
        password : password.value
    }
    localStorage.setItem("credentials", JSON.stringify(credentials))
    let UserInfo = JSON.parse(localStorage.getItem("credentials"))
    info.innerHTML= `
        <h1>${UserInfo.email}</h1>
        <h2>${UserInfo.password}</h2>
        <button class= "btn btn-danger" onclick="deleteUserInfo()">Eliminar </button>
    `
    evt.target.reset()
})
function deleteUserInfo(){
    localStorage.removeItem("credentials")
}
