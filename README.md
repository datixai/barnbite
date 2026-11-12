# Cafe ordering website (demo template)

A ready-made online ordering website for cafes and restaurants, plus an admin panel. It ships as a demo for a made-up cafe called **X Cafe**, with a full sample menu (258 items with photos and prices), so it can be shown to any cafe and personalised in a few minutes.

Mobile first: tested at phone widths 320, 360, 375, 390, 414 and 430 px, plus desktop.

## Personalise it for a cafe (before a demo)

Open `admin.html` (default PIN **1234**), then **Settings & Branches**:

1. **Cafe name** (the logo shows its initials automatically, e.g. "Hill Top Cafe" becomes HT), **City**, **Brand line**, **Opening hours**.
2. **Branches**: branch name, address, phone, and your own **WhatsApp** number (format 923001234567). With a WhatsApp number set, the "Send order on WhatsApp" step works in the demo. Leave it empty and customers are asked to call instead.
3. **Google Maps search**: type the cafe name and area as it appears on Google Maps. The map in the footer appears once this is set; until then a placeholder shows.
4. Optional: Instagram and Facebook links, delivery charge, minimum order.

Menu items, prices, categories and photos can be changed in **Products** and **Categories**. **Backup** downloads the whole setup as a .json file, so you can keep one file per cafe and restore it before each demo.

Settings are saved in the browser of the device you use, so set it up on the phone or laptop you will demo from.

## Files

| File | What it is |
|---|---|
| `index.html` | Customer website (menu, cart, checkout) |
| `admin.html` | Admin panel |
| `js/menu-data.js` | Sample menu, prices and the photo for each item |
| `js/store.js` | Data layer and demo settings (name, branches, contacts) |
| `js/icons.js` | Hand drawn food icons |
| `js/app.js`, `js/admin.js` | Website and admin logic |
| `css/style.css`, `css/admin.css` | Styles |
| `images/menu/` | Menu photos |

## Admin panel

- **Orders**: every order placed on the site, with status, call and WhatsApp buttons, and today's sales.
- **Products**: add, edit, delete, hide (sold out), mark Popular, one price or sizes (like pizzas), upload a photo or pick an icon.
- **Categories**: add, rename, reorder, change icon and group (Food, Bar & Drinks, Desserts).
- **Settings & Branches**: as above, plus pausing orders and changing the PIN.

## Photos

All menu photos are free licence photos from Pexels (Pexels licence or CC0: free for commercial use, no credit required). They show the type of dish. For a real client, replace them with the cafe's own photos from the admin panel. "Extra Syrup" uses a drawn icon.

## How orders work, and going live

There is no server yet. Menu, orders and settings live in the browser of each device, and orders reach the cafe through the WhatsApp message the customer sends after checkout.

For a real client, host the site (for example Vercel or Firebase Hosting) and connect an online database (for example Firebase Firestore) so orders and menu changes are shared across all phones. All data access is in `js/store.js`, so only that file needs to change.

## Run locally

Double click `index.html`, or serve the folder:

```
python -m http.server 8765
```

then open http://127.0.0.1:8765/

After changing CSS or JS, bump the `?v=` number in `index.html` and `admin.html` so phones load the new files.

Developed by Datix AI.
