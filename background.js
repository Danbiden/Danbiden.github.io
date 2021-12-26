const image= ["img/bg0.jpeg", "img/bg1.jpeg", "img/bg2.jpeg"];


const images = ["https://images.unsplash.com/photo-1587978191773-ae3cd9e26501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGVuZ2xhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1487762488615-8a011458b53e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGVuZ2xhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
                "https://images.unsplash.com/photo-1560706834-c8b400d29d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTJ8fGVuZ2xhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

const backgroundImage = "url('"+ chosenImage +"')"; 
document.body.style.backgroundImage = backgroundImage;

//  document.body.style.backgroundImage = "url('./img/bg2.jpeg')";
