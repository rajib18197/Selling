import { Heading } from "./Heading";
import Text from "./Text";

export default function Yearly() {
  return (
    <div>
      <Heading as={"h1"}>Yearly Goals</Heading>
      <Text>
        Choose ONE yearly goal in each category. Don't worry about being too
        specific, we'll break these down into smaller goals later. (Feel free to
        skip a category, or change a category if you want){" "}
      </Text>

      <div></div>
    </div>
  );
}

function Box() {
  return (
    <div>
      <div className="p-1 bg-slate-400">{title}</div>
      <div></div>
    </div>
  );
}
