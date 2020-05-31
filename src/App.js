import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import AsideChats from './components/AsideChats';
import ChatMessages from './components/ChatMessages';
import MainChatHeader from './components/MainChatHeader';
import MainChatFooter from './components/MainChatFooter';
import AsideNav from './components/AsideNav';
import users from './users.js';
import './styles/App.css';
import './styles/App-aside.css';
import './styles/App-aside-footer.css';
import './styles/App-main.css';
import './styles/App-main-section.css';
import './styles/App-main-footer.css';

library.add(fas)

function App() {
  return (
    <div className="App">
      <Router>
        <aside>
          <AsideChats />
          <footer>
            <AsideNav />
          </footer>
        </aside>
        <main>
          <Switch>
            <Route path="/:userId">
              <MainChatHeader users={users} />
              <section>
                <ChatMessages users={users} />
              </section>
              <footer>
                <MainChatFooter />
              </footer>
            </Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
