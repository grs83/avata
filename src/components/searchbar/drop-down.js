import React from 'react';

// Components
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default ({ values }) => {

    return (
        <List dense={true}>
            {values.map(item => 
                <ListItem key={item.value}>
                    <ListItemText
                    primary={item.value}
                    secondary={item.type}
                    />
                </ListItem>,
            )}
        </List>
    )
}