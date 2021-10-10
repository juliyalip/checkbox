import { Component } from 'react';

export default class CheckBox extends Component{
    state = {
        one: false,
        two: false,
        three: false
    };

    handleChange = e => {
        const { name } = e.target;
        this.setState(prevState => ({
            [name]: !prevState[name]
        }))
    }

    render() {
        return (
            <form>
                <label>
                    <input type="checkbox" name="one" onChange={this.handleChange} checked={ this.state.one}/>
                    100 ml
                </label>
                <label>
                    <input type="checkbox" name="two" onChange={this.handleChange} checked={ this.state.two}/>
                    200 ml
                </label>
                <label>
                    <input type="checkbox" name="three" onChange={this.handleChange} checked={ this.state.three}/>
                    300 ml
                </label>
            </form>
        )
    }
}