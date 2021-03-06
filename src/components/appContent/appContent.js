import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from '../search/search';
import UserInfo from '../user-info/user-info';
import Actions from '../actions/actions';
import Repos from '../repos/repos';
import './appContent.scss';
class AppContent extends Component {
  render() {
    return (
      <div className="App">
        <Search isDisabled={this.props.isFetching} handleSearch={this.props.handleSearch}/>
        {this.props.isFetching && <div className="Loading__div">Carregando ...</div>}
        {!!this.props.userinfo && <UserInfo userinfo={this.props.userinfo}/>}
        {!!this.props.userinfo && <Actions handleFav={this.props.handleFav} handleRepos={this.props.handleRepos} />}
        {!!this.props.repos.length &&
        <Repos className='repos' title="Repositorios" repos={this.props.repos}/>
        }
        {!!this.props.starred.length &&
          <Repos className='starred' title="Favoritos" repos={this.props.starred}/>
        }
      </div>
    );
  }
}

AppContent.proptypes = {
  userinfo: PropTypes.object,
  repos:PropTypes.array.isRequired,
  starred:PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
}
export default AppContent;
