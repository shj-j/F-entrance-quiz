import React, { Component } from 'react';
import './App.scss';

const URL = "http://127.0.0.1:8080"
class StudentList extends Component {
  state = {
    studentList: [],
  }
  fetchStudentList = () => {
    fetch(URL + '/students', {
      method: 'GET'
    }).then(res => res.json())
      .then(data => {
        console.log("student:", data)
        this.setState({
          studentList: data
        })
      })
  }
  componentDidMount() {
    this.fetchStudentList();
  }
  render() {
    return (
      <div data-testid="app" className="App">
        <section className="team_head">
          <h2>学员列表</h2>
        </section>
        <table className="student_table">
          <tbody>
            <tr>
              {this.state.studentList.map(s => 
                <span>{s.id}. {s.name}</span>)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;