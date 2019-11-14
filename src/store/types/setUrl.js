const BASE_URL = 'http://localhost:8000';

const WELLS_URL = '/wells';
const LOGS_URL = '/logs';
const FORMS_URL = '/formations';

const fetchDataUrl = param => {
	const NEW_URL = BASE_URL + `${param}`;
	return NEW_URL;
};

const wells = fetchDataUrl(WELLS_URL);
const logs = fetchDataUrl(LOGS_URL);
const forms = fetchDataUrl(FORMS_URL);

export {wells, logs, forms};
