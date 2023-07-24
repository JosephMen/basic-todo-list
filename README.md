# Frander Mena Sandoval
Built using React, a minimal to-do list app, using some basic React concepts and hooks. Example:

```Javascript
    const [isEditing, setIsEditing] = useState(false)
    const [text, setText] = useState("")

    function editText() {
        setText(event.target.value)
    }
    return (<>
        {!isEditing && <p>{text}</p>}
        {isEditing && <input  type="text" value={text} onChange={editText()} />}
    </>)
```

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Tecnologies
- Standard for lintern code
- http://colormind.io/bootstrap/ for the choose of colors and examples

## Deploy site
You can visit the deploy app here: https://todo-app-frander.netlify.app/

