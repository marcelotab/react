import React from "react";
import Item from "./item.js";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clase: this.props.clase
      //item: this.props.item
    };
  }
  render() {
    return (
      <div>
        <nav className={this.props.clase}>
          <Item item1="Home" item2="Contact As" item3="About" item4="Log in" />
        </nav>
      </div>
    );
  }
}
export default Nav;
