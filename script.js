var btn = document.getElementById("galleryBtn");
var gal = document.getElementById("gallery");
var i = 0;
btn.addEventListener("click", (e)=>{
    if(i%2==0){
        gal.style.display="block";
        i++;
    }
    else{
        gal.style.display="none";
        i++
    }
        
})