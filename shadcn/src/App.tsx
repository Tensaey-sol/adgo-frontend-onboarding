import { Button } from "@/components/ui/button";
import { Calendar } from "./components/ui/calendar";
import React from "react";

function App() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <>
      <div className="p-5 m-5 text-center space-x-2">
        <Button> Primary Style</Button>
        <Button variant="destructive"> Destructive Style</Button>
        <Button variant="outline"> Outline Style</Button>
        <Button variant="ghost"> Ghost Style</Button>
        <div className="flex justify-center mt-5 w-full">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border p-4 w-auto"
          />
        </div>
      </div>
    </>
  );
}

export default App;
