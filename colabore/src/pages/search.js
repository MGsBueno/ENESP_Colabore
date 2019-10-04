import React from 'react';
import '../Search.css'

export default class MyFilteringComponent extends React.Component {
  state = {
    initialItems: [],
    items: []
  }

  filterList = (event) => {
    let items = this.state.initialItems;
    items = items.filter((item) => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({ items: items });
  }

  componentWillMount = () => {
    this.setState({
      initialItems: this.props.content,
      items: this.props.content
    })
  }

  render() {
    return (
      <div>
          <span>
            <form>
              <input type="text" placeholder="Busca" onChange={this.filterList} />
            </form>
            </span>
          {/*<div>
            {
              this.state.items.map(function (item) {
                return <div key={item}>{item}</div>
              })
            }
          
        </div>*/}
        
      </div>
    );
  }
};
