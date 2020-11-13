function getLaunchData() {
  return fetch(
    'https://api.spacexdata.com/v3/launches?order=desc&sort=launch_date_local'
  ).then(res => res.json());
}

export { getLaunchData };
