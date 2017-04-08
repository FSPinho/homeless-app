export const showAction = (action) => {
    if(/@@homeless-app/.test(action.type))
        console.log(action.type, '\nPAYLOAD => [', action.payload? action.payload: '(Empty)', '\n] END PAYLOAD');
};