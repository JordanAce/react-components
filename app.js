// TODO


var GroceryList = (props) => {
  console.log(props);
  return (
  <div>
  <h2>Grocery List</h2>
  <ul>

    {props.groceryItems.map(groceryItem =>
      <GroceryListItem groceryItem={groceryItem} />
    )}
  </ul>
  </div>
 )
};



class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemHover() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {

    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };

    console.log('What is this', this.props);
    return (
  <div>
    <li style = {style} onMouseOver = {this.onListItemHover.bind(this)}>{this.props.groceryItem}</li>

  </div>

    );
  }

};


ReactDOM.render(<GroceryList groceryItems={['Almond Milk', 'Cereal']} />, document.getElementById("app"));
