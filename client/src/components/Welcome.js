import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { PostData } from '../PostData';
import { Redirect } from 'react-router-dom';
class Welcome extends Component {


    constructor(props) {

        super(props);

        this.state = {
            redirectToReferrer: false
        }
        this.signup = this.signup.bind(this);
    }

    signup(res, type) {

        var postData;
        if (type === 'facebook' && res.email) {
            postData = { name: res.name, provider: type, email: res.email, provide_id: res.id, token: res.accessToken, provider_pic: res.provider_pic }
        }

        if (type === 'google' && res.w3.U3) {
            postData = { name: res.w3.ig, provider: type, email: res.w3.U3, provide_id: res.El, token: res.Zi.access_token, provider_pic: res.w3.Paa }

        }

        PostData('signup', this.state).then((result) => {
            var responseJson = result;
            if (responseJson.userData) {
                sessionStorage.setItem('userData', JSON.stringify(responseJson));
                this.setState({ redirectToReferrer: true });
            }
        });
    }


    render() {

        if (this.state.redirectToReferrer) {
            return (
                <Redirect to={'/Join'} />
            )
        }

        const responseGoogle = (response) => {
            console.log(response);
            this.signup(response, 'google');
        }

        const responseFacebook = (response) => {
            console.log(response);
            this.signup(response, 'facebook');
        }
        const componentClicked = (response) => {
            console.log("Clicked!")
            this.signup(response, 'facebook');
        }


        return (

            <div className="joinOuterContainer">

                <div className="joinInnerContainer">
                    <h1 className="heading">LOGIN IN WITH: </h1>
                    <div>
                    <FacebookLogin
                            appId="426960084905545"

                            redirectUri="http://localhost:3000/login/join"
                            fields="name,email,picture"
                            onClick={componentClicked}
                            callback={responseFacebook}
                        />
                    </div> <br/> 
                    <div>
                    <GoogleLogin
                            clientId="338353041805-fuic9bdt77s2438na98sm1fe3h3hquss.apps.googleusercontent.com"
                            buttonText="  LOGIN WITH GOOGLE  "
                            uxMode="redirect"
                            redirectUri="http://localhost:3000/login/join"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div>

                </div>
            </div>


        )
    }
}



export default Welcome 