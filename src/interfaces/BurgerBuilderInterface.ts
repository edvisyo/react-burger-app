import { IngredientsObjectKeys } from '../interfaces/IngredientsObjectKeys';

export interface BurgerBuilderInterface {
    ingredients: IngredientsObjectKeys;
    totalPrice?: number;
    price?: number;
    purchaseable?: boolean;
    purchasing?: boolean;
    loading?: boolean;
    errorMessage?: boolean
}