import dummyImg from './assets/doctor.jpeg'
//above import key word will fetch the doctor image from assets as dummyImg 
//then we can use this dummyImg anywhere i this file

function Profile() {
    return (
      <img
        src={dummyImg}
        alt="Doctor image"
      />
    );
  }
  
export default function Gallery() {
    return (
      <section>
        <h1>Amazing Doctor</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
}

//export default will export the given componant , so that one can import it and to use it
// if a file is exported then only one can import that file
  