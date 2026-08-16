export function BookkeepingConceptFrame() {
  return (
    <div className="bookkeeping-frame" role="img" aria-label="Fictional bookkeeping website concept showing clear services, trust information, and a contact action">
      <div className="bookkeeping-frame-top">
        <span className="bookkeeping-mark">N/B</span>
        <span>Services</span>
        <span>How it works</span>
        <span className="bookkeeping-frame-cta">Talk to a bookkeeper</span>
      </div>
      <div className="bookkeeping-frame-body">
        <div className="bookkeeping-frame-copy">
          <span className="bookkeeping-kicker">Books kept current. Decisions made clearer.</span>
          <span className="bookkeeping-headline">Monthly bookkeeping for local owners who need the numbers to stay useful.</span>
          <span className="bookkeeping-subcopy">A fictional homepage direction built around service clarity, steady trust, and one obvious next step.</span>
          <span className="bookkeeping-action">See if we fit →</span>
        </div>
        <div className="bookkeeping-ledger" aria-hidden="true">
          <div className="ledger-rule ledger-rule-strong" />
          <div className="ledger-row"><span>Accounts reconciled</span><span>Current</span></div>
          <div className="ledger-row"><span>Monthly close</span><span>Ready</span></div>
          <div className="ledger-row"><span>Owner questions</span><span>Answered</span></div>
          <div className="ledger-rule" />
          <div className="ledger-balance"><span>Next step</span><span>Conversation</span></div>
        </div>
      </div>
      <div className="bookkeeping-frame-foot">
        <span>Fictional concept</span>
        <span>No client or performance claim</span>
      </div>
    </div>
  );
}
