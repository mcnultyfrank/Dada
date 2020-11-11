import React, { useState, useEffect } from "react";
import { Router } from "@reach/router";
import Categories from "../../components/Categories";
import SignUp from "../../components/SignUp/register";
import ActivityIdeas from "../../components/ActivityIdeas";
import BookSmarts from "../../components/BookSmarts/BookSmarts";
import BookInfo from "../../components/BookInfo";
import AddChick from "../../components/AddChick";
import SOS from "../../components/SOS";
import SplashScreen from "../../components/SplashScreen";
import Tantrums from "../../components/Tantrums"
import Aggression from "../../components/Aggression/AgressionMain";
import Screaming from "../../components/Screaming/ScreamingMain";
import Whining from "../../components/Whining/WhiningMain";
import SleepIssues from "../../components/Sleep/SleepMain";
import Rejection from "../../components/Rejection/RejectionMain";
import ArticleReader from "../../components/ArticleReader";
import Welcome from "../../components/Welcome";
// import LogIn from "../../components/LogIn";
// import SideBar from "../../components/SideBar";
import AddChickAge from "../../components/AddChickAge";
import UpYourGame from "../../components/UpYourGame";
import { firestore } from "../../firebase";
// import PrivateRoutes from "../../containers/Routes/PrivateRoutes";

const Routes = (props) => {  

    const user = props.user;

    const [docs, setDocs] = useState([]);
  



    useEffect ( () => {

        const getBookSmarts = () => {
            firestore.collection("booksmarts").get().then((response) => {
            const documents = response.docs.map(d => d.data());
            setDocs(documents)
            })
        };
        
        getBookSmarts();
    }, []);

    return(
        <Router>
            <Categories path="categories" user={user} />
            <SignUp path="sign-up" user={user} />
            <AddChick path="add-chick" user={user} />
            <AddChickAge path="add-chick-age" user={user} />
            <ActivityIdeas path="categories/activity-ideas" user={user} />
            <Tantrums path="/categories/sos/tantrums" user={user} />
            <ArticleReader path="article-reader" user={user} />
            <BookSmarts path="categories/book-smarts" user={user} docs={docs}/>
            <BookInfo path="categories/book-smarts/book-info/:BookId" user={user} docs={docs} />
            <SOS path="categories/sos" user={user} />
            <SplashScreen path="/" user={user}/>
            <Welcome path="welcome" user={user} />
            <UpYourGame path ="/categories/up-your-game" user={user} />
        </Router>
    )
};
//using net ninja method, use the sign up for to make a firebase user
//wait for sam, use what he gives us to allow us to sign up with facebook
//check if logging in with different accounts accesses the same firebase user, if not, make in if statement to prohibiting them from accdesing the sign up page
export default Routes;


