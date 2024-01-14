const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ul = document.querySelector("#ingredients");

// for (let i = 0; i < ingredients.length; i++)
ingredients.map((ingredient) => {
  const li = document.createElement("li");

  const text = document.createTextNode(ingredient);
  li.appendChild(text);
  li.classList.add("item");
  ul.appendChild(li);
});
