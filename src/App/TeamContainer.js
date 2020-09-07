import React, { Component } from 'react';
import './App.scss';
import TeamList from './TeamList';

const URL = "http://127.0.0.1:8080"
class TeamContainer extends Component {
  state = {
    numOfTeam: 6,
    teamList: [],
  }

  componentDidMount() {
    this.fetchTeamData();
  }
  
  fetchTeamData = ()=>{
    fetch(URL+'/teams',{
      method:'GET'
    }).then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        teamList: data
      })
    })
  }

  fetchGroupingData = ()=>{
    fetch(URL+'/grouping',{
      method:'POST'
    }).then(res => res.json())
    .then(data => {
      console.log("group:",data)
      this.setState({
        teamList: data
      })
    })
  }

  handleGrouping = () => {
    alert("handleGrouping");
    this.fetchGroupingData();
  }
  render() {
    return (
      <div className="team_div">
        <section className="team_head">
          <h2>分组列表</h2>
          <button onClick={this.handleGrouping}>分组学员</button>
        </section>
        <section className="team_content">
          {this.state.teamList.map(t => (<TeamList teamName={t.teamName} nameList={t.studentsList} />))}
        </section>
      </div>
    );
  }
}

export default TeamContainer;
