let name = document.querySelector(".name");
let caption = document.querySelector(".caption");
let btn = document.querySelector(".btn");
let post = document.querySelector(".post");

btn.addEventListener("click", () => {
  if (name.value.trim() === "" || caption.value.trim() === "") {
    post.innerHTML = `<p>Enter name and caption</p>`;
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

let arr = [];

function display() {
  post.innerHTML = "";
  arr.map((data) => {
    post.innerHTML += `<div class="card m-2" style="width: 16.5rem;">
                <div class="card-body">
                    <h5 class="card-title">${data.name}</h5>
                    <p class="card-text">${data.caption}</p>
                    <button href="#" class="btn btn-primary">Edit</button>
                    <button href="#" class="btn btn-danger">Delete</button>
                </div>
            </div>`;
  });
}
