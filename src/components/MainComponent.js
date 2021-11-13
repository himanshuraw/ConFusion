import { Component } from 'react';
import Home from './HomeComponent'
import Menu from './MenuComponent';
import DishDetail from "./DishDetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    
    return (
      <Component
        history={history}
        {...props}
        />
    );
  };
  
  return Wrapper;
};

class Main extends Component{

  constructor(props){
    super(props);
  }

  render() {

    const HomePage =() => {
      return (
        <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
        leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId =({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
          comments={this.props.comments.filter((comment)=> comment.dishId === parseInt(match.param.dishId,10))[0]}
        />
      );
    }

    return (
      <div>
        <Header/>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route exact path="/menu" element={<Menu dishes={this.props.dishes}/>}/>
          <Route path="/meny/:dishId" element={<DishWithId/>}/>
          <Route exact path="/contactus" element={<Contact/>}/>
          <Route exact path="/aboutus" element={<About leaders={this.props.leaders}/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
