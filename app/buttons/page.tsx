import { Button } from "@/components/ui/button";
const Buttons = () => {
  return (
    <div className="p-4 space-y-4 max-w-[200px] flex-col">
      <Button variant="default">default</Button>
      <Button variant="ghost">ghost</Button>
    </div>
  );
};

export default Buttons;
