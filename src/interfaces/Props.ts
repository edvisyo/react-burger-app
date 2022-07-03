import { History } from 'history';
import { IngredientsObjectKeys } from './IngredientsObjectKeys';

export interface Props {
    ings?: IngredientsObjectKeys
    history?: History;
    price?: number;
    onIngredientAdded?(): void;
    onIngredientRemoved?(): void;
}