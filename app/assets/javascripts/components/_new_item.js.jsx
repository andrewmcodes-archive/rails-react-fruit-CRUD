const NewFruit = (props) => {
  let formFields = {}

  return(
    <form className="flex mx-auto" onSubmit={ (e) => { props.handleFormSubmit(formFields.name.value, formFields.description.value); e.target.reset();}}>
      <input className="px-4 py-2 bg-white mb-4 mr-2 rounded" ref={input => formFields.name = input} placeholder='Enter the name of the item'/>
      <input className="px-4 py-2 bg-white mb-4 mr-2 rounded" ref={input => formFields.description = input} placeholder='Enter a description' />
      <button className="px-4 py-2 bg-green text-white rounded mb-4">Submit</button>
    </form>
  )
}
