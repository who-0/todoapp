const lis = document.querySelectorAll("#todo-li");

lis.forEach((li) => {
  li.addEventListener("click", (_) => {
    li.classList.toggle("todo-done");
  });
});
