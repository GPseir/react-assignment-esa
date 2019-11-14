import * as types from '../types';

const INITIAL_STATE = {};

const setAction = (state, {payload}) => ({
	...state,
	payload,
});

const actionsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.ACTIONS:
			return setAction(state, action);
		default:
			return state;
	}
};

const wellsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.FETCH_WELLS_REQUEST:
			return {...state, isLoading: true};
		case types.FETCH_WELLS_FAIL:
			return {...state, isLoading: false, errorMessage: action.payload};
		case types.FETCH_WELLS_SUCCESS:
			return {...state, isLoading: false, wells: action.payload};
		default:
			return state;
	}
};

const logsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.FETCH_LOGS_REQUEST:
			return {...state, isLoading: true};
		case types.FETCH_LOGS_FAIL:
			return {...state, isLoading: false, errorMessage: action.payload};
		case types.FETCH_LOGS_SUCCESS:
			return {...state, isLoading: false, logs: action.payload};
		default:
			return state;
	}
};

const formsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.FETCH_FORMS_REQUEST:
			return {...state, isLoading: true};
		case types.FETCH_FORMS_FAIL:
			return {...state, isLoading: false, errorMessage: action.payload};
		case types.FETCH_FORMS_SUCCESS:
			return {...state, isLoading: false, forms: action.payload};
		default:
			return state;
	}
};

const plotsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.FETCH_PLOTS_REQUEST:
			return {...state, isLoading: true};
		case types.FETCH_PLOTS_FAIL:
			return {...state, isLoading: false, errorMessage: action.payload};
		case types.FETCH_PLOTS_SUCCESS:
			return {...state, isLoading: false, plots: action.payload};
		case types.PLOTS_WELLS_PARAM:
			return {...state, plot_wells_param: action.payload};
		default:
			return state;
	}
};

// Selected Items Reducers
const selectedWellsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SELECTED_WELLS:
			return {...state, selectedWells: action.payload};
		default:
			return state;
	}
};
const selectedLogsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SELECTED_LOGS:
			return {...state, selectedLogs: action.payload};
		default:
			return state;
	}
};
const selectedFormsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SELECTED_FORMS:
			return {...state, selectedForms: action.payload};
		default:
			return state;
	}
};

const selectedBarModeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SELECTED_BARMODE:
			return {...state, selectedBarMode: action.payload};
		default:
			return state;
	}
};
const selectedOrientationReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SELECTED_ORIENTATION:
			return {...state, selectedOrientation: action.payload};
		default:
			return state;
	}
};

export {
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
};
