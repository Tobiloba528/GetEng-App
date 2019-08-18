
const categories = [
  { category: "Categories", _id: 0 },
  { category: "UI/UI", _id: 1 },
  { category: "Frontend Developer", _id: 2 },
  { category: "Backend Developer", _id: 3 },
  { category: "Fullstack", _id: 4 },
  { category: "Devops", _id: 5 },
  { category: "Quality Assurance", _id: 6 },
  { category: "Software Developer", _id: 7 },
  { category: "Mobile App(iOS)", _id: 8 },
  { category: "Mobile App(Android)", _id: 9 },
  { category: "Business Analyst", _id: 10 },
  { category: "Product Manager", _id: 11 },
  { category: "Project Manager", _id: 12 },
  { category: "Hybrid Mobile Dev", _id: 13 },
  { category: "Database Admin", _id: 14 },
  { category: "Information Security", _id: 15 }
];

const levels = [
  { level: "Level", _id: 1 },
  { level: "Intern", _id: 2 },
  { level: "Junior", _id: 3 },
  { level: "Intermediate", _id: 4 },
  { level: "Advance", _id: 5 },
  { level: "Senior", _id: 6 }
];

const types = [
  { type: "Type", _id: 1 },
  { type: "Full-time", _id: 2 },
  { type: "Part-time", _id: 3 },
  { type: "Remote", _id: 4 },
  { type: "Contract", _id: 5 },
];


export function getCategories () {
    return categories;
}

export function getLevels () {
    return levels;
}

export function getTypes () {
    return types;
}