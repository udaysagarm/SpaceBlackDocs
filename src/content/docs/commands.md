# Commands

Exact commands to install and run Space Black on every supported platform.

---

## macOS

### Install
```bash
curl -fsSL https://spaceblack.info/install.sh | bash
```
Installs to `~/SpaceBlack` and creates a global `ghost` command at `/usr/local/bin/ghost`.

### Run
```bash
ghost start
```

### Update
```bash
ghost update
```

### Background Daemon
```bash
ghost daemon
```

---

## Linux (Debian / Ubuntu)

### Install (One Command)
```bash
curl -fsSL https://spaceblack.info/install.sh | bash
```

### Install (Manual — .deb Package)
```bash
curl -fsSL -o spaceblack.deb https://github.com/udaysagarm/SpaceBlack/releases/latest/download/spaceblack_1.0.0_all.deb
sudo dpkg -i spaceblack.deb
```

### Run
```bash
ghost start
```

### Update
```bash
ghost update
```

### Uninstall
```bash
sudo dpkg -r spaceblack
```

---

## Linux (Fedora / RHEL / CentOS)

### Install (One Command)
```bash
curl -fsSL https://spaceblack.info/install.sh | bash
```

### Install (Manual — .rpm Package)
```bash
curl -fsSL -o spaceblack.rpm https://github.com/udaysagarm/SpaceBlack/releases/latest/download/spaceblack-1.0.0-1.noarch.rpm
sudo rpm -i spaceblack.rpm
```

### Run
```bash
ghost start
```

### Update
```bash
ghost update
```

### Uninstall
```bash
sudo rpm -e spaceblack
```

---

## Raspberry Pi

### Install
```bash
curl -fsSL https://spaceblack.info/install.sh | bash
```
Automatically detects Raspberry Pi OS (Debian-based) and installs the `.deb` package. Audio dependencies (`portaudio19-dev`) are installed during setup.

### Run
```bash
ghost start
```

### Update
```bash
ghost update
```

---

## Windows

### Install
```powershell
git clone https://github.com/udaysagarm/SpaceBlack.git
cd SpaceBlack
.\ghost.bat start
```

### Run
```powershell
.\ghost.bat start
```

### Update
```powershell
.\ghost.bat update
```

### Background Daemon
```powershell
.\ghost.bat daemon
```

---

## All Commands

| Command | macOS / Linux | Windows |
|---------|---------------|---------|
| Install | `curl -fsSL https://spaceblack.info/install.sh` | `git clone ... && cd SpaceBlack` |
| Start | `ghost start` | `.\ghost.bat start` |
| Update | `ghost update` | `.\ghost.bat update` |
| Daemon | `ghost daemon` | `.\ghost.bat daemon` |
| Help | `ghost help` | `.\ghost.bat help` |
