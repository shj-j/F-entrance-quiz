import React, { Component } from 'react';
import './App.scss';

class TeamList extends Component {
  changeTeamName = () => {
    alert("changeTeamName");
  }

  render() {
    const teamName = this.props.teamName;
    const nameList = this.props.nameList;
    return (
      <table className="team_table">
        <thead>
          <tr>
            <th contentEditable="true">{teamName}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{Object.keys(nameList).map(k => (<span>{k}. {nameList[k]}</span>))}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}
export default TeamList;
