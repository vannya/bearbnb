import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

/** Required to run enzyme in tests */
Enzyme.configure({ adapter: new Adapter() });
