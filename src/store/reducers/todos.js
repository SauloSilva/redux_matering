const initialState = [
  { id: 1, text: 'Fazer café' },
  { id: 2, text: 'Estudar React' },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      console.tron.log(action);
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}
