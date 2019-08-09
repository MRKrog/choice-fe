import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../../actions';

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  handleSearch = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    })
  }

  render() {

    return (
      <div className='Header'>
        <div className="Logo">
          <img src={require(`../../assets/images/choiceScreenLogo.png`)} alt="Choice Screening" />
        </div>
        <section className="Header-Info">
          <div className="Search-Container">
            <form className="Form-Send">
              <input type="text"
                     name="search"
                     placeholder="Search Notes"
                     onChange={this.handleSearch}
                     required=""
                     value={this.state.search} />
            </form>
          </div>
          <div className="User">
            <button>
              <i className="fas fa-user"></i>
            </button>
          </div>
        </section>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  loading: state.loading,
});

export const mapDispatchToProps = dispatch => ({
  setLoading: data => dispatch(actions.setLoading(data)),
});

Header.propTypes = {
  loading: PropTypes.bool,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
