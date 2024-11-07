import React from 'react';
import '../Style/Demo.css';
import '../Style/Core.css';
import '../Style/Flight.css';
import '../Style/Signup.css';
import '../Style/theme.css';

const ClimateProject = (props:any) => {
    const onSelectProjectId = (val:any) => {
    props.onSelectProject(val)
    }
    return (
        <div>
            <div>
                <div className="ct_projrct_group container">
                    <h4 style={{ textAlign: "left" }}>Renewable</h4>
                    <div className="row">
                        {props.allProjectData && props.allProjectData.map ((item: any) => (
                            item.category_name === "Renewable" &&
                            <div className="col-md-4 col-sm-6 mb-4 order-0" onClick={() => onSelectProjectId(item)}>
                                <div className={props.selectValue == item.id ? "ct_project_item ct_border_green": "ct_project_item"}>
                                    <figure>
                                        <div className="ct_project_img">
                                            <img src={item.project_url} alt="Project" />
                                        </div>
                                        <figcaption>
                                            <h4>{item.project_name}</h4>
                                            <p>{item.location}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ct_projrct_group container">
                    <h4 style={{ textAlign: "left" }}>Energy Efficiency</h4>
                    <div className="row">
                        {props.allProjectData && props.allProjectData.map((item: any) => (
                            item.category_name === "Energy Efficiency" &&
                            <div className="col-md-4 col-sm-6 mb-4 order-0" onClick={() => props.onSelectProject(item)}>
                                <div className={props.selectValue == item.id ? "ct_project_item ct_border_green": "ct_project_item"}>
                                    <figure>
                                        <div className="ct_project_img">
                                            <img src={item.project_url} alt="Project" />
                                        </div>
                                        <figcaption>
                                            <h4>{item.project_name}</h4>
                                            <p>{item.location}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ct_projrct_group container">
                    <h4 style={{ textAlign: "left" }}>Community Projects</h4>
                    <div className="row">
                        {props.allProjectData && props.allProjectData.map((item: any) => (
                            item.category_name === "Community projects\t" &&
                            <div className="col-md-4 col-sm-6 mb-4 order-0" onClick={() => props.onSelectProject(item)}>
                                <div className={props.selectValue == item.id ? "ct_project_item ct_border_green": "ct_project_item"}>
                                    <figure>
                                        <div className="ct_project_img">
                                            <img src={item.project_url} alt="Project" />
                                        </div>
                                        <figcaption>
                                            <h4>{item.project_name}</h4>
                                            <p>{item.location}</p>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClimateProject;