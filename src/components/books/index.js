import React from 'react';

// Components
import AutocompleteHOC from './autocomplete-hoc';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';

// Styles
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './styles.css';

const Books = props => {

return (
    <div className='books-container' >
        {props.books.map(book => (
            <ExpansionPanel key={book.title}>
               <ExpansionPanelSummary 
               expandIcon={ <ExpandMoreIcon /> }>
                    <div className='content-wrapper'>
                        <Typography>{`${book.author}: ${book.title}`}</Typography>
                        <div className='rating-container'>
                            <h4 className='rating'>{ book.review_score }</h4>
                        </div>
                    </div>
               </ExpansionPanelSummary>
               <ExpansionPanelDetails>
                 <Typography>
                     { book.summary }
                 </Typography>
               </ExpansionPanelDetails>
            </ExpansionPanel>
        ))}
    </div>
);
}


export default AutocompleteHOC(Books);