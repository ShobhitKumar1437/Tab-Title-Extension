# Tab Title Getter Chrome Extension

This is a simple Chrome extension that fetches and display the title of the current active tab when you click a button in the extension's popup.

---

## Table of Contents
1. [Features](#features)
2. [Usage](#usage)
3. [How it Works](#how-it-works)

---

## Features

- A button in the extension popup that fatches the title of the current tab.
- Display the title directly in the popup window.
- Simple and easy to use interface.

---

## Usage

1. Open any website(e.g., Google or YouTube).
2. Click the extension icon from the chrome toolbar.
3. In the popup window, click <b>Get Tab Title</b>.
4. The title of the current tab will be displaye.

---

## How it works

1. mainfest.json: This is the configuration file for the extension, containing details like version, permissions, icons, and default popup.
2. popup.html: This is the HTML file that contains the layout for the popup window with a button and a paragraph to show the tab title.
3. popup.js: This JavaScript file runs when you click the button in the popup. It uses the Chrome tabs API to get the active tab's title and display it inside the popup.
