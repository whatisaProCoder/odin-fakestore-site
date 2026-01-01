export const ExceptionProductIDs = [17, 19]

export function filterProductByException(products) {
  const exceptionIDSet = new Set(ExceptionProductIDs)
  return products.filter(product => !exceptionIDSet.has(product.id))
}