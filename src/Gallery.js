export function Profile() {
    return <img src="https://cdnstatic.rg.ru/uploads/images/168/99/86/01.jpeg" alt="audi"/>;
  }

  export default function Gallery(){
    return (
      <section>
        <h1>Топчик Машины</h1>
        <Profile/>
        <Profile/>
        <Profile/>
      </section>
    );
  }