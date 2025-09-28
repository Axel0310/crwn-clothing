import './category-item.styles.scss';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({category}) => {
    const {title, imageUrl} = category;
    const navigate = useNavigate();

    const navigateToCategory = () => {
      navigate(`/shop/${title}`);
    }

    return (
        <div className='category-item-container'>
          <div className='background-image'style={{
            backgroundImage: `url(${imageUrl})`
          }}/>
          <div onClick={navigateToCategory} className='category-body-container'>
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
    )
};

export default CategoryItem;