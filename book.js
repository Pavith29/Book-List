// selecting popbox popoverlay button
var popoverlay=document.querySelector(".pop-overlay")
var popbox=document.querySelector(".pop-box")
var addpop=document.getElementById("add-popup")

// selecting adding many books
addpop.addEventListener("click",function(){
    popoverlay.style.display="block"
        popbox.style.display="block"
})

// canceling book typing section
var cancelbook=document.getElementById("cancel-book")
cancelbook.addEventListener("click",function(event){
    event.preventDefault()
     popoverlay.style.display="none"
        popbox.style.display="none"
})

// selecting addbook,addtitle,addauthor,add description
var container=document.querySelector(".container")
var booktitle=document.getElementById("book-title")
var bookauthor=document.getElementById("book-author")
var bookdes=document.getElementById("book-des")
var addbook=document.getElementById("add-book")


addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
     div.setAttribute("class","book-container")
     div.innerHTML=`<h3>${booktitle.value}</h3>
            <h6>${bookauthor.value}</h6>
            <p>${bookdes.value}</p>
            <button onclick='deletebook(event)'>Delete </button>`
     container.append(div)
     popoverlay.style.display="none"
     popbox.style.display="none"
})

function deletebook(event){
    event.target.parentElement.remove()
}