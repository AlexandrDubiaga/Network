import React from 'react';
import style from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {
    state = {
        isVisible: false,
        status: this.props.status
    }
    setVisibleTrue = () => {
        this.setState({
            isVisible: true
        })
    }
    setVisibleFalse = () => {
        this.setState({
            isVisible: false
        })
        this.props.updateUserStatus(this.state.status)
    }
    updateStatus=(e)=>{
        this.setState({
            status:e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps,prevState){
        if(prevProps.status!==this.props.status){
            this.setState({status:this.props.status})
        }

    }
    render() {
        return (
            <div>
                {this.state.isVisible ? <div><input value={this.state.status} onChange={this.updateStatus} autoFocus={true} onBlur={this.setVisibleFalse}/></div>
                    :
                    <div onDoubleClick={this.setVisibleTrue}> {this.props.status===''?'-----':this.props.status}</div>
                }
            </div>
        );
    }
}

export default ProfileStatus;


