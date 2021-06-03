import React from "react"; // Imports react component from react

const Header = (props) => {
  //Creates header component and passes props in
  return (
    //Tells what is going to be returned from this compoenent
    //React components can only 1 outer most element, usually a div
    <div>
      {/* An h1 tag that will have the headerStlye passed to it. The h1 holds the 'title' prop which will later be converted to 'Todo List' in the rendered App.js */}
      <h1 style={headerStyle}>{props.title}</h1>
    </div>
  );
};

const headerStyle = {
  //The styling for the cotent that will be rendered in the component, written in JSX syntax.
  fontSize: "40px",
  textDecoration: "underline",
}; //End of Header
//export allows the component to render elsewhere in the program, in this case it will be imported into 'App.js'
export default Header;
