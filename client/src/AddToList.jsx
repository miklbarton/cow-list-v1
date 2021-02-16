import React from 'react';
import $ from 'jquery';
import List from './List.jsx';

class AddToList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cow_name: '',
      cow_desc: '',
      cow_list: [{id: 0, cow_name: 'Loading...', cow_desc: 'Hold tight cowboi$'}]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    $.get('http://localhost:3000/api/cows', (data, status) => {
      this.setState({cow_name: '', cow_desc: '', cow_list: data})
    })
  }

  handleChange(event) {
    if (event.target.className === 'cow-name') {
      this.setState({cow_name: event.target.value});
    }
    if (event.target.className === 'cow-desc') {
      this.setState({cow_desc: event.target.value});
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    $.post(`http://localhost:3000/api/cows?cow_name=${this.state.cow_name}&cow_desc=${this.state.cow_desc}`, () => {
      $.get('http://localhost:3000/api/cows', (data, status) => {
        this.setState({cow_name: '', cow_desc: '', cow_list: data});
      })
    });
  }

  render() {
    return (
      <div className='add-to-list'>
        <form onSubmit={this.handleSubmit}>
          <label>
            <h6>Give your cow a name</h6>
            <input type='text' className='cow-name' value={this.state.cow_name} onChange={this.handleChange} />
            <h6>Tell us about your cow</h6>
            <textarea className='cow-desc' value={this.state.cow_desc} onChange={this.handleChange} />
          </label>
            <div>
              <input className='submit-cow' type='submit' value='Submit Cow' />
            </div>
        </form>
        <List cow_list={this.state.cow_list} />
      </div>
    )
  }






};

export default AddToList;

