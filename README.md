
# Project Name: Playwright JavaScript Automation

## Description

This repository contains automated tests for [Website Name or Functionality] using Playwright, a powerful browser automation library. The tests cover a variety of UI interactions intended to simulate real user behavior and ensure the application functions as expected across multiple browsers.

## Features

- Cross-browser testing: Tests are set up to run on Chrome, Firefox, and WebKit.
- Detailed reporting: Utilizes Playwright's built-in capabilities to generate test reports.

## Prerequisites

Before running the tests, ensure you have the following installed:
- Node.js (v14.x or later)
- npm (v6.x or later)

## Installation

Follow these steps to get the environment set up:

```bash
# Clone the repository
git clone https://github.com/NaqviSajjad/test_automation_task
cd test_automation_task

# Install dependencies
npm install

# Install Playwright
npm init playwright@latest

#Running playwright tests
npx playwright test -g "name of the test block"

# HTML Reports
npx playwright show-report

