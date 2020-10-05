import React from 'react';
import ProviderRegister from '../components/ProviderRegister/ProviderRegister';
import { connect } from 'react-redux';
import * as getFinancialService from '../actions/getFinancialServiceAction';
import * as getBusinessService from '../actions/getBusinessTypesAction';
import * as getCountriesReducer from '../actions/getUtilsAction';
import * as registerProvider from '../actions/registerProviderAction';
import * as updateCity from '../actions/updateCityAction';
import { bindActionCreators } from 'redux';

class ProviderRegisterContainer extends React.Component {
    render() {
        return(
            <ProviderRegister 
            
                getFinancialServiceList={this.props.getFinancialServiceList}
                getBusinessTypeList={this.props.getBusinessTypeList}
                getCountriesList={this.props.getCountriesList}
                registerProvider={this.props.registerProvider}
                updateCity={this.props.updateCity}
            />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getFinancialServiceList: getFinancialService.getFinancialServiceList,
        getBusinessTypeList: getBusinessService.getBusinessTypes,
        getCountriesList: getCountriesReducer.getCountriesList,
        registerProvider: registerProvider.providerRegister,
        updateCity: updateCity.cityUpdate
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(ProviderRegisterContainer);
