export default function App() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-brand px-8 text-white pt-[max(1.5rem,env(safe-area-inset-top))] pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <img
        src="/pwa-512.png"
        alt=""
        width={288}
        height={288}
        className="h-72 w-72 select-none"
      />
      <h1 className="-mt-8 text-[1.7rem] font-semibold tracking-[0.16em]">
        DEVIN JSC
      </h1>
    </main>
  )
}
