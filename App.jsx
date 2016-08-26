import React from 'react';

class EditableRequestTable extends React.Component {	  
	  
  
	  
	constructor(props) {
      super(props);
		
      this.state = {
         requests:props.requests
      }
    

   };
	  
	 handleRequestRemove( request ) {

          var index = -1;	
          var clength = this.state.requests.length;
      		for( var i = 0; i < clength; i++ ) {
      			if( this.state.requests[i].plates === request.plates ) {
      				index = i;
      				break;
      			}
      		}
      		this.state.requests.splice( index, 1 );	
      		this.setState( {requests: this.state.requests} );
        }
		
		
	handleNewRowSubmit( newrequest ) {		
		console.log(this);
		console.log(this.state.requests);
		this.state.requests.push(newrequest)
	  this.setState( {requests: this.state.requests} );
	}
		
   render() {
      return (
         <div>        
			<RequestTable requests={this.props.requests} onRequestRemove={this.handleRequestRemove.bind(this)} />
			<NewRequestForm onRowSubmit={this.handleNewRowSubmit.bind(this)} />
		</div>
      );
   }
}





class NewRequestForm extends React.Component {

	
   handleSubmit(e){
	
	e.preventDefault();
	
	  var plates = this.refs.plates.value;
	  var building = this.refs.building.value;
	  var date = this.refs.date.value;
	  var time = this.refs.time.value;
	  var spot = this.refs.spot.value;
	  var newrequest = {plates: plates, building: building, date: date, time: time, spot: spot,  };
	  this.props.onRowSubmit( newrequest );

	  this.refs.plates.value = '';
	  this.refs.building.value = '';
	  this.refs.date.value = '';
	  this.refs.time.value = '';
	  this.refs.spot.value = '';
	  
	  return false;
	}
	
   render() {
      return (	  
		<form onSubmit={this.handleSubmit.bind(this)}>
			<table>
				<tbody>
					<tr>
						<td><input type="text" ref="plates"/></td>							
						<td><input type="text" ref="building"/></td>							
						<td><input type="text" ref="date"/></td>							
						<td><input type="text" ref="time"/></td>							
						<td><input type="text" ref="spot"/></td>													
						<td><input type="submit" value ="Add"/></td>
					</tr>
				</tbody>
			</table>              
		</form>
      );
   }
}




class RequestTable extends React.Component {


	handleRequestRemove(request){
		console.log("Table");
		console.log(request);
	  this.props.onRequestRemove( request );
	}
   
   render() {
		
	var rows = []; 
	var that = this;	
    this.props.requests.forEach(function(request) {      
      rows.push(<RequestTableRow request={request} key={request.plates} onRequestRemove={that.handleRequestRemove.bind(that)} />);      
    });
	
	var tableStyle = {
	  border: 'solid 1px'
	};
	
    return (
      <table style = {tableStyle}>
        <thead>
          <RequestTableHeader />
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );		

   }
}



class RequestTableHeader extends React.Component {

   
   render() {  
   
      return (	  
		<tr>			
			<th>Immatriculation</th>
			<th>Batiment</th>
			<th>Date</th>
			<th>Horaire</th>
			<th>Place</th>
			<th></th>			
		</tr>         
      );
   }
}



class RequestTableRow extends React.Component {

	
   handleRequestRemove(){
		console.log("TableRow")
	  this.props.onRequestRemove( this.props.request );
	}
	
   render() {
      return (	  
		<tr>			
			<td>{this.props.request.plates}</td>
			<td>{this.props.request.building}</td>
			<td>{this.props.request.date}</td>
			<td>{this.props.request.time}</td>
			<td>{this.props.request.spot}</td>
			<td><button name = "remove" onClick= {this.handleRequestRemove.bind(this)}>Remove</button></td>
		</tr>         
      );
   }
}




export default EditableRequestTable;