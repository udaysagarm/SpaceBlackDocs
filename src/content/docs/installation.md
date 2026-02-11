# Installation Guide

Follow these steps to get Space Black up and running on your machine.

## Prerequisites

-   **Python 3.10+**: Ensure you have a modern version of Python installed.
-   **Git**: To clone the repository.
-   **Terminal**: 
    -   **Windows**: Recommended to use PowerShell or Windows Terminal.
    -   **Mac/Linux**: Default terminal is fine. Nerd Fonts recommended for best experience.

## Step-by-Step Setup

### 1. Clone the Repository
Open your terminal and run:
```bash
git clone https://github.com/udaysagar/SpaceBlack.git
cd SpaceBlack
```

### 2. Run Setup Script (Recommended)
We provide a helper script to automate environment creation and dependency installation.

**Mac/Linux:**
```bash
./spaceblack onboard
```

**Windows (PowerShell):**
```powershell
spaceblack onboard
```

### 3. Verification
The script will install dependencies and create a `.venv` directory.
You can verify it worked by starting the app:
```bash
./spaceblack start
```

### Manual Setup (Advanced)
If you prefer setting up manually or the script fails:

1.  **Create Environment**:
    ```bash
    python3 -m venv .venv
    source .venv/bin/activate
    ```

2.  **Install Dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

3.  **Run**:
    ```bash
    python main.py
    ```
