# useLongPress

use it with the spread operator

```typescript
import useLongPress from "./useLongPress"

function MyComponent(props) {
  const backspaceLongPress = useLongPress(props.longPressBackspaceCallback, 500)

  return (
    <Page>
      <Button {...backspaceLongPress}>Click me</Button>
    </Page>
  )
}
```
