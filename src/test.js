const initialData = {
  previousLifts: {
    squat: [
      { x: "2021-06-25", y: 61 },
      { x: "2021-06-27", y: 85 },
      { x: "2021-06-28", y: 95 },
      { x: "2021-07-01", y: 100 },
      { x: "2021-07-02", y: 115 },
    ],
    deadlift: [
      { x: "2021-06-25", y: 80 },
      { x: "2021-06-27", y: 95 },
      { x: "2021-06-28", y: 110 },
      { x: "2021-07-01", y: 120 },
      { x: "2021-07-02", y: 130 },
    ],
    bench: [
      { x: "2021-06-25", y: 55 },
      { x: "2021-06-27", y: 65 },
      { x: "2021-06-28", y: 70 },
      { x: "2021-07-01", y: 78.5 },
      { x: "2021-07-02", y: 82.5 },
    ],
    overheadpress: [
      { x: "2021-06-25", y: 20 },
      { x: "2021-06-27", y: 22 },
      { x: "2021-06-28", y: 28 },
      { x: "2021-07-01", y: 29 },
      { x: "2021-07-02", y: 31 },
    ],
  },
  currentMaxes: {
    squat: 115,
    deadlift: 130,
    bench: 82.5,
    overheadpress: 31,
  },
  goals: {
    squat: 120,
    deadlift: 140,
    bench: 100,
    overheadpress: 60,
  },
};

const checkHighestValue = lift => {
  let array = [];
  for (let i = 0; i < initialData.previousLifts[lift].length; i++) {
    array.push(initialData.previousLifts[lift][i].y);
  }

  const sortedArray = array.sort((a, b) => b - a);
  const newItem = sortedArray[0];
  const previousMax = initialData.currentMaxes[lift];
  
  if (newItem > previousMax) {
    initialData.currentMaxes[lift] = newItem;
  }
};

checkHighestValue("overheadpress");
