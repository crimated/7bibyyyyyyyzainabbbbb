import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import zainabAsset from "@/assets/zainab.jpeg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

type Step = {
  question: string;
  yesLabel: string;
  noLabel: string;
};

const STEPS: Step[] = [
  { question: "تحبيني؟", yesLabel: "اي", noLabel: "انجب" },
  { question: "متاكده؟", yesLabel: "لا", noLabel: "اي" },
  {
    question: "يلا ميخالف راح انطيج فرصة اخيرة.. تحبيني؟",
    yesLabel: "اي",
    noLabel: "انجب",
  },
  {
    question: "اني تعبت هذي اخر مرة.. تحبيني؟",
    yesLabel: "اي",
    noLabel: "انجب",
  },
];

const LETTER =
  `ولله هواي جاي افكر شلون احجيلج\n\nشكد ما احاول اوصف حبي الج احس كل الكلام يوگف عاجز گدام اللي بگلبي، لان اللي احسه مو شعور ينكتب برسالة، ولا ينحصر بكلمة، ولا حتى الف كتاب يگدر يوصفه\n\nاحس لو الله كتبلي اعيش الف عمر، بكل عمر راح اختارج انتي، وراح احبج بنفس اللهفة، ويمكن اكثر، ولو خيروني بين الدنيا كلها وبينج، ما احتاج حتى افكر، لان كلشي يهون اذا انتي موجودة، وكلشي ما يسوه اذا انتي مو بي\n\nمرات احس لو اگدر اشيل النجوم من السما واخليها بين ايديج اسويها، ولو اگدر اوگف الزمن على لحظة سعادتج وضحكتج جان وگفته، ولو اگدر اخذ كل التعب والحزن من عمرج واخليه بعمري جان سويت\n\nاحس انتي مو انسانة عادية، انتي الشي الحلو اللي الله دزلي يا حتى يعلمني شلون يكون الحب الصدگ، لان من عرفتج تغير معنى الدعاء عندي، صرت كل ما ادعي اذكرج قبل نفسي، وكل ما اتمنى شي اتمنى تكونين وياه\n\nلو اجتمعوا كل شعراء الدنيا وكل كـُتابها حتى يوصفون مكانج بگلبي، راح يعجزون، لان مكانج اكبر من الحروف، واكبر من الكلام، واكبر من كل وصف ممكن ينكتب\n\nيمكن الناس تكول هذا حب، بس اني احسه حياة كاملة، واحسه وطن، واحسه امان، واحسه سبب يخليني ابتسم حتى من اكون ضايج او تعبان\n\nواذا سالوني شنو اغلى شي تملكه، ما راح اگول اي شي ، راح اكول عندي حبيبة وصديقة وام واخت و"حياة" اسمها زينب، وهذي وحدها تسوى الدنيا كلها وما بيها\n\nاحبج حب لو انكتب على البحر ينشف، ولو حجيته للجبال تميل، ولو توزع على اهل الارض كلهم جان كل واحد حس بشوية من اللي احسه الج، ومع هذا كله احس بعدني ما عبرت حتى عن جزء صغير من اللي بگلبي\n\nاحبج اكثر من كل كلمة تنكتب، واكثر من كل شعور ينحس، واكثر من كل رقم ينعد، واذا للحب نهاية، فحبي الج ما يعرف شنو معنى النهاية .`;

function Index() {
  const [stepIndex, setStepIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [fadeKey, setFadeKey] = useState(0);
  const [noBtnStyle, setNoBtnStyle] = useState<{ x: number; y: number } | null>(null);

  const step = STEPS[Math.min(stepIndex, STEPS.length - 1)];
  const isFinalStep = stepIndex >= STEPS.length - 1;

  const handleYes = () => {
    setRevealed(true);
  };

  const handleNo = () => {
    setFadeKey((k) => k + 1);
    setNoBtnStyle(null);
    setStepIndex((i) => Math.min(i + 1, STEPS.length - 1));
  };

  const dodgeNo = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isFinalStep) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = (Math.random() - 0.5) * 80;
    const dy = (Math.random() - 0.5) * 40;
    setNoBtnStyle({ x: dx, y: dy });
    void rect;
  };

  return (
    <main
      dir="rtl"
      className="relative min-h-screen overflow-hidden bg-background text-foreground"
      style={{ fontFamily: "'Cairo', 'Tajawal', system-ui, sans-serif" }}
    >
      <AmbientBackground />

      {!revealed ? (
        <section className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <div
            key={fadeKey}
            className="w-full max-w-xl text-center animate-in fade-in-0 zoom-in-95 duration-700"
          >
            <div className="mb-10 flex justify-center">
              <span className="text-2xl tracking-widest text-muted-foreground">
                لحبيب كلبي التعبان
              </span>
            </div>
            <h1
              className="mb-14 text-3xl leading-[1.9] text-foreground sm:text-4xl md:text-5xl"
              style={{ fontWeight: 500 }}
            >
              {step.question}
            </h1>

            <div className="flex items-center justify-center gap-4 sm:gap-6">
              <button
                onClick={handleYes}
                className="group relative min-w-[128px] rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground shadow-[0_10px_40px_-15px_rgba(60,50,45,0.35)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-15px_rgba(60,50,45,0.45)] sm:text-lg"
              >
                <span className="relative z-10">{step.yesLabel}</span>
                <span className="absolute inset-0 rounded-full bg-foreground/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>

              <button
                onClick={handleNo}
                onMouseEnter={dodgeNo}
                style={
                  noBtnStyle
                    ? {
                        transform: `translate(${noBtnStyle.x}px, ${noBtnStyle.y}px)`,
                      }
                    : undefined
                }
                className="min-w-[128px] rounded-full border border-border bg-card/60 px-8 py-3 text-base font-medium text-muted-foreground backdrop-blur-sm transition-all duration-500 hover:-translate-y-0.5 hover:border-foreground/30 hover:text-foreground sm:text-lg"
              >
                {step.noLabel}
              </button>
            </div>

            <p className="mt-16 text-xs tracking-[0.3em] text-muted-foreground/70">
              THE WORLD = ZAINAB
            </p>
          </div>
        </section>
      ) : (
        <section className="relative z-10 flex min-h-screen flex-col items-center px-5 py-16 animate-in fade-in-0 zoom-in-95 duration-1000 sm:px-8 sm:py-24">
          <div className="mb-10 text-center">
            <p className="text-xs uppercase tracking-[0.5em] text-muted-foreground">
              To Zainab
            </p>
            <h2
              className="mt-4 text-4xl text-foreground sm:text-5xl"
              style={{ fontFamily: "'Amiri', serif", fontWeight: 700 }}
            >
              زينبوو يعنيي الدنيا ومابيهاااااا 
            </h2>
          </div>

          {/* الإطار الجديد: تم إلغاء رفع وقرص الصورة وخيار التغيير */}
          <div className="group relative mb-14 aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-[28px] border border-border/70 bg-card shadow-[0_30px_80px_-40px_rgba(60,50,45,0.4)] transition-all duration-500 hover:shadow-[0_40px_100px_-40px_rgba(60,50,45,0.55)]">
           <img
            src="/zainab.jpeg"
            alt="زينب"
            className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.03] pointer-events-none select-none"
            />
          </div>

          <article
            className="w-full max-w-2xl whitespace-pre-line text-right text-[17px] leading-[2.4] text-foreground/90 sm:text-lg sm:leading-[2.5]"
            style={{ fontFamily: "'Amiri', 'Cairo', serif" }}
          >
            {LETTER}
          </article>

          <div className="mt-16 h-px w-24 bg-border" />
          <p className="mt-6 text-xs tracking-[0.4em] text-muted-foreground">
            I LOVE U FOREVER
          </p>
        </section>
      )}
    </main>
  );
}

function AmbientBackground() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const particles = Array.from({ length: 18 });
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1000px 600px at 50% -10%, oklch(0.94 0.01 80) 0%, transparent 60%), radial-gradient(800px 500px at 100% 100%, oklch(0.92 0.008 70) 0%, transparent 60%)",
        }}
      />
      {particles.map((_, i) => {
        const size = 4 + Math.random() * 6;
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const dur = 10 + Math.random() * 12;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-foreground/10"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              bottom: `-20px`,
              animation: `floatUp ${dur}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 1; }
          100% { transform: translateY(-110vh) translateX(20px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}