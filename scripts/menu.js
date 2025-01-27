document.addEventListener("DOMContentLoaded", () => {
  const menuContainer = document.getElementById("menu-container");

  // Determine the current page based on the file name
  const pagePath = window.location.pathname;
  let filterTag;

  if (pagePath.includes("menu.html")) {
    filterTag = "menu"; // Show all items
  } else if (pagePath.includes("bf-specials.html")) {
    filterTag = "breakfast-special";
  } else if (pagePath.includes("lunch-combos.html")) {
    filterTag = "weight-watchers"; //this should be lunch-combos
  } else if (pagePath.includes("drinks.html")) {
    filterTag = "drink";
  }

  // Fetch menu data from the JSON file
  fetch("/scripts/menu.json")
    .then((response) => response.json())
    .then((menuItems) => {
      const filteredMenu = filterTag === "menu" 
        ? menuItems // Show all items for menu.html
        : filterMenu(menuItems, filterTag); // Filter for other pages
      displayMenu(filteredMenu, menuContainer);
    })
    .catch((error) => {
      console.error("Error fetching menu data:", error);
      menuContainer.innerHTML = "<p>Sorry, we couldn't load the menu items.</p>";
    });
});

// Filter menu items based on a specific tag
function filterMenu(menuItems, tag) {
  return menuItems.filter((item) => item.tags.includes(tag));
}

// Display menu items in the container
function displayMenu(menuItems, container) {
  if (menuItems.length === 0) {
    container.innerHTML = "<p>No menu items available.</p>";
    return;
  }

  container.innerHTML = menuItems
    .map(
      (item) => `
      <div class="menu-item">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>
    `
    )
    .join("");
}
