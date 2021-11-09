import { Component } from 'react';
import Home from './HomeComponent'
import Menu from './MenuComponent';
import DishDetail from "./DishDetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import {DISHES} from '../shared/dishes';
import {Routes, Route, Navigate} from 'react-router-dom';

class Main extends Component{

  constructor(props){
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
    };
  }  

  render() {

    const HomePage =() => {
      return (
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId =({match}) => {
      return(
        <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === parseInt(match.params.dishId,10))[0]}
          comments={this.state.comments.filter((comment)=> comment.dishId === parseInt(match.param.dishId,10))[0]}
        />
      );
    }
    return (
      <div>
        <Header/>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route exact path="/menu" element={<Menu dishes={this.state.dishes}/>}/>
          <Route path="/meny/:dishId" element={<DishWithId/>}/>
          <Route exact path="/contactus" element={<Contact/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default Main;
