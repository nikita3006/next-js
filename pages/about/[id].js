import { useRouter } from "next/router";

function Developer (){

  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];
  const router = useRouter();
  const id = router.query.id;
  let developer = details.find((item)=>item.id== id);
  if(!developer){
    developer= 'developer doesnt exist'
  }
  console.log(developer,'in line 13');

    return (
      <div>
        <h1>I am -{developer.name} {developer.role}</h1>
      </div>
    )
  }
  
  export default Developer;