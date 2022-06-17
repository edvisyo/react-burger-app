export interface BuildControlsInterface {
    ingredientAdded: (val: string) => void;
    ingredientRemoved: (val: string) => void;
    disabled: (val: number) => boolean;
    price: number | undefined;
    purchaseable: boolean | undefined;
    makeOrder: () => void;
}