function getLaunchData(order) {
  return fetch(
    `https://api.spacexdata.com/v3/launches?order=${order}&sort=launch_date_local`
  ).then(res => res.json());
}

export { getLaunchData };
