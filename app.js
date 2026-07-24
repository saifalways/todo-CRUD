"use strict";

let name = document.querySelector(".name");
let caption = document.querySelector(".caption"); 
let post = document.querySelector(".post");
let updateBtn = document.querySelector(".updateBtn");
let postBtn = document.querySelector(".postBtn");

let arr = [];

var indexNum = null;


postBtn.addEventListener("click", () => {
  if (name.value.trim() === "" || caption.value.trim() === "") {
    post.innerHTML = `Enter a name and caption`;
    return;
  } else {
    arr.push({
      name: name.value,
      caption: caption.value,
    });
    display();
    name.value = "";
    caption.value = "";
  }
});

updateBtn.addEventListener("click",()=>{ 

      arr[indexNum].name = name.value;
      arr[indexNum].caption = caption.value;

      postBtn.style.display = "block";
      updateBtn.style.display = "none"; 
      display();
      name.value = "";
      caption.value = "";
});

 let display = ()=> {
  post.innerHTML = "";
  arr.forEach((data) => {
    post.innerHTML += `<div class="card m-2" style="width: 16.5rem;">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">${data.caption}</p>
                    <button class="btn btn-primary editBtn">Edit</button>
                    <button class="btn btn-danger dltBtn">Delete</button>
                </div>
            </div>`;
  });

  let dltBtn = document.querySelectorAll(".dltBtn");                                  //? when we use querySelectorAll it returns us a nodelist.

  // let newname = Array.from(dltBtn);                                                       //! convert node-list to array 

  [...dltBtn].map((item,index) => {                     //?   [...] is spread oparetor which returns us array from nodelist.
    item.addEventListener("click", () => {
      console.log(index);
      arr.splice(index, 1);
      display();
      
    });
  });
 
  
  let editBtn = document.querySelectorAll(".editBtn"); 
  
  let allCard = document.querySelectorAll(".card");

  [...editBtn].forEach((eItem, eIndex) => {                 
    eItem.addEventListener("click", () => { 
      
      indexNum = eIndex;
      
      name.value = arr[eIndex].name;
      caption.value = arr[eIndex].caption;
      
      postBtn.style.display = "none";
      updateBtn.style.display = "block";   


      allCard.forEach((carD, cardIndex)=>{
          if(cardIndex !== eIndex){
            carD.classList.add("blur-card");
          }
      });

      editBtn[eIndex].disabled = true;
      dltBtn[eIndex].disabled = true;
    });
  }); 
};
