import React from 'react'
import PropTypes from 'prop-types'
import {
    MdAccountCircle,
    MdArrowDropDownCircle,
    MdBorderAll,
    MdBrush,
    MdChromeReaderMode,
    MdDashboard,
    // MdExtension,
    MdGroupWork,
    // MdInsertChart,
    // MdKeyboardArrowDown,
    MdNotificationsActive,
    // MdPages,
    MdRadioButtonChecked,
    // MdSend,
    MdStar,
    MdTextFields,
    MdViewCarousel,
    MdViewDay,
    MdViewList,
    // MdWeb,
    // MdWidgets,
    MdAssessment,
    MdCreditCard
  } from 'react-icons/md';
import bn from 'utils/bemnames';

const bem = bn.create('sidebar');

const Icons = props => {
    return (
        <props.name className={bem.e('nav-item-icon')}/>
    )
}

Icons.propTypes = {
    name: PropTypes.string
}

export default Icons
