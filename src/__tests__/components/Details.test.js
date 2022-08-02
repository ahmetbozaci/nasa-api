import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Details from '../../components/Details';
import store from '../../redux/configureStore';

const MockDetails = () => {
  <Provider store={store}><Details /></Provider>;
};

it('renders correctly', () => {
  const tree = renderer
    .create(<MockDetails />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
