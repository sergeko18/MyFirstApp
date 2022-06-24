import React, {PureComponent} from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


class Profile extends PureComponent {

    /*shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state
    }*/

    render() {

        console.log("profile")

        return (
            <div className={s.content}>

                <ProfileInfo profile={this.props.profile} status={this.props.status}
                             updateStatus={this.props.updateStatus}/>
                <MyPostsContainer/>


            </div>
        )
    }
}


export default Profile;