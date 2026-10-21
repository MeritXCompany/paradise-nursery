# Paradise Nursery

**Paradise Nursery** is a responsive online plant shop built with React and Redux Toolkit. It lets plant lovers browse handpicked houseplants by collection, add plants to a shopping cart, adjust quantities, remove items, and review their order total before checkout.

The application was created for the Final Project: Paradise Nursery Shopping Application.

## Highlights

- A botanical editorial landing page with the Paradise Nursery name, a custom background illustration, and a **Get Started** button
- Eighteen unique houseplants grouped into three collections of six
- Local SVG thumbnail illustrations for every plant, so the project has no external image dependencies
- A shared navigation bar on every page with links to Home, Plants, About, and Cart
- A live cart badge that updates as plants are added or quantities change
- Redux Toolkit-powered cart state with `addItem`, `removeItem`, and `updateQuantity` reducers
- A full shopping cart page with unit prices, per-item totals, quantity controls, delete buttons, and an order summary
- A checkout button that displays a friendly "coming soon" message
- A continue shopping button that returns to the product listing
- An About Us page with the nursery's story, values, and contact details
- Responsive layouts and accessible labels throughout the experience

## Tech Stack

- React 19
- Vite 8
- Redux Toolkit and React Redux
- React Router
- Fraunces and Instrument Sans variable fonts, self-hosted with Fontsource
- Hand-authored SVG plant artwork and CSS

## Pages

| Route | Page |
| --- | --- |
| `/` | Paradise Nursery landing page |
| `/plants` | Product listing grouped into three plant categories |
| `/cart` | Shopping cart and order summary |
| `/about` | About Paradise Nursery |

## Project Structure

```text
paradise-nursery/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── grain.svg                # Subtle paper texture
│   │   ├── landing-bg.svg           # Botanical line-art backdrop
│   │   └── plants/                  # 18 local plant illustrations
│   ├── components/
│   │   ├── AboutUs.jsx              # Company story and details
│   │   ├── CartItem.jsx             # Shopping cart page
│   │   ├── Icons.jsx                # Shared inline SVG icons
│   │   ├── Navbar.jsx               # Navigation and live cart badge
│   │   └── ProductList.jsx          # Categorized product listing
│   ├── data/
│   │   └── plants.js                # Plant catalog and image imports
│   ├── redux/
│   │   ├── CartSlice.jsx            # Cart reducers and selectors
│   │   └── store.js                 # Redux store configuration
│   ├── utils/
│   │   └── currency.js              # USD price formatting
│   ├── App.css                      # Landing background and all app styles
│   ├── App.jsx                      # Landing page, routes, and footer
│   ├── index.css                    # Global theme and base styles
│   └── main.jsx                     # App entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Plant Collections

1. **Tropical Favorites** — Monstera Deliciosa, Fiddle Leaf Fig, Rubber Plant, Bird of Paradise, Philodendron Brasil, ZZ Plant
2. **Succulents & Easy Care** — Snake Plant, Aloe Vera, Jade Plant, Echeveria, Golden Pothos, Spider Plant
3. **Blooms & Calm** — Peace Lily, Anthurium, Calathea Orbifolia, Boston Fern, Chinese Evergreen, Parlor Palm

## Cart Behavior

- Cart state is managed by three reducers: `addItem`, `removeItem`, and `updateQuantity`.
- **Add to Cart** adds a plant with a quantity of one and is disabled after the plant is added.
- The cart badge in the navigation bar shows the total number of items, including quantities.
- The **+** and **−** buttons increase and decrease a plant's quantity.
- Decreasing a quantity of one removes that plant from the cart.
- The delete button removes an entire plant from the cart.
- The order summary calculates the subtotal and total dynamically from the cart state.
- **Checkout** displays a "Checkout is coming soon" message.
- **Continue Shopping** links back to `/plants`.

## Getting Started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Required Project Files

The final project submissions can be found at these paths:

- `README.md`
- `src/components/AboutUs.jsx`
- `src/App.css`
- `src/App.jsx`
- `src/redux/CartSlice.jsx`
- `src/components/ProductList.jsx`
- `src/components/CartItem.jsx`

## Design Notes

The experience follows a botanical editorial direction: asymmetric layouts, fine rules, generous white space, sharp corners, and a restrained palette of forest green, warm ivory, sand, and terracotta. Fraunces carries the display typography while Instrument Sans handles interface text at smaller sizes. Hand-drawn SVG plants, transparent product artwork, and a subtle paper grain keep the shop tactile and self-contained without external image dependencies.

---

Grown with patience in Portland, Oregon.
