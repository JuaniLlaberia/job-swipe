export const getUserCoords = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const coords = [position.coords.longitude, position.coords.latitude];
        resolve(coords);
      },
      error => {
        reject(error);
      }
    );
  });
};
