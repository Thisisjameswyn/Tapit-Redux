import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

class KegControl extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () =>
  {
    if (this.state.selectedKeg != null)
    {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else
    {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleSelllingPints = () =>
  {
    const selectedKeg = this.state.selectedKeg;
    const newKeg = Object.assign({}, selectedKeg, { pints: parseInt(selectedKeg.pints) - 1 });
    const newMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(newKeg);
    this.setState({
      mainKegList: newMasterKegList,
      selectedKeg: newKeg
    });
  }

  // handleAddingNewKegToList = (newKeg) =>
  // {
  //   const newMasterKegList = this.state.masterKegList.concat(newKeg);
  //   this.setState({ masterKegList: newMasterKegList, formVisibleOnPage: false });
  // }

  handleAddingNewKegToList = (newKeg) =>
  {
    const { dispatch } = this.props;
    const { id, name, brand, price, alcohol } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcohol: alcohol,
      id: id
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) =>
  {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({ selectedKeg: selectedKeg });
  }

  // handleDeletingKeg = (id) =>
  // {
  //   const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
  //   this.setState({
  //     masterKegList: newMasterKegList,
  //     selectedKeg: null
  //   });
  // }

  handleDeletingKeg = (id) =>
  {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({ selectedKeg: null });
  }

  render()
  {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null)
    {
      currentlyVisibleState = <KegDetail keg={this.state.selectedKeg} onClickingDelete={this.handleDeletingKeg} onClickingSell={this.handleSelllingPints} />
      buttonText = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage)
    {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else
    {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

const mapStateToProps = state =>
{
  return {
    masterKegList: state
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;