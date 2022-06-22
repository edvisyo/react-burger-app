export interface BuildControlsInterface {
    ingredientAdded: (val: string) => void;
    ingredientRemoved: (val: string) => void;
    disabled?: (val: string) => boolean;
    disabledButton?: number; 
    price: number | undefined;
    purchaseable: boolean | undefined;
    makeOrder: () => void;
}