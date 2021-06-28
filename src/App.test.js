import * as ReactDOM from "react-dom";
import JSApp from "./App";

test('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<JSApp/>, div);
    ReactDOM.unmountComponentAtNode(div);
    // const linkElement = screen.getByText(/learn react/i);
    // expect(linkElement).toBeInTheDocument();
});
