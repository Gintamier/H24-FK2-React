import Confetti from "@/components/Confetti";
import Jumpingtext from "@/components/Jumpingtext";
import Master from "@/components/Master";

export default function Home() {
  return (
    <div className="bg-green-400 h-screen w-screen flex flex-col items-center justify-center">
      <Master />
      <Confetti />
      <Jumpingtext />
      <Jumpingtext />
      <Confetti />
    </div>
  );
}
