import {makeStyles} from '@material-ui/core';

const styles = theme => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
	},
	fullHeight: {height: '100%'},
	paper: {
		padding: theme.spacing(3),
	},
	button: {marginTop: theme.spacing(5)},
	logoContainer: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		'& svg': {
			width: '30%',
		},
	},
	header: {
		padding: theme.spacing(0, 1, 0, 2),
		background: theme.palette.default.dark,
		color: theme.palette.default.contrastText,
	},
	headerLabel: {
		'& .MuiTypography-root': {
			fontSize: '12px',
			fontWeight: 800,
		},
	},
	portletContent: {
		height: 0,
		minHeight: 770,
		display: 'flex',
		flexDirection: 'column',
	},
	portlet_ButtonContent: {
		height: 0,
		minHeight: 698,
		display: 'flex',
		flexDirection: 'column',
	},
	listItem: {
		cursor: 'pointer',
		justifyContent: ' space-between',
		'&.Mui-selected.haveData,&.Mui-selected.haveData:hover': {
			backgroundColor: 'rgba(41, 150, 243, .3)',
		},
		'&:hover, &.Mui-selected,&.Mui-selected:hover': {
			backgroundColor: theme.palette.default.light,
		},
		'&.Mui-loaded.haveData,&.Mui-loaded.haveData:hover': {
			backgroundColor: 'rgba(41, 150, 243, .3)',
		},
		'&:hover, &.Mui-loaded,&.Mui-loaded:hover': {
			backgroundColor: theme.palette.default.light,
		},
		'&::selection': {backgroundColor: 'transparent'},
	},
});
const useStyles = makeStyles(styles);

export default useStyles;
