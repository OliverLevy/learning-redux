export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const login = (user) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};
