import React, { useState } from 'react';
import { makeStyles, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {
    Portlet,
    PortletHeader,
    PortletLabel,
    PortletContent,
    PortletToolbar
  } from '../index';

  const styles = theme => ({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },
    fullHeight: { height: '100%' },
    paper: {
      padding: theme.spacing(3)
    },
    button: { marginTop: theme.spacing(3) },
    logoContainer: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      '& svg': {
        width: '30%'
      }
    },
    header: {
      padding: theme.spacing(0, 1, 0, 2),
      background: theme.palette.default.dark,
      color: theme.palette.default.contrastText
    },
    headerLabel: {
      '& .MuiTypography-root': {
        fontSize: '12px',
        fontWeight: 800
      }
    },
    portletContent: {
      height: 0,
      minHeight: 400,
      display: 'flex',
      flexDirection: 'column'
    },
    listItem: {
      cursor: 'pointer',
      justifyContent: ' space-between',
      '&.Mui-selected.haveData,&.Mui-selected.haveData:hover': {
        backgroundColor: 'rgba(41, 150, 243, .3)'
      },
      '&:hover, &.Mui-selected,&.Mui-selected:hover': {
        backgroundColor: theme.palette.default.light
      },
      '&::selection': { backgroundColor: 'transparent' }
    }
  });
  const useStyles = makeStyles(styles);

const EsaList = () => {
    const classes = useStyles();
    const [selectedOptions, setSelect] = useState([]);

    const handleSelect = value => {
        const currentIndex = selectedOptions.indexOf(value);
        const newSelectedOptions = [...selectedOptions];
        if (currentIndex === -1) {
        newSelectedOptions.push(value);
        } else {
        newSelectedOptions.splice(currentIndex, 1);
        }
        setSelect(newSelectedOptions);
    };

    const isSelected = value => selectedOptions.includes(value);
    return (
        <Grid item xs={7}>
            <Portlet>
                <PortletHeader className={classes.header}>
                    <PortletLabel title="Title" />
                        <PortletToolbar>
                            <MoreVertIcon />
                        </PortletToolbar>
                </PortletHeader>
                <PortletContent className={classes.portletContent} noPadding>
                    <List>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(
                        option => (
                            <ListItem
                                key={option}
                                className={classes.listItem}
                                selected={isSelected(option)}
                                onClick={() => handleSelect(option)}
                            >
                                <ListItemText primary={`item-${option}`} />
                            </ListItem>
                        )
                        )}
                    </List>
                </PortletContent>
            </Portlet>    
        </Grid>
    )
}

export default EsaList