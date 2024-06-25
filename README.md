## Tipalti React Starter Template

This is a simplified React starter template configured using [Vite](https://vitejs.dev/guide/), a build tool that aims to provide a faster and leaner development experience.

It has minimal dependencies and configuration to allow for easy installation and to allow the candidate to make their own decisions about styling, external libraries and other tooling.

You are free to make changes to the template but please be aware that those reviewing your work will need to be able to install and run it locally without difficulty.

---

## Usage

To use the repository for your challenge submission, please fork the repository to your own Github account and then clone locally and begin development. Please DO NOT try to push branches or make pull requests to the original source template repository.

### Installation

From the root folder, run `npm install` to install all required dependencies.

### Running Locally

From the root folder, run `npm run dev` to run a local server with hot reloading.

---

## Environment Variables

This project uses environment variables for configuration. Create a `.env` file in the root of your project and add the following variables:

| Variable | Description | Required |
|----------|-------------|----------|
| VITE_USERNAME | Username for API authentication | Yes |

### GitHub Actions Workflow Secret

For the GitHub Actions workflow to function correctly, you need to add the `VITE_USERNAME` as a repository secret:

1. Go to your GitHub repository
2. Click on "Settings" > "Secrets" > "New repository secret"
3. Name the secret `VITE_USERNAME` and enter your username as the value
4. Click "Add secret"

This secret will be used in the GitHub Actions workflow to authenticate API requests during the automated tests.