var TypescaleList = React.createClass({
  render: function() {
  	var items = [];
  	var styles = {'font-size': this.props.basePx + 'px'};
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
  	var styles = {'font-size' : ems(base, scale) + 'em'  };

    return (
      <li style={ styles }>
        Item
      </li>
    );
  }
});



ReactDOM.render(
  <TypescaleList basePx="16" scale="1.20" scaleStart="-4" scaleEnd="4" />,
  document.getElementById('main')
);





