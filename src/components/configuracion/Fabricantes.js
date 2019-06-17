import React, { Component } from 'react'
import FormAddFabricante from './FormAddFabricante'
import eventService from '../../api/eventService'
import { toast } from "react-toastify"

class Fabricantes extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoading: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit = args => {
        this.setState({ isLoading: true})
        eventService.fabricante.crearFabricante(args)
        .then( fabricante => {        
        toast.success("Fabricante agregado correctamente!")
        this.setState({ isLoading: false})    
      })
      .catch(error => {
        console.log(error)
        toast.warn(error)
      })
    }
    resetForm() {

    }
    componentDidMount() {
        toast.configure();
      }

    render() {
        return (
            <React.Fragment>
                <div className="bg-light">
                <div className="col-md-7 mt-3">
                    <FormAddFabricante 
                        handleSubmit={this.handleSubmit}
                        isLoading = {this.state.isLoading}                        
                    />
                </div>
                <div className="col-md-5">        

                </div>
                </div>

            </React.Fragment>
        )
    }

}

export default Fabricantes