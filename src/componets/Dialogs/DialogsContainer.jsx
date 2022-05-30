import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";





export default compose(connect(), withAuthRedirect)(Dialogs);





