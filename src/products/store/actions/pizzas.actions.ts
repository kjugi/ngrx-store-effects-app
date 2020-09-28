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

// create pizza
export const CREATE_PIZZA = '[Products] Create Pizza'
export const CREATE_PIZZA_FAIL = '[Products] Create Pizza Fail'
export const CREATE_PIZZA_SUCCESS = '[Products] Create Pizza Success'

export class CreatePizza implements Action {
  readonly type = CREATE_PIZZA
  constructor(public payload: Pizza) {}
}

export class CreatePizzaFail implements Action {
  readonly type = CREATE_PIZZA_FAIL
  constructor(public payload: Pizza) {}
}

export class CreatePizzaSuccess implements Action {
  readonly type = CREATE_PIZZA_SUCCESS
  constructor(public payload: Pizza) {}
}

// updatpizza
export const UPDATE_PIZZA = '[Products] Update pizza'
export const UPDATE_PIZZA_FAIL = '[Product] Update pizza fail'
export const UPDATE_PIZZA_SUCCESS = '[Product] Update pizza success'

export class UpdatePizza implements Action {
  readonly type = UPDATE_PIZZA
  constructor(public payload: Pizza) {}
}

export class UpdatePizzaFail implements Action {
  readonly type = UPDATE_PIZZA_FAIL
  constructor(public payload: Pizza) {}
}

export class UpdatePizzaSuccess implements Action {
  readonly type = UPDATE_PIZZA_SUCCESS
  constructor(public payload: Pizza) {}
}

// remove pizza
export const REMOVE_PIZZA = '[Product] Remove pizza'
export const REMOVE_PIZZA_FAIL = '[Product] Remove pizza fail'
export const REMOVE_PIZZA_SUCCESS = '[Product] Remove pizza success'

export class RemovePizza implements Action {
  readonly type = REMOVE_PIZZA
  constructor(public payload: Pizza) {}
}

export class RemovePizzaFail implements Action {
  readonly type = REMOVE_PIZZA_FAIL
  constructor(public payload: any) {}
}

export class RemovePizzaSuccess implements Action {
  readonly type = REMOVE_PIZZA_SUCCESS
  constructor(public payload: Pizza) {}
}

// action types
export type PizzasAction =
  LoadPizzas |
  LoadPizzasFail |
  LoadPizzasSuccess |
  CreatePizza |
  CreatePizzaFail |
  CreatePizzaSuccess |
  UpdatePizza |
  UpdatePizzaSuccess |
  UpdatePizzaFail |
  RemovePizza |
  RemovePizzaFail |
  RemovePizzaSuccess
