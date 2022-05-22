interface Project {
  id: number;
  name: string;
  probability: number;
}

const projects: Project[] = [
  { id: 1, name: "Option 1", probability: 0.3 },
  { id: 2, name: "Option 2", probability: 0.5 },
  { id: 3, name: "Option 3", probability: 0.15 },
  { id: 4, name: "Option 4", probability: 0.05 },
];

console.log(returnRandomItemByProbability(projects));

function returnRandomItemByProbability(projects: Project[]) {
  const summary = {
    ID1: 0,
    ID2: 0,
    ID3: 0,
    ID4: 0,
  };
  for (let i = 0; i < 500; i++) {
    const randomNumber = Math.random();
    const loggedItemId = logRandomItem(projects, randomNumber);
    summary[`ID${loggedItemId}`]++;
  }

  console.log("Finished the return of random items!");
  return summary;
}

function logRandomItem(projects: Project[], randomNumber: number) {
  if (randomNumber > projects[1].probability) {
    console.log(projects[1].name);
    return projects[1].id;
  } else if (randomNumber > projects[0].probability) {
    console.log(projects[0].name);
    return projects[0].id;
  } else if (randomNumber > projects[2].probability) {
    console.log(projects[2].name);
    return projects[2].id;
  } else {
    console.log(projects[3].name);
    return projects[3].id;
  }
}
