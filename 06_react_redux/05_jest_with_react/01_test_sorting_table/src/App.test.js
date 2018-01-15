import React from 'react';
import App from './App.js';
import renderer from 'react-test-renderer';
import ReactDOM from "react-dom";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const products =
[
  { "decathlon_id": 8282689, "title": "Corne chasse 14cm", "price": 9.99 },
  { "decathlon_id": 8354464, "title": "Basic L print Long Gold Fusion", "price": 9.99 },
  { "decathlon_id": 8380024, "title": "RUN ELIOPRIME", "price": 54.99 },
  { "decathlon_id": 8379970, "title": "Pantalon Gym", "price": 12.99 },
  { "decathlon_id": 8247793, "title": "PALMES WADERS", "price": 24.99 },
  { "decathlon_id": 8357549, "title": "MINIMIZER EDEN UNI  NOIR", "price": 19.99 },
  { "decathlon_id": 8326155, "title": "Pantalon Training mesh marine", "price": 44.99 },
  { "decathlon_id": 8329121, "title": "COUTEAU A PALOURDES", "price": 4.99 },
  { "decathlon_id": 8370749, "title": "Doudoune Hike 100 garçon bleu", "price": 9.99 },
  { "decathlon_id": 8298354, "title": "OREILLER CONFORT", "price": 6.99 },
  { "decathlon_id": 8044622, "title": "2 guêtres RIDING noir", "price": 14.99 },
  { "decathlon_id": 8249674, "title": "BOBINE FUN 2 3 4mm X 40 20 12m", "price": 6.99 },
  { "decathlon_id": 8353265, "title": "Justaucorps manche longue Gym.", "price": 34.99 }
]

beforeAll(() => {
  configure({ adapter: new Adapter() });
})

test("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("everything looks the same", () => {
  const component = renderer.create(<App />);

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test("everything looks the same with reverseSort = FALSE", () => {
  const component = renderer.create(<App reverseSort={false} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test("everything looks the same with reverseSort = TRUE", () => {
  const component = renderer.create(<App reverseSort={true} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test("Sort change when click on ASC Decathlon_id",() => {
  const result = shallow(<App lines={products} />);
  result.find("th").at(0).simulate("click");
  expect(result.find("td").at(0).text()).toBe("8380024");
});
test("Sort change when click to DESC Decathlon_id",() => {
  const result = shallow(<App lines={products} />);
  result.find("th").at(0).simulate("click");
  result.find("th").at(0).simulate("click");
  expect(result.find("td").at(0).text()).toBe("8044622");
});
test("Sort change when click on ASC Title",() => {
  const result = shallow(<App lines={products} />);
  result.find("th").at(1).simulate("click");
  expect(result.find("td").at(1).text()).toBe("2 guêtres RIDING noir");
});
test("Sort change when click to DESC Title",() => {
  const result = shallow(<App lines={products} />);
  result.find("th").at(1).simulate("click");
  result.find("th").at(1).simulate("click");
  expect(result.find("td").at(1).text()).toBe("RUN ELIOPRIME");
});
test("Sort change when click on ASC Price",() => {
  const result = shallow(<App lines={products} />);
  result.find("th").at(2).simulate("click");
  expect(result.find("td").at(2).text()).toBe("4.99");
});
test("Sort change when click to DESC Price",() => {
  const result = shallow(<App lines={products} />);
  result.find("th").at(2).simulate("click");
  result.find("th").at(2).simulate("click");
  expect(result.find("td").at(2).text()).toBe("54.99");
});
