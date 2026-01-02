export function getSavedUserData() {
  try {
    const userProductData = localStorage.getItem("user-data");
    return userProductData ? JSON.parse(userProductData) : [];
  } catch {
    return [];
  }
}

export function setUserData(data) {
  localStorage.setItem(
    "user-data",
    JSON.stringify(data)
  );
}