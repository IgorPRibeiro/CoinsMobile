import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage } from "zustand/middleware";

export interface IProduct {
  id: string;
  name: string;
  value: number;
  sale: boolean;
  units: number;
  image: string;
}
type State = {
  products: Array<IProduct> | null;
};

type Actions = {
  setProducts: (items: Array<IProduct>) => void;
  productBuy: (id: string) => void;
  clearProducts: () => void;
};

const productStore = create<State & Actions>()(
  persist(
    immer((set, get) => ({
      products: null,
      setProducts: (items) => {
        let products = get().products;
        if (products) {
          set({
            products: [...products, ...items],
          });
        } else {
          set({
            products: [...items],
          });
        }
      },
      productBuy: (id) => {
        let _products = get().products;
        if (_products) {
          _products?.map((item) => {
            if (item.id === id) {
              item.sale = true;
              item.units -= 1;
            }
            return item;
          });
          set({
            products: [..._products],
          });
        }
      },
      clearProducts: () => {
        set({
          products: null,
        });
      },
    })),
    {
      name: "products-storage",
    }
  )
);

export default productStore;
