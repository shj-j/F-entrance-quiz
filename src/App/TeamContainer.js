import React, { Component } from 'react';
import './App.scss';
import TeamList from './TeamList';

class TeamContainer extends Component {
  state = {
    numOfTeam: 6,
    teamList: {
      "team1": {
        1: 'name1',
        2: 'name2',
        3: 'name3'
      }, "team2": {
        1: 'name1',
        2: 'name2',
        3: 'name3'
      },
    },
  }

  handleGrouping = () => {
    alert("handleGrouping");
  }
  render() {
    return (
      <div className="team_div">
        <section className="team_head">
          <h2>分组列表</h2>
          <button onClick={this.handleGrouping}>分组学员</button>
        </section>
        <section className="team_content">
          {Object.keys(this.state.teamList).map(teamName => (<TeamList teamName={teamName} nameList={this.state.teamList.team1} />))}
        </section>
      </div>
    );
  }
}

export default TeamContainer;
