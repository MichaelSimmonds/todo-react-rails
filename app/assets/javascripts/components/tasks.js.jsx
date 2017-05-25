var Tasks = React.createClass({

  getInitialState: function() {
    return { tasks: this.props.data };
  },

  getDefaultProps: function() {
    return { tasks: [] };
  },

  addTask: function(task) {
    var tasks = React.addons.update(this.state.tasks, { $push: [task] })
    this.setState({ tasks: tasks });
  },

  deleteTask: function(task) {
    var index = this.state.tasks.indexOf(task);
    var tasks = React.addons.update(this.state.tasks,
                                  { $splice: [[index, 1]] });
    this.replaceState({ tasks: tasks});
  },

  updateTask: function(task, data){
    var index = this.state.tasks.indexOf(task);
    var tasks = React.addons.update(this.state.tasks,
                                      { $splice: [[index, 1, data]] });  this.replaceState({tasks:tasks});
  },


  render: function(){
    return (
      <div className="tasks">
          <h2>Tasks for today</h2>
        <TaskForm handleNewTask={this.addTask} />
        <div>
          {this.state.tasks.map(function(task){
            return <Task key={task.id} task={task} handleDeleteTask={this.deleteTask} handleEditTask={this.updateTask} />
          }.bind(this))}
        </div>
      </div>

    );
  }
});
