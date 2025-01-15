import PropTypes from "prop-types";


export const Saludar = ({titulo}) => {
   
    return (
      <div>
        <h1>{titulo}</h1>
      </div>
    )
  }

  Saludar.propTypes ={
    titulo: PropTypes.string.isRequired
  }

  Saludar.defaultProps ={
    titulo: "Sin titulo de proyecto"
  }

