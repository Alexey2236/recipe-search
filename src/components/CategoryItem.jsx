import { Link } from "react-router-dom";

function CategoryItem(props) {
  const { idCategory, strCategoryThumb, strCategory, strCategoryDescription } =
    props;
  return (
    <div className="card" id={idCategory}>
      <div className="card-image">
        <img className="categoryImg" src={strCategoryThumb} alt={strCategory} />
      </div>
      <div className="card-content">
        <span className="card-title">{strCategory}</span>
        <p>{strCategoryDescription.slice(0, 60)}...</p>
      </div>
      <div className="card-action">
        <Link to={`/category/${strCategory}`} className="btn">
          Watch category
        </Link>
      </div>
    </div>
  );
}

export { CategoryItem };
