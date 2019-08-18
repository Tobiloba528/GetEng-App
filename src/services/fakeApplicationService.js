const applications = [
  { _id: "1", label: "Senior Fullstack Developer" },
  {
    _id: "2",
    label: "Backend Developer (C#)"
  }
];

export function getApplcations() {
  return applications;
}

export function saveApplication(vacancy) {
  let appInDb = applications.find(app => app._id === vacancy._id) || {};
  appInDb.label = vacancy.label;
  appInDb._id = vacancy._id;

  applications.push(appInDb);
}
