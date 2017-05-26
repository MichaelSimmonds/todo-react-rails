var Task = React.createClass({
  getInitialState: function(){
    return {edit: false};
  },

  handleToggle: function(e){
    e.preventDefault();
    this.setState({edit: !this.state.edit})
  },

  handleDelete: function(e){
    $.ajax({
      method: "DELETE",
      url: '/tasks/'+this.props.task.id,
      dataType: 'JSON',
      success: function(){
        this.props.handleDeleteTask(this.props.task);
      }.bind(this)
    });
  },

  handleEdit: function(e) {
    e.preventDefault();
    var data = { title: this.refs.title.value,
                 due_date: this.refs.due_date.value,
                 description: this.refs.description.value }
    $.ajax({
      method: 'PUT',
      url: '/tasks/' + this.props.task.id,
      dataType: 'JSON',
      data: { task: data },
      success: function(data) {
        this.setState({ edit: false });
        this.props.handleEditTask(this.props.task, data);
      }.bind(this)
    });
  },

  taskRow: function(){
    return(
      <div className="todo-card">
        <div className="text-container">
          <div>
            <span className="title">{this.props.task.title}</span>
          </div>
          <div>
            <span className="description">{this.props.task.description}</span>
          </div>
        </div>
        <div className="date-button-container">
          <span className="date">{this.props.task.due_date}</span>
          <div className="buttons">
            <a className="btn btn-danger" onClick={this.handleDelete}><i className="fa fa-trash" aria-hidden="true"></i>
            </a>
            <a className="btn btn-primary" onClick={this.handleToggle}><i className="fa fa-pencil" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    );
  },

  taskForm: function() {
  return(

    <div className="todo-card">
      <div className="text-container">
        <div>
          <input className='form-control' type='text'
            defaultValue={this.props.task.title} ref='title'>
          </input>
        </div>
        <div>
          <textarea className='form-control' type='text'
                 defaultValue={this.props.task.description} ref='description'>
          </textarea>
        </div>
      </div>
      <div className="date-button-container">
        <input className='form-control' type='date'
               defaultValue={this.props.task.due_date} ref='due_date'>
        </input>
        <div className="buttons">
          <a className="btn btn-danger" onClick={this.handleToggle}><i className="fa fa-ban" aria-hidden="true"></i>
          </a>
          <a className="btn btn-primary" onClick={this.handleEdit}><i className="fa fa-floppy-o" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  );
},



  render: function(){
    if (this.state.edit==true){
      return this.taskForm()
    }
    else {
      return this.taskRow()
    }
  }

})
