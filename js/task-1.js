const categoryList = document.querySelector("#categories");

console.log(`Numbers of categories: ${categoryList.children.length}`);
[...categoryList.children].forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
