import PropTypes from "prop-types";

function Category ({category}) {
    return (
        <div>
            <h1>{category.name}</h1>
            {/* <img src={category.image} alt={category.name} /> */}
        </div>
    );
}

Category.propTypes = {
    category: PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }).isRequired,
}

export default Category;