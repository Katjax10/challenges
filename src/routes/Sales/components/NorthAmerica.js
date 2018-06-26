import React from 'react'

export class NorthAmerica extends React.Component {
  static propTypes = {
    northAmerica: React.PropTypes.object,
    canadaLeads: React.PropTypes.object,
    usaLeads: React.PropTypes.object
  };


  showCanada() {
    const canadaSales = this.props.canadaLeads.reps.map((locations) => {
      const location = locations.location;
      const status = locations.status;
      return (
        <div  className="offset-sm-1">
         <div className={`reps ${status} col-sm-9`}>{location} ({status})</div>
        </div>
      );
    });
      return canadaSales;
  }

  showUs() {
    const usSales = this.props.usaLeads.reps.map((locations) => {
      const  location = locations.location;
      const status = locations.status;
      return (
        <div className="offset-sm-1">
          <div className={`reps ${status} col-sm-9`}>{location} ({status})</div>
        </div>
      )
    });
    return usSales;
  }

  render() {

    const {canadaLeads, usaLeads,  northAmerica} = this.props;

    return (
      <div className="container row">
          <h4 className={`col-sm-12 ${northAmerica.status}`}>
            {northAmerica.region} ({this.props.northAmerica.status})
          </h4>
          <div className="col-sm-6">
            <h5 className={`${canadaLeads.status}`}>Leads: {canadaLeads.leadArea} ({canadaLeads.status})</h5>
            <div>
              {this.showCanada()}
            </div>
          </div>
          <div className="col-sm-6">
            <h5 className={`${usaLeads.status}`}>Leads: {usaLeads.leadArea} ({usaLeads.status})</h5>
            {this.showUs()}
          </div>
        </div>
    )
  }
}

export default NorthAmerica;
