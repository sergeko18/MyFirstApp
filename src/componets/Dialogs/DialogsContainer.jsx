import React from 'react';
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";




let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect()(AuthRedirectComponent);

export default DialogsContainer;





