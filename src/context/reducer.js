//log all state and action possible and their corresponding updates

export const reducer = (state, action) => {
  switch (action.type) {
    case "RemoveTransaction":
      console.log(action.item);
      return {
        ...state,
        transactions: state.transactions.filter(
          (eachTransaction) => eachTransaction.id !== action.item
        )
      };

    case "AddTransaction":
      console.log(action.item);
      return {
        ...state,
        transactions: [action.item, ...state.transactions]
      };
    default:
      return state;
  }
};
