# Playwright SauceDemo Automation

Automation framework developed with **Playwright** and **TypeScript** to automate end-to-end test scenarios for the SauceDemo application.

The framework follows the **Page Object Model (POM)** design pattern to ensure maintainability, scalability, readability, and code reusability.

## Technologies

* Playwright
* TypeScript
* Node.js
* HTML Reports

## Project Structure

```text
├── pages/          # Page Object classes
├── tests/          # Test specifications
├── helpers/        # Reusable helper methods
├── data/           # Test data
├── constants/      # Constants and messages
├── playwright.config.ts
├── package.json
└── README.md
```

## Automated Scenarios

### Login Module

* Successful login.
* Invalid username validation.
* Invalid password validation.
* Locked user validation.

### Shopping Module

* Add a random item to the cart.
* Add multiple random items to the cart.
* Sort products by price (Low to High).

### Checkout Module

* Complete checkout successfully.
* Validate mandatory fields.
* Validate error messages for empty fields.

## Design Pattern

This framework implements the **Page Object Model (POM)** pattern:

* Page classes contain locators and actions.
* Test files contain assertions and test scenarios.
* Test data and messages are externalized to improve maintainability.

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

## Running Tests

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

Run tests in UI mode:

```bash
npx playwright test --ui
```

## Reports

Generate and open the Playwright HTML report:

```bash
npx playwright show-report
```

## Test Evidence

The framework is configured to generate:

* HTML reports.
* Screenshots on failures.
* Videos on failures.
* Execution traces for debugging.

## Goals

* Build a maintainable and scalable automation framework.
* Apply automation testing best practices.
* Strengthen Playwright and TypeScript skills.

---

Developed as part of a continuous learning process in Test Automation using Playwright.
