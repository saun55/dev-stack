# 🚀 Dev Stack

> A modern and responsive technology stack explorer built with React, TypeScript, and Tailwind CSS.

Dev Stack helps developers explore popular frontend, backend, database, language, styling, DevOps, and development tools — and build their own personalized technology stack.

## 🌐 Live Demo

 🌐 [Live Demo](https://dev-stack-project-05.netlify.app/)

## 📸 Preview

![Dev Stack Preview](./src/assets/banner-stack.png)

## ✨ Features

* 📱 Fully responsive design for mobile, tablet, and desktop
* 🧭 Responsive navigation bar
* 🚀 Modern hero/banner section
* 🔎 Explore technologies by category
* 💻 Technology cards with:

  * Technology icon
  * Category
  * Difficulty level
  * Rating
  * Badge
  * Description
* ➕ Add technologies to your personal stack
* 🚫 One technology per category
* 🗑️ Remove individual technologies from your stack
* 🧹 Remove all selected technologies
* 🔔 Toast notifications for stack actions
* 📊 Dynamic selected technology count
* 📦 Technology data loaded from JSON
* 🎨 Modern UI built with Tailwind CSS

## 🛠️ Technologies Used

* React
* TypeScript
* Vite
* Tailwind CSS
* React Icons
* React Toastify
* JavaScript
* HTML5
* CSS3

## 📂 Project Structure

```text
dev-stack/
├── public/
│   └── data.json
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── BannerSection/
│   │   ├── Technologies/
│   │   └── YourStack/
│   │
│   ├── App.tsx
│   ├── App.css
│   └── main.tsx
│
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 📋 Technology Categories

The project includes technologies from different categories:

| Category | Examples                       |
| -------- | ------------------------------ |
| Frontend | React, Next.js                 |
| Backend  | Node.js, Express.js            |
| Database | MongoDB, PostgreSQL            |
| Language | JavaScript, TypeScript, Python |
| Styling  | Tailwind CSS                   |
| DevOps   | Docker, GitHub Actions         |
| Tools    | Git, GitHub, Vite              |

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/saun55/dev-stack.git
```

Go to the project directory:

```bash
cd dev-stack
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the local development URL shown in your terminal.

## 🎯 How It Works

1. Browse the available technologies.
2. Choose a technology from a category.
3. Add it to your stack.
4. Your selected technologies appear in the **Your Stack** section.
5. Remove individual technologies whenever needed.
6. Use **Remove All** to clear the complete stack.

## 📱 Responsive Design

Dev Stack is designed to work across different screen sizes:

* 📱 Mobile — single-column technology cards
* 📱 Tablet — two-column technology cards
* 💻 Desktop — three-column technology cards
* 📊 Responsive stack sidebar

## 🔔 Notifications

The application uses **React Toastify** to provide feedback when users:

* Add a technology
* Remove a technology
* Clear the entire stack
* Attempt an invalid stack selection

## 👨‍💻 Author

**Saun**

Full-Stack Web Developer from Bangladesh.

* GitHub: [@saun55](https://github.com/saun55)
* LinkedIn: [Shawon Ahmmed](https://www.linkedin.com/in/shawonahmmed)






i.What is JSX, and why is it used in React?
ans:   JSX-এর পূর্ণরূপ JavaScript XML। এটি JavaScript-এর একটি syntax extension, যার মাধ্যমে আমরা JavaScript-এর ভিতরে HTML-এর মতো code লিখতে পারি।
React-এ JSX ব্যবহার করা হয় কারণ এটি UI-এর code-কে সহজে পড়া,এছাড়া JavaScript-এর logic এবং UI markup একসাথে সহজে ব্যবহার করা যায়।

ii. What is the difference between props and state?
Ans:  Props ব্যবহার করা হয় parent component থেকে child component-এ data পাঠানোর জন্য এবং props read-only। অন্যদিকে, state component-এর ভিতরের data manage করে এবং setter function ব্যবহার করে state update করা যায়।

iii. What does the useState hook do, and where did you use it in this project?
Ans: useState হলো React-এর একটি Hook, যেটা functional component-এর ভিতরে state তৈরি এবং manage করার জন্য ব্যবহার করা হয়।

iv.  What does the useEffect hook do, and why did you need it to load the JSON data?
Ans: useEffect হলো React-এর একটি Hook, যেটা component-এর মধ্যে side effect করার জন্য ব্যবহার করা হয়। API থেকে data fetch করা
JSON file load করা Timer চালানো etc.

v. Why does every item in a .map() list need a unique key prop?
Ans: যখন আমরা .map() ব্যবহার করে একাধিক element render করি, তখন প্রতিটি element-কে একটি unique identity দিতে হয়। এই কাজের জন্য key prop ব্যবহার করা হয়।

vi. What is conditional rendering? Show one place you used it (example: the empty stack message).
Conditional rendering হলো কোনো condition-এর উপর ভিত্তি করে UI-এর নির্দিষ্ট অংশ display করা। আমার project-এ stack empty থাকলে “Your stack is empty” message দেখানোর জন্য আমি conditional rendering ব্যবহার করেছি।

vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Parent থেকে child-এ data পাঠানোর জন্য props ব্যবহার করি। আর child থেকে parent-এ কিছু পাঠানোর জন্য parent একটি callback function prop হিসেবে child-কে দেয়, তারপর child সেই function-টি data সহ call করে।
