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
import { useParams } from 'react-router-dom';
import { addComment } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
}

const mapDispatchToProps = (dispatch) => ({
 addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
})

const withRouter = (Component) => {
  const Wrapper = (props) => {
    const history = useNavigate();
    const params = useParams();
    return (
      <Component
        history={history}
        params= {useParams}
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

    const DishWithId = () => {
      const {dishId} = useParams();
      return(
        <DishDetail dish={this.props.dishes.filter((dish)=> dish.id === Number(dishId))[0]}
          comments={this.props.comments.filter((comment)=> comment.dishId === Number(dishId))}
          addComment={this.props.addComment}
        />
      );
    }

    return (
      <div>
        <Header/>
        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/menu" element={<Menu dishes={this.props.dishes}/>}/>
          <Route path="/menu/:dishId" element={<DishWithId />}/>
          <Route exact path="/contactus" element={<Contact/>}/>
          <Route exact path="/aboutus" element={<About leaders={this.props.leaders}/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

