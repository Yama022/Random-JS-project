// == Import
import './styles.scss';



// const handleChangeValue = (e) => {
//   const inputOnChange = document.getElementById('inputNumber');
// }

// const upValue = (e) => {
//   const inputUp = document.getElementById('inputNumber');
//   inputUp.value = parseInt(inputUp.value) + 1;
//   handleChangeValue()
// }

// const downValue = () => {
//   const inputDown = document.getElementById('inputNumber');
//   inputDown.value = parseInt(inputDown.value) - 1;
//   handleChangeValue()
// }

const handleOnSubmit = (e) => {
  e.preventDefault();
  // const inputOnSubmit = document.getElementById('inputNumber');
  // console.log(inputOnSubmit.value);

  const lastname = document.getElementById('lastname').value;
  const firstname = document.getElementById('firstname').value;
  const fullname = `${lastname} ${firstname}`;
  const age = document.getElementById('age').value;
  const valeur = document.querySelector('input[name=sexe]:checked').value;
  const comment = document.getElementById('comment').value;
  console.log(fullname, `${age}ans`, valeur, comment);
}


// == Composant
const App = () => (


  <div className="app">
    <div className='testFormJs'>
      <form method="GET" onSubmit={handleOnSubmit} className="testFormJs__form">

        {/* <div className='testFormJs__form__testValue'>
          <button onClick={upValue}>
            +
          </button>

          <input type="number" value="0" id="inputNumber" name="valueNumber" onChange={handleChangeValue} />

          <button onClick={downValue}>
            -
          </button>
        </div> */}


        <input type="text" placeholder='Nom' id="lastname" name="lastname" />
        <input type="text" placeholder='Prénom' id="firstname" name="firstname"/>
        <input type="number" placeholder='Age' id="age" name="age"/>

        <div>
          <input type="radio" id="homme" name="sexe" value="homme" checked/>
          <label for="homme">Homme</label>
          </div>

        <div>
          <input type="radio" id="femme" name="sexe" value="femme" />
          <label for="femme">Femme</label>
        </div>

        <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Votre message"></textarea>
        <button type="submit">
          Envoyer
        </button>

      </form>
    </div>
  </div>
);

// == Export
export default App;
