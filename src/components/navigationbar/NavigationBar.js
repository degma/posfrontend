import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true,
        };
    }
    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
        return (
            <nav className="navbar navbar-expand-lg navbar-fixed-top navbar-dark bg-dark transparent-nav">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Kinder</a>
                    <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className={`${classOne}`} id="navbarResponsive">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><i className="fas fa-home"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/listaprecios"><i className="far fa-list-alt"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/articulos"><i className="fas fa-tshirt"></i></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/plantel"><i className="fas fa-cog"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default NavigationBar;