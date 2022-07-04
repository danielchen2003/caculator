import React, { useState } from "react"

export default function Caculator() {
  let [prviousData, setPrivousData] = useState()
  let [curData, setCurData] = useState()
  let [result, setResult] = useState()
  let [operation, setOperation] = useState()

  const compute = (data, e) => {
    // e.preventDefault()
    // console.log(data)
    // console.log(e)
    const newResult = eval(Number(prviousData) + operation + Number(curData))
    console.log(newResult)
    setResult(newResult)
  }
  // console.log(eval("1*8"))

  const handleOnChange = (event) => {
    event.preventDefault()
    // console.log(event.target.value)
    setPrivousData(event.target.value)
    // event.target.value = ""
  }

  const handleOnChange2 = (event) => {
    event.preventDefault()
    // console.log(event.target.value)
    setCurData(event.target.value)
    // event.target.value = ""
  }
  const handleOnChange3 = (event) => {
    event.preventDefault()
    // console.log(event.target.value)
    setOperation(event.target.value)
    // event.target.value = ""
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="container">
      <h1>Add with React!</h1>

      <form className="add" onSubmit={handleOnSubmit}>
        <div className="caculation">
          <input
            onChange={handleOnChange}
            type="number"
            name="value1"
            placeholder="please input a number here"
          />
          {/* <p>operation</p> */}

          <input
            onChange={handleOnChange3}
            type="text"
            name="value3"
            placeholder="please input a operator +-*/ here"
          />

          <input
            onChange={handleOnChange2}
            type="number"
            name="value2"
            placeholder="please input a number here"
          />

          <button className="compute" onClick={(event) => compute()}>
            =
          </button>
          <div className="result">
            <h2>{result}</h2>
          </div>
        </div>
      </form>
    </div>
  )
}

// when we need to toggle, we will need to use a boolean value;
// we need to change the ediable value
// function App() {
//   const [sale, setSale] = useState("A Hammer!")
//   const [editable, setEditable] = useState(true)

//   // function face eveytime change
//   const handleItemCurrentOnSaleChange = (event) => {
//     const itemOnsle = event.target.value
//     setSale(itemOnsle)
//   }
//   const toggleEditSaleItem = (event) => setEditable(!editable)

//   return (
//     <div className="App">
//       <HomePage
//         editable={editable}
//         saleItem={sale}
//         toggleEditSaleItem={toggleEditSaleItem}
//         handleItemCurrentOnSaleChange={handleItemCurrentOnSaleChange}
//       />
//     </div>
//   )
// }

// export default App
{
  /* <input
              type="text"
              value={props.saleItem}
              onChange={props.handleItemCurrentOnSaleChange}
            ></input> */
}
