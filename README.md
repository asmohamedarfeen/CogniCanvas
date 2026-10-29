<a name="readme-top"></a>

<div align="center">
  <h1 align="center" style="font-size: 2.5rem; font-weight: 800; border-bottom: none; margin-bottom: 0.25rem;">CogniCanvas</h1>
  <p align="center" style="font-size: 1.15rem; font-weight: 500;">
    <strong>The Unified Visual Workspace & Control Deck for Autonomous AI Coding Agents</strong>
  </p>
  <p align="center">
    Run, orchestrate, and observe Claude Code, Codex, Gemini, OpenCode, or any ACP-compatible agent across local, remote, and cloud environments.
  </p>
</div>

<div align="center">
  <a href="https://github.com/asmohamedarfeen/new22"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge" alt="License"></a>
  <a href="https://github.com/asmohamedarfeen/new22"><img src="https://img.shields.io/badge/Version-1.34.0-success.svg?style=for-the-badge" alt="Version"></a>
  <a href="https://github.com/asmohamedarfeen/new22"><img src="https://img.shields.io/badge/Node-%3E%3D24-brightgreen.svg?style=for-the-badge" alt="Node"></a>
  <a href="https://github.com/asmohamedarfeen/new22"><img src="https://img.shields.io/badge/TypeScript-Ready-blue.svg?style=for-the-badge" alt="TypeScript"></a>
</div>

<div align="center">
  <a href="#overview">Overview</a> &bull;
  <a href="#core-capabilities">Capabilities</a> &bull;
  <a href="#architecture">Architecture</a> &bull;
  <a href="#getting-started">Getting Started</a> &bull;
  <a href="#configuration">Configuration</a> &bull;
  <a href="#license">License</a>
</div>

---

## Overview

**CogniCanvas** is an open, full-stack visual development environment and control center designed for autonomous software engineering agents. Rather than interacting with AI agents purely through command-line interfaces or raw chat boxes, CogniCanvas unites the full developer toolkit into a unified cockpit:

- **Monaco Code Editor & Diff Viewer**: Direct multi-file browsing, syntax highlighting, and live changes.
- **Embedded Terminal Emulator**: Interactive shell execution, real-time log streaming, and process controls.
- **In-App Browser & DOM Inspector**: Live webpage previews, element inspection, and screenshot capture for web-driven agent workflows.
- **Conversation & Task Planner**: Structured step-by-step task breakdown, thought tracking, and conversation branching.
- **Multi-Backend Orchestration**: Connect simultaneously to local, containerized, and cloud agent runtime servers.

---

## Core Capabilities

### 1. Multi-Surface Developer Cockpit
CogniCanvas splits the developer interface into specialized, coordinated surfaces:
- **Left Panel (Conversation & Stream)**: Displays agent actions, human feedback loops, tool invocations, code explanations, and collapsible execution thought traces.
- **Right Panel (Interactive Workspace Tabs)**:
  - **Files**: Interactive file tree, live file editing, and file creation.
  - **Terminal**: Real-time terminal with ANSI color support, process signaling, and split view.
  - **Browser**: Integrated browser rendering live web apps under test with full screenshot capability.
  - **Planner / Tasks**: Hierarchical decomposition of complex multi-stage tasks.

### 2. Multi-Model & Agent Compatibility
Compatible with industry-standard agent protocols and models:
- **Agent Client Protocol (ACP)**: Connect to any ACP-compliant agent backend out-of-the-box.
- **Supported Model Providers**: Claude (Anthropic), OpenAI Codex / GPT-4o, Google Gemini, DeepSeek, and locally hosted LLMs via Ollama / vLLM.
- **Dynamic Profile Switching**: Switch models, temperature settings, and agent capabilities per conversation without restarting.

### 3. Native Model Context Protocol (MCP) & Skills
- Seamlessly configure, toggle, and manage MCP servers (GitHub, Slack, PostgreSQL, memory vaults, custom APIs).
- Custom prompt templates and extensible automation skills that empower agents to inspect codebases, execute test suites, and draft pull requests.

### 4. Cross-Platform Runtime
- **Web Application**: Fast, responsive React 19 + Tailwind CSS single-page app running in modern browsers.
- **Desktop Application**: Packaged via Electron with native file system access and system tray support for macOS, Linux, and Windows.
- **Docker & Container Ready**: Optimized multi-stage Docker builds and Helm charts for self-hosted team deployments.

---

## Architecture

CogniCanvas follows a modular architecture separating presentation, state management, and agent transport:

```
src/
├── api/          # Agent Server REST & WebSocket transport layer
├── assets/       # Branding, icons, and static graphics
├── components/   # Modular UI surfaces (browser, conversation, files, terminal, settings)
├── context/      # React contexts (theme, layout, telemetry)
├── hooks/        # Reactive hooks for agent state, queries, and shortcuts
├── i18n/         # Internationalization dictionary (English, Spanish, German, Japanese, etc.)
├── routes/       # React Router layout and view configurations
├── services/     # Business logic, audio, child conversation lifecycle
├── stores/       # Global state stores (Zustand / TanStack Query)
├── types/        # TypeScript contracts for agent events, tools, and configurations
└── utils/        # Path resolution, websocket handshake, formatting helpers
```

---

## Getting Started

### Prerequisites
- **Node.js**: `>= 24.0.0`
- **npm**: `>= 11.0.0`

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/asmohamedarfeen/new22.git
cd new22
npm install
```

### Running the Development Server

Start the local Vite development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) (or the displayed port) in your browser.

### Building for Production

Compile the web application:

```bash
npm run build:app
```

### Building the Desktop Application (Electron)

```bash
npm run build:desktop
```

---

## Configuration

CogniCanvas reads configuration from environment variables. Copy the sample environment file:

```bash
cp .env.sample .env
```

| Variable | Description | Default |
| :--- | :--- | :--- |
| `VITE_AGENT_SERVER_URL` | Base URL of the Agent Server backend | `http://localhost:8000` |
| `VITE_APP_MODE` | Runtime mode (`web` or `desktop`) | `web` |
| `VITE_ENABLE_TELEMETRY` | Enable anonymized crash/error diagnostics | `false` |

---

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

Copyright (c) 2026 **Mohamed Arfeen** &lt;asmohamed.arfeen@gmail.com&gt;
