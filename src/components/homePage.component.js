import React from 'react';

export default class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>Find Your Path</h1>
        <p>
        The goal of this project is to create several web-based tools for PathFinder 2nd Edition. The planned tools are listed below.
        </p>
        <h2>Monster Encounter Builder</h2>
        <p>
        A tool to add monsters to an encounter from a list.
        Will automatically generate a suitable encounter based on desired difficulty rating and party level.
        ETA March 2020.
        </p>
        <h2>Character Sheet</h2>
        <p>
        A tool to build a character like the PathBuilder App for Android devices. ETA End of 2020?
        </p>
        <p>
        My goal is to eventually make this its own website where you can log in, save encounters, share encounters, save characters, and share characters.
        If there are any other suggestions, feel free to open an issue and I'll review the idea.
        </p>
      </div>
    )
  }
}