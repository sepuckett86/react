import React from 'react';
import './Compare.css';

import Menu from '../Menu/Menu';
import Result from '../Result/Result';
import Button from '../Button/Button';

class Compare extends React.Component {
  displayName: 'Compare';
  propTypes: {
    updateMenu: PropTypes.func,
    menus: PropTypes.array,
    results: PropTypes.array,
    sites: PropTypes.array,
    updateResult: PropTypes.func,
    showResult: PropTypes.bool
  }
  render() {
    return(
      <div>
          <div className="container">
            <div className="row">
              {
                this.props.menus.map(menu => {
                return (
                  <div key={menu.key} className="col">
                      <Menu
                          menuID={menu.id}
                          items={menu.items}
                          updateMenu={this.props.updateMenu}
                          active={menu.active}
                      />
                  </div>
                )
                })
              }
         </div>

        <Button
          showResult={this.props.showResult}
          updateResult={this.props.updateResult}/>
        </div>
        <Result
          menus={this.props.menus}
          showResult={this.props.showResult}
          sites={this.props.sites}
          results={this.props.results}/>
      </div>
    )
  }
}

export default Compare;
