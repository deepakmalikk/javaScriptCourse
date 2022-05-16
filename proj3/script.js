var courses =[
    {name: "C ",
      price: "1.55"
    },
    {name: "C++ ",
      price: "2.99"
    },
    {name: "ReactJS ",
      price: "2.16"
    },
    {name: "Python",
      price: "2.12"
    },
    {name: "Angular ",
      price: "2.09"
    },
    
    {name: "django",
      price: "2.09"
    },
    
]

function generateList(){

    const ul = document.querySelector(".list-group")
     ul.innerHTML=""
    courses.forEach(course =>{
    const li =document.createElement("li");
    li.classList.add("list-group-item");
    
    const name = document.createTextNode(course.name);
    li.appendChild(name)
   
    const span =document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode(" $ "+course.price);
    span.appendChild(price);
    
    li.appendChild(span)
    ul.appendChild(li)  
    });

}

window.addEventListener("load",generateList)


const btn = document.querySelector(".sort-btn")

btn.addEventListener("click" ,()=>{
    courses.sort((a,b)=> a.price-b.price)
      generateList();
 
   
})
