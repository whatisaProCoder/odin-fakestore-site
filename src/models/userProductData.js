class UserProductData {
  constructor({ productID, image, title, price, addedToCart, addedToWishlist, count }) {
    this.productID = productID
    this.image = image
    this.title = title
    this.price = price
    this.addedToCart = addedToCart
    this.addedToWishlist = addedToWishlist
    this.count = count
  }
}

export default UserProductData