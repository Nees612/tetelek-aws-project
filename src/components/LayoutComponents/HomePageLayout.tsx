import StickySidebar from "./StickySidebar";
import ArticleCardList from "../ContentComponents/ArticleCardList";
import Topic from "../ContentComponents/Topic";


function HomePageLayout (){
    
    return <>    
        <div className="row w-100">
            <div className="col-3"><StickySidebar SidebarContent={<Topic/>}/></div>                         
            <div className="col-8">{<ArticleCardList/>}</div>        
        </div>                 
    </>
}

export default HomePageLayout;