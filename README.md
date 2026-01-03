# FakeStore E-Commerce Site

A full-featured e-commerce shopping cart application built with React and Vite. Originally started as The Odin Project's Shopping Cart project, it evolved into a comprehensive online shopping experience with cart management, wishlist functionality, product search, and responsive design.

## 🎯 Project Overview

This project demonstrates modern React development practices with a real-world application that includes:

- **Product Browsing**: Browse products across multiple categories with pagination
- **Shopping Cart**: Add/remove items, adjust quantities, and view cart totals with tax and shipping calculations
- **Wishlist**: Save favorite items for later
- **Product Search**: Search across all products with instant results
- **Product Details**: View detailed product information with image carousels and similar product recommendations
- **Responsive Design**: Fully responsive UI built with Tailwind CSS
- **Persistent Storage**: Cart and wishlist data persists across sessions using localStorage

## 🛠️ Technology Stack

### Core Technologies

- **React 19.2.0** - Modern UI library with hooks
- **React Router 7.11.0** - Client-side routing and navigation
- **Vite 7.2.4** - Fast build tool and development server
- **Tailwind CSS 4.1.18** - Utility-first CSS framework

### Development Tools

- **ESLint** - Code linting and quality assurance
- **React Responsive** - Responsive design utilities
- **PropTypes** - Runtime type checking for React props

### Data Source

- **DummyJSON API** - External API for product data (https://dummyjson.com)

## 📁 Project Structure

```
odin-fakestore-site/
├── src/
│   ├── api/                    # API integration layer
│   │   └── DummyJSON.js       # API wrapper for DummyJSON endpoints
│   │
│   ├── assets/                 # Static assets
│   │   ├── fonts/             # Custom fonts
│   │   ├── icons/             # SVG icons
│   │   └── images/            # Images and graphics
│   │
│   ├── components/            # React components organized by feature
│   │   ├── cart/              # Cart-specific components
│   │   │   ├── CartItem.jsx
│   │   │   └── OrderSummary.jsx
│   │   │
│   │   ├── common/            # Reusable components
│   │   │   ├── ActionButton.jsx
│   │   │   ├── AddToCartButton.jsx
│   │   │   ├── AddToWishlistButton.jsx
│   │   │   ├── BackButton.jsx
│   │   │   ├── Counter.jsx
│   │   │   ├── DeleteButton.jsx
│   │   │   ├── ErrorPrompt.jsx
│   │   │   ├── IconButton.jsx
│   │   │   ├── OutlineButton.jsx
│   │   │   ├── SearchField.jsx
│   │   │   ├── SlidingLoader.jsx
│   │   │   ├── StatefulCarousel.jsx
│   │   │   ├── StatelessCarousel.jsx
│   │   │   └── Loader/
│   │   │
│   │   ├── home/              # Home page components
│   │   │   ├── Brand.jsx
│   │   │   ├── CallToAction.jsx
│   │   │   ├── Categories.jsx
│   │   │   ├── CategoryCard.jsx
│   │   │   ├── ExclusiveDeals.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── HeroActionButton.jsx
│   │   │   └── SimpleProductCard.jsx
│   │   │
│   │   ├── layout/            # Layout components
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── NavBar.jsx
│   │   │   └── NavItem.jsx
│   │   │
│   │   ├── shop/              # Shop page components
│   │   │   ├── CategoryChip.jsx
│   │   │   ├── Paginator.jsx
│   │   │   └── ProductCard.jsx
│   │   │
│   │   └── wishlist/          # Wishlist components
│   │       └── WishlistItem.jsx
│   │
│   ├── constants/             # Application constants
│   │   ├── exclusiveDeals.js
│   │   ├── features.js
│   │   ├── navSections.js
│   │   ├── productExceptions.js
│   │   ├── productLimitPerPage.js
│   │   └── topCategories.js
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useActiveSection.js
│   │   ├── useCarousel.js
│   │   ├── useCategories.js
│   │   ├── useMultipleProducts.js
│   │   ├── useProduct.js
│   │   ├── useProductsByCategory.js
│   │   ├── useSearchProduct.js
│   │   └── useUserProductDataCollection.js
│   │
│   ├── models/                # Data models
│   │   └── userProductData.js
│   │
│   ├── pages/                 # Page components (route views)
│   │   ├── Cart.jsx
│   │   ├── Error.jsx
│   │   ├── Home.jsx
│   │   ├── Product.jsx
│   │   ├── Search.jsx
│   │   ├── Shop.jsx
│   │   └── Wishlist.jsx
│   │
│   ├── routes/                # Routing configuration
│   │   └── routes.jsx
│   │
│   ├── utils/                 # Utility functions
│   │   └── storage.js
│   │
│   ├── App.css               # App-level styles
│   ├── App.jsx               # Root App component
│   ├── index.css             # Global styles
│   └── main.jsx              # Application entry point
│
├── public/                    # Public static assets
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js           # Vite configuration
├── eslint.config.js         # ESLint configuration
├── vercel.json              # Vercel deployment config
└── README.md                # Project documentation
```

## 🏗️ Architecture & Design Patterns

### Component Architecture

The application follows a **modular component architecture** organized by feature:

- **Pages**: Top-level route components (Home, Shop, Cart, Wishlist, Product, Search, Error)
- **Layout**: Structural components (Header, Footer, NavBar)
- **Feature Components**: Domain-specific components grouped by feature (cart/, home/, shop/, wishlist/)
- **Common Components**: Reusable UI components shared across features

### State Management

**Centralized User Data Management** via `useUserProductDataCollection` hook:

- Manages cart and wishlist state globally
- Persists to localStorage for session persistence
- Provides helper methods for CRUD operations
- Passed down via React Router's `useOutletContext`

### Data Flow

1. **API Layer** (`api/DummyJSON.js`): Wraps all API calls in Promises
2. **Custom Hooks**: Encapsulate data fetching logic with loading/error states
3. **Components**: Consume data via hooks and display UI
4. **User Actions**: Trigger state updates via helper methods
5. **Persistence**: Changes automatically sync to localStorage

### Routing Strategy

Uses **React Router v7** with nested routes:

- Parent route (`/`) renders the `App` component with shared layout
- Child routes render specific pages within the layout
- Dynamic routes for product details (`/product/:productID`) and category filtering (`/shop/:category?`)

## 🔑 Key Features & Implementation

### 1. Shopping Cart System

**Location**: `src/pages/Cart.jsx`, `src/hooks/useUserProductDataCollection.js`

**Features**:

- Add/remove products
- Adjust quantities (1-7 items per product)
- Real-time price calculations
- Tax (14%), shipping, and packaging fees
- Checkout simulation with success messages
- Empty cart handling

**Key Methods**:

```javascript
toggleAddToCartState(); // Add/remove from cart
handleCount(); // Increment/decrement quantity
clearCart(); // Empty cart after checkout
getProductsInCart(); // Retrieve all cart items
```

### 2. Wishlist Management

**Location**: `src/pages/Wishlist.jsx`

**Features**:

- Add/remove products to wishlist
- View saved items
- Quick add to cart from wishlist
- Persistent across sessions

**Key Methods**:

```javascript
toggleWishlistState(); // Add/remove from wishlist
getProductsInWishlist(); // Retrieve all wishlist items
```

### 3. Product Browsing & Filtering

**Location**: `src/pages/Shop.jsx`

**Features**:

- Browse all products or filter by category
- Pagination (limit per page defined in constants)
- Category chips for easy filtering
- Loading states and error handling
- Smooth scrolling on navigation

**Custom Hooks Used**:

- `useCategories`: Fetches available categories
- `useProductsByCategory`: Fetches paginated products by category

### 4. Product Search

**Location**: `src/pages/Search.jsx`, `src/hooks/useSearchProduct.js`

**Features**:

- Real-time search across all products
- Search query passed via URL parameters
- Results displayed in product cards
- Integrated with header search field

### 5. Product Details

**Location**: `src/pages/Product.jsx`

**Features**:

- Detailed product information
- Image carousel for product images
- Add to cart/wishlist from product page
- Quantity selector
- Similar products section (same category)
- Back button navigation

### 6. Responsive Design

**Implementation**: Tailwind CSS utility classes + `react-responsive` library

**Breakpoints**:

- Mobile: `max-sm:` (up to 750px)
- Tablet: `max-md:`
- Desktop: Default

**Responsive Features**:

- Collapsible navigation on mobile
- Flexible grid layouts
- Adaptive font sizes
- Touch-friendly interactions

### 7. Data Persistence

**Location**: `src/utils/storage.js`

**Implementation**:

```javascript
getSavedUserData(); // Load from localStorage
setUserData(data); // Save to localStorage
```

**Persisted Data**:

- Cart items with quantities
- Wishlist items
- Product metadata (ID, image, title, price)

## 🎨 Custom Hooks

### Data Fetching Hooks

**Pattern**: All data fetching hooks return `{ data, loading, error }`

1. **`useProduct(id)`**: Fetch single product by ID
2. **`useMultipleProducts(ids)`**: Fetch multiple products by IDs array
3. **`useProductsByCategory({ categorySlug, pageNumber })`**: Paginated category products
4. **`useSearchProduct(query)`**: Search products by query
5. **`useCategories({ enabled })`**: Fetch all categories (lazy loading support)

### UI Hooks

1. **`useCarousel()`**: Manage carousel state (current slide, navigation)
2. **`useActiveSection()`**: Track active navigation section

### State Management Hooks

1. **`useUserProductDataCollection()`**: Central hook for cart/wishlist management
   - Returns `userProductDataCollection` (state) and `dataCollectionHelperMethods` (actions)

## 📦 Data Models

### UserProductData

**Location**: `src/models/userProductData.js`

```javascript
{
  productID: string,      // Unique product identifier
  image: string,          // Product thumbnail URL
  title: string,          // Product name
  price: number,          // Product price
  addedToCart: boolean,   // Cart status
  addedToWishlist: boolean, // Wishlist status
  count: number           // Quantity (1-7)
}
```

## 🔌 API Integration

### DummyJSON API Wrapper

**Location**: `src/api/DummyJSON.js`

**Base URL**: `https://dummyjson.com/products`

**Available Methods**:

```javascript
getProductByID(id); // GET /products/{id}
searchProduct(key); // GET /products/search?q={key}
getProductsByPage(pageNumber); // GET /products?limit=X&skip=Y
getAllCategories(); // GET /products/categories
getProductsByCategory({ categorySlug, pageNumber }); // GET /products/category/{slug}
```

**Error Handling**: All methods return Promises with proper error rejection

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd odin-fakestore-site

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# The app will be available at http://localhost:5173
```

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 🎯 Routes

| Route                 | Component | Description                                         |
| --------------------- | --------- | --------------------------------------------------- |
| `/`                   | Home      | Landing page with hero, categories, exclusive deals |
| `/shop`               | Shop      | Browse all products                                 |
| `/shop/:category`     | Shop      | Browse products by category                         |
| `/product/:productID` | Product   | Product detail page                                 |
| `/cart`               | Cart      | Shopping cart with checkout                         |
| `/wishlist`           | Wishlist  | Saved products                                      |
| `/search?query=...`   | Search    | Search results                                      |
| `/*`                  | Error     | 404 error page                                      |

## 💡 Key Design Decisions

### Why DummyJSON?

- Free, no authentication required
- Rich product data with images
- Realistic e-commerce structure
- Supports pagination and search

### Why localStorage?

- Simple persistence without backend
- Instant load times
- Works offline
- No server costs

### Why React Router v7?

- Latest features and performance
- Nested routing support
- Built-in loading/error states
- Type-safe navigation

### Why Tailwind CSS?

- Rapid development
- Consistent design system
- Small bundle size with purging
- Easy responsive design

## 🐛 Known Limitations

1. **Mock Checkout**: Checkout is simulated (no payment processing)
2. **No User Accounts**: Single user experience (localStorage is per-browser)
3. **Limited Search**: Search uses DummyJSON's basic search (not fuzzy)
4. **Quantity Limit**: Hard-coded max of 7 items per product
5. **Static Prices**: Prices from API, no dynamic pricing

## 🔮 Future Enhancements

- [ ] User authentication and profiles
- [ ] Real payment integration (Stripe/PayPal)
- [ ] Product reviews and ratings
- [ ] Advanced filtering (price range, rating, availability)
- [ ] Product comparison feature
- [ ] Order history
- [ ] Email notifications
- [ ] Dark/light theme toggle
- [ ] Internationalization (i18n)
- [ ] Performance optimization with lazy loading

## 📝 Learning Outcomes

This project demonstrates proficiency in:

- ✅ React hooks and functional components
- ✅ React Router for SPA navigation
- ✅ State management patterns
- ✅ Custom hooks for logic reuse
- ✅ API integration with async/await
- ✅ Error handling and loading states
- ✅ Responsive design with Tailwind CSS
- ✅ Component composition and reusability
- ✅ localStorage for client-side persistence
- ✅ Modern JavaScript (ES6+)
- ✅ Vite build tool configuration

## 📄 License

This project was created as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

## 🙏 Acknowledgments

- **The Odin Project** for the initial project inspiration
- **DummyJSON** for the free API
- **Vite** team for the amazing build tool
- **React** team for the excellent library

---

**Note**: This project evolved from a simple shopping cart exercise into a full-featured e-commerce application, showcasing the natural growth of a learning project into a portfolio piece.
