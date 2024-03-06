import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Potion {
  image: string;
  name: string;
  price: number;
  rating: number;
  id: number;
  quantity: number;
}

interface PotionsState {
  potions: Potion[];
}

const initialState: PotionsState = {
  potions: [
    {
      image: "./image0.png",
      name: "Ignis Aeternus",
      price: 2000,
      rating: 4,
      id: 0,
      quantity: 1,
    },
    {
      image: "./image1.png",
      name: "Nebulae Caelestes",
      price: 1500,
      rating: 4,
      id: 1,
      quantity: 1,
    },
    {
      image: "./image2.png",
      name: "Sapientia Arcana",
      price: 2750,
      rating: 5,
      id: 2,
      quantity: 1,
    },
    {
      image: "./image3.png",
      name: "Gelum Ignis",
      price: 2000,
      rating: 4,
      id: 3,
      quantity: 1,
    },
    {
      image: "./image4.png",
      name: "Aurora Somniorum",
      price: 1500,
      rating: 4,
      id: 4,
      quantity: 1,
    },
    {
      image: "./image5.png",
      name: "Lumen Noctis",
      price: 2750,
      rating: 5,
      id: 5,
      quantity: 1,
    },
    {
      image: "./image6.png",
      name: "Pupura Mysterium",
      price: 2500,
      rating: 5,
      id: 6,
      quantity: 1,
    },
    {
      image: "./image8.png",
      name: "Tenebris Lucis",
      price: 2000,
      rating: 4,
      id: 7,
      quantity: 1,
    },
    {
      image: "./image9.png",
      name: "Flos Mortis",
      price: 1500,
      rating: 4,
      id: 8,
      quantity: 1,
    },
    {
      image: "./image10.png",
      name: "Venenum Amoris",
      price: 2750,
      rating: 5,
      id: 9,
      quantity: 1,
    },
  ],
};

export const potionsSlice = createSlice({
  name: "potions",
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addPotion: (state, action: PayloadAction<Potion>) => {
      console.log("potion added to cart");
      state.potions.push(action.payload);
    },
    removePotion: (state, action: PayloadAction<Potion>) => {
      console.log("potion removed from cart");
      const id: number = action.payload.id;
      const bye = state.potions.filter((potion) => potion.id === id);
      state.potions.splice(state.potions.indexOf(bye[0]), 1);
    },
  },
});

export const { addPotion, removePotion } = potionsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectPotions = (state: RootState) => state.cart.potions;

export default potionsSlice.reducer;
