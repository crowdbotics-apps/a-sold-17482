import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn453873Reducer from '../features/SignIn453873/redux/reducers'
import SignIn253764Reducer from '../features/SignIn253764/redux/reducers'
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn453873: SignIn453873Reducer,
SignIn253764: SignIn253764Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});