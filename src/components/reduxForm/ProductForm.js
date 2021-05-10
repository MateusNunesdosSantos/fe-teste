import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { submitProductAction } from '../../store/Products/actions/ProductAction';
import isValidateEmail from 'sane-email-validation';
import { Box, TextField, Select, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import './style.css';

const generos = [
  {
    id: 1,
    value: '',
  },
  {
    id: 2,
    value: 'Maculino',
  },
  {
    id: 3,
    value: 'Feminino',
  },
  {
    id: 4,
    value: 'Outro',
  },
];

const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Campo nome Obrigatorio';
  }
  if (!values.email) {
    errors.email = 'Campo email Obrigatorio';
  } else if (!isValidateEmail(values.email)) {
    errors.email = 'Email Invalido';
  }
  if (!values.genero) {
    errors.genero = 'Campo Sexo/Genero';
  }
  return errors;
};

const createRenderer =
  (render) =>
  ({ input, meta, label, children }) => {
    return (
      <form className="form">
        {render(input, label, children)}
        {meta.error && meta.touched && <span>{meta.error}</span>}
      </form>
    );
  };

const renderInput = createRenderer((input, label, meta) => (
  <>
    <TextField
      className="field"
      {...input}
      placeholder={label}
      label={label}
      required
      id="outlined-required"
      variant="outlined"
    />
  </>
));

const renderSelect = createRenderer((input, label, children) => (
  <Select {...input} label={label} native variant="outlined">
    {children}
  </Select>
));

const ProductFormFunc = (props) => {
  const { handleSubmit, submitting } = props;

  const submit = (data, submitProductAction) => {
    submitProductAction(data);
  };

  return (
    <form
      onSubmit={handleSubmit((fields) => submit(fields, submitProductAction))}
    >
      <Field label="Nome" component={renderInput} name="name" />
      <Field label="Email" component={renderInput} name="email" />
      <Field label="Sexo" component={renderSelect} name="genero">
        {generos.map((genero) => (
          <option key={genero.id} value={genero.value}>
            {genero.value}
          </option>
        ))}
      </Field>
      <Box display="flex" flexDirection="row" justifyContent="flex-end" p={1}>
        <span className="total">Total: R$ 3.252,00</span>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="flex-end">
        <Link to="/cart" style={{ textDecoration: 'none' }}>
          <Button
            type="submit"
            variant="contained"
            style={{ background: '#FF9800', color: '#FFF', boxShadow: 'none' }}
            disabled={submitting}
          >
            Finalizar Compra
          </Button>
        </Link>
      </Box>
    </form>
  );
};

const ProductForm = reduxForm({
  form: 'FormProduct',
  validate,
})(ProductFormFunc);

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { submitProductAction })(ProductForm);
