import React, { useState } from 'react';
import './style.css';

function Searchbar() {
    return (
        <div id="searchForm">
            <form>
                <div className="row">
                    <div className="col-md-2">
                        <label htmlFor="anime">Filter by "Department" (Anime):</label>
                        <select className="form-control" id="anime" name="anime">
                            <option>Mob Psycho 100</option>
                            <option>One Punch Man</option>
                            <option>Yu Yu Hakusho</option>
                            <option>Jojo's Bizarre Adventures</option>
                            <option>Lupin III</option>
                            <option>The Disastrous Life of Saiki K.</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="role">Filter by Role:</label>
                        <select className="form-control" id="role" name="role">
                            <option>All</option>
                            <option>Psychic</option>
                            <option>Student</option>
                            <option>Supervillain</option>
                            <option>Boss</option>
                            <option>Superhero</option>
                            <option>Stand-user</option>
                            <option>Detective</option>
                            <option>Demon</option>
                            <option>King</option>
                            <option>Plant-user</option>
                            <option>Thief</option>
                            <option>Criminal</option>
                            <option>Sensei</option>
                            <option>Martial Artist</option>
                            <option>Cyborg</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="birthday">Filter by birthday:</label>
                        <select className="form-control" id="birthday" name="birthday">
                            <option>All</option>
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                            <option>April</option>
                            <option>May</option>
                            <option>June</option>
                            <option>July</option>
                            <option>August</option>
                            <option>September</option>
                            <option>October</option>
                            <option>November</option>
                            <option>December</option>
                            <option>Unknown</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="affiliation">Filter by Affiliation:</label>
                        <select className="form-control" id="affiliation" name="affiliation">
                            <option>Good</option>
                            <option>Evil</option>
                            <option>Neutral</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <label htmlFor="searchBy">Search By:</label>
                        <select className="form-control" id="searchBy" name="searchBy">
                            <option>Name</option>
                            <option>Role</option>
                            <option>Likes</option>
                            <option>Dislikes</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        <input className="form-control" type="search" id="searchBox" name="searchBox" />
                        <button className="btn btn-secondary">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Searchbar;