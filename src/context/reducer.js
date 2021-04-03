//log all state and action possible and their corresponding updates

export default (state, action) => {
  switch (action.type) {
    case "RemoveTransaction":
      console.log("RemoveTransaction");

      return state;
    case "AddTransaction":
      console.log("AddTransaction");
      return state;
    default:
      return state;
  }
};
