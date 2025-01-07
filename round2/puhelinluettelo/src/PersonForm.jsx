/* eslint-disable react/prop-types */



const PersonForm = ({nameChange, numChange, addContact}) => {
return (
  <form>
        <div>
          name: <input onChange={nameChange}/>
        </div>
        <div>
        number: <input onChange={numChange}/>
        </div>
        <div>
          <button type="submit" onClick={addContact}>add</button>
        </div>
      </form>
)
}

export default PersonForm;