import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          open: false,
        };
        this.handleTouchTap = this.handleTouchTap.bind(this);
        this.handleRequestClose = this.handleRequestClose.bind(this);
    }
    
    handleTouchTap (event) {
        event.preventDefault();
        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    }

    handleRequestClose(){
        this.setState({
            open: false,
        });
    }
    
    render(){
        return (
            <div>
                <div className={'header-app'}>
                    <div className={'title'}>
                        { this.props.title }
                    </div>
                    <div className={'cart-icon'}>
                        <FlatButton
                            onTouchTap={this.handleTouchTap}
                            label=""
                            icon={<i style={{color:'#ffffff'}} className="ion-ios-cart"></i>}
                        />
                        <Popover
                            open={this.state.open}
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            onRequestClose={this.handleRequestClose}
                        >
                            <div className={'cart-menu'}>
                                <div className={'content'}>
                                    
                                </div>
                            </div>
                        </Popover>
                    </div>
                </div>
                <img className={'header-image'} 
                    src={'https://d2odcms9up7saa.cloudfront.net/appdata/uploads/cms/banner-active-2_20170124184017.jpg'}
                />
                <div className={'name'}>
                    { this.props.name }
                </div>
            </div>
        );
    }
}