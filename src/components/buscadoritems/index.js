import React, {useState} from 'react'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types'
import { makeStyles } from "@material-ui/core/styles";
import BuscarItem from './BuscarItem';
import CardItem from './CardItem';


const styles = makeStyles(theme => ({
    root: {
        margin: 5
    }
})
);

//selectedItem, 

const BuscadorItems = ({ handleSelection, itemList, textoBuscador }) => {
    
    const classes = styles()
    const [items, setItems] = useState(itemList)

    const handleChange = event => {
        let updatedList = itemList ;
        updatedList = updatedList.filter(item => {
          return (
            item.nombre.toLowerCase().search(event.target.value.toLowerCase()) !== -1
          );
        });
        setItems(updatedList )
      };

    return (
        <Paper>            
            <BuscarItem searchedText={handleChange} searchText={textoBuscador} />
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="left" spacing={2} alignItems="center">
                        {items.map(item => (
                            <CardItem singleItem={item} selectedItem={handleSelection} />
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )

}

BuscadorItems.propTypes = {
    // currentItem: PropTypes.object.isRequired,
    // filteredItems: PropTypes.array.isRequired,    
    // textoBuscador: PropTypes.string.isRequired
}

export default BuscadorItems