import firebase from "./firebase";

// Fetch grocery items
export async function fetchGroceryItems(userId) {
  return await firebase
    .firestore()
    .collection("groceryItems")
    .where("userId", "==", userId)
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data()));
}

// Fetch pantry items
export async function fetchPantryItems(userId) {
  return await firebase
    .firestore()
    .collection("pantryItems")
    .where("userId", "==", userId)
    .get()
    .then((snapshot) => snapshot.docs.map((doc) => doc.data()));
}

// Add a grocery item
export async function addGroceryItem(itemData, userId) {
  return await firebase
    .firestore()
    .collection("groceryItems")
    .add({
      userId,
      ...itemData,
    });
}

// Add a pantry item
export async function addPantryItem(itemData, userId) {
  return await firebase
    .firestore()
    .collection("pantryItems")
    .add({
      userId,
      ...itemData,
    });
}

// Delete a grocery item
export async function deleteGroceryItem(itemId) {
  return await firebase
    .firestore()
    .collection("groceryItems")
    .doc(itemId)
    .delete()
    .catch((error) => error);
}

// Delete a pantry item
export async function deletePantryItem(itemId) {
  return await firebase
    .firestore()
    .collection("pantryItems")
    .doc(itemId)
    .delete()
    .catch((error) => error);
}
