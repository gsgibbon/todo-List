import Trash from "./assets/icons/trash.svg?react";
import Text from "./components/text";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant="body-md-bold" className="text-green-base">
          Hello World
        </Text>
        <Text>Hello World</Text>
      </div>

      <div className="flex gap-1">
        <Trash className="fill-green-base" />
        <Trash className="fill-pink-dark" />
      </div>
    </div>
  )
}
