import { Action } from '@ngrx/store'

import { Pizza } from '../../models/pizza.model'

// laod pizzas
export const LOAD_PIZZAS = '[Products] Load pizzas'
export const LOAD_PIZZAS_FAIL = '[Products] Load pizzas fail'
export const LOAD_PIZZAS_SUCCESS = '[Products] Load pizzas success'

// creators
export class LoadPizzas implements Action {
  readonly type = LOAD_PIZZAS;
}

export class LoadPizzasFail implements Action {
  readonly type = LOAD_PIZZAS_FAIL;
  constructor(public payload: any) {}
}

export class LoadPizzasSuccess implements Action {
  readonly type = LOAD_PIZZAS_SUCCESS;
  constructor(public payload: Pizza[]) {}
}


// action types
export type PizzasAction = LoadPizzas | LoadPizzasFail | LoadPizzasSuccess
