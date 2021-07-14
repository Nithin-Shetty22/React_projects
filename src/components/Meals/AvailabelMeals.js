import { useEffect,useState } from 'react';
import classes from './AvailabelMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';



const AvailableMeals = () => {
  const[meals,setMeals] = useState([]);

  useEffect( () =>{

    const fetchMeals = async() =>{
    const response = await fetch('https://react-foodorder-81ff1-default-rtdb.firebaseio.com/meals.json');
    const data = await response.json();
    

    const loadedMoveis = [];

    for(const key in data){
      loadedMoveis.push({
        id:key,
        name:data[key].name,
        description:data[key].description,
        price:data[key].price,

      });
    }
    setMeals(loadedMoveis);
  };

  fetchMeals();
  },[]);

    const mealsList = meals.map((meal) => (
        <MealItem
          id={meal.id}
          key={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ));

  return (
    <section className={classes.meals}>
    <Card>
      <ul>{mealsList}</ul>
    </Card>
  </section>
  );
};

export default AvailableMeals;