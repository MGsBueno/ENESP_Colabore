import React from 'react';

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
        <h1>Colabore</h1>
        <span>
          <form>
            <input type="text" placeholder="Busca" onChange={this.filterList} />
          </form>
          <div>
            {
              this.state.items.map(function (item) {
                return <div key={item}>{item}</div>
              })
            }
          </div>
        </span>
      </div>
    );
  }
};
