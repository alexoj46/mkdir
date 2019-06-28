 var submit = $('.submit')
 submit.on("click", addUser)

function addUser(event){
  event.preventDefault()
  var username = $('.username').val()
  localStorage.setItem('username', username)
}

var hello = $('.hello')
var usernames = localStorage.getItem("username")||""
hello.text(`Hello ${usernames}, welcome to MKDIR! Find your inspiration and share your work!`)



// function formHandler(event){
//   event.preventDefault()
//   console.log('hi')
//   addUser(event)
//   addImages(event)
//   addLinks(event)
// }
//
// var usernames = JSON.parse(localStorage.getItem("usernames"))||[]
//
// function addUser(event) {
//   event.preventDefault()
//   usernames.push($('.username').val())
//   console.log(usernames)
//   localStorage.setItem('usernames', JSON.stringify(usernames))
//   console.log(localStorage)
//
//   var retrieved = JSON.parse(localStorage.getItem("usernames"))
//   console.log(retrieved)
// }
//
// var images = JSON.parse(localStorage.getItem("images"))||[]
//
// function addImages(event){
//   event.preventDefault()
//   images.push($('.images').val())
//   console.log(images)
//   localStorage.setItem('images', JSON.stringify(images))
//   console.log(localStorage)
//
//   var returnedImages = JSON.parse(localStorage.getItem("images"))
//   console.log(returnedImages)
// }
//
// var links = JSON.parse(localStorage.getItem("links"))||[]
//
// function addLinks(event){
//   //event.preventDefault()
//   links.push($('.links').val())
//   //console.log(links)
//   localStorage.setItem('links', JSON.stringify(links))
//   //console.log(localStorage)
//
//   var returnedLinks = JSON.parse(localStorage.getItem("links"))
//   //console.log(returnedLinks)
// }
//
// function addDiv(){
// //var insertSpace = $('.insertSpace')
// var dropSelect = $('.dropdown').val()
// var classe = $(`.insertSpace${dropSelect}`)
//
//   var retrieved = JSON.parse(localStorage.getItem("usernames"))
// //  console.log(retrieved)
//   var returnedImages = JSON.parse(localStorage.getItem("images"))
//   var returnedLinks = JSON.parse(localStorage.getItem("links"))
//   for (i=0; i<retrieved.length; i++){
//   classe.append(`
//     <h2> ${retrieved[i]} </h2>
//     <h6> <a href=${returnedLinks[i]}>${returnedLinks[i]}</a> </h6>
//     <p> ${returnedImages[i]} </p>
//     `)}
// }
// addDiv()
