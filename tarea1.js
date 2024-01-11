const categories = document.querySelectorAll("#categories > .item");
console.log("number of categories", categories.length);

categories.forEach((category) => {
  const title = category.querySelector("h2").textContent;
  const items = category.querySelectorAll("li").length;
  console.log(`Category: ${title} - number of items: ${items}`);
});
