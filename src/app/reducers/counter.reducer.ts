import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/counter.actions';

export interface CounterState {
  current: number;
  by: number;
}

const initialState: CounterState = {
  current: 0,
  by: 1
};
const createdReducer = createReducer(
  initialState,
  on(actions.increment, (s) => ({ ...s, current: s.current + s.by })),
  on(actions.decrement, (s) => ({ ...s, current: s.current - s.by })),
  on(actions.setCountBy, (s, a) => ({ ...s, by: a.by })),
  on(actions.reset, () => initialState)
);
export function reducer(state: CounterState = initialState, action: Action) {
  return createdReducer(state, action);
}

// export function reducer(state: CounterState = initialState, action: Action) {
//   switch (action.type) {
//     case 'increment': {
//       return {
//         current: state.current + 1
//       };
//     }
//     case 'decrement': {
//       return {
//         current: state.current - 1
//       };
//     }
//     case 'reset': {
//       return initialState;

//     }
//     default:
//       { return state; }
//   }
// }

