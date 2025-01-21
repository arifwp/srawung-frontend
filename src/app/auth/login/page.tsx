import GradientInput from "@/components/inputs/GradientInput";

export default function LoginPage() {
  return (
    <div className="w-full min-h-dvh gap-4 bg-black flex flex-col justify-center items-center">
      <p className="text-3xl md:text-4xl">Log In</p>

      <div className="w-full max-w-lg">
        <GradientInput className="bg-black" />
      </div>
    </div>
  );
}
