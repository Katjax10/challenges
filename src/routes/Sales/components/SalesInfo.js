import React from 'react'
import { connect } from 'react-redux';
import NorthAmerica from './NorthAmerica';
import Europe from './Europe';

export class salesGrid extends React.Component {
  static propTypes = {
    reload: React.PropTypes.object,
    state: React.PropTypes.object
  };

  componentWillMount() {
      this.props.reload.fetchData();
  }

  render() {
    const { regionalInformation } = this.props.state.sales;
    const {salesLeads} = this.props.state.sales.regionalInformation[0];
    const europeLeads = this.props.state.sales.regionalInformation[1].salesLeads;

    return (
      <div id="top-vp" className={`${this.props.state.sales.status}`}>
        <span className={`${this.props.state.sales.status}`}>{this.props.state.sales.title} ({this.props.state.sales.status})</span>
        <NorthAmerica
            northAmerica={regionalInformation[0]}
            canadaLeads={salesLeads[0]}
            usaLeads={salesLeads[1]}
          />
        <Europe
          europe={regionalInformation[1]}
          germanyLeads={europeLeads[0]}
          italyLeads={europeLeads[1]}
        />
      </div>
    )
  }
}

export default salesGrid;
