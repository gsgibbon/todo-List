import TrashIcon from "./assets/icons/trash.svg?react";
import SpennerIcon from "./assets/icons/spinner.svg?react";
import Text from "./components/text";
import Icon from "./components/icon";

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
        <Icon svg={TrashIcon}/>
        <Icon svg={SpennerIcon} animate />
      </div>
    </div>
  )
}
