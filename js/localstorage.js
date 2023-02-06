
//uso del local storage
//mandar información
localStorage.setItem("name", "roberto")

//obtener información
console.log(localStorage.getItem("name"))

//borrar toda la información
//localStorage.clear()

//borrar informacion específica
localStorage.removeItem("name")

//mandar arreglo u ojeto al local storage

const names = ["emily", "luis","laexis", "ian", "sandra","roberto"]
localStorage.setItem("names", JSON.stringify(names))

//convertir un string a un arreglo u objeto
console.log(JSON.parse(localStorage.getItem("names")))