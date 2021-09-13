import React from "react";
import { BrowserView, MobileView } from "react-device-detect";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import UserPage from "./components/UserPages/Index";
import AdminPage from "./components/AdminPages/Index";
import CartPage from "./components/UserPages/Cart";
import CheckoutPage from "./components/UserPages/Checkout";
import Feedback from "./components/UserPages/feedback";

function App() {
  return (
    <div>
      {/* <BrowserView>
        <Router>
          <Switch>
            <Route exact path="/">
              <UserPage />
            </Route>
            <Route exact path="/cart">
              <CartPage />
            </Route>
            <Route exact path="/checkout">
              <CheckoutPage />
            </Route>
            <Route exact path="/feedback">
              <Feedback />
            </Route>

            <Route path="/admin">
              <AdminPage />
            </Route>
          </Switch>
        </Router>
      </BrowserView>
      <MobileView>
        <h1> Not Rendered on Mobile, Please check via Desktop/PC. </h1>
      </MobileView> */}
      <BrowserRouter>
        <React.Fragment>
        
          {/* <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path='/news' component={News} />
          <Route path='/faq' component={Faq} />
          <Route path='/:post_id' component={Posts} /> */}
          {/* <Route path="/about/statement" component={Statement}/> */}
          <Route exact path='/' component={UserPage}/>
          <Route exact path='/cart' component={CartPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/feedback' component={Feedback} />
          <Route path='/admin' component={AdminPage} />
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
