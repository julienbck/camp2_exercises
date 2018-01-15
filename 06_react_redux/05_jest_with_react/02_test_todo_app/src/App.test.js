import React from 'react';
import App from './App.js';
import renderer from 'react-test-renderer';
import ReactDOM from "react-dom";
import Wapiti from "wapiti";


test("everything looks the same", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});


test("Check if field input is empty at first launch", () => {
  expect.assertions(1);

  return Wapiti.goto("http://localhost:3000")
    .capture(() => document.querySelector("input").textContent)
    .run()
    .then(result => {
      expect(result).toBe("");
    });
});

test("Check if can add text in field input and if have text in list", () => {
  expect.assertions(1);

  return Wapiti.goto("http://localhost:3000")
    // .fillForm({
    //   ".inputToDo": "test1"
    // })
    .puppeteer(page =>
      page.type(".inputToDo", "test1")
    )
    .click("button")
    .capture(() => document.querySelector("ul li span").textContent)
    .run()
    .then(result => {
      expect(result).toBe("test1");
    });
});
test("Check if checkbox is on ", () => {
  expect.assertions(1);

  return Wapiti.goto("http://localhost:3000")
    // .fillForm({
    //   ".inputToDo": "test1"
    // })
    .puppeteer(page =>
      page.type(".inputToDo", "test1")
    )
    .click("button")
    .click(".checkboxToDisplayDelete")
    .click(".deleteButton")
    .capture(() => document.querySelector("ul li span").textContent)
    .run()
    .then(result => {
      expect(result).toBe("");
    });
});
