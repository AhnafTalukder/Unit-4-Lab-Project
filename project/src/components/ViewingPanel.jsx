import react from "react"
import { useState } from 'react'

import "./ViewingPanel.css"

const ViewingPanel = ({unBanCommand, banCommand, submit, image, tags, banned}) =>{

 
    const renderTags = tags.map(keyword => 
        <li><a onClick={banCommand}>{keyword}</a></li>
      )

    const renderBannedTags = banned.map(ban => 
        <li><a onClick={unBanCommand}>{ban}</a></li>
    )


 

    return (
        <>
            <div className="view-panel">
                <div className="art-container">
                    <div className="art-image">
                        <img src={image.primaryimageurl} alt="" />
                    </div>
                    <div className="art-description">
                        <h1>{image.title}</h1>
                        <div className="art-keywords">
                            <ul>
                                {renderTags}
                            </ul>
                        </div>

                        <p>{image.commentary}</p>
                        <button className="btn" onClick={submit}>Inspire Me</button>
                         
                       
                    </div>

                    

                </div>

                

            </div>
            
            <div className="banned-keywords">
                        <ul>
                            {renderBannedTags}
                         
                        </ul>

                </div>
         
       
        </>
    )

}

export default ViewingPanel;