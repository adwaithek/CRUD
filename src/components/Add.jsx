import React, { useRef, useState } from 'react'
import './add.css'

function CRUD() {






    
    const list = [
        {
            id: 1, 
            name: "john",
            price: "luk",
            semester:'3rd',
            gender:'male'
        },
        {
            id: 2, 
            name: "sam",

            price: "zui",
            semester:'3rd',
            gender:'male'
        },
    ]
    const [lists, setList] = useState(list)
    const [updateState, setUpdateState] = useState(-1)
    return(
        <div className='crud'>
            <div>
            <AddList setList = {setList }/>
            <form onSubmit={handleSubmit}>
            <table>
                {
                    lists.map((current) => (
                        updateState === current.id ? <EditList current={current} lists={lists} setList={setList}/> :
                        <tr>
                            <td>{current.name}</td>
                            <td>{current.price}</td>
                            <td>{current.semester}</td>
                            <td>{current.gender}</td>
                            <td>
                                <button className='edit' onClick={() => handleEdit(current.id)}>Edit</button>
                                <button className='delete' type='button' onClick={() => handleDelete(current.id)}>Delete</button>
                            </td>
                        </tr>
                    ))
                }
            </table>
            </form>
            </div>
        </div>
    )

    function handleEdit(id) {
        setUpdateState(id)
    }
    function handleDelete(id) {
        const newlist = lists.filter((li) => li.id !== id)
        setList(newlist)
    }
    function handleSubmit(event) {
        event.preventDefault()
        const name = event.target.elements.name.value
        const price = event.target.elements.price.value
        const semester=event.target.elements.semester.value
        // const gender=event.target.elements.gender.value
        const newlist = lists.map((li) => (
            li.id === updateState ? {...li, name:name, price: price,semester:semester,} : li
        ))

        setList(newlist)
        setUpdateState(-1)
    }
}

function EditList({current, lists, setList}) {
    function handInputname(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, name :value} : li
        ))

        setList(newlist)
    }
    function handInputprice(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, price :value} : li
        ))

        setList(newlist)
    }
    function handInputsemester(event) {
        const value = event.target.value;
        const newlist = lists.map((li) => (
            li.id === current.id ? {...li, semester :value} : li
        ))

        setList(newlist)
    }
    // function handInputgender(event) {
    //     const value = event.target.value;
    //     const newlist = lists.map((li) => (
    //         li.id === current.id ? {...li, gender :value} : li
    //     ))

    //     setList(newlist)
    // }
    return(
        <tr>
            <td><input type="text" onChange={handInputname} name='name' value={current.name}/></td>
            <td><input type="text" onChange={handInputprice} name='price' value={current.price}/></td>
            <td><input type="text" onChange={handInputsemester} name='semester' value={current.semester}/></td>
            <td><button type='submit'>Update</button></td>
        </tr>
    )
}

function AddList({setList}) {


    const [hobbies, setHobbies] = useState([]);

    const handleHobbyChange = (event) => {
      const hobby = event.target.name;
      const isChecked = event.target.checked;
      if (isChecked) {
        setHobbies([...hobbies, hobby]);
      } else {
        setHobbies(hobbies.filter((h) => h !== hobby));
      }
    };

    const [gender, setGender] = useState('');

    const handleGenderChange = (event) => {
      setGender(event.target.value);
    }


    const nameRef = useRef()
    const priceRef = useRef()
    const semesterRef=useRef()
    const genderRef=useRef()

    function handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const price = event.target.elements.price.value;
        const semester = event.target.elements.semester.value;
        const gender = event.target.elements.gender.value;
        const newlist = {
            id: 3,
            name,
            price,
            semester,
            gender
        }
        setList((prevList)=> {
            return prevList.concat(newlist)
        })
        nameRef.current.value = ""
        priceRef.current.value = ""
        semesterRef.current.value=""
        genderRef.current.value=""
    }
    return(
        <form className='addForm' onSubmit={handleSubmit}>
            <input  className='inputform' type="text" name="name" placeholder="Enter Name" ref={nameRef}/><br />
            <input className='inputform' type="text" name="price" placeholder="Enter last name" ref={priceRef}/><br />
            <input className='inputform' type="text" name='semester' placeholder='Enter you semester'   ref={semesterRef} /><br />
            

<br /><br />

           <div className='gender'>
           <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={gender === 'male'}
          onChange={handleGenderChange}
          ref={genderRef}
        />
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={gender === 'female'}
          onChange={handleGenderChange}
          ref={genderRef}
        />
        Female
      </label>
            </div> 
            <br />
            <br />
            {/* <label>
        <input
          type="checkbox"
          name="reading"
          checked={hobbies.includes('reading')}
          onChange={handleHobbyChange}
        />
        Reading
      </label>
      <label>
        <input
          type="checkbox"
          name="coding"
          checked={hobbies.includes('coding')}
          onChange={handleHobbyChange}
          
        />
        Coding
      </label>
      <label>
        <input
          type="checkbox"
          name="gaming"
          checked={hobbies.includes('gaming')}
          onChange={handleHobbyChange}
        />
        Gaming
      </label> */}
      <br />
           
            <button className='inputform' type="submit">Add</button>
        </form>
    )
}

export default CRUD;