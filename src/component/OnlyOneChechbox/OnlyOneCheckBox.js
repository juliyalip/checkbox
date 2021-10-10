import { Component } from 'react';

export default class OnlyOneChechbox extends Component{
  
    state = {
    selected: ''
}

    handleChange = e => {
      
        this.setState({
           selected: e.target.value
        })
    }

    render() {
        return (
            <form>
                <label>
                    <input type="checkbox" name="selected" value="100 ml" onChange={this.handleChange}
                    checked={this.state.selected === "100 ml"}
                    />
                    100 ml
                </label>
                <label>
                    <input type="checkbox" name="selected" value="200 ml"
                         checked={this.state.selected === "200 ml"} onChange={this.handleChange} />
                    200 ml
                </label>
                <label>
                    <input type="checkbox" name="selected" value="300 ml"
                    checked={this.state.selected === "300 ml"}     onChange={this.handleChange} />
                    300 ml
                </label>
            </form>
        )
    }
}