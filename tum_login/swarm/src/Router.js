import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import Login from './components/Login';
import NewFeed from './components/NewFeed';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={Login} title="Please Login" initial/>
      </Scene>

			<Scene key="main">
				<Scene key="newFeed" component={NewFeed} />
			</Scene>

    </Router>
  );
};

export default RouterComponent;