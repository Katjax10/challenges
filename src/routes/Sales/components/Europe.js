import React from 'react'

export class Europe extends React.Component {
  static propTypes = {
    europe: React.PropTypes.object,
    germanyLeads: React.PropTypes.object,
    italyLeads: React.PropTypes.object
  };


  showGermany() {
    const germanySales = this.props.germanyLeads.reps.map((locations) => {
      const location = locations.location;
      const status = locations.status;
      return (
        <div  className="offset-sm-1">
          <div className={`reps ${status} col-sm-9`}>{location} ({status})</div>
        </div>
      );
    });
    return germanySales;
  }

  showItaly() {
    const italySales = this.props.italyLeads.reps.map((locations) => {
      const  location = locations.location;
      const status = locations.status;
      return (
        <div className="offset-sm-1">
          <div className={`reps ${status} col-sm-9`}>{location} ({status})</div>
        </div>
      )
    });
    return italySales;
  }

  render() {

    const {italyLeads, germanyLeads, europe} = this.props;

    return (
      <div className="container row">
        <h3 className={`col-sm-12 ${europe.status}`}>
          {europe.region} ({europe.status})
        </h3>
        <div className="col-sm-6">
          <h5 className={`${germanyLeads.status}`}>Leads: {germanyLeads.leadArea} ({germanyLeads.status})</h5>
          <div>
            {this.showGermany()}
          </div>
        </div>
        <div className="col-sm-6">
          <h5 className={`${italyLeads.status}`}>Leads: {italyLeads.leadArea} ({italyLeads.status})</h5>
          {this.showItaly()}
        </div>
      </div>
    )
  }
}

export default Europe;
