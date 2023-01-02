/* eslint-disable testing-library/no-render-in-setup */
/* eslint-disable testing-library/no-node-access */
import App from './App';
import Login from './pages/Login';
import Navigation from './components/Navigation';
import { fireEvent, render, screen, waitFor, within} from '@testing-library/react';
import * as ReactDOM from 'react-dom';
import React from 'react';
import { LoginService } from './services/LoginServices';
import Search from './components/Search';
import userEvent from '@testing-library/user-event';
import NextPage from './components/nextpage';


// describe('Navigation component tests', ()=> {

//   let container:HTMLDivElement;
//   // let container2:HTMLDivElement;
//   // const loginServiceSpy = jest.spyOn(LoginService.prototype,'login');

//   beforeEach(()=> {
//     container = document.createElement('div');
//     // container2 = document.createElement('div');
//     document.body.appendChild(container);
//     // document.body.appendChild(container2);
//     ReactDOM.render(<Navigation />, container);
//     // ReactDOM.render(<Login />, container2);
//   });

//   afterEach(()=> {
//     document.body.removeChild(container);
//     // document.body.removeChild(container2);
//     container.remove();
//     // container2.remove();
//   });

//   it.only('Renders correctly initial document with data-tes query', ()=> {
    
//     expect(container.querySelector("[data-id='This is a search button']"))
//     .toBeInTheDocument();

//     expect(container.querySelector("[data-id='This is a search button']")
//     ?.getAttribute('placeholder')).toBe('Search for anything');

//   });

  // it('Renders correctly the Login page', ()=> {
  //   const inputs = container2.querySelectorAll('input');

  //   expect(inputs).toHaveLength(2);
  //   expect(inputs[0].type).toBe('text');
  //   expect(inputs[1].type).toBe('text');

  //   const loginInput = inputs[0];
  //   const passwordInput = inputs[1];

  //   fireEvent.change(loginInput,{target: {value: 'someUser'}});
  //   fireEvent.change(passwordInput,{target: {value: 'somePass'}})

  //   expect(loginServiceSpy).toBeCalledWith('someUser','somePass');
  // })

  // it('Passes credentials correctly', ()=> {
  //   const inputs = container.querySelectorAll('input');
  //   const searchSelect = inputs[0];
  //   fireEvent.click(searchSelect)
  // });

  // it('Renders correctly status label - invalid login', async ()=> {
  //   loginServiceSpy.mockResolvedValueOnce(false)
  //   const inputs = container2.querySelectorAll('input');
  //   const loginInput = inputs[0];
  //   fireEvent.click(loginInput);
  //   const statusLabel = await waitFor(() =>container.querySelector('label'))

  //   expect(statusLabel).toBeInTheDocument();
  //   expect(statusLabel).toHaveTextContent('Login failed');
  // })

  // it('Renders correctly status label -  login', async ()=> {
  //   loginServiceSpy.mockResolvedValueOnce(true)
  //   const inputs = container2.querySelectorAll('input');
  //   const loginInput = inputs[0];
  //   fireEvent.click(loginInput);
  //   const statusLabel = await waitFor(() =>container.querySelector('label'))

  //   expect(statusLabel).toBeInTheDocument();
  //   expect(statusLabel).toHaveTextContent('Login successful');
  // })

// })

const handleclickNext = (name:string) => {
  return () => {

  }
}

describe('any components behaviour when the user interacts with the website', ()=> {

  it("Should render search correctly", ()=> {
    render(<Search />)
    const element = screen.getByRole('group');
    expect(element).toBeInTheDocument();

    const group = screen.getByRole('group');
    within(group).getByRole('button', {  name: /reset/i});
  });

  it("Should click correctly", async ()=> {
    render(<Search />)
    const element = screen.queryByRole('group');
    // await userEvent.click(element);
    expect(element).toBeInTheDocument();
  });

  it("should render the nextPage container appropriately", () => {
    render(<NextPage listOfNumber={[1,2,3]} start={1} handleClickNext={handleclickNext} />)
    const element = screen.queryByRole('numbering');
    expect(element).toBeVisible();
    expect(element).toBeInTheDocument();

  })

});
