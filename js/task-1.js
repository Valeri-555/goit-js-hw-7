
const listItem = document.querySelectorAll('.item').length;
console.log('Number of categories:', listItem);

const items = document.querySelectorAll("#categories .item");


items.forEach((item) => {
    const headerText = item.querySelector("h2").textContent;
    const numberofElements = item.lastElementChild.children.length;

    console.log('Category:', headerText);
    console.log('Elements:', numberofElements);
});