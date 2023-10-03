export const weakMap = new WeakMap();

export function queryAPI(ePoint) {
  if (weakMap.has(ePoint)) {
    const val = weakMap.get(ePoint);
    if (val >= 4) {
      throw new Error('EndPoint load is high');
    }
    weakMap.set(ePoint, val + 1);
  } else {
    weakMap.set(ePoint, 1);
  }
}
