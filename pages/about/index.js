import Link from "next/link";

function About (){
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <>
      <h1>Welcome to about page.</h1>
    </>
  );
  }
  
  export default About;