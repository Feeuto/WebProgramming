// Creating the close button to the already existing todos....
//They are not created with the function createNewElement()
var myList = document.getElementsByTagName("li");
var index;

for(index = 0; index < myList.length; index++){
    var existingSpanTag = document.createElement("span");
    var existingTxt = document.createTextNode("\u00D7");

    existingSpanTag.className = "close";
    existingSpanTag.appendChild(existingTxt);
    myList[index].appendChild(existingSpanTag);
}

// Close Button 
var closeButton = document.getElementsByClassName("close");

for(i = 0; i < closeButton.length; i++){
    closeButton[i].onclick=function(){
        var theDiv = this.parentElement;
        theDiv.style.display = "none";
    }
}

// Creating todo
function createNewElement(){ 
    var li = document.createElement('li'); /* list created <li>*/ 
    var theInputValue = document.getElementById("the_input").value; /* Value in the input*/
    var textNode = document.createTextNode(theInputValue); /* Create text node with the input value */

    li.appendChild(textNode); /* put the created text inside the <li></li>*/

    /* Checking that the input is not empty*/
    if(theInputValue === ''){
        alert("the input is empty")
    }
    else{
        document.getElementById("the_ul").appendChild(li);
    }

    theInputValue.value = "";
    
    var theSpanTag = document.createElement("span");
    var txt = document.createTextNode("\u00D7");// putting x sign to a close button

    theSpanTag.className = "close";
    theSpanTag.appendChild(txt);
    li.appendChild(theSpanTag);

    //in order to remove items when you click on close button 
    for(i = 0; i < closeButton.length; i++){
        closeButton[i].onclick=function(){
            var theDiv = this.parentElement;
            theDiv.style.display = "none";
        }
    }
}

//to sign which line is checked or not when you click on it
var listUl = document.querySelector('ul');
listUl.addEventListener('click', function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle('checked');
    }
}); 

