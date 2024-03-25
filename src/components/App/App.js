import {Provider} from "react-redux";
import {store} from "../../store";
import ReduxPage from "../../pages/ReduxPage";

const App = () => {
    return (
        <Provider store={store}>
            <ReduxPage/>
        </Provider>
    );
}

export default App;