# Chic & Shears Website

Welcome to the **Chic & Shears** project repository! This is a modern, responsive static website designed to showcase a business, built for high performance and reliability on the Cloudflare platform.

[cloudflarebutton]

## Description

This project provides a sleek and efficient static website for "Chic & Shears". It is architected as a Single-Page Application (SPA), ensuring a smooth user experience with fast navigation and robust content delivery. Leveraging Cloudflare's global network, the site promises excellent availability and speed.

## Key Features

*   **Static Site Hosting**: Optimized for delivery via Cloudflare's CDN.
*   **Single-Page Application (SPA) Support**: Configured to handle client-side routing gracefully.
*   **High Performance**: Served directly from Cloudflare's edge network for minimal latency.
*   **Developer-Friendly**: Built with modern TypeScript and managed with Bun.
*   **Cloudflare Integration**: Seamless deployment and configuration using Wrangler.

## Technology Stack

*   **Runtime/Package Manager**: [Bun](https://bun.sh/)
*   **Cloudflare Platform**:
    *   [Cloudflare Workers](https://workers.cloudflare.com/) (for static asset serving)
    *   [Wrangler](https://developers.cloudflare.com/workers/wrangler/) (CLI tool for Cloudflare)
    *   [@cloudflare/workers-types](https://github.com/cloudflare/workers-types)
*   **Web Framework (Local Dev/Future Use)**: [Hono](https://hono.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Linting**: [ESLint](https://eslint.org/)

## Setup and Installation

To get this project up and running on your local machine, follow these steps:

### Prerequisites

Make sure you have [Bun](https://bun.sh/docs/installation) installed on your system.

```bash
curl -fsSL https://bun.sh/install | bash
```

### Installation

1.  **Clone the repository** (if you haven't already):
    ```bash
    git clone https://github.com/your-username/chic-and-shears.git
    cd chic-and-shears
    ```
    *(Note: Replace `https://github.com/your-username/chic-and-shears.git` with the actual repository URL.)*

2.  **Install dependencies**:
    ```bash
    bun install
    ```

## Usage

### Development

To start the development server and preview your changes locally:

```bash
bun dev
```

This command will typically serve the static assets from the `public` directory, allowing you to view and test your website in a browser.

### Linting

To check for code style and potential errors:

```bash
bun lint
```

## Deployment

This project is designed for seamless deployment to Cloudflare.

1.  **Authenticate Wrangler**: If you haven't already, authenticate Wrangler with your Cloudflare account:
    ```bash
    wrangler login
    ```

2.  **Deploy to Cloudflare**: To deploy your static site to Cloudflare Workers (which serves static assets):
    ```bash
    bun deploy
    ```
    This command will package and upload your `public` directory content to Cloudflare, making it accessible globally.

[cloudflarebutton]

## Project Structure

```
.
├── prompts/              # AI prompt files
├── public/               # Static assets (HTML, CSS, JS)
│   ├── app.js
│   ├── index.html
│   └── styles.css
├── .bootstrap.js         # Initial setup script
├── .gitignore            # Git ignore file
├── package.json          # Project dependencies and scripts
└── wrangler.jsonc        # Cloudflare Wrangler configuration
```

## Contributing

We welcome contributions! Please refer to our `CONTRIBUTING.md` (to be created) for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License. See the `LICENSE` (to be created) file for details.