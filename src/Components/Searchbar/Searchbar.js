import React, { useState, useContext, useRef, useEffect } from 'react';
import CharacterContext from "../../utils/CharacterContext";
import './style.css';

function Searchbar() {
    //create a state on this component that tracks which order the results should display in
    const [alphaOrder, setAlphaOrder] = useState("AtoZ");
    //destructure useContext(CharacterContext) to get access to the filterResults() function
    const { filterResults } = useContext(CharacterContext);
    //create references to be used by all of the input fields
    const animeFilter = useRef();
    const roleFilter = useRef();
    const bdayFilter = useRef();
    const affilFilter = useRef();
    const searchCat = useRef();
    const searchTerm = useRef();
    //create a callback function that calls filterResults. to be used in the onChange attribute for all of the various input fields
    const onChangeCb = (e) => {
        if (e) e.preventDefault();
        filterResults(animeFilter.current.value, roleFilter.current.value, bdayFilter.current.value, affilFilter.current.value, searchCat.current.value, searchTerm.current.value.trim(), alphaOrder);
    }
    //call use effect to call the onChangeCb everytime the alphabetical order of the results is changed
    useEffect(onChangeCb, [alphaOrder]);
    return (
        <div id="searchForm">
            <form>
                <div className="row">
                    <div className="col-md-2">
                        {/*This column contains the select element for filtering by Anime*/}
                        <label htmlFor="anime">Filter by "Department" (Anime):</label>
                        <select className="form-control" id="anime" name="anime" ref={animeFilter} onChange={onChangeCb}>
                            <option value="All" selected>All</option>
                            <option value="Mob Psycho 100">Mob Psycho 100</option>
                            <option value="One Punch Man">One Punch Man</option>
                            <option value="Yu Yu Hakusho">Yu Yu Hakusho</option>
                            <option value="Jojo's Bizarre Adventures">Jojo's Bizarre Adventures</option>
                            <option value="Lupin III">Lupin III</option>
                            <option value="The Disastrous Life of Saiki K.">The Disastrous Life of Saiki K.</option>
                            <option value="Ghost in the Shell">Ghost in the Shell</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*This column contains the select element for filtering by Role*/}
                        <label htmlFor="role">Filter by Role:</label>
                        <select className="form-control" id="role" name="role" ref={roleFilter} onChange={onChangeCb}>
                            <option value="All" selected>All</option>
                            <option value="Psychic">Psychic</option>
                            <option value="Student">Student</option>
                            <option value="Supervillain">Supervillain</option>
                            <option value="Boss">Boss</option>
                            <option value="Superhero">Superhero</option>
                            <option value="Stand-user">Stand-user</option>
                            <option value="Detective">Detective</option>
                            <option value="Demon">Demon</option>
                            <option value="Plant-user">Plant-user</option>
                            <option value="Thief">Thief</option>
                            <option value="Criminal">Criminal</option>
                            <option value="Sensei">Sensei</option>
                            <option value="Martial Artist">Martial Artist</option>
                            <option value="Cyborg">Cyborg</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*This column contains the select element for filtering by Birthday*/}
                        <label htmlFor="birthday">Filter by Birthday:</label>
                        <select className="form-control" id="birthday" name="birthday" ref={bdayFilter} onChange={onChangeCb}>
                            <option value="All" selected>All</option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                            <option value="Unknown">Unknown</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*This column contains the select element for filtering by Affiliation*/}
                        <label htmlFor="affiliation">Filter by "Branch" (Affiliation):</label>
                        <select className="form-control" id="affiliation" name="affiliation" ref={affilFilter} onChange={onChangeCb}>
                            <option value="All" selected>All</option>
                            <option value="Good">Good</option>
                            <option value="Evil">Evil</option>
                            <option value="Neutral">Neutral</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*This column contains the select element for which category to search*/}
                        <label htmlFor="searchBy">Search By:</label>
                        <select className="form-control" id="searchBy" name="searchBy" ref={searchCat} onChange={onChangeCb}>
                            <option value="Name" selected>Name</option>
                            <option value="Roles">Role</option>
                            <option value="Likes">Likes</option>
                            <option value="Dislikes">Dislikes</option>
                        </select>
                    </div>
                    <div className="col-md-2">
                        {/*This column contains the input element for searches*/}
                        <label htmlFor="search">Search Term:</label>
                        <input className="form-control" type="search" id="searchBox" name="searchBox" ref={searchTerm} />
                        <button className="btn btn-success" onClick={onChangeCb}>Search!</button>
                    </div>
                </div>
                <div>
                    {/*Radio buttons that change the alphaOrder state*/}
                    <input type="radio" value="AtoZ" id="AtoZ" name="alphaOrder" onClick={() => { setAlphaOrder("AtoZ") }} /><label htmlFor="AtoZ">A to Z (by Last Name)</label>
                    <br />
                    <input type="radio" value="ZtoA" id="ZtoA" name="alphaOrder" onClick={() => { setAlphaOrder("ZtoA") }} /><label htmlFor="ZtoA">Z to A (by Last Name)</label>
                </div>
            </form>
        </div>
    )
}

export default Searchbar;