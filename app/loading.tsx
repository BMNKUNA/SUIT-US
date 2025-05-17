export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center theme-invert">
      <div className="relative w-24 h-24">
        <div className="absolute inset-0 border-t-2 border-r-2 border-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 border-t-2 border-transparent rounded-full animate-pulse"></div>
        <div className="absolute inset-2 flex items-center justify-center">
          <span className="text-xs font-light tracking-widest">LOADING</span>
        </div>
      </div>
    </div>
  )
}
