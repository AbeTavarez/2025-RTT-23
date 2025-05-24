# Inventory Tracker

## How to setup Parcel to build a frontend

1. In the root directory run: `npm install --save-dev parcel`
2. In the package.json file, remove `"main": "index.js",` and add `"source": "src/main.ts",`
3. In the package.json, replace the script:
    `
    "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    },
    `
    with:
    `
    "scripts": {
    "dev": "parcel src/index.html",
    "build": "parcel build src/index.html"
    },
    `
4. In the terminal run: `npm run dev`, you should now be able to open: `http://localhost:1234/` in your browser.

Happy Hacking!