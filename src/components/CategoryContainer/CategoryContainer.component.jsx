
import './categories.styles.scss';
import CatagoryItem from '../CategoryItem/CategoryItems.component';


const CategoryContainer = ({categories}) => {

  return (
    <div className='categories-container'>
      {
        categories.map((category) => { return (
            <CatagoryItem key={`category${category.id}`} category={category} />  
        )})
      }
    </div>

  );
};

export default CategoryContainer;
