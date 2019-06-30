import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item1: this.props.item1,
      item2: this.props.item2,
      item3: this.props.item3,
      item4: this.props.item4
    };
  }
  render() {
    return (
      <div>
        <a href="sss"> {this.props.item1}</a>
        <a href="sss"> {this.props.item2}</a>
        <a href="sss"> {this.props.item3}</a>
        <a href="sss"> {this.props.item4}</a>
      </div>
    );
  }
}
export default Item;
