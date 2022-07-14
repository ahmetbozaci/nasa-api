import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Search from '../../components/Search';

const MockSearch = () => {
  <Provider store={store}><Search /></Provider>;
};

it('renders correctly', () => {
  const tree = renderer
    .create(<MockSearch />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
