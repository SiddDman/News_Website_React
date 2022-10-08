// import React, { Component } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'

// export class Navbar extends Component {
const Navbar = (props) => {
    let query = " "
    const handleOnChange = (event) => {
        query = event.target.value;
        console.log(query)
    }

    // async componentDidUpdate  () {
    //     console.log("submit")
    //     console.log(this.query)
    //     if (this.query!=="query") {
    //         const url = `https://newsapi.org/v2/top-headlines?q=${this.query}&apiKey=f66f031584fc43bda7263c650083bcc5&pageSize=${this.props.pageSize}`;
    //         this.setState({ loading: true })
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         console.log(parsedData)
    //         this.setState({
    //             articles: parsedData.articles,
    //             totalResults: parsedData.totalResults,
    //             loading: false
    //         })
    //     }
    // }

    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">RocketNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general">General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>
                        </ul>
                        <i className="fa-regular fa-sun" style={{ marginRight: '10px', fontSize: '20px', color: 'white' }} ></i>
                        <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        </div>
                        <i className="fa-regular fa-moon" style={{ marginRight: '10px', fontSize: '20px', color: 'white' }} ></i>

                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={handleOnChange}
                            />
                            {/* <button className="btn btn-outline-success" type="submit" onClick={this.componentDidUpdate()} > */}
                            <button className="btn btn-outline-success" type="submit"  >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar