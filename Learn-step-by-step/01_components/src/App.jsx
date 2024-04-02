import dummyimg from './assets/doctor.jpeg'

function Profile() {
  return (
    <img
      src={dummyimg}
      alt="Doctor image"
    />
  );
}

//the above Profile function is called a componant which return image of doctor
//the below export will export another componant which returns a profile componant to Main.jsx 

export default function Gallery() {
  return (
    <section>
      <h1>Doctors</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
