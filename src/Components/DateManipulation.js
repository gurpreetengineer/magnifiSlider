import React, {useState} from 'react';

const DateManipulation = () => {
  const initial = 30;
  const months = useState({
    0: "",
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  });
  console.log("********")
  const [monthName] = useState(months[initial%12]);
  const [yearDependency] = useState(initial/12);
  const [year, setYear] = useState(2008);
  const [fullFormat, setFullFormat] = useState('');

  setYear(year + yearDependency)

  setFullFormat(`${monthName} ${year}`)

  return fullFormat;
}

export default DateManipulation;

