import "./App.scss";
import NavBar from "./components/NavBar";
import {Home} from "./containers/Home";
import {NavBarItem} from "./models/navBar.model";
import {Route} from "react-router-dom";
import {ComingSoon} from "./components/ComingSoon";
import {MoviePage} from "./containers/MoviePage";
import {Categories} from "./containers"; //Todo add index for /containers
import Top250 from "./containers/Top250";
import {QueryClient, QueryClientProvider} from "react-query";

function App() {
    const queryClient = new QueryClient()

    const menuItems: NavBarItem[] = [
        {label: "Home", link: "/home"},
        {label: "Categories", link: "/categories"},
        {label: "Top 250", link: "/top-250"},
        {label: "TV Shows", link: "/tv-shows"},
        {label: "Movies", link: "/movies-menu"},
        {label: "My Picks", link: "/my-picks"},
    ];
    return (
        <>
            <QueryClientProvider client={queryClient}>

                <NavBar menuItems={menuItems}/>
                <Route path='/home' component={Home}></Route>
                <Route path='/profile' component={ComingSoon}></Route>
                <Route path='/contact' component={ComingSoon}></Route>
                <Route path='/logout' component={ComingSoon}></Route>
                <Route path='/top-250' component={Top250}></Route>
                <Route path='/movies-menu' component={ComingSoon}></Route>
                <Route path='/tv-shows' component={ComingSoon}></Route>
                <Route path='/my-picks' component={ComingSoon}></Route>
                <Route path='/movies/:id' component={MoviePage}></Route>
                <Route path='/' exact component={Home}></Route>
            </QueryClientProvider>
        </>
    );
}

export default App;
