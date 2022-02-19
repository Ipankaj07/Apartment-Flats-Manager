import { combineReducers } from 'redux';
import { flatReducer, selectedApartment, pageChange } from './flatReducer';

const reducer = combineReducers({
    allFlats: flatReducer,
    selectedFlat: selectedApartment,
    pageChange: pageChange
})

export default reducer;