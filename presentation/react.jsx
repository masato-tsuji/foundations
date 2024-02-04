//コンポーネントを定義
function Sample() {
    return (
            <p>Hello World</p>
    );
}

//IDを指定してHTMLに出力
ReactDOM.render(
    document.querySelector('#react_container'),
  );

const { colors, ThemeProvider, Container, makeStyles, createMuiTheme } = MaterialUI;



