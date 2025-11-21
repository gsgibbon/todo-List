import Text from "./components/text";


export default function App() {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <Text variant="body-md-bold" className="text-green-base">
          Hello World
        </Text>
        <Text>Hello World</Text>
      </div>
    </div>
  )
}
