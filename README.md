# 🍽️ Eat & Split

A simple and interactive React application for managing shared expenses with friends. Keep track of who owes whom and make splitting bills easier!

## ✨ Features

- **Add Friends:** Add friends with their names and profile pictures.
- **Track Balances:** See who owes you money, who you owe, and when your balances are settled.
- **Split Bills:** Enter the bill amount and your share to calculate the remaining expense.
- **Flexible Payments:** Choose who paid the bill and automatically update balances.
- **Responsive UI:** A clean interface designed with Tailwind CSS.
- **Interactive Forms:** Easily add friends and split bills through simple forms.

## 🛠️ Built With

- [React](https://react.dev/) — UI development
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) — Application logic
- [Tailwind CSS](https://tailwindcss.com/) — Styling and responsive design
- [Vite](https://vite.dev/) — Development server and build tool

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and npm installed.

### Installation

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_URL
   ```

2. Navigate to the project directory:

   ```bash
   cd eat-and-split
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 📖 How to Use

1. Add a friend using their name and profile image URL.
2. Select a friend from the friends list.
3. Enter the total bill amount.
4. Enter your share of the bill.
5. Choose who paid the bill.
6. Click **Split Bill** to update the balance.

## 📁 Project Structure

```text
src/
├── components/
│   ├── Button.jsx
│   ├── InputField.jsx
│   ├── Friend.jsx
│   ├── FriendsList.jsx
│   ├── FormAddFriend.jsx
│   └── FormSplitBill.jsx
├── App.jsx
└── main.jsx
```

_Note: The structure above is illustrative. Adjust it to match your actual project folders and filenames._

## 🎯 Project Goals

This project was built as a hands-on React practice project to improve my understanding of:

- React components and reusable UI
- Props and state management with `useState`
- Handling form inputs and events
- Rendering lists dynamically
- Passing data and event handlers between components
- Styling interfaces with Tailwind CSS

## 📌 Future Improvements

- Persist friends and balances using local storage.
- Add edit and delete friend functionality.
- Improve form validation and error messages.
- Add currency customization.

## 👨‍💻 Author

**Mohamed Ashraf**

- GitHub: [Your GitHub Profile](YOUR_GITHUB_PROFILE_URL)
- LinkedIn: [Your LinkedIn Profile](YOUR_LINKEDIN_PROFILE_URL)

---

Made with ❤️ using React and Tailwind CSS.
