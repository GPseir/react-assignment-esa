import * as types from '../types';
import {wells, logs, forms} from '../types/setUrl';

export const setAction = payload => ({
	type: types.ACTIONS,
	payload,
});

// Wells Actions
export const fetchWellsRequest = () => ({
	type: types.FETCH_WELLS_REQUEST,
});
export const fetchWellsSuccess = json => ({
	type: types.FETCH_WELLS_SUCCESS,
	payload: json,
});
export const fetchWellsFail = error => ({
	type: types.FETCH_WELLS_FAIL,
	payload: error,
});

export const fetchWells = () => {
	return async dispatch => {
		dispatch(fetchWellsRequest());
		try {
			let response = await fetch(wells);
			let json = await response.json();
			dispatch(fetchWellsSuccess(json));
		} catch (error) {
			dispatch(fetchWellsFail(error));
		}
	};
};

// Logs Actions
export const fetchLogsRequest = () => ({
	type: types.FETCH_LOGS_REQUEST,
});
export const fetchLogsSuccess = json => ({
	type: types.FETCH_LOGS_SUCCESS,
	payload: json,
});
export const fetchLogsFail = error => ({
	type: types.FETCH_LOGS_FAIL,
	payload: error,
});

export const fetchLogs = () => {
	return async dispatch => {
		dispatch(fetchLogsRequest());
		try {
			let response = await fetch(logs);
			let json = await response.json();
			dispatch(fetchLogsSuccess(json));
		} catch (error) {
			dispatch(fetchLogsFail(error));
		}
	};
};

// Forms Actions
export const fetchFormsRequest = () => ({
	type: types.FETCH_FORMS_REQUEST,
});
export const fetchFormsSuccess = json => ({
	type: types.FETCH_FORMS_SUCCESS,
	payload: json,
});
export const fetchFormsFail = error => ({
	type: types.FETCH_FORMS_FAIL,
	payload: error,
});

export const fetchForms = () => {
	return async dispatch => {
		dispatch(fetchFormsRequest());
		try {
			let response = await fetch(forms);
			let json = await response.json();
			dispatch(fetchFormsSuccess(json));
		} catch (error) {
			dispatch(fetchFormsFail(error));
		}
	};
};

// Plots Actions
export const fetchPlotsRequest = () => ({
	type: types.FETCH_PLOTS_REQUEST,
});
export const fetchPlotsSuccess = json => ({
	type: types.FETCH_PLOTS_SUCCESS,
	payload: json,
});
export const fetchPlotsFail = error => ({
	type: types.FETCH_PLOTS_FAIL,
	payload: error,
});
export const plots_wells_param = param => ({
	type: types.PLOTS_WELLS_PARAM,
	payload: param,
});

export const fetchPlots = param => {
	return async dispatch => {
		dispatch(fetchPlotsRequest());
		try {
			let response = await fetch(param);
			let json = await response.json();
			dispatch(fetchPlotsSuccess(json));
		} catch (error) {
			dispatch(fetchPlotsFail(error));
		}
	};
};

// Selected List items (Wells, Logs, Formations)
export const selectedItemsWells = item => ({
	type: types.SELECTED_WELLS,
	payload: item,
});
export const selectedItemsLogs = item => ({
	type: types.SELECTED_LOGS,
	payload: item,
});
export const selectedItemsForms = item => ({
	type: types.SELECTED_FORMS,
	payload: item,
});

// Selected Dropdown (Histogram)
export const selectedBarMode = value => ({
	type: types.SELECTED_BARMODE,
	payload: value,
});
export const selectedOrientation = value => ({
	type: types.SELECTED_ORIENTATION,
	payload: value,
});
