import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe("App", () => {
  it("renders App component", () => {
    render(<App />);
    const linkElement = screen.getByText(/Welcome/i);
    expect(linkElement).toBeInTheDocument();
  });
  // *** Step 1: email & password ***
  it("renders email & password fields", () => {
    render(<App />);
    const email = screen.getByLabelText(/Email/i);
    const password = screen.getByLabelText(/Password/i);
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  // Test email input authentication
  // Test password input authentication
  // Test continue button disabled when email and password are empty or invalid
  // Test continue button enabled when email and password are valid
  // Test back button disabled

  // *** Step 2: Name & DOB ***
  it("renders first name, last name & DOB fields", async () => {
    // complete step 1 inputs and click continue button after render to get to step 2
    render(<App />);

  // Fill in email
  const emailInput = screen.getByLabelText(/Email/i);
  userEvent.type(emailInput, 'test@example.com');

  // Fill in password
  const passwordInput = screen.getByLabelText(/Password/i);
  userEvent.type(passwordInput, 'P@ss1234'); // password min 8 chars, at least 1 number, at least 1 symbol

  // Submit the form to go to the next step
  const submitButton = screen.getByRole('button', { name: /Continue/i });
  userEvent.click(submitButton);

  // Use findBy queries to wait for the elements to appear
    const firstName = await screen.findByLabelText(/First name/i);
    const lastName = await screen.findByLabelText(/Last name/i);
    const dob = await screen.findByLabelText(/Date of Birth/i);
    expect(firstName).toBeInTheDocument();
    expect(lastName).toBeInTheDocument();
    expect(dob).toBeInTheDocument();
  });    
  // Test first name input authentication
  // Test last name input authentication
  // Test dob input authentication
  // Test continue button disabled when first, last and dob are empty or invalid
  // Test continue button enabled when first, last and dob are valid
  // Test back button enabled
  // Test I want to include my address checkbox reveals step 3
  // Test I want to include my address checkbox hides step 3
  // Test I want to include my address checkbox checked and continue navigates to step 3
  // Test I want to include my address checkbox unchecked and continue navigates to submit step

  // *** Step 3: Address ***
  // Test that address, city, state and zip fields are rendered (no authentication needed)

  // *** Submit Step ***
  // Test that submit button is rendered
  // Test that review and edit button is rendered
  // Test that submit button posts form data
  // Test that review and edit button navigates to step 1
  // Test that 201 response navigates to success message
  // Test that 500 response navigates to failure message
});