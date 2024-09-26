import { Col, Row, Tag } from '@douyinfe/semi-ui';
import { FaGithub } from 'react-icons/fa';
import { FaBilibili } from "react-icons/fa6";

interface ContributeBoxPops {
    learnmore: string;
}

const contributeList = [
    {
        job: ["code", "sponser"],
        name: "爱走位的KN",
        icon: "https://avatars.githubusercontent.com/u/83012768?v=4",
        github: "https://github.com/ShrLeeKNsword/",
        bili: "https://space.bilibili.com/403314450",
    },
    {
        job: ["code", "translation"],
        name: "MiekoHikari",
        icon: "https://avatars.githubusercontent.com/u/77004524?v=4",
        github: "https://github.com/MiekoHikari/",
        bili: "",
    },
]

const ContributeBox = (props: ContributeBoxPops) => {
    return <div style={{ maxHeight: "800px", width: "400px", paddingTop: "5px", paddingBottom: "5px" }}>
        <div style={{ height: "100%", width: "100%", overflowY: "scroll" }}>
            {contributeList.map((child) => {
                return <div style={{ height: "60px", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", margin: "5px" }}>
                    <Row style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
                        <Col span={1}></Col>
                        <Col span={5}><img src={child.icon} style={{ height: "50px", borderRadius: "50%", marginRight: "10px" }}></img></Col>
                        <Col span={12} style={{ textAlign: "left", fontSize: "15px", fontWeight: "bold" }}>
                            <div style={{ width: "100%" }}>{child.name}</div>
                            {child.job.map((childchild) => {
                                return <Tag size="small" color='light-blue' style={{ marginRight: "5px" }}>{childchild}</Tag>
                            }
                            )
                            }
                        </Col>
                        <Col span={6} style={{ textAlign: "left" }}>
                            {child.github != "" ? <a href={child.github} target='_blank' style={{ margin: "5px" }}><FaGithub /></a> : <></>}
                            {child.bili != "" ? <a href={child.bili} target='_blank' style={{ margin: "5px" }}><FaBilibili /></a> : <></>}
                        </Col>
                    </Row>
                </div>
            })}
        </div>
        <div style={{ fontSize: "15px", fontWeight: "bold", textAlign: 'center', display: "flex", alignItems: "center", justifyContent: "center", height: "30px", margin: "5px" }}>{props.learnmore}</div>
    </div>
}

export default ContributeBox;