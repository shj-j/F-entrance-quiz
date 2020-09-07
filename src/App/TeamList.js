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
      <div>
        {nameList !== null &&
          <table className="team_table">
            <thead>
              <tr>
                <th contentEditable="true">{teamName}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{Object.keys(nameList).map(k => (
                    <span>{nameList[k].id}. {nameList[k].name}</span>
                  ))}</td>
              </tr>
            </tbody>
          </table>
        }
      </div>
    );
  }
}
export default TeamList;
