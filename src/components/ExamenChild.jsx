import { useSelector } from "react-redux";

export const ExampleChild = () => {
  const count = useSelector((state) => state.counter.value)

  return (
  
  <div>
    ExampleChild<br/><span>{count}</span>
  </div>

  )
};