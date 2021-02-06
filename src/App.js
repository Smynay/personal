import Layout from './Layout/default';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
