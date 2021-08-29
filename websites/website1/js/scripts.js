
// Mobile Menu
document.getElementById("hamburguer-icon").onclick = function () {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}
document.getElementById("sliding-header-menu-close-button").onclick = function () {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";
}

// About us Tab

var aboutUs = {
  "Mission": "MY mission now is to learn web development properly and become a good developer",
  "Vision": "Praesent ut lacinia neque, faucibus suscipit quam. Duis sed nunc rutrum, tempor mi at, euismod nibh.",
  "Values": "<ul><li>Nunc iaculis</li><li>Donec dictum fringilla</li><li>Duis convallis tortor ultrices</li><li>Curabitur in est lectus</li><li>Maecenas condimentum elit</li></ul>"
};

var unseletectedColor = "#646872";
var seletectedColor = "#2A2D34";

var aboutUsTabs =document.getElementsByClassName("single-tab");
for(var a = 0 ;a<aboutUsTabs.length;a++){
  aboutUsTabs[a].onclick = function () {
    var clickedValue = this.innerHTML;
    document.getElementById("box-text").innerHTML = aboutUs[clickedValue]

    for(var b = 0 ;b<aboutUsTabs.length;b++){
      aboutUsTabs[b].style.backgroundColor = unseletectedColor;
      aboutUsTabs[b].style.fontWeight = "normal";
    }
    this.style.backgroundColor = seletectedColor;
    this.style.fontWeight = "bold";

  }
}

// Service slider

var ourServices = [
  {
    'title': 'Web design',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Digital Marketing',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }
  
];
var previousArrow = document.getElementById("service-previous");
var nextArrow = document.getElementById("service-next");
var serviceText = document.getElementById("service-text");
var serviceTitle = document.getElementById("service-title");

var currentService = 0 ; 


nextArrow.onclick =function () {
  if (currentService == (ourServices.length -1 )){
    currentService = 0;
  }else{
    currentService += 1;
  }

  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  serviceTitle.innerHTML = title;
  serviceText.innerHTML = text;
}

previousArrow.onclick =function () {
  if (currentService ==   0 ){
    currentService = ourServices.length -1;
  }else{
    currentService -= 1;
  }
  var title = ourServices[currentService].title;
  var text = ourServices[currentService].text;
  serviceTitle.innerHTML = title;
  serviceText.innerHTML = text;
}


// Footer

document.getElementById("current_year").innerHTML = 2021;


  
   


   