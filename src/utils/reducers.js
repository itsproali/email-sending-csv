export const emailReducer = (emails, action) => {
  switch (action.type) {
    case "SET_EMAILS":
      action.payload.splice(0, 1);
      let arr = [];
      let index = 1;
      for (const item of action.payload) {
        const newItem = { id: index, email: item[0], sent: false };
        arr.push(newItem);
        index++;
      }
      return (emails = arr);
      
    case "SENT_EMAIL":
      const newArr = [...emails];
      for (const item of newArr) {
        if (item.email === action.payload) {
          item.sent = true;
        }
      }
      return (emails = newArr);
    default:
      return emails;
  }
};
