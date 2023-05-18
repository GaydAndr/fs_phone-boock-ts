
// export interface INavBtn{
//   handlerMenu: MouseEventHandler<HTMLElement> | undefined,
//   isActive:boolean,
//   location:any,
//   title:string,
//   path:string
// }

////////////////////////////////////////////////////

export type Routes = '/' | '/active' | '/completed'

export interface Todo {
  id: string
  bodyText: string
  completed: boolean
}

export type TodoListType = Todo[]

export interface AppState {
  todoList: TodoListType
}

export enum LocalStorageKey {
  APP_STATE = 'APP_STATE',
}


