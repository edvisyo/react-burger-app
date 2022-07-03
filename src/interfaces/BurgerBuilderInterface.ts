import { IngredientsObjectKeys } from '../interfaces/IngredientsObjectKeys';
import { History } from 'history';

export interface BurgerBuilderInterface {
    ingredients?: IngredientsObjectKeys;
    ings?: IngredientsObjectKeys
    totalPrice?: number;
    price?: number;
    purchaseable?: boolean;
    purchasing?: boolean;
    loading?: boolean;
    errorMessage?: boolean;
    history?: History
    onIngredientAdded?(): void;
    onIngredientRemoved?(): void;
}