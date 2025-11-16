import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import "@testing-library/jest-dom";
import App from "./App";

test("When rendering the app component, it should display the correct title", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { level: 1, name: /React Hook Form/i })
  ).toBeInTheDocument();
});

describe("when rendering the app component", () => {
  it("should display the first name input field", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("First Name")).toBeInTheDocument();
  });

  it("should display the last name input field", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Last Name")).toBeInTheDocument();
  });

  it("should display the gener select field", () => {
    render(<App />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("should display the age input field", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Age")).toBeInTheDocument();
  });

  it("should display the phone input field", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Phone")).toBeInTheDocument();
  });

  it("should display the email input field", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });

  it("should display the password input field", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Password")).toBeInTheDocument();
  });

  it("should display the confirm password input field", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Confirm Password")).toBeInTheDocument();
  });

  it("should display the submit button", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: /Submit/i })).toBeInTheDocument();
  });

  it("should display the reset button", () => {
    render(<App />);
    expect(screen.getByRole("button", { name: /Reset/i })).toBeInTheDocument();
  });
});

test("Gender select field should display the correct options", () => {
  render(<App />);
  expect(screen.getByRole("option", { name: "Select" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "Male" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "Female" })).toBeInTheDocument();
  expect(screen.getByRole("option", { name: "Other" })).toBeInTheDocument();
  expect(
    screen.getByRole("option", { name: "Prefer not to say" })
  ).toBeInTheDocument();
});
