import React, {useState} from 'react'
import {Data} from '../../data/data'
import './match.css'

const {data} = Data;

const randomTeam = (data, teamOne = [], teamTwo = []) => {
    // if(data) {}
    const cloneData = [...data];
    while (cloneData.length) {
        teamOne.push(cloneData.splice(Math.floor(Math.random() * cloneData.length), 1)[0]);
        teamTwo.push(cloneData.splice(Math.floor(Math.random() * cloneData.length), 1)[0]);
    }
    return [teamOne, teamTwo]
};

// console.log(randomTeam(data));
randomTeam(data);
let [teamOne, teamTwo] = randomTeam(data);

export const Match = () => {
    const [groupA, setGroupA] = useState(teamOne);
    const [groupB, setGroupB] = useState(teamTwo);
    const [win, setWin] = useState(null);


    const handleRound = ev => {
        let array = [], _array = [];

        if (groupA.length === 1 && groupB.length === 1) {
            let random = Math.round(Math.random());
            random ? setWin(groupA[0]) : setWin(groupB[0])

        } else {
            for (let i = 0; i < groupA.length; i += 2) {
                let t = Math.round(Math.random()) + i;
                array.push(groupA[t])
            }
            for (let i = 0; i < groupB.length; i += 2) {
                let t = Math.round(Math.random()) + i;
                _array.push(groupB[t])

            }
            setGroupA(array);
            setGroupB(_array);
            console.log(teamOne);
        }
    };

    return (
        <div className='screen'>
            <div className='topBur'>{data.map(team => <div className='team'>{team.team_name}</div>)}</div>
            {
                win ? <h1>{win.team_name}</h1> :
                    <>
                        <div className='gameBoard'>
                            <ul className='group_1'>
                                {groupA.map((item) => <li key={item.team_id}>{item.team_name}</li>)}
                            </ul>
                            <div className='border'/>
                            <ul className='grou qp_2'>
                                {groupB.map((item) => <li key={item.team_id}>{item.team_name}</li>)}
                            </ul>
                        </div>
                        <button className='button' onClick={handleRound}>Play</button>

                    </>
            }
            {/*{win && <h1>{win.team_name}</h1>}*/}
            {/*<button onClick={handleRound}>Play</button>*/}

            {/*<ul className='group_1'>*/}
            {/*    {groupA.map((item) => <li key={item.team_id}>{item.team_name}</li>)}*/}
            {/*</ul>*/}
            {/*<div className='border'/>*/}
            {/*<ul className='grou qp_2'>*/}
            {/*    {groupB.map((item) => <li key={item.team_id}>{item.team_name}</li>)}*/}
            {/*</ul>*/}
        </div>
    )

};