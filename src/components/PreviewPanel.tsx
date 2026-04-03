interface PreviewPanelProps {
  isVisible: boolean;
  displayedText: string;
}

function PreviewPanel({ isVisible, displayedText }: PreviewPanelProps) {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <div className="space-y-1 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Step 2
        </p>
        <h2 className="text-lg font-bold">Text element preview</h2>
        <p className="text-sm text-slate-500">
          This is what the final text component looks like to the user.
        </p>
      </div>
      <div className="flex h-72 items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 bg-white p-6 text-center shadow-inner transition-all">
        {isVisible ? (
          <div className="max-w-xl text-3xl font-semibold text-blue-600">
            {displayedText}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400 italic">
            <span className="text-2xl">🚫</span>
            This text is hidden right now.
          </div>
        )}
      </div>
    </div>
  );
}

export default PreviewPanel;
