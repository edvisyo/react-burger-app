import { IngredientsObjectKeys } from "./IngredientsObjectKeys";

export interface OrderSummaryInterface {
    ingredients: IngredientsObjectKeys;
    purchaseCancelled(): void;
    purchaseContinued(): void;
    price: number;
}