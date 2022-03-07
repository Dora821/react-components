// TODO
// var GroceryList = () => (
//   <div>
//     <h1> Grocery Items List</h1>
//     <GroceryItemList groceryItems ={['Apple', 'Banana', 'Orange']}/>
//   </div>
// );

// var GroceryItemList = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//     <li>{props.groceryItems[2]}</li>
//   </ul>
// );


// var Apple = () => (
//   <li>Apple1</li>
// );
// var Banana = () => (
//   <li>Banana1</li>
// );

// ReactDOM.render(<GroceryList/>, document.getElementById('app'));


// Handling User Events
// var GroceryList = () => (
//   <div>
//     <h1> Grocery Items List</h1>
//     <GroceryListItem groceryItems ={['Apple', 'Banana', 'Orange']}/>
//   </div>
// );

// var GroceryListItem = (props) => {
//   var onListItemClick = (event) => {
//     alert('I got clicked');
//   };
//   return (
//     <ul>
//       <li onClick = {onListItemClick}>{props.groceryItems[0]}</li>
//       <li>{props.groceryItems[1]}</li>
//       <li>{props.groceryItems[2]}</li>
//     </ul>
//   );
// };

// ReactDOM.render(<GroceryList/>, document.getElementById('app'));


// // Making applications interactive with states
// class GroceryListItem extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <li>{this.props.groceryItems}</li>
//     );
//   }
// }

// var GroceryList = (props) => (
//   <ul>
//     {props.groceryItems.map(items => <GroceryListItem items={items} />)}
//   </ul>
// );
// ReactDOM.render(<GroceryList/>, document.getElementById('app'));

// // State

// const groceryLi = () => {
//   return <li></li>;
// }
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props)
    this.state = {
      done: false
    };
  }
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {
    var style = {
      fontWeight: this.state.done? 'bold' : 'none'
    };
    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.items}</li>
    );
  }
}


var GroceryList = (props) => (
  <ul>
    {props.groceryItems.map(items => <GroceryListItem items={items} />)}
  </ul>
);


// class GroceryList extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const groceryItems = ['Apple', 'Banana', 'Orange'];
//     return (
//       <><div>
//         <h1> Grocery List</h1>
//         <ul>
//         {/* <GroceryListItem groceryData = {groceryItems}/> */}
//         </ul>
//       </div></>
//     )
// }


// <ul>
//     {props.groceryItems.map(items => <GroceryListItem items={items} />)}
//   </ul>
// );
// export default GroceryList;
ReactDOM.render(<GroceryList groceryItems = {['Apple', 'Banana', 'Orange']}/>, document.getElementById('app'));
