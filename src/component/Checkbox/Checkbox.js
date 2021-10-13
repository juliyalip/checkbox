import { Component } from 'react';
import './checkbox.css'

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
        const { one, two, three } = this.state;
        return (
            <form>
                <div className="container">
                     
                      <label className="label">
                        <input type="checkbox" name="one" onChange={this.handleChange} className="checkbox" checked={this.state.one} />
                       <span className="icon-checkbox" style={{ backgroundColor: one ? 'yellow': ' '  }}></span>
                    100 ml
                </label>
                  </div>
                <div className="container">
                      <label className="label">
                    <input type="checkbox" name="two" onChange={this.handleChange} className="checkbox" checked={ this.state.two}/>
                    <span className="icon-checkbox" style={{ backgroundColor: two ? 'yellow': ' '  }}></span>
                        200 ml
                </label>
                  </div>
                <div className="container">
                     <label className="label">
                    <input type="checkbox" name="three" onChange={this.handleChange} className="checkbox" checked={ this.state.three}/>
                    <span className="icon-checkbox" style={{ backgroundColor: three ? 'yellow': ' '  }}></span>
                        300 ml
                </label>
               </div>
            </form>
        )
    }
}