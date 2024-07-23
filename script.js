const images = [
    "bali.jpg",
    "egypе.jpg",
    "Greece.jpg",
    "india.jpg",
    "italy.jpg",
    // "https://images.unsplash.com/photo-1617293541287-5530026ca9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    // "https://images.unsplash.com/photo-1554747454-e0c176da447c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    // "https://images.unsplash.com/photo-1668854084710-386c7d25f771?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
    ];

let cuurentImg = 0;

document.getElementById("right").addEventListener("click", function(){
    cuurentImg--;
    
    if (cuurentImg == -1) {
        cuurentImg = images.length - 1;
    }

    document.getElementById("image").src = images[cuurentImg];
});

document.getElementById("left").addEventListener("click", function(){
    cuurentImg++;
    
    if (cuurentImg == images.length){
        cuurentImg = 0;
    }

    document.getElementById("image").src = images[cuurentImg];
});