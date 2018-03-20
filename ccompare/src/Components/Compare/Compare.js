import React from 'react';
import './Compare.css';

import Menu from '../Menu/Menu';
import Result from '../Result/Result';
import Button from '../Button/Button';

class Compare extends React.Component {

  render() {
    return(
      <div>
          <div className="container">
            <div className="row">
              {
                this.props.menus.map(menu => {
                return (
                  <div className="col">
                      <Menu
                          menuID={menu.id}
                          items={menu.items}
                          updateMenu={this.props.updateMenu}
                          active={menu.active}
                          key={menu.key}
                      />
                  </div>
                )
                })
              }
         </div>

        <Button showResult={this.props.showResult}
                updateResult={this.props.updateResult}/>
        </div>
        <Result menus={this.props.menus}
                showResult={this.props.showResult}/>
      </div>
    )
  }
}

export default Compare;
