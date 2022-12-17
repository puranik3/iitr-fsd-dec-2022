import { Container } from 'react-bootstrap';
import { Switch, Route } from 'react-router-dom';

import Menu from './Menu';
import Home from "./Home/Home";
import LibrariesList from './LibrariesList/LibrariesList';
import About from './About/About';
import LibraryDetails from './LibraryDetails/LibraryDetails';

function App() {
    return (
        <div>
            <Menu />
            <Container className="my-5">
                <main>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/libraries/:id">
                            <LibraryDetails />
                        </Route>
                        <Route path="/libraries">
                            <LibrariesList />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                    </Switch>
                </main>
            </Container>
        </div>
    );
}

export default App;
