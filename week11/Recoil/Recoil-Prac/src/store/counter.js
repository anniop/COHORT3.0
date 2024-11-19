import { atom, selector } from "recoil";

export const counterAtom = atom({
  default: 0,
  key: "counter"
});

export const PremiumAtom = atom({
  default: false,
  key: "premium"
})

export const evenSelector = selector({
  key: "isEven",
  get: ({ get }) => {
    const currentCount = get(counterAtom, PremiumAtom);
    const isPremium = (PremiumAtom == true);
    const isEven = (currentCount % 2 == 0);
    return isEven, isPremium;
  }
})
