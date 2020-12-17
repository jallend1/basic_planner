import React from 'react'

export default function ProjectDetails(props) {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi repellendus hic voluptatibus quis eligendi illum sequi qui ratione quibusdam autem inventore, aliquid porro veritatis rerum tempore, ducimus eaque? Fugiat, earum.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by JDA</div>
                    <div>December 17th!</div>
                </div>
            </div>
        </div>
    )
}
