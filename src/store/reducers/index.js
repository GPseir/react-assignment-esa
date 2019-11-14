import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {
	actionsReducer,
	wellsReducer,
	logsReducer,
	formsReducer,
	plotsReducer,
	selectedWellsReducer,
	selectedLogsReducer,
	selectedFormsReducer,
	selectedBarModeReducer,
	selectedOrientationReducer,
} from './actions';

const createRootReducer = history =>
	combineReducers({
		router: connectRouter(history),
		Actions: actionsReducer,
		Wells: wellsReducer,
		Logs: logsReducer,
		Forms: formsReducer,
		Plots: plotsReducer,
		SelectedWells: selectedWellsReducer,
		SelectedLogs: selectedLogsReducer,
		SelectedForms: selectedFormsReducer,
		SelectedBarMode: selectedBarModeReducer,
		SelectedOrientation: selectedOrientationReducer,
	});

export default createRootReducer;
