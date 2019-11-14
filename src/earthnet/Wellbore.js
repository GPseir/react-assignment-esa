import React, {useState, useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import Dashboard from '../layouts/Dashboard/Dashboard';
import {Typography, Grid, List, ListItem, ListItemText} from '@material-ui/core';
import useStyles from './Earthnet_Components/styles';
import EsaLogo from '../EsaLogo';
import {
	Portlet,
	PortletHeader,
	PortletLabel,
	PortletContent,
	EsaButton,
} from '../layouts/components';
import {fetchWells, fetchLogs, fetchForms} from '../store/actions/actions';
import {
	fetchPlots,
	selectedItemsWells,
	selectedItemsLogs,
	selectedItemsForms,
} from '../store/actions/actions';
import ChartWell from './Earthnet_Components/ChartWell';
import Loader from './Earthnet_Components/loading.gif';

function Wellbore(props) {
	const dispatch = useDispatch();
	const classes = useStyles();
	const lSWells = localStorage.getItem('WellsWell');
	const lSLogs = localStorage.getItem('LogsWell');
	const lSForms = localStorage.getItem('FormsWell');
	const [selectedWells, setSelectedWells] = useState([]);
	const [selectedLogs, setSelectedLogs] = useState([]);
	const [selectedForms, setSelectedForms] = useState([]);
	const {wells, logs, forms, plots, loadingWells, loadingLogs, loadingForms} = props;

	useEffect(() => {
		dispatch(fetchWells());
	}, [dispatch]);
	useEffect(() => {
		dispatch(fetchLogs());
	}, [dispatch]);
	useEffect(() => {
		dispatch(fetchForms());
	}, [dispatch]);

	// Wells logic
	const handleSelectedWells = value => {
		const currentIndex = selectedWells.indexOf(value);
		const newSelectedWells = [...selectedWells];
		if (currentIndex === -1) {
			newSelectedWells.push(value);
		} else {
			newSelectedWells.splice(currentIndex, 1);
		}
		setSelectedWells(newSelectedWells);
		localStorage.setItem('WellsWell', newSelectedWells);
	};

	const isSelectedWells = value => {
		if (lSWells === null) {
			return selectedWells.includes(value);
		} else if (lSWells !== null && selectedWells.length === 0) {
			return lSWells.includes(value);
		} else if (selectedWells.length !== 0) {
			return selectedWells.includes(value);
		}
	};

	const wellsID = () => {
		if (selectedWells.length) {
			const wellsID = selectedWells.map(well => `&wellId=${well}`);
			const setWellsID = wellsID.join('');
			return setWellsID;
		} else if (lSWells && !selectedWells.length) {
			const wellsID = [...lSWells].map(well => `&wellId=${well}`);
			const setWellsID = wellsID.join('');
			return setWellsID;
		}
	};
	const selectedWellsID = wellsID();

	const fetchPlotsWells = param => {
		const BASE_URL = 'http://localhost:8000';
		const NEW_URL = BASE_URL + `/plots?${param}`;
		console.log(NEW_URL);
		return NEW_URL;
	};

	// Logs Logic
	const handleSelectedLogs = value => {
		const currentIndex = selectedLogs.indexOf(value);
		const newSelectedLogs = [...selectedLogs];
		if (currentIndex === -1) {
			newSelectedLogs.push(value);
		} else {
			newSelectedLogs.splice(currentIndex, 1);
		}
		setSelectedLogs(newSelectedLogs);
		localStorage.setItem('LogsWell', newSelectedLogs);
	};
	const isSelectedLogs = value => {
		if (lSLogs === null) {
			return selectedLogs.includes(value);
		} else if (lSLogs !== null && selectedLogs.length === 0) {
			return lSLogs.includes(value);
		} else if (selectedLogs.length !== 0) {
			return selectedLogs.includes(value);
		}
	};

	// Forms Logic
	const handleSelectedForms = value => {
		const currentIndex = selectedForms.indexOf(value);
		const newSelectedForms = [...selectedForms];
		if (currentIndex === -1) {
			newSelectedForms.push(value);
		} else {
			newSelectedForms.splice(currentIndex, 1);
		}
		setSelectedForms(newSelectedForms);
		localStorage.setItem('FormsWell', newSelectedForms);
	};
	const isSelectedForms = value => {
		if (lSForms === null) {
			return selectedForms.includes(value);
		} else if (lSForms !== null && selectedForms.length === 0) {
			return lSForms.includes(value);
		} else if (selectedForms.length !== 0) {
			return selectedForms.includes(value);
		}
	};

	return (
		<Dashboard>
			<Typography variant="h2">
				<Grid container spacing={1} className={classes.fullHeight}>
					<Grid item xs={12} md={5} container spacing={2}>
						<Grid item xs={12} container spacing={2}>
							<Grid item xs={12}>
								{/* <Typography variant="body1"></Typography> */}
							</Grid>

							{/* List 1 Wells */}
							<Grid item xs={4}>
								<Portlet onMouseLeave={() => dispatch(selectedItemsWells(selectedWells))}>
									<PortletHeader className={classes.header}>
										<PortletLabel title="Wells" />
									</PortletHeader>
									<PortletContent className={classes.portletContent} noPadding>
										<List>
											{/* Loader */}
											{loadingWells && (
												<img
													height="100"
													width="100"
													src={Loader}
													alt="loader"
													style={{display: 'block', margin: 'auto', 'margin-top': '150px'}}
												/>
											)}
											{wells &&
												wells.map(option => (
													<ListItem
														key={option.id}
														className={classes.listItem}
														selected={isSelectedWells(option.id)}
														// loaded={isLoadedWells(option.id)}
														onClick={() => handleSelectedWells(option.id)}
													>
														<ListItemText primary={`${option.name}`} />
													</ListItem>
												))}
										</List>
									</PortletContent>
								</Portlet>
							</Grid>

							{/* List 2 Logs */}
							<Grid item xs={4}>
								<Portlet onMouseLeave={() => dispatch(selectedItemsLogs(selectedLogs))}>
									<PortletHeader className={classes.header}>
										<PortletLabel title="Logs" />
									</PortletHeader>
									<PortletContent className={classes.portletContent} noPadding>
										<List>
											{/* Loader */}
											{loadingLogs && (
												<img
													height="100"
													width="100"
													src={Loader}
													alt="loader"
													style={{display: 'block', margin: 'auto', 'margin-top': '150px'}}
												/>
											)}
											{logs &&
												logs.map(option => (
													<ListItem
														key={option.id}
														className={classes.listItem}
														selected={isSelectedLogs(option.id)}
														onClick={() => handleSelectedLogs(option.id)}
													>
														<ListItemText primary={`${option.log}`} />
													</ListItem>
												))}
										</List>
									</PortletContent>
								</Portlet>
							</Grid>

							{/* List 3 Forms */}
							<Grid item xs={4}>
								<Portlet onMouseLeave={() => dispatch(selectedItemsForms(selectedForms))}>
									<PortletHeader className={classes.header}>
										<PortletLabel title="Formations" />
									</PortletHeader>
									<PortletContent className={classes.portlet_ButtonContent} noPadding>
										<List>
											{/* Loader */}
											{loadingForms && (
												<img
													height="100"
													width="100"
													src={Loader}
													alt="loader"
													style={{display: 'block', margin: 'auto', 'margin-top': '150px'}}
												/>
											)}
											{forms &&
												forms.map(option => (
													<ListItem
														key={option.id}
														className={classes.listItem}
														selected={isSelectedForms(option.id)}
														onClick={() => handleSelectedForms(option.id)}
													>
														<ListItemText primary={`${option.name}`} />
													</ListItem>
												))}
										</List>
									</PortletContent>
								</Portlet>

								{/* Show Plots Button */}
								<EsaButton
									fullWidth
									className={classes.button}
									id="btnWell"
									disabled={
										(selectedWells.length && selectedLogs.length && selectedForms.length) ||
										(lSWells && lSLogs && lSForms)
											? false
											: true
									}
									onClick={() => dispatch(fetchPlots(fetchPlotsWells(selectedWellsID)))}
								>
									Show Plot
								</EsaButton>
							</Grid>
						</Grid>
					</Grid>

					{/* Esa logo, Charts area */}
					<Grid item xs={10} md={7}>
						{!plots && (
							<div className={classes.logoContainer}>
								<EsaLogo />
							</div>
						)}
						{plots && <ChartWell />}
					</Grid>
				</Grid>
			</Typography>
		</Dashboard>
	);
}

const mapStateToProps = state => {
	return {
		loadingWells: state.Wells.isLoading,
		loadingLogs: state.Wells.isLoading,
		loadingForms: state.Wells.isLoading,
		wells: state.Wells.wells,
		logs: state.Logs.logs,
		forms: state.Forms.forms,
		plots: state.Plots.plots,
		selWells: state.SelectedWells.selectedWells,
	};
};

export default connect(mapStateToProps)(Wellbore);
