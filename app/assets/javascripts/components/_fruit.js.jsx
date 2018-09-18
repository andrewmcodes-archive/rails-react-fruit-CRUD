class Fruit extends React.Component {

  render() {
    return(
      <div className="rounded mb-4 bg-white text-center">
      <div className="px-4 py-2">
        <h1 className="mb-2">{this.props.fruit.name}</h1>
        <p className="mb-2">{this.props.fruit.description}</p>
      </div>
        <div className="rounded w-full bg-grey-light py-4">
          <button className="text-white bg-red px-4 py-2 rounded" onClick={() => this.props.handleDelete(this.props.fruit.id)}>Delete</button>
        </div>
      </div>
    )
  }
}
