import React, { Component } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';

const server = require("../../server");

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
);


export default class ChartCot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jsonUrl: props.jsonUrl,
            bieuDo: null
        };
    }

    componentDidMount() {
        //goi api de load
        server.query(this.state.jsonUrl, {})
            .then((response) => {
                this.setState({
                    bieuDo: response
                })
            })
    }

    render() {

        return (
            <div style={{ height: "250px", width: "100%", margin: "0 auto"}}>
                {
                    this.state.bieuDo === null ? null :
                        (
                            this.state.bieuDo.type === "bar" ?
                                <Bar style={{}} options={{...this.state.bieuDo.options}} data={this.state.bieuDo.data} />
                                : null
                        )
                }
                {/* <Bar style={{position:"absolute",bottom:"0px"}} options={this.state.bieuDo.options} data={this.state.bieuDo.data} /> */}

            </div>
        );
    }
}
