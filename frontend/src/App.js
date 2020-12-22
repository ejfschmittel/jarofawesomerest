
import { Router, Route, Switch} from "react-router-dom"

import history from "./utils/history"
import Header from "./components/Header.component"


import HomePage from "./pages/Homepage.page"
import LoginPage from "./pages/Login.page"
import SignupPage from "./pages/Signup.page"
import EditMemoryPage from "./pages/EditMemory.page"
import UserMemoriesPage from "./pages/UserMemories.page"

import "./styles/main.scss";


function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
     
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        {/*<Route path="/memories/:id/" component={MemoryDetailPage} /> memory detail */}
        <Route path="/memories/:id/edit" component={EditMemoryPage} />
        <Route path="/users/:uuid/memories/" component={UserMemoriesPage} /> 
        {/*<Route path="/memories/" component={DiscoverMemoriesPage} /> discover memory */}
        {/*<Route path="/memories/" component={DiscoverMemoriesPage} /> discover memory */}
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
