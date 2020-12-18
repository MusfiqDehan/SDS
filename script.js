document.querySelector(".mode").addEventListener("click", function(){
  
  document.querySelector("body").classList.toggle("dark-mode");
  
  if(document.querySelector(".mode").innerText === "Dark Theme") {
        document.querySelector(".mode").innerText = "White Theme";
    }
    else {
        document.querySelector(".mode").innerText = "Dark Theme";
    }
});
