class Fruit extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
    if(this.state.editable){
      let name = this.name.value
      let description = this.description.value
      let id = this.props.fruit.id
      let fruit = {id: id, name: name, description: description}
      this.props.handleUpdate(fruit)
    }
    this.setState({
      editable: !this.state.editable
    })
  }

  render() {
    let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.fruit.name}/>:<h1 className="mb-2">{this.props.fruit.name}</h1>
    let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.fruit.description}/>:<p>{this.props.fruit.description}</p>
    return(
      <div className="rounded mb-4 bg-white text-center">
      <div className="px-4 py-2">
        {name}
        {description}
      </div>
        <div className="rounded w-full bg-grey-light py-4">
          <button className="text-white bg-green px-4 py-2 rounded mr-4" onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
          <button className="text-white bg-red px-4 py-2 rounded" onClick={() => this.props.handleDelete(this.props.fruit.id)}>Delete</button>
        </div>
      </div>
    )
  }
}
