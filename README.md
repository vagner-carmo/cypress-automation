# Cypress Automation Challenge

Automated testing project developed with **Cypress** and **JavaScript**, covering **web end-to-end (E2E)** and **API testing** for the [ServeRest](https://serverest.dev/) application.

The project was built as a QA automation portfolio project, with a focus on maintainability, test independence, reusable components, API contract validation, and realistic test scenarios.

## 🎯 Project Goals

- Automate critical web application flows.
- Validate REST API endpoints and business rules.
- Cover positive and negative scenarios.
- Keep tests independent from pre-existing test data.
- Apply reusable automation patterns and good practices.
- Demonstrate a maintainable Cypress project structure.

## 🛠️ Technologies

- **Cypress**
- **JavaScript (ES6+)**
- **Node.js**
- **AJV** — JSON Schema validation
- **Faker.js** — dynamic test data generation
- **REST API**
- **Page Object Model (POM)**

## 🌐 Application Under Test

### Frontend

https://front.serverest.dev/

### API

https://serverest.dev/

## 📁 Project Structure

```text
cypress/
├── api/
│   ├── LoginApi.js
│   ├── ProductsApi.js
│   ├── UsersApi.js
│   └── CartsApi.js
│
├── e2e/
│   ├── api/
│   └── frontend/
│
├── factories/
│   ├── productFactory.js
│   └── userFactory.js
│
├── fixtures/
│   └── imagens/
│
├── pages/
│   ├── Login/
│   ├── ProductRegister/
│   └── UserRegister/
│
├── schemas/
│   ├── common/
│   ├── login/
│   ├── products/
│   └── users/
│
└── support/
    ├── commands.js
    └── schemaValidators.js
```

## 🧩 Automation Architecture

The project follows a layered structure to keep test logic separated and reusable.

### Page Object Model

The Page Object Model encapsulates page interactions and keeps selectors and UI behavior outside the test specifications.

### API Layer

API classes centralize REST requests, making endpoint interactions reusable across different test scenarios.

### Factory Pattern

Factories generate dynamic test data using Faker, reducing dependencies on static data and avoiding conflicts between test executions.

### JSON Schema Validation

API responses are validated using **AJV** and JSON Schema to verify response contracts in addition to status codes and business validations.

### Custom Commands

Reusable Cypress commands encapsulate common operations such as creating users and obtaining authentication tokens.

### Test Data Independence

Tests prepare their own required data whenever possible instead of depending on records already available in the environment.

For example, scenarios involving authenticated users, products, or shopping carts can create the required data before executing the behavior under test.

### Retry-ability

The UI tests take advantage of Cypress's built-in retry-ability through assertions such as:

```javascript
cy.get(locator)
    .should('be.visible')
    .click()
```

This reduces unnecessary fixed waits and improves test stability.

## 🔧 Prerequisites

Before running the project, make sure you have installed:

- Node.js 18 or higher
- npm 9 or higher
- Git

## 🚀 Installation

Clone the repository:

```bash
git clone https://github.com/vagner-carmo/cypress-automation.git
```

Navigate to the project directory:

```bash
cd cypress-automation
```

Install the project dependencies:

```bash
npm install
```

The command above installs the dependencies defined in `package.json`, including:

- Cypress
- Faker.js
- AJV

## ▶️ Running the Tests

### Open Cypress

Launch the Cypress interactive interface:

```bash
npx cypress open
```

### Run all tests

```bash
npx cypress run
```

### Run frontend tests

```bash
npx cypress run --spec "cypress/e2e/frontend/**/*.cy.js"
```

### Run API tests

```bash
npx cypress run --spec "cypress/e2e/api/**/*.cy.js"
```

## 🧪 Test Coverage

### Frontend

#### Login

- Successful login
- Login with invalid credentials
- Login with required fields empty

#### User Registration

- Successful user registration
- Registration with an existing email

#### Product Registration

- Successful product registration
- Registration with required fields empty
- Registration with an existing product name

### API

#### Authentication

- Successful login
- Login with invalid credentials
- Login with required fields empty

#### Users

- Create user successfully
- Attempt to create a user with a duplicated email
- Get all users
- Get user by ID
- Attempt to get a user with an invalid ID
- Update user successfully
- Attempt to update a user using an existing email
- Delete user successfully
- Attempt to delete a user with an invalid ID
- Attempt to delete a user associated with a shopping cart

#### Products

- Create product successfully
- Attempt to create a product with an existing name
- Attempt to create a product with an invalid token
- Get all products
- Get product by ID
- Attempt to get a product with an invalid ID
- Delete product successfully
- Attempt to delete a product associated with a shopping cart
- Attempt to delete a product with an invalid token
- Update product successfully
- Attempt to update a product using an existing name
- Attempt to update a product with an invalid token

## 📋 API Validation Strategy

The API tests validate different aspects of the response:

- HTTP status code
- Response headers
- Response body
- Business messages
- Authentication behavior
- JSON response structure
- JSON Schema contract

Schema validation is used to avoid duplicating structural assertions in individual tests. Business-specific assertions remain in the test scenarios where they provide additional value.

## 📦 Test Data Management

The project avoids unnecessary dependencies on pre-existing data.

Dynamic users and products are generated through factories, while custom commands are used to prepare reusable scenarios.

This approach helps prevent failures caused by:

- Reset or changes in the test environment
- Previously created records
- Duplicated data
- Tests running in a different order

## 🧱 Code Organization

- **Pages:** encapsulate UI interactions and page behavior.
- **Locators:** centralize UI selectors.
- **API:** centralizes REST API requests.
- **Factories:** generate reusable and dynamic test data.
- **Schemas:** define API response contracts.
- **Validators:** provide reusable validation logic.
- **Commands:** encapsulate common Cypress operations.
- **E2E:** contains tests separated by application layer and purpose.

## 📌 What This Project Demonstrates

This project demonstrates practical experience with:

- Cypress E2E automation
- API automation with Cypress
- Page Object Model
- REST API testing
- Positive and negative test scenarios
- Dynamic test data generation
- Authentication and authorization testing
- JSON Schema validation
- Custom Cypress commands
- Test isolation and data independence
- Retry-ability and synchronization
- Maintainable test architecture

## 👨‍💻 Author & Contact

**Vagner Carmo**  
Software QA Analyst | CTFL

- 💼 LinkedIn: [Vagner Carmo](https://www.linkedin.com/in/vagner-do-carmo/)
- 💻 GitHub: [vagner-carmo](https://github.com/vagner-carmo)

---

This project is continuously evolving as new automation scenarios and framework improvements are added.
