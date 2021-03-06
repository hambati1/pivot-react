# Flexmonster Pivot Table & Charts integration with React framework
[![Flexmonster Pivot Table & Charts](https://s3.amazonaws.com/flexmonster/github/fm-github-cover.png)](http://flexmonster.com)
Website: www.flexmonster.com

## Example
Please find more examples in the repository. Also, [full tutorial is available at the www.flexmonster.com](http://www.flexmonster.com/doc/integration-with-react/).
```html
<!DOCTYPE html>
<html>
<head>
  <title>My React/Flexmonster Project</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.24/browser.min.js"></script>
  <script src="https://cdn.flexmonster.com/flexmonster.js"></script>
</head>
<body>
  <div id="fm-container"></div>
  <script type="text/babel">
    ReactDOM.render(
      <FlexmonsterReact.Pivot 
        componentFolder="https://cdn.flexmonster.com/"
        report="https://cdn.flexmonster.com/reports/report.json" 
        licenseKey="XXX"/>, 
      document.getElementById("fm-container")
    );
  </script>
</body>
</html>
```
## How to start ES6 project

```bash
> npm run setup
> npm run start
```

## ES6 integration approach
The flexmonster Pivot class is defined in flexmonster.react.js
It can be used in the other React classes such as:
```js
import * as FlexmonsterReact from './flexmonster.react';
import 'flexmonster/flexmonster.min.css';

export class ReactClass extends React.PureComponent {
  render() {
    return (<FlexmonsterReact.Pivot toolbar="true" report="https://cdn.flexmonster.com/reports/report.json"/>);
  }
}
```

## Properties
All available attributes for `FlexmonsterReact.Pivot` are equivalent to those which are passed to the `new Flexmonster()` API call. Check out [the full list of available attributes](http://www.flexmonster.com/api/new-flexmonster/).

## Events:
- `ready`
- `reportcomplete`
- `reportchange`
- `update`
- `cellclick`
- `celldoubleclick`
- `filteropen`
- `fieldslistopen`
- `fieldslistclose`

Full list of events is [available in the documentation](http://www.flexmonster.com/api/events/).
