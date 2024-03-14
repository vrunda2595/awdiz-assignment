
const people = [
    {name:'Alice',age:25},{name:'Bob',age:80},{name:'Charlie',age:22},{name:'David',age:28}
  ];
  let Total = 0;
  let length = people.length;
  people.forEach(({age})=> Total += age);
  console.log("the avearage is :"+Total/length);