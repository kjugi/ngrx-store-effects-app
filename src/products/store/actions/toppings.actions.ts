import { Action } from '@ngrx/store'

import { Topping } from '../../models/topping.model'

export const LOAD_TOPPINGS = '[Products] Load Toppings'
export const LOAD_TOPPINGS_SUCCESS = '[Products] Load Toppings success'
export const LOAD_TOPPINGS_FAIL = '[Products] Load Toppings fail'
export const VISUALISE_TOPPINGS = '[Products] Visualise toppings'

export class LoadToppings implements Action {
  readonly type = LOAD_TOPPINGS
}

export class LoadToppingsFail implements Action {
  readonly type = LOAD_TOPPINGS_FAIL

  constructor(public payload: any) {}
}

export class LoadToppingsSuccess implements Action {
  readonly type = LOAD_TOPPINGS_SUCCESS

  constructor(public payload: Topping[]) {}
}

export class VisualiseToppings implements Action {
  readonly type = VISUALISE_TOPPINGS

  constructor(public payload: number[]) {}
}

export type ToppingsAction = LoadToppings | LoadToppingsFail | LoadToppingsSuccess | VisualiseToppings
