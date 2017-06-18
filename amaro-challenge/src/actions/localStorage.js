export const loadState = () => {
  try {
    const serializeState = localStorage.getItem('amaro-challenge-state');
    if (serializeState === null) {
      return undefined;
    }
    return JSON.parse(serializeState);

  } catch(err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem('amaro-challenge-state', serializeState);
  } catch (err) {
    console.log('error saving on localStorage: ', err);
  }
}
