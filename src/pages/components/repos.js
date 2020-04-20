import React, { useEffect, useState } from 'react'
//import repos from '../data/repo'
import Repo from './repo'

export default () => {
    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);
    useEffect(()=>{
        let data = sessionStorage.getItem("repos");
        let myRepos;
        if(data){
            myRepos = JSON.parse(data);
            setReposCount(myRepos.length);
            myRepos = myRepos.slice(1,13);
            return setRepos(myRepos);
        }
        
        async function fetchrespon(){
            const response = await fetch("https://api.github.com/users/alejocruzrcc/repos");
            myRepos = await response.json();
            setReposCount(myRepos.length);
            sessionStorage.setItem("repos", JSON.stringify(myRepos));
            setRepos(myRepos);
        }
        fetchrespon();
    }, [])
    return (
        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold">Mi trabajo en Open Source</h2>
                <p>Colaboración y Contribución</p>
            </header>
            <ul className="repos-list">
                {
                    repos.map((repo)=>{
                        return <Repo repo={repo} key={repo.id} />
                    }
                    )
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/alejocruzrcc" className="btn" target="_blank" rel="noopener noreferrer">
                    Ver más en Github ({reposCount})
                </a>
            </div>
        </div>
    )
};