# React Native Hello World

This is my first React Native app. Built for learning purposes.

## Stack used

* Windows 10 64 bits.
* ~~Nuclide~~ VSCode
* ~~React Native Debugger for Windows~~ VSCode rocks
* ~~React Native Debugger Open~~ VSCode rocks a lot
* CRNA
* Expo (it worth to mention it but no real need here. It's used internally by VSCode React Native extension)
* ESLint
* Flow
* NativeBase for UI

## Development guide

### Configure before start

Before anything, ensure that `react-native.packager.port` at `.vscode/setting.json` has the same value as `packagerPort` at `.expo\packager-info.json` (19001 in my case).

Besides, these two files needs to have this parameters set:

`.expo/settings.json`

```json
{
  "hostType": "lan",
  "lanType": "ip",
}
```

`.babelrc`

```json
{
  "sourceMaps": true,
}
```

What does they mean?

* **hostType** is for connecting through LAN between the computer and the remote device. Obviously, the device needs to be in the same Wifi network.
* **lanType** so the URL given is the machine IP.
* **sourceMaps** is vital for Hot Reload and Debugging to work

## Start developing

1. `Ctrl + Shift + P`
1. `> React Native: Start Exponent Packager`
1. Wait for packager initialization and QR Code tab to open
1. Scan QA with Expo app on the device.

## Debugging

> **Tip:** Remote debugging works best with Live reload. Hot reloading gives too much troubles and RSOF (Red Screen of Death).

For debugging to be possible you have to have the "React Native" configuration named "Attah to packager".

`.vscode/launch.json`

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Attach to packager",
            "program": "${workspaceRoot}/.vscode/launchReactNative.js",
            "type": "reactnative",
            "request": "attach",
            "sourceMaps": true,
            "outDir": "${workspaceRoot}/.vscode/.react"
        }
    ]
}
```

Then:

1. If you have "Hot reloading" enabled, disable it.
1. `Ctrl + Shift + P`
1. `> React Native: Start Exponent Packager`
1. On the debugging tab, select "Attach to pacakger"
1. Press "Start debugging" or just `F5`
1. Wait for debugging console establish connection with the Proxy (Packager).
1. On the device, enable "Debug Remote JS"
1. Set some breakpoint and reload the app (Live reload can be useful here to avoid repetitive steps)

## Troubleshooting

* If app initialization hangs (loading forever) and it doesn't start remove node_modules and run `yarn`.
* If attach debugger doesn't respond, just restart VSCode.
