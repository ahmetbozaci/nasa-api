import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../../redux/configureStore';
import Show from '../../components/Show';

const MockShow = () => {
  <Provider store={store}><Show /></Provider>;
};

it('renders correctly', () => {
  const tree = renderer
    .create(<MockShow />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
