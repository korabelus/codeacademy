const getSleepHours = (day) => {
  switch (day) {
    case 'Monday':
      return 8;
      break;
    case 'Tuesday':
      return 4;
      break;
    case 'Wednesday':
      return 5;
      break;
    case 'Thursday':
      return 7;
      break;
    case 'Friday':
      return 8;
      break;
    case 'Saturday':
      return 9;
      break;
    case 'Sunday':
      return 6;
      break;
  }
};

const getActualSleepHours = () => {
  return (getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday'));
};

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  const result = Math.abs(actualSleepHours - idealSleepHours);
  if (actualSleepHours === idealSleepHours) {
    console.log('Perfect sleep!');
  } else if (actualSleepHours >idealSleepHours) {
    console.log('You sleep too much. The differense is ' + result);
  } else {
    console.log('You should have more rest. Your sleep debt is ' + result);
  }

};

calculateSleepDebt(); 
