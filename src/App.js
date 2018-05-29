import React, { Component } from "react";

class App extends Component {
  render() {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                {this.props.menu}
            </nav>
            <div className="container-fluid" role="main">
                <div className="row">
                    <div className="col-md-12">
                        {this.props.main}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
