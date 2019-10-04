import React from 'react';

export default class MyFilteringComponent extends React.Component {
  state = {
    initialItems: [],
    items: []
  }

  filterList = (event) => {
    let {initialItems} = this.state;
    let items = [];
    if (initialItems) {
      items = initialItems.filter((item) => {
        return item.descricao && item.descricao.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
      });
      this.setState({ items: items });
    }
  }

  componentWillMount = () => {
    this.setState({
      initialItems: this.props.initialItems,
      items: this.props.items
    })
  }

  render() {
    return (
      <div>
        <h1>Colabore</h1>
          <form>
            <input type="text" placeholder="Busca" onChange={this.filterList} />
          </form>
          <div>
            {
              this.state.items && this.state.items.map(function (item) {
                return <div key={item.descricao}>{item.descricao} | autor: {item.nome}</div>
              })
            }
          </div>
      </div>
    );
  }
};
