import React from 'react';
import './button-dropdown.css';

class ButtonDropDown extends React.Component{
    container = React.createRef();
    state = {
        open: false,
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
      document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleButtonClick = () => {
        this.setState(state => {
          return {
            open: !state.open,
          };
        });
    };

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({
            open: false,
          });
        }
    };

    handleMessage(e){
        alert(e.target.innerText)
        this.setState({open: false});
    }

    render(){
        return(
            <div className="App">
                <div className="container" ref={this.container}>
                    <button type="button" className="button" onClick={ this.handleButtonClick }>
                        ☰
                    </button>
                    {this.state.open && (
                        <div className="dropdown">
                            <ul>
                                <li onClick={ (e)=> this.handleMessage(e) }>Option 1</li>
                                <li onClick={ (e)=> this.handleMessage(e) }>Option 2</li>
                                <li onClick={ (e)=> this.handleMessage(e) }>Option 3</li>
                                <li onClick={ (e)=> this.handleMessage(e) }>Option 4</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
export default ButtonDropDown;
