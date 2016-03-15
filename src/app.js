var TS = {};
TS.getProperty = function(obj, propName){
    var prop = obj.state ? obj.state[propName] : obj.props[propName];
    return prop;
};

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
    var basePx = this.state ? this.state.base : this.props.base;
  	var base = parseInt(basePx);
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
    this.props.parentCallback(event.target.value);
  },
  render: function() {
    var value = TS.getProperty(this, 'value');
    return <div>
      <input type="number" min="1" value={value} onChange={this.onChange} />
    </div>;
  }
});

var ScaleForm = React.createClass({
  onChange : function(event){
    this.setState({'value' : event.target.value});
    this.props.parentCallback(event.target.value);
  },
  render: function() {
    var value = TS.getProperty(this, 'value');
    return <div>
      <input type="number" min="1" step="0.05" value={value} onChange={this.onChange} />
    </div>;
  }
});


var AppContainer = React.createClass({
  updateBasePx : function(basePx){
    this.setState({'basePx' : basePx});
  },
  updateScale : function(scale){
    this.setState({'scale' : scale});
  },
  render: function() {
    var basePx = TS.getProperty(this, 'basePx');
    var scale = TS.getProperty(this, 'scale');
    return <div>
    <BasePxForm value={this.props.basePx} parentCallback={this.updateBasePx} />
    <ScaleForm value={this.props.scale} parentCallback={this.updateScale} />
        <div>
            <TypescaleList basePx={basePx} scale={scale} scaleStart="-4" scaleEnd="4" />
        </div>
    </div>;
  }
});



ReactDOM.render(
    <AppContainer basePx="16" scale="1.20" />,
    document.getElementById('main')
);





