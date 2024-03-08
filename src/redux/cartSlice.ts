import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Potion } from "./potionsSlice";
import toast from "react-hot-toast";

interface CartState {
  potions: Potion[];
}

const initialState: CartState = {
  potions: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addPotion: (state, action: PayloadAction<Potion>) => {
      const isInCart = state.potions.find(
        (potion) => potion.id === action.payload.id
      );
      if (isInCart) {
        isInCart.quantity += 1;
      } else {
        state.potions.push(action.payload);
      }
      toast.success(
        action.payload.quantity > 1
          ? `${action.payload.quantity} potions added to cart`
          : "Potion added to cart"
      );
    },
    removePotion: (state, action: PayloadAction<Potion>) => {
      console.log("potion removed from cart");
      const id: number = action.payload.id;
      const bye = state.potions.filter((potion) => potion.id === id);
      state.potions.splice(state.potions.indexOf(bye[0]), 1);
      toast.success("Potion removed from cart");
    },
    incrementQuantity: (state, action: PayloadAction<Potion>) => {
      const potion = state.potions.find(
        (potion) => action.payload.id === potion.id
      );
      if (potion === undefined) return;
      else potion.quantity += 1;
    },
    decrementQuantity: (state, action: PayloadAction<Potion>) => {
      const potion = state.potions.find(
        (potion) => action.payload.id === potion.id
      );
      if (potion === undefined) return;
      else potion.quantity -= 1;
      if (potion.quantity <= 0) {
        const id: number = action.payload.id;
        const bye = state.potions.filter((potion) => potion.id === id);
        state.potions.splice(state.potions.indexOf(bye[0]), 1);
        toast.success("Potion removed from cart");
      }
    },
  },
});

export const { addPotion, removePotion, incrementQuantity, decrementQuantity } =
  cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCart = (state: RootState) => state.cart.potions;

export default cartSlice.reducer;
