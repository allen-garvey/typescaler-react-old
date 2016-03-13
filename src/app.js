var TypescaleList = React.createClass({
  render: function() {
  	var items = [];
  	var styles = {'fontSize': this.props.basePx + 'px'};
  	var start = parseInt(this.props.scaleStart);
  	var end = parseInt(this.props.scaleEnd);
	var scale = this.props.scale;
	for (var i = start; i < end; i++) {
	    items.push(<TypescaleListItem base={i} scale={scale} />);
	}
	items = items.reverse();
    return (
      <ol className="typescale_list" style={ styles }>
        	{items}
      </ol>
    );
  }
});

var TypescaleListItem = React.createClass({
  render: function() {
  	var ems = function(power, scale){
  		return Math.pow(scale, power);
  	};
  	var base = parseInt(this.props.base);
  	var scale = parseFloat(this.props.scale);
  	var styles = {'fontSize' : ems(base, scale) + 'em'  };

    return (
      <li style={ styles }>
        Item
      </li>
    );
  }
});
var BasePxForm = React.createClass({
  onChange : function(event){
    this.setState({'value' : event.target.value});
  },
  render: function() {
    var value = this.state ? this.state.value : this.props.value
    return <div>
      <input type="number" id="base_px_input" min="1" value={value} onChange={this.onChange} />
    </div>;
  }
});


var AppContainer = React.createClass({
  render: function() {
    return <div>
    <BasePxForm value="16" />
      <div>
        <TypescaleList basePx="16" scale="1.20" scaleStart="-4" scaleEnd="4" />
      </div>
    </div>;
  }
});



ReactDOM.render(
  <AppContainer />,
  document.getElementById('main')
);





