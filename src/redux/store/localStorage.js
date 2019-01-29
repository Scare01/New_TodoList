export const loadState = () => {
  try {
    const State = localStorage.getItem("state");
    if (State === null) {
      return undefined;
    }
    return JSON.parse(State);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const State = JSON.stringify(state);
    localStorage.setItem("state", State);
  } catch (err) {
    //ignore err
  }
};
