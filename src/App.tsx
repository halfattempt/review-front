import * as React from 'react';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
    public render() {
        return (
            <div>
                <p>
                    아무것도 없는 화면
                </p>
            </div>
        );
    }
}

/*
<Router>
    <div>
        <Switch>
            <Route exact={true} path="/" component={MainContainer} />
            <Route path="/landing" component={LandingContainer} />
            <Route path="/login" component={LoginContainer} />
        </Switch>
    </div>
</Router>
*/

export default App;
