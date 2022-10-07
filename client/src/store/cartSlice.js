import { createSlice } from "@reduxjs/toolkit";
const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart"));
// console.log(cartFromLocalStorage, "get cart data")
// const initalState = {
//   cartItems: [],
// };
const cartSlice = createSlice({
  name: "cart",
  initialState:
    cartFromLocalStorage.length > 0 ? cartFromLocalStorage:[],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item._id !== action.payload);
    },
    increament(state, action) {
      const item = state.filter((item) => +item._id == action.payload._id);

      console.log(item, "ahsan", state);
      // if (item.length >=0) {
      //   item[0].Qauntity += 1;
      // } else {
      //   state.items.push(action.payload);
      // }
    },
    // decreaseCart(state, action) {
    //     const itemIndex = state.cartItems.findIndex(
    //       (item) => item.id === action.payload.id
    //     );

    //     if (state.cartItems[itemIndex].cartQuantity > 1) {
    //       state.cartItems[itemIndex].cartQuantity -= 1;

    //       toast.info("Decreased product quantity", {
    //         position: "bottom-left",
    //       });
    //     } else if (state.cartItems[itemIndex].cartQuantity === 1) {
    //       const nextCartItems = state.cartItems.filter(
    //         (item) => item.id !== action.payload.id
    //       );

    //       state.cartItems = nextCartItems;

    //       toast.error("Product removed from cart", {
    //         position: "bottom-left",
    //       });
    //     }

    //     localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    //   },
  },
});
export const { add, remove, increament } = cartSlice.actions;
export default cartSlice.reducer;
