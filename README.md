# Contact Manager

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
  - [Adding a Contact](#adding-a-contact)
  - [Editing a Contact](#editing-a-contact)
  - [Deleting a Contact](#deleting-a-contact)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The Contact Manager is a simple web application that allows users to manage their contacts. Users can add, edit, and delete contacts, with the contact information being stored locally in the browser's local storage or on a backend server.

## Features
- Add new contacts
- Edit existing contacts
- Delete contacts
- Persist contacts in local storage
- RESTful API integration

## Technologies Used
- React
- React Router
- Axios
- Tailwind CSS

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later) or yarn

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/Amina-abdirahman/Contact-Manager
    cd contact-manager
    ```

2. Install the dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

### Running the Application
1. Start the development server:
    ```sh
    npm start
    # or
    yarn start
    ```

2. Open your browser and navigate to `http://localhost:5173/`.

## API Endpoints
- **GET /api/contacts**: Retrieve all contacts
- **POST /api/contacts**: Add a new contact
- **PUT /api/contacts/:id**: Update an existing contact
- **DELETE /api/contacts/:id**: Delete a contact

## Usage

### Adding a Contact
1. Navigate to the "Add Contact" page.
2. Fill in the contact details (name, email, phone).
3. Click "Add Contact" to save the new contact.

### Editing a Contact
1. Navigate to the "Edit Contact" page for the contact you wish to edit.
2. Update the contact details.
3. Click "Save Changes" to update the contact.

### Deleting a Contact
1. Navigate to the "Contact List" page.
2. Click the "Delete" button next to the contact you wish to delete.
3. Confirm the deletion.

## Contributing
Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
