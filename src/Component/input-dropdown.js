import React from 'react';
import  './input-dropdown.css';

class InputDropDown extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            open: false,
            items: []
        }

        this.handleChange = this.handleChange.bind(this)
    }

    container = React.createRef();

    componentWillMount(){

        document.addEventListener("mousedown", this.handleClickOutside);

        const { list } = this.props
        this.setState({items: this.handleList(list) })
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleList(list){
        return list.map(element => { return <li key={ Math.random()} onClick={ (e)=> this.handleMessage(e)} >{ element.name }</li> }) || []
    }

    handleChange(e){

        const { list } = this.props
        var filtered = list.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
        let result = this.handleList(filtered)
        this.setState({items: result})
    }

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
          this.setState({open: false});
        }
    };

    handleMessage(e){
        alert(e.target.innerText)
        this.setState({open: false});
    }

    render(){
        return (
            <div className="App">
                <div className="container" ref={this.container}>
                    <input style={{ width: '300px' }}  onClick={ (e)=> this.setState({open: true}) } onChange={ (e)=> this.handleChange(e) } />
                    {this.state.open && (
                        <div className="dropdown">
                            <ul>
                                { this.state.items }
                            </ul>
                        </div>
                    )}
                </div>
            </div>
          );
    }
}

export default InputDropDown