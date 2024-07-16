function openportfolio() {
  document.getElementById("slide-portfolio").style.width = "950px"; // Adjust width as needed
}

function closeNav1() {
  document.getElementById("slide-portfolio").style.width = "0px";
 
}


function openabout() {
  document.getElementById("slide-about").style.width = "950px"; // Adjust width as needed
}

function closeNav2(){
  document.getElementById("slide-about").style.width = "0px"
}


function opentouch() {
  document.getElementById("slide-touch").style.width = "950px"; // Adjust width as needed
}

function closeNav3(){
  document.getElementById("slide-touch").style.width = "0px"
}


function showPage(pageId) {
  
  var pages = document.querySelectorAll('.page');
  pages.forEach(function(page) {
      if (page.id === pageId) {
          page.classList.add('active');
      } else {
          page.classList.remove('active');
      }
  });
}


