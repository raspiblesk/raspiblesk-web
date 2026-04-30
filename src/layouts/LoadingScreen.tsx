import { Spinner } from "@heroui/react";
import RaspiBlesk_Logo_Main_Negative from "@/assets/RaspiBlesk_Logo_Main_Negative.svg?react";

// Loading Screen for the initial loading of the app
export default function LoadingScreen() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center bg-gray-700">
      <RaspiBlesk_Logo_Main_Negative className="mb-5 h-12" />
      <Spinner size="lg" />
    </main>
  );
}
