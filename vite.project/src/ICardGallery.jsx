import React from 'react'
import ICard from './ICard'
import flower from './assets/logo.png'

function ICardGallery() {
  const student = [
    {
      roll: "12345",
      name: "Yash",
      course: "B.Tech",
      branch: "Computer Science and engineering ",
      picture: flower,
    },
    {
      roll: "659830",
      name: "veema",
      course: "B.Tech",
      branch: "Computer Science and engineering ",
      picture: flower,
    },
    {
      roll: "12345",
      name: "Yash Pratap",
      course: "B.Tech",
      branch: "Computer Science and engineering ",
      picture: flower,
    },
    {
      roll: "123",
      name: "Vishal",
      course: "B.Tech",
      branch: "Computer Science and engineering ",
      picture: flower,
    },
    {
      roll: "12345",
      name: "Vishu",
      course: "B.Tech",
      branch: "Computer Science and engineering ",
      picture: flower,
    },
  ];
  
  
    return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly', border: '2px solid white' }}>
      {/* <ICard roll="12345" name="Tanishq" branch="Computer Science and Engineering" picture={flower}/>
      <ICard
        roll="12345"
        name="Tanishq"
        course="B.Tech"
        branch="Computer Science and Engineering"
        college="Abes engineering college"
        picture={flower}
      />
      <ICard
        roll="12346"
        name="John Doe"
        course="B.Tech"
        branch="Computer Science and Engineering"
        college="Abes engineering college"
        picture={flower}
      /> */}
      {/* <ICard data={student[1]}/> */}
      {
        student.map((ele)=>(
<ICard key={`${ele.roll}-${ele.name}`} data={ele}/>
        ))
      }
     
    </div>
  );
}

export default ICardGallery