const NewFruit = (props) => {
  let formFields = {}

  return(
    <form className="flex flex-col w-1/4" onSubmit={ (e) => { props.handleFormSubmit(formFields.name.value, formFields.description.value); e.target.reset();}}>
      <input className="px-4 py-2 bg-white mb-4 rounded" ref={input => formFields.name = input} placeholder='Enter the name of the item'/>
      <input className="px-4 py-2 bg-white mb-4 rounded" ref={input => formFields.description = input} placeholder='Enter a description' />
      <button className="justify-end">Submit</button>
    </form>
  )
}
