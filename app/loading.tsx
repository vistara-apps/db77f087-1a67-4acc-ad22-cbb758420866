export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="space-y-4 text-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto shadow-neon-cyan" />
        <p className="text-primary font-orbitron uppercase tracking-wider neon-text-cyan animate-pulse">
          Loading ProjectFlow...
        </p>
      </div>
    </div>
  );
}
