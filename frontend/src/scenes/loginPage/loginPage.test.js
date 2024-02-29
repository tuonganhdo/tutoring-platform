import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import Form from './Form.jsx'; // Assume your form is exported as Form

describe('Form', () => {

  test('validates required fields', async () => {
    render(<Form />);

    // Attempt to submit without filling out the form
    await act(async () => {
      userEvent.click(screen.getByText('REGISTER'))
    });

    screen.debug();

    // Check for validation errors
    expect(screen.getAllByText('required')[0]).toBeInTheDocument();

  });

  test('submits correct values', async () => {
    render(<Form />);

    // Fill out the form
    await act(async () => {
      userEvent.type(screen.getByLabelText('First Name'), 'John');
      userEvent.type(screen.getByLabelText('Last Name'), 'Doe');
      userEvent.type(screen.getByLabelText('Email'), 'john.doe@example.com');
      userEvent.type(screen.getByLabelText('Password'), 'password');
      userEvent.type(screen.getByLabelText('Occupation'), 'Developer');

      userEvent.click(screen.getByText('REGISTER'))
    });

    const handleFormSubmit = jest.fn();

    //screen.debug(handleFormSubmit);

    //Check if form submission is handled correctly (you will need to mock this)
    expect(handleFormSubmit).toHaveBeenCalledWith({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password',
      occupation: 'Developer',
    }, expect.anything());
  });

});