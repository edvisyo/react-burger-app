export interface OrderSummaryInterface {
    ingredients: string;
    purchaseCancelled(): void;
    purchaseContinued(): void;
    price: number;
}