import React, { Suspense } from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import ThemeContext from './Context';
const FormComponent = React.lazy(() => import('./Form'));
const FormArrowComponent = React.lazy(() => import('./FormArrowFunction'));
const SelectFormComponent = React.lazy(() => import('./SelectForm'));
const ListItemsComponent = React.lazy(() => import('./ListItems'));
export const LazyLoadingRouterAfComponent = () => {
    const numbers = [1, 2, 3, 4, 5];
    return (
        <div>
              <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="nav justify-content-center">
                            <Link className="nav-link active" to="/Form">Form Component </Link>
                            <Link className="nav-link" to="/SelectForm">Select Component </Link>
                            <Link className="nav-link" to="/ListItems">ListItems Component </Link>
                        </nav>
                    </div>
                    <div className="col-md-12">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Switch>
                                <Route path="/Form">
                                    <ThemeContext.Provider value='Form Component Context'>
                                        <FormArrowComponent />
                                    </ThemeContext.Provider>
                                </Route>
                                <Route path="/SelectForm" component={SelectFormComponent} />
                                <Route path="/ListItems" component={() => <ListItemsComponent numberList={numbers} />} />
                                {/* <Route exact path="/" component={CombinedFormComponent}/> */}
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    )
}
