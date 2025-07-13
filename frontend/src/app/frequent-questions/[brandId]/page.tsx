"use client";
import { FrequentQuestions } from "../../../components/FrequentQuestions";
import { useParams } from "next/navigation";

export default function FrequentQuestionsPage() {
  const params = useParams();
  const brandId = params.brandId as string;

  return (
    <main className="flex h-full w-full flex-col p-8">
      <div className="flex-1 flex flex-col items-center justify-center">
        <FrequentQuestions brandId={brandId} />
      </div>
    </main>
  );
} 