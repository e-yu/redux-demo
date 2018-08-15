import React from 'react';
import { Link } from 'react-router-dom';

export class ListFilter extends React.Component{
    constructor(props) {
        super(props);
    }

    setRadios(props) {
        let radios = [];
        let { tabs } = props;

        for(let i of tabs) {
            if(i.isCheck) {
                radios.push(
                    (
                        <label className="radio-inline">
                            <input type="radio" name="tab" value={ i.name } onClick={ props.handleClick } checked/>
                                { i.name }
                        </label>
                    )
                );
            }else {
                radios.push(
                    (
                        <label className="radio-inline">
                            <input type="radio" name="tab" value={ i.name } onClick={ props.handleClick }/>
                                { i.name }
                        </label>
                    )
                );
            }
        }

        return radios;
    }

    render() {
        const props = this.props;
        const radios = this.setRadios(props);

        return (
            <div className="form-group">
                { radios }
            </div>
        );
    }
}