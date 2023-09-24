import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

const filtered = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(filtered);

  const filterCategory = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    let filteredItems = items.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterCategory={filterCategory} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
}

export default App;
