// const h2 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "h2",
//     ref: null,
//     props: {
//         className: "subheading",
//         id: "subtitle",
//         children: "Hello React",
//     }
// }

const container = React.createElement(
  "div",
  { className: "container", id: "container" },
  [
    React.createElement("section", { key: 1 }, [
      React.createElement("p", { key: 2 }, "React Library"),
      React.createElement("img", { key: 3, style: {width: "200px"} , src: "react.jpg" }),
    ]),
  ],
  [
    React.createElement("section", { key: 1 }, [
      React.createElement("form", { key: 1 }, [
        React.createElement("div", {id: "formInput", key: 1}, [
            React.createElement("label", {key: 1, htmlFor: "userName"}, "UserName : "),
            React.createElement("input", {key: 2, id: "userName"})
        ]),
        React.createElement("div", {id: "formInput", key: 2}, [
            React.createElement("label", {key: 1, htmlFor: "password"}, "Password : "),
            React.createElement("input", {key: 2, id: "password", type: "password"}),
        ]),
      ]),
    ]),
  ]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);


let user = "Aashish";
const h2 = <h2>Hello {user} </h2>
root.render(h2);
