import { Component } from 'react';


export default class RadioBtn extends Component {
    state = {
        variant1: '',
        variant2: ''

    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <label>
                    <input type="radio" name="variant1" value="react"
                        checked={this.state.variant1 === 'react'}
                    onChange={this.handleChange} /> react
                </label>
                 <label>
                    <input type="radio" name="variant1" value="html"
                        checked={this.state.variant1 === 'html'}
                    onChange={this.handleChange} /> html
                </label>
                   <label>
                    <input type="radio" name="variant1" value="css"
                        checked={this.state.variant1 === 'css'}
                    onChange={this.handleChange} /> css
                </label>
                
                <h3>ВОпрос 2</h3>
                 <label>
                    <input type="radio" name="variant2" value="учеба"
                        checked={this.state.variant2 === "учеба"}
                    onChange={this.handleChange} />учеба
                </label>
                 <label>
                    <input type="radio" name="variant2" value="практика"
                        checked={this.state.variant2 === "практика"}
                    onChange={this.handleChange} /> практика
                </label>
                   <label>
                    <input type="radio" name="variant2" value="работа"
                        checked={this.state.variant2 === "работа"}
                    onChange={this.handleChange} /> работа
                </label>
        </div>
    )}
}

