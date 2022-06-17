export interface BuildControlsInterface {
    ingredientAdded: (val: number) => void;
    ingredientRemoved: (val: number) => void;
    disabled: (val: number) => boolean;
    price: number | undefined;
}