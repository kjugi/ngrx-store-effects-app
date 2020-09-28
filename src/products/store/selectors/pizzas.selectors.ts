import { createSelector } from '@ngrx/store'
import { Pizza } from '../../models/pizza.model'

import * as fromRoot from '../../../app/store'
import * as fromFeature from '../reducers'
import * as fromPizzas from '../reducers/pizzas.reducer'
import * as fromToppings from './toppings.selectors'

export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  (state: fromFeature.ProductsState) => state.pizzas
)

export const getPizzasEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
)

export const getAllPizzas = createSelector(
  getPizzasEntities,
  (entities) => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)])
  }
)

export const getSelectedPizza = createSelector(
  getPizzasEntities,
  fromRoot.getRotuerState,
  (entities, router): Pizza => {
    return router.state && entities[router.state.params.pizzaId]
  }
)

export const getPizzaVisualised = createSelector(
  getSelectedPizza,
  fromToppings.getToppingEntities,
  fromToppings.getSelectedToppings,
  (pizza, toppingEntities, selectedTopping) => {
    const toppings = selectedTopping.map(id => toppingEntities[id])

    return {
      ...pizza,
      toppings
    }
  }
)

export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoaded
)

export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzasLoading
)
