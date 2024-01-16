import { GetTopics } from "../../api_interface/Articleinterface";

function Topic (){
    let topicList = GetTopics();

    return <>    
        <ol className="list-group list-group-numbered">
            {topicList.map((topic) => (
                <li className="list-group-item d-flex justify-content-between align-items-start border border-0">
                    <div className="ms-2 me-auto">
                    <div className="fw-bold">{topic}</div>
                        Content for list ite
                    </div>
                    <span className="badge bg-primary rounded-pill">14</span>
                </li>
            ) )}
        </ol>            
    </>
}

export default Topic;