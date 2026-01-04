# Odin Fakestore Site

> **Note on Development**: This project was hand-coded, not vibe-coded. Every component, hook, and utility was thoughtfully implemented through deliberate learning and problem-solving. While AI was occasionally consulted to debug specific issues or search for JavaScript methods, the architecture, logic, and implementation are the result of hands-on coding. In an age of AI-generated code, this represents genuine learning through building.

## Overview

An e-commerce web application built as part of The Odin Project's Shopping Cart assignment. What began as a simple shopping cart implementation evolved into a comprehensive online store featuring product browsing, search, wishlist management, and cart functionality. The application uses the DummyJSON API for product data and implements persistent client-side storage for user interactions.

## Live Demo

Deployed on Vercel: [Visit Site](https://odin-fakestore-site.vercel.app)

## Features

- **Product Catalog**: Browse products with pagination and category filtering
- **Product Search**: Real-time product search functionality
- **Shopping Cart**: Add products to cart with quantity management (maximum 8 items per product)
- **Wishlist**: Save products for later viewing
- **Product Details**: View comprehensive product information with image carousels
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Persistent Storage**: Cart and wishlist data preserved using localStorage
- **Category Filtering**: Filter products by predefined categories
- **Similar Products**: Product recommendations based on category

## Technology Stack

### Core Libraries

- **React** - UI component library
- **React Router** - Client-side routing
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Responsive** - Responsive breakpoint management

### Development Tools

- **ESLint** - Code linting
- **PropTypes** - Runtime type checking for React props

## Project Architecture

### Directory Structure

```
src/
├── api/              # External API integration
├── assets/           # Static resources (fonts, icons, images)
├── components/       # React components organized by feature
│   ├── cart/         # Shopping cart components
│   ├── common/       # Reusable UI components
│   ├── home/         # Homepage-specific components
│   ├── layout/       # Layout components (header, footer, navigation)
│   ├── shop/         # Shop page components
│   └── wishlist/     # Wishlist components
├── constants/        # Application constants and configuration
├── hooks/            # Custom React hooks
├── models/           # Data models
├── pages/            # Page-level components
├── routes/           # Route configuration
└── utils/            # Utility functions
```

### Core Architecture Patterns

#### 1. Data Management Layer

**UserProductData Model** ([src/models/userProductData.js](src/models/userProductData.js))

- Represents user interaction with products
- Stores: productID, image, title, price, cart status, wishlist status, and count

**Storage Utilities** ([src/utils/storage.js](src/utils/storage.js))

- `getSavedUserData()`: Retrieves persisted user data from localStorage
- `setUserData(data)`: Persists user data to localStorage

#### 2. State Management

**useUserProductDataCollection Hook** ([src/hooks/useUserProductDataCollection.js](src/hooks/useUserProductDataCollection.js))

Central state management for all user product interactions:

- Maintains collection of user product data
- Syncs state with localStorage on every update
- Provides helper methods:
  - `getProductData()`: Retrieve specific product data
  - `toggleAddToCartState()`: Add/remove product from cart
  - `toggleWishlistState()`: Add/remove product from wishlist
  - `handleCount()`: Increment/decrement product quantity (1-8 range)
  - `getProductsInCart()`: Filter products in cart
  - `getProductsInWishlist()`: Filter products in wishlist
  - `getTotalCartPrice()`: Calculate total cart value

State is lifted to App component and distributed via React Router's `useOutletContext()`.

#### 3. API Integration

**DummyJSON API Wrapper** ([src/api/DummyJSON.js](src/api/DummyJSON.js))

Promise-based API client providing:

- `getProductByID(id)`: Fetch single product details
- `searchProduct(key)`: Search products by keyword
- `getProductsByPage(pageNumber)`: Paginated product list
- `getAllCategories()`: Fetch all available categories
- `getProductsByCategory({ categorySlug, pageNumber })`: Category-filtered products with pagination

All methods return Promises with proper error handling for network failures and HTTP errors.

#### 4. Custom Hooks

Data fetching hooks implement loading and error states:

- **useProduct(productID)**: Fetch single product data
- **useMultipleProducts(productIDs)**: Batch fetch multiple products
- **useCategories()**: Fetch all categories with conditional enabling
- **useProductsByCategory({ categorySlug, pageNumber })**: Fetch category products with pagination
- **useSearchProduct(query)**: Search products in the available store
- **useCarousel()**: Manages carousel state (active index, navigation)
- **useActiveSection()**: Track active navigation section with scroll detection

#### 5. Routing Structure

**Route Configuration** ([src/routes/routes.jsx](src/routes/routes.jsx))

```
/ (App Layout)
├── / (Home)
├── /shop/:category? (Shop with optional category)
├── /cart (Shopping Cart)
├── /wishlist (Wishlist)
├── /product/:productID (Product Details)
├── /search (Search Results)
└── * (404 Error)
```

### Component Architecture

#### Layout Components

**Header** ([src/components/layout/Header.jsx](src/components/layout/Header.jsx))

- Sticky navigation with brand logo, search field, and navigation bar
- Displays cart item count badge
- Responsive layout: switches between horizontal and vertical on mobile
- Handles search query submission to search page

**NavBar** ([src/components/layout/NavBar.jsx](src/components/layout/NavBar.jsx))

- Navigation links: Home, Shop, Cart, Wishlist
- Active state tracking via `useActiveSection` hook
- Cart badge displays number of cart items
- Responsive: collapses to icon-only on mobile

**Footer** ([src/components/layout/Footer.jsx](src/components/layout/Footer.jsx))

- Site information and branding

#### Page Components

**Home** ([src/pages/Home.jsx](src/pages/Home.jsx))

- Hero section with call-to-action
- Top categories display
- Exclusive deals carousel
- Feature highlights
- Final call-to-action

**Shop** ([src/pages/Shop.jsx](src/pages/Shop.jsx))

- Product grid with category filtering
- Toggle filter panel for category selection
- Pagination controls
- Loading states during data fetch
- Handles category navigation and page state
- Scrolls to top on category/page change

**Product** ([src/pages/Product.jsx](src/pages/Product.jsx))

- Image carousel for product gallery
- Product details (title, price, rating, description)
- Quantity counter (1-8 range)
- Add to cart and wishlist buttons
- Category chip
- Similar products section
- Back button navigation

**Cart** ([src/pages/Cart.jsx](src/pages/Cart.jsx))

- Cart items list with quantity controls
- Order summary with price breakdown
- Remove item functionality
- Empty cart state

**Wishlist** ([src/pages/Wishlist.jsx](src/pages/Wishlist.jsx))

- Wishlist items display
- Quick add to cart from wishlist
- Remove from wishlist functionality
- Empty wishlist state

**Search** ([src/pages/Search.jsx](src/pages/Search.jsx))

- Search results display
- Query parameter handling
- Empty results state

#### Reusable Components

**Carousel Components**

- **StatefulCarousel**: Self-managing carousel with automatic rotation
- **StatelessCarousel**: Controlled carousel for external state management
- Supports image arrays with configurable delay and dimensions

**Button Components**

- **AddToCartButton**: Toggle cart state with visual feedback
- **AddToWishlistButton**: Toggle wishlist state with heart icon
- **ActionButton**: Primary action button
- **OutlineButton**: Secondary action button
- **IconButton**: Icon-only button
- **BackButton**: Navigation back button
- **DeleteButton**: Remove item button with trash icon

**Form Components**

- **SearchField**: Input with search icon and submit handling
- **Counter**: Quantity selector with increment/decrement controls

**Media Components**

- **LazyImage**: Lazy-loaded image component with loading shimmer effect and error fallback; fetches images to check availability before rendering; displays shimmer placeholder during load and error icon on failure

**Feedback Components**

- **Loader**: Loading indicator with spinner and text
- **SlidingLoader**: Progress bar loader
- **Spinner**: Spinning loader icon
- **ErrorPrompt**: Error message display

**Product Components**

- **ProductCard**: Shop page product card with quick actions
- **SimpleProductCard**: Minimal product card for recommendations
- **CategoryCard**: Category display with image and navigation
- **CategoryChip**: Category tag with navigation
- **CartItem**: Cart product with quantity controls
- **WishlistItem**: Wishlist product with actions
- **OrderSummary**: Cart total breakdown

#### Home Components

- **Hero**: Landing hero section with background image
- **HeroActionButton**: CTA button for hero section
- **Categories**: Grid of top categories
- **ExclusiveDeals**: Carousel of featured products
- **Features**: Grid of store features
- **FeatureCard**: Individual feature display
- **CallToAction**: Promotional section with CTA
- **Brand**: Logo and site branding

### Constants Configuration

- **navSections**: Navigation section definitions with labels and paths
- **topCategories**: Curated category list with representative images
- **exclusiveDeals**: Featured product IDs for homepage carousel
- **features**: Store feature highlights (free shipping, secure payment, customer support)
- **productLimitPerPage**: Pagination limit (16 products per page)
- **productExceptions**: Special handling for specific products

### Styling

**Tailwind CSS with Custom Configuration**

- Dark theme with custom color palette
- Custom font integration (Poppins, Inter)
- Responsive breakpoints: `max-sm`, `max-md`, `max-xl`

**CSS Modules**

- Component-specific styles in [src/App.css](src/App.css)
- Global styles in [src/index.css](src/index.css)
- Loader styles in [src/components/common/Loader/style.css](src/components/common/Loader/style.css)

## Key Implementation Details

### Pagination

- Products displayed in pages of 20 items
- API skip parameter calculates offset: `productLimitPerPage * (pageNumber - 1)`
- Page navigation scrolls viewport to top with smooth behavior

### Product Count Limits

- Minimum: 1 item
- Maximum: 8 items per product
- Validation enforced in `handleCount` method

### Responsive Breakpoints

- Uses `react-responsive` for conditional rendering
- Tailwind breakpoints for layout adjustments

### Error Handling

- API errors caught and displayed via ErrorPrompt component
- Retry functionality on error states
- localStorage errors fail gracefully with empty array default

### State Persistence

- All cart and wishlist data persists to localStorage
- Automatic sync on state changes via useEffect
- Data filtered to only store active items (in cart or wishlist)

## API Dependency

This project relies on [DummyJSON](https://dummyjson.com) for product data. All products, categories, and search results are fetched from this external API.

## Credits

- **The Odin Project**: For the initial project assignment and curriculum
- **DummyJSON**: For providing the product API

## License

This project is open source and available for educational purposes.

---

**Built with 💙 and React by whatisaProCoder · 2026**
