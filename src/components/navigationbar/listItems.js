import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import ListSubheader from "@material-ui/core/ListSubheader"
import DashboardIcon from "@material-ui/icons/Dashboard"
import InputIcon from "@material-ui/icons/Input"
import ListAlt from "@material-ui/icons/ListAlt"
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline"
import AssignmentIcon from "@material-ui/icons/Assignment"
import { Link } from "react-router-dom"

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Inicio" />
    </ListItem>

    <Link to="/listaprecios">
      <ListItem button>
        <ListItemIcon>
          <ListAlt />
        </ListItemIcon>
        <ListItemText primary="Lista de Precios" />
      </ListItem>
    </Link>
    <Link to="/articulos">
      <ListItem button>
        <ListItemIcon>
          <AddCircleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Productos" />
      </ListItem>
    </Link>
    <ListItem button disabled>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Ventas" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <InputIcon />
      </ListItemIcon>
      <ListItemText primary="Ingresos" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Administración</ListSubheader>
    <Link to="/compras">
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary="Compras" />
    </ListItem>
    </Link>
  </div>
);
