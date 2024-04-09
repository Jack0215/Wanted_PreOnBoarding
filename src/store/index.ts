import { legacy_createStore as createStore } from "redux";

// 액션 타입 정의
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

// 액션 생성자
export const addTodo = (text: string) => ({
  type: ADD_TODO,
  payload: text,
});

export const deleteTodo = (id: number) => ({
  type: DELETE_TODO,
  payload: id,
});

// 초기 상태
export type TodoState = string[];

const initialState: TodoState = [];

// 리듀서
const todoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter((_, index) => index !== action.payload);
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(todoReducer);

export default store;

// RootState 정의
export type RootState = ReturnType<typeof store.getState>;
