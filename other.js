document.addEventListener("DOMContentLoaded", function() {
    let tit = document.getElementById("me");
    let king = document.getElementById("king");
    let queen = document.getElementById("queen");
    let jack = document.getElementById("jack");

    let S1b = document.getElementById("circle1");
    let s1 = document.getElementById("S1");

     let S2b = document.getElementById("circle2");
    let s2 = document.getElementById("S2");

     let S3b = document.getElementById("circle3");
    let s3 = document.getElementById("S3");

    let stay = document.getElementById("staying")


    king.addEventListener("click", function(){
        king.classList.add("spining");

        setTimeout(function() {
            king.classList.remove("spining"); } , 1000);
        

    });

    queen.addEventListener("click", function(){
        queen.classList.add("spining");

        setTimeout(function() {
            queen.classList.remove("spining"); } , 1000);
        

    });
   

    jack.addEventListener("click", function(){
        jack.classList.add("spining");

        setTimeout(function() {
            jack.classList.remove("spining"); } , 1000);
        

    });

    S1b.addEventListener("click", function(){
        s1.classList.add("S1ani");

    })
    S2b.addEventListener("click", function(){
        s2.classList.add("S2ani");
        stay.classList.add("quest")

    })
    S3b.addEventListener("click", function(){
        s3.classList.add("S3ani");

    })

    
   
    


    tit.addEventListener("mouseover", function(e){
        e.target.style.color = "red";

        
    });
    tit.addEventListener("mouseout", function(e){
        e.target.style.color = "black";


    })

   


    

});

/* let cir = document.getElementById("circle1")
    cir.addEventListener("mouseover", function(){
        cir.style.backgroundColor = "yellow";
    });
    */