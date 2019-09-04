export interface CounterState {
  current: number;
}

const initialState: CounterState = {
  current: 5
};

export function reducer(state: CounterState = initialState, section: any) {
  return state;
}
