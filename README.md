 # KFC Clone 🧑‍🍳

A responsive clone of the KFC website built with **HTML · CSS · JavaScript**. Users can search, sort, filter, and manage their cart with intuitive UI and functionality.

---

## 🚀 Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile.
- **Menu Display**: Dynamically generated cards showcasing menu items.
- **Search**: Real-time filtering of menu by item name or description.
- **Sort**: Sort items by name or price, ascending/descending.
- **Filter**: Filter by categories like chicken, burgers, sides, etc.
- **Cart Management**:
  - Add items to cart.
  - Adjust quantities and remove items.
  - View total price update live.
- **Card CRUD**:
  - Create new menu item cards on the fly.
  - Delete existing cards dynamically.
- **Persisted Cart (optional)**: Keeps the cart state even after page reloads (if using `localStorage`).

---

## 📁 Project Structure

/
├── index.html # Landing/home page
├── menu.html # Full menu with search, sort, filter
├── cartpage.html # Shopping cart interface
├── deals.html # Deals/promotions page
├── scripts/ # JavaScript files
│ └── script.js # Handles data fetching and interactions
├── styles/ # CSS files
│ └── style.css # Responsive, grid & flex layouts
└── README.md # This file

---

## 💻 Usage

1. Clone this repo:
   ```bash
   git clone https://github.com/princesinghyadav/KFC-clone.git


Open any .html file in your browser (e.g. index.html).

Navigate to Menu to browse, search, sort, filter, and add items.

Access Cart to update quantities or remove items.

(Optional) To enable cart persistence, ensure JavaScript stores cart data in localStorage.





🛠️ How It Works
Data Loading: Items are fetched from a JSON file or array in script.js.

Card Creation: JS dynamically creates item cards with image, name, price, and buttons (“Add to Cart”, “Delete”).

Search / Sort / Filter:

On user input/action, JS filters/sorts the item array and re-renders cards.

Cart Operations:

Add to Cart: Increments existing item or adds new entry.

Remove or Adjust Quantity: Controls inside cart page.

Total Update: JS recalculates total on every change.

Responsiveness: CSS media queries adjust layouts for smaller screens.





🛠️ Tech Stack
HTML5

CSS3 (Flexbox/Grid + media queries)

Vanilla JavaScript (ES6+ & DOM Manipulation)

🔧 Getting Started
No backend needed — fully front‑end.

To maintain cart data across sessions, localStorage is used.

Optionally, add a JSON‑server or backend to convert this to full-stack.






📌 To Enhance
Integrate a local JSON‑server or backend for data persistence.

Add user authentication (sign-in/sign-up).

Store order history & user profiles.

Connect real payment gateway.

Add animations and deeper UI polish.





✨ Credits
Built by Prince Kumar Yadav — a web developer passionate about crafting responsive, dynamic experiences






📄 License
This project is open‑source and available under the MIT License.

☎️ Contact
Email: princesinghyadav017@gmail.com
View more projects on GitHub

Enjoy browsing and feel free to contribute! 🎉
