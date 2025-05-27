# just-some-maps-and-boxes

A collection of Mapbox GL JS map demos. Each map demo is organized in its own folder under `src/maps/`.

## Getting Started

1. Install dependencies:
   ```zsh
   npm install
   ```
2. Add your Mapbox access token to `src/shared/mapbox-config.js`:
   ```js
   export const MAPBOX_TOKEN = 'YOUR_MAPBOX_ACCESS_TOKEN';
   ```
3. Start the development server:
   ```zsh
   npm run dev
   ```
4. Open the map demo in your browser. For example, for the basic map:
   - Vite will show the local URL in the terminal (e.g., http://localhost:5173/maps/basic-map/)

## Structure

- `src/maps/` — Each subfolder is a separate map demo
- `src/shared/` — Shared configuration (e.g., Mapbox token)
- `src/assets/` — Shared assets (optional)

Add new map demos by creating new folders in `src/maps/`.