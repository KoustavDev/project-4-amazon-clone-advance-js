//get the cart from localstorage
export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
  [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 1,
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 2,
    },
  ];
}

// export let cart = JSON.parse(localStorage.getItem('cart'));
// if (!cart) {
//   cart = [
//     {
//       productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
//       quantity: 1,
//     },
//     {
//       productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
//       quantity: 2,
//     },
//   ];
//   saveToStorage(); // Save the default cart to localStorage
// }


//use local storage to save our cart data
function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  let matchingItem;
  cart.forEach((item) => {
    if (productId == item.productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
  saveToStorage();
}

export function removeFromCart(productId) {
  cart = cart.filter((cartItem)=>{cartItem.productId !== productId});
  saveToStorage();
}
