import React from 'react';
import Profile from './Profile.jsx';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.default = {cow_name: 'CLICK A COW NAME', cow_desc: 'LEARN MUCH ABOUT COW NOW'};
    this.state = {
      value: '',
      cow: this.default
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(object) {
    this.setState({cow: object});
  }

  render() {
    return (
      <div>
        <ul className='list-o-cows'>
        <h3 onClick={() => this.handleClick(this.default)}>~*COWS 4 U*~</h3>
          {this.props.cow_list.map((cow) => {
            return (
              <li onClick={() => this.handleClick(cow)} key={cow.id}>
                {cow.cow_name}
              </li>
            )
          }, this)}
        </ul>
        <Profile cow={this.state.cow} />
      </div>
    )
  }

}

export default List;