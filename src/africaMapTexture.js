import * as THREE from 'three';
import coastlineData from './data/coastline-110m.json';

const AFRICA_BOUNDS = {
  minLon: -20,
  maxLon: 55,
  minLat: -36,
  maxLat: 38,
};

const CITY_COORDS = [
  { name: 'Kampala', lon: 32.5825, lat: 0.3476 },
  { name: 'Nairobi', lon: 36.8219, lat: -1.2921 },
  { name: 'Kigali', lon: 30.0619, lat: -1.9441 },
  { name: 'Lagos', lon: 3.3792, lat: 6.5244 },
  { name: 'Cairo', lon: 31.2357, lat: 30.0444 },
  { name: 'Johannesburg', lon: 28.0473, lat: -26.2041 },
];

function mercatorY(lat) {
  const clamped = Math.max(-85, Math.min(85, lat));
  const radians = (clamped * Math.PI) / 180;
  return Math.log(Math.tan(Math.PI / 4 + radians / 2));
}

function lonLatToPlane(lon, lat) {
  const minY = mercatorY(AFRICA_BOUNDS.minLat);
  const maxY = mercatorY(AFRICA_BOUNDS.maxLat);
  const x = ((lon - AFRICA_BOUNDS.minLon) / (AFRICA_BOUNDS.maxLon - AFRICA_BOUNDS.minLon)) * 2 - 1;
  const y = ((mercatorY(lat) - minY) / (maxY - minY)) * 2 - 1;
  return { x, y };
}

function isInAfricaBounds(lon, lat) {
  return (
    lon >= AFRICA_BOUNDS.minLon &&
    lon <= AFRICA_BOUNDS.maxLon &&
    lat >= AFRICA_BOUNDS.minLat &&
    lat <= AFRICA_BOUNDS.maxLat
  );
}

function drawDottedSegment(ctx, x1, y1, x2, y2, dotRadius, dotSpacing) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  if (len < 1e-6) return;

  const steps = Math.max(1, Math.floor(len / dotSpacing));
  for (let i = 0; i <= steps; i += 1) {
    const t = i / steps;
    const x = x1 + dx * t;
    const y = y1 + dy * t;
    ctx.beginPath();
    ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function cityToMarker(city) {
  const projected = lonLatToPlane(city.lon, city.lat);
  return {
    ...city,
    x: projected.x,
    y: projected.y,
  };
}

export function createAfricaMapTexture(size = 1024) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgba(255, 255, 255, 0.96)';
  const dotRadius = 3;
  const dotSpacing = 6.6;

  for (const feature of coastlineData) {
    if (feature.type !== 'LineString' || !Array.isArray(feature.coordinates)) continue;

    let activeSegment = [];
    for (const [lon, lat] of feature.coordinates) {
      if (isInAfricaBounds(lon, lat)) {
        activeSegment.push([lon, lat]);
      } else if (activeSegment.length > 1) {
        for (let i = 0; i < activeSegment.length - 1; i += 1) {
          const [lon1, lat1] = activeSegment[i];
          const [lon2, lat2] = activeSegment[i + 1];
          const p1 = lonLatToPlane(lon1, lat1);
          const p2 = lonLatToPlane(lon2, lat2);
          drawDottedSegment(
            ctx,
            ((p1.x + 1) / 2) * canvas.width,
            (1 - (p1.y + 1) / 2) * canvas.height,
            ((p2.x + 1) / 2) * canvas.width,
            (1 - (p2.y + 1) / 2) * canvas.height,
            dotRadius,
            dotSpacing,
          );
        }
        activeSegment = [];
      } else {
        activeSegment = [];
      }
    }

    if (activeSegment.length > 1) {
      for (let i = 0; i < activeSegment.length - 1; i += 1) {
        const [lon1, lat1] = activeSegment[i];
        const [lon2, lat2] = activeSegment[i + 1];
        const p1 = lonLatToPlane(lon1, lat1);
        const p2 = lonLatToPlane(lon2, lat2);
        drawDottedSegment(
          ctx,
          ((p1.x + 1) / 2) * canvas.width,
          (1 - (p1.y + 1) / 2) * canvas.height,
          ((p2.x + 1) / 2) * canvas.width,
          (1 - (p2.y + 1) / 2) * canvas.height,
          dotRadius,
          dotSpacing,
        );
      }
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  return texture;
}

export function getAfricaCityMarkers() {
  return CITY_COORDS.map(cityToMarker);
}

export { lonLatToPlane };
