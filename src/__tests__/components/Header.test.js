import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Header from '../../components/Show';

const MockHeader = () => {
  <Provider store={store}><Header /></Provider>;
};

it('renders correctly', () => {
  const tree = renderer
    .create(<MockHeader />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
